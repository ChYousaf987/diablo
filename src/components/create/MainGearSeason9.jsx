import React, { useState, useEffect } from "react";
import GemItem from "./GemItem";
import SeasonsDropdown from "../SeasonsDropdown";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import {
  selectGems,
  selectCategory,
  selectBossPowers,
  updateBossPowers,
} from "@/lib/redux/slice";
import { categories } from "@/constants";
import HoverPowersSeason9 from "./HoverPowersSeason9";

export default function MainGearSeason9({ mode = "create" }) {
  const [hoveredImage, setHoveredImage] = useState({
    top: false,
    left: false,
    right: false,
    bottom: false,
    catalyst1: false,
    catalyst2: false,
  });
  const [showHoverPowersSeason9, setShowHoverPowersSeason9] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const dispatch = useAppDispatch();
  const gems = useAppSelector(selectGems);
  const category = useAppSelector(selectCategory);
  const bossPowers = useAppSelector(selectBossPowers);
  const [activeCategory, setActiveCategory] = useState(
    categories.findIndex((item) => item.value === category) > -1
      ? categories.findIndex((item) => item.value === category)
      : 0
  );

  useEffect(() => {
    setActiveCategory(
      categories.findIndex((item) => item.value === category) > -1
        ? categories.findIndex((item) => item.value === category)
        : 0
    );
  }, [category]);

  const handleHoverPowersSeason9 = (slot) => {
    setSelectedSlot(slot);
    setShowHoverPowersSeason9(true);
  };

  const getBossPowerImage = (slot) => {
    const power = bossPowers.find((bp) => bp.slot === slot);
    return (
      power?.image || (slot === "top" ? "/boss-season-9.png" : "/season-9.png")
    );
  };

  const getBossPowerLabel = (slot) => {
    const power = bossPowers.find((bp) => bp.slot === slot);
    return power?.label || "";
  };

  const getOpacityClass = (slot) => {
    const power = bossPowers.find((bp) => bp.slot === slot);
    const isSelected = !!power?.image; // True if an image is selected
    const isHovered = hoveredImage[slot];

    if (isSelected) {
      return isHovered ? "opacity-100" : "opacity-100"; // 100% opacity when selected, hover doesn't change it
    }
    return isHovered ? "opacity-100" : "opacity-50"; // 50% when not selected, 100% on hover
  };

  return (
    <div
      className="flex flex-col justify-between items-center grow"
      style={{
        backgroundImage: `url(/bgImg_.png)`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <HoverPowersSeason9
        open={showHoverPowersSeason9}
        onClose={() => setShowHoverPowersSeason9(false)}
        powerType={selectedSlot === "top" ? "boss-power-main" : "boss-power"}
        slot={selectedSlot}
        onSelectPower={(power) => {
          if (selectedSlot) {
            const bossPowerId =
              bossPowers.find((bp) => bp.slot === selectedSlot)?.id || 1;
            dispatch(
              updateBossPowers({
                id: bossPowerId,
                newBossPowers: power,
                slot: selectedSlot,
              })
            );
          }
          setShowHoverPowersSeason9(false);
        }}
      />
      <div className="hidden sm:block">
        <SeasonsDropdown mode={mode} />
      </div>
      <div className="text-[#a3a4a5] w-[270px] h-[270px] bg-[#1a1b1f] rounded-full flex justify-center items-center text-sm mt-10 relative">
        <div
          className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-[84px] h-[84px] bg-[#15161a] flex justify-center items-center rounded-full"
          onMouseEnter={() => setHoveredImage({ ...hoveredImage, top: true })}
          onMouseLeave={() => setHoveredImage({ ...hoveredImage, top: false })}
          onClick={() => handleHoverPowersSeason9("top")}
        >
          <img
            src={getBossPowerImage("top")}
            alt={getBossPowerLabel("top") || "boss-power-main"}
            className={`w-[85%] h-[85%] object-contain cursor-pointer ${getOpacityClass(
              "top"
            )}`}
          />
        </div>
        <div className="absolute top-[25%] flex justify-center items-center rounded-full">
          Sorts horadriques
        </div>
        <div
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[66px] h-[66px] bg-[#15161a] flex justify-center items-center rounded-full"
          onMouseEnter={() =>
            setHoveredImage({ ...hoveredImage, bottom: true })
          }
          onMouseLeave={() =>
            setHoveredImage({ ...hoveredImage, bottom: false })
          }
          onClick={() => handleHoverPowersSeason9("bottom")}
        >
          <img
            src={getBossPowerImage("bottom")}
            alt={getBossPowerLabel("bottom") || "boss-power"}
            className={`w-[100%] h-[100%] object-contain cursor-pointer ${getOpacityClass(
              "bottom"
            )}`}
          />
        </div>
        <div
          className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[66px] h-[66px] bg-[#15161a] flex justify-center items-center rounded-full"
          onMouseEnter={() => setHoveredImage({ ...hoveredImage, left: true })}
          onMouseLeave={() => setHoveredImage({ ...hoveredImage, left: false })}
          onClick={() => handleHoverPowersSeason9("left")}
        >
          <img
            src={getBossPowerImage("left")}
            alt={getBossPowerLabel("left") || "boss-power"}
            className={`w-[100%] h-[100%] object-contain cursor-pointer ${getOpacityClass(
              "left"
            )}`}
          />
        </div>
        <div
          className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[66px] h-[66px] bg-[#15161a] flex justify-center items-center rounded-full"
          onMouseEnter={() => setHoveredImage({ ...hoveredImage, right: true })}
          onMouseLeave={() =>
            setHoveredImage({ ...hoveredImage, right: false })
          }
          onClick={() => handleHoverPowersSeason9("right")}
        >
          <img
            src={getBossPowerImage("right")}
            alt={getBossPowerLabel("right") || "boss-power"}
            className={`w-[100%] h-[100%] object-contain cursor-pointer ${getOpacityClass(
              "right"
            )}`}
          />
        </div>
        <div className="absolute top-[65%] flex justify-center items-center rounded-full">
          Catalyseur
        </div>
        <div
          className="absolute left-[25%] top-[90%] transform -translate-y-1/2 w-[66px] h-[66px] bg-[#15161a] flex justify-center items-center rounded-full"
          onMouseEnter={() =>
            setHoveredImage({ ...hoveredImage, catalyst1: true })
          }
          onMouseLeave={() =>
            setHoveredImage({ ...hoveredImage, catalyst1: false })
          }
          onClick={() => handleHoverPowersSeason9("boss-power")}
        >
          <img
            src="/empty_skill.png"
            alt="boss-power"
            className={`w-[100%] h-[100%] object-contain cursor-pointer ${
              hoveredImage.catalyst1 ? "opacity-100" : "opacity-50"
            }`}
          />
        </div>
        <div
          className="absolute left-[55%] top-[90%] transform -translate-y-1/2 w-[66px] h-[66px] bg-[#15161a] flex justify-center items-center rounded-full"
          onMouseEnter={() =>
            setHoveredImage({ ...hoveredImage, catalyst2: true })
          }
          onMouseLeave={() =>
            setHoveredImage({ ...hoveredImage, catalyst2: false })
          }
          onClick={() => handleHoverPowersSeason9("boss-power")}
        >
          <img
            src="/empty_skill.png"
            alt="boss-power"
            className={`w-[100%] h-[100%] object-contain cursor-pointer ${
              hoveredImage.catalyst2 ? "opacity-100" : "opacity-50"
            }`}
          />
        </div>
      </div>
      <div>
        <h4 className="font-bold text-lg text-white">Pierres précieuses</h4>
        <div className="flex justify-center items-start gap-2">
          {gems.map((gem, index) => {
            if (gem.label === "") {
              return (
                <div
                  key={index}
                  className="bg-[#1f2025] rounded-sm border-[.5px] border-[#424243] p-2 min-w-[60px] min-h-[60px]"
                />
              );
            } else {
              return (
                <GemItem key={index} gem={gem} indexGem={index} mode={mode} />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
