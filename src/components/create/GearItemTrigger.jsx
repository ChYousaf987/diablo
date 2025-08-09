import React, { useState, useEffect } from "react";
import Image from "next/image";
import { aspects, aspectspower } from "@/constants";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  selectGearLeft,
  selectGearRight,
  updateAspectPower,
  updateAspectPower2,
} from "@/lib/redux/slice";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function GearItemTrigger({
  gear,
  reverse = false,
  size = 40,
  position,
  side = "left",
}) {
  const dispatch = useAppDispatch();
  const gearLeft = useAppSelector(selectGearLeft);
  const gearRight = useAppSelector(selectGearRight);
  const currentGear =
    side === "left" ? gearLeft[position] : gearRight[position];
  const aspect = gear.aspect_id
    ? aspects.find((a) => a.id === gear.aspect_id)
    : null;
  const aspectPower1 = currentGear?.aspect_power_id
    ? aspectspower.find((ap) => ap.id === currentGear.aspect_power_id)
    : null;
  const aspectPower2 = currentGear?.aspect_power_id_2
    ? aspectspower.find((ap) => ap.id === currentGear.aspect_power_id_2)
    : null;
  const isAspectID = gear.aspect_id ? true : false;

  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedCircle, setSelectedCircle] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPowers, setFilteredPowers] = useState(aspectspower);

  const handleCircleClick = (circle) => (e) => {
    e.stopPropagation();
    setSelectedCircle(circle);
    setDialogOpen(true);
  };

  const handlePowerSelect = (id) => {
    if (selectedCircle === "power1") {
      dispatch(
        updateAspectPower({ index: position, side, aspect_power_id: id })
      );
    } else if (selectedCircle === "power2") {
      dispatch(
        updateAspectPower2({ index: position, side, aspect_power_id_2: id })
      );
    }
    setDialogOpen(false);
    setSearchTerm("");
    setFilteredPowers(aspectspower);
  };

  const handleCancel = () => {
    setDialogOpen(false);
    setSelectedCircle(null);
    setSearchTerm("");
    setFilteredPowers(aspectspower);
  };

  const handleSearch = (value) => {
    setSearchTerm(value);
    setFilteredPowers(
      value
        ? aspectspower.filter((power) =>
            power.label.toLowerCase().includes(value.toLowerCase())
          )
        : aspectspower
    );
  };

  useEffect(() => {
    if (!dialogOpen) {
      setSearchTerm("");
      setFilteredPowers(aspectspower);
    }
  }, [dialogOpen]);

  return (
    <div
      className={`flex justify-start items-center gap-3 ${
        reverse ? "sm:flex-row-reverse " : "flex-row"
      }`}
    >
      {gear.image === "empty.png" && !isAspectID ? (
        <div className="w-[65px] h-[65px] bg-[#1f2025] hover:scale-105 rounded-sm"></div>
      ) : (
        <div className="relative w-[65px] bg-[#26272D] rounded-lg border border-gray-700 h-[65px] text-center">
          <Image
            src={isAspectID ? aspect.image : gear.image}
            className="object-contain rounded-sm m-auto mt-3"
            alt={isAspectID ? aspect.label : gear.label}
            width={size}
            height={size}
          />
          {isAspectID && (
            <>
              {/* First black circle for aspect power 1 */}
              <div
                className="absolute bottom-0 left-0 w-8 h-8 border border-gray-600 bg-[#131416] rounded-full flex items-center justify-center cursor-pointer opacity-80 hover:opacity-100"
                onClick={handleCircleClick("power1")}
              >
                {aspectPower1 && (
                  <Image
                    src={aspectPower1.image}
                    className="w-6 h-6 object-contain"
                    alt={aspectPower1.label}
                    width={20}
                    height={20}
                  />
                )}
              </div>
              {/* Second black circle for aspect power 2 */}
              <div
                className="absolute bottom-0 right-0 w-8 h-8 border border-gray-600 bg-[#131416] rounded-full flex items-center justify-center cursor-pointer opacity-80 hover:opacity-100"
                onClick={handleCircleClick("power2")}
              >
                {aspectPower2 && (
                  <Image
                    src={aspectPower2.image}
                    className="w-6 h-6 object-contain"
                    alt={aspectPower2.label}
                    width={20}
                    height={20}
                  />
                )}
              </div>
            </>
          )}
        </div>
      )}
      <div
        className={`flex flex-col ${reverse ? "sm:items-end " : "items-start"}`}
      >
        <span className="text-[#a3a4a5]">
          {isAspectID ? aspect?.label : gear?.label}
        </span>
        <span className="text-[#5f6060]">
          {isAspectID ? aspect?.description : gear?.description}
        </span>
        {isAspectID && aspect?.description && (
          <span className="text-[#a3a4a5] text-sm">{aspect.description}</span>
        )}
        <span
          className={`${
            gear?.description === "Empty" ? "text-[#444757]" : "text-[#b87939]"
          }`}
        >
          {gear.features?.map((feature, index) => (
            <span key={index}>
              {feature}
              {index !== gear.features.length - 1 ? " " : ""}
            </span>
          ))}
        </span>
      </div>

      {dialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"
            onClick={handleCancel}
          />
          <div className="relative z-10 w-[90%] sm:w-[60%] md:w-[50%] lg:w-[40%] h-[90vh] bg-[#1f1f27] rounded-2xl shadow-2xl overflow-hidden border border-[#333645]">
            <div className="flex items-center justify-between h-[8vh] border-b border-[#444757] px-5 bg-[#282a36]">
              <div className="flex items-center gap-2 bg-[#3b3e51] rounded-md px-2 py-1 w-[280px]">
                <Search size={18} className="text-white opacity-80" />
                <Input
                  className="bg-transparent border-none text-white placeholder:text-[#a0a3b1] focus:ring-0 focus:outline-none"
                  placeholder="Search aspect power..."
                  value={searchTerm}
                  onChange={(e) => handleSearch(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={handleCancel}
                  className="bg-[#4f5365] hover:bg-[#5b5f73] transition text-white text-sm px-4 py-1.5 rounded-md"
                >
                  Uniquip
                </button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 cursor-pointer hover:scale-110 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#ffffff"
                  onClick={handleCancel}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>
            <div className="flex flex-col mt-4 max-h-[74vh] overflow-y-auto px-4 pb-2">
              {filteredPowers.map((power) => (
                <div
                  key={power.id}
                  className="flex items-center gap-4 py-1 px-4 bg-[#2c2f3a] hover:bg-[#3b3e4a] transition rounded-lg cursor-pointer mb-3"
                  onClick={() => handlePowerSelect(power.id)}
                >
                  <div className="h-[60px] w-[60px] flex justify-center items-center bg-[#1a1b1f] rounded-lg border border-[#444757]">
                    <Image
                      src={power.image}
                      alt={power.label}
                      className="w-8 h-8 object-contain"
                      width={32}
                      height={32}
                    />
                  </div>
                  <div>
                    <p className="text-white text-base font-semibold">
                      {power.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="h-[5vh] mt-36 bg-[#282a36] border-t border-[#444757] flex items-center justify-center">
              <p className="text-[#a0a3b1] text-sm">
                Showing {filteredPowers.length} Aspect Power Result
                {filteredPowers.length !== 1 && "s"}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}