import React from "react";
import { bossPowers9, bossPowers9main, catalystPowers } from "@/constants";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { selectBossPowers, updateBossPowers } from "@/lib/redux/slice";

const HoverPowersSeason9 = ({
  open,
  onClose,
  powerType,
  slot,
  onSelectPower,
}) => {
  const dispatch = useAppDispatch();
  const bossPowers = useAppSelector(selectBossPowers);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [filteredPowers, setFilteredPowers] = React.useState(
    powerType === "boss-power-main"
      ? bossPowers9main
      : powerType === "catalyst-power"
      ? catalystPowers
      : bossPowers9
  );

  const handleSearch = (value) => {
    setSearchTerm(value);
    const powers =
      powerType === "boss-power-main"
        ? bossPowers9main
        : powerType === "catalyst-power"
        ? catalystPowers
        : bossPowers9;
    setFilteredPowers(
      value
        ? powers.filter((power) =>
            power.label.toLowerCase().includes(value.toLowerCase())
          )
        : powers
    );
  };

  React.useEffect(() => {
    const powers =
      powerType === "boss-power-main"
        ? bossPowers9main
        : powerType === "catalyst-power"
        ? catalystPowers
        : bossPowers9;
    setSearchTerm("");
    setFilteredPowers(powers);
  }, [open, powerType]);

  const handleSelectPower = (power) => {
    if (slot && onSelectPower) {
      onSelectPower(power);
      const bossPowerId = bossPowers.find((bp) => bp.slot === slot)?.id || 1;
      dispatch(
        updateBossPowers({
          id: bossPowerId,
          newBossPowers: power,
          slot,
        })
      );
    }
    onClose();
  };

  const handleUniquip = () => {
    if (slot) {
      const bossPowerId = bossPowers.find((bp) => bp.slot === slot)?.id || 1;
      dispatch(
        updateBossPowers({
          id: bossPowerId,
          newBossPowers: { label: "", image: "", season: "Season 9" },
          slot,
        })
      );
    }
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative z-10 w-[90%] sm:w-[60%] md:w-[50%] lg:w-[40%] h-[90vh] bg-[#1f1f27] rounded-2xl shadow-2xl overflow-hidden border border-[#333645]">
        <div className="flex items-center justify-between h-[8vh] border-b border-[#444757] px-5 bg-[#282a36]">
          <div className="flex items-center gap-2 bg-[#3b3e51] rounded-md px-2 py-1 w-[280px]">
            <Search size={18} className="text-white opacity-80" />
            <Input
              className="bg-transparent border-none text-white placeholder:text-[#a0a3b1] focus:ring-0 focus:outline-none"
              placeholder={`Search ${
                powerType === "catalyst-power" ? "catalyst" : "boss"
              } power...`}
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleUniquip}
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
              onClick={onClose}
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
              onClick={() => handleSelectPower(power)}
            >
              <div className="h-[60px] w-[60px] flex justify-center items-center bg-[#1a1b1f] rounded-lg border border-[#444757]">
                <img
                  src={power.image}
                  alt={power.label}
                  className="w-8 h-8 object-contain"
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
            Showing {filteredPowers.length}{" "}
            {powerType === "catalyst-power" ? "Catalyst" : "Boss"} Power Result
            {filteredPowers.length !== 1 && "s"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HoverPowersSeason9;
