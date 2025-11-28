// MainGearSeason11.js (updated with 8 slots as per your code)
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
import HoverPowersSeason11 from "./HoverPowersSeason11";

export default function MainGearSeason11({ mode = "create" }) {
  const [hoveredImage, setHoveredImage] = useState({
    top: false,
    left: false,
    right: false,
    bottom: false,
    catalyst1: false,
    catalyst2: false,
    catalyst3: false,
    catalyst4: false, // Added for mid-bottom and mid-right
  });
  const [showHoverPowersSeason11, setShowHoverPowersSeason11] = useState(false);
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

  const handleHoverPowersSeason11 = (slot) => {
    setSelectedSlot(slot);
    setShowHoverPowersSeason11(true);
  };

  const getBossPowerImage = (slot) => {
    const power = bossPowers.find((bp) => bp.slot === slot);
    if (power?.image) return power.image;
    // Defaults per slot
    switch (slot) {
      case "top":
        return "/gift-empty_top.webp";
      case "bottom":
        return "/gift-empty_top.webp";
      case "left":
        return "/gift-empty_top.webp";
      case "right":
        return "/gift-empty_top.webp";
      case "catalyst1":
        return "/gift-empty_innertop.png";
      case "catalyst2":
        return "/gift-empty_innertop.png";
      case "catalyst3":
        return "/gift-empty_innertop.png";
      case "catalyst4":
        return "/gift-empty_innertop.png";
      default:
        return "/empty_skill.png";
    }
  };

  const getBossPowerLabel = (slot) => {
    const power = bossPowers.find((bp) => bp.slot === slot);
    return power?.label || "";
  };

  const getOpacityClass = (slot) => {
    const power = bossPowers.find((bp) => bp.slot === slot);
    const isSelected = !!power?.image;
    const isHovered = hoveredImage[slot];
    return isSelected || isHovered ? "opacity-100" : "opacity-50";
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
      <HoverPowersSeason11
        open={showHoverPowersSeason11}
        onClose={() => setShowHoverPowersSeason11(false)}
        slot={selectedSlot} // Now pass slot directly, no powerType
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
          setShowHoverPowersSeason11(false);
        }}
      />

      <div className="hidden sm:block">
        <SeasonsDropdown mode={mode} />
      </div>

      {/* Main Circle Container */}
      <div className="relative w-[340px] h-[340px] mt-10">
        {/* Background Runes Circle */}
        <div className="absolute inset-0 rounded-full " />

        {/* Top Boss Power (Main) */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 -translate-y-1/4 w-14 h-14 bg-[#0f0f14] rounded-full  shadow-2xl shadow-purple-900/50">
          <img
            src={getBossPowerImage("top")}
            alt="Main Boss Power"
            className={`w-full h-full object-contain cursor-pointer transition-opacity ${getOpacityClass(
              "top"
            )}`}
            onMouseEnter={() => setHoveredImage({ ...hoveredImage, top: true })}
            onMouseLeave={() =>
              setHoveredImage({ ...hoveredImage, top: false })
            }
            onClick={() => handleHoverPowersSeason11("top")}
          />
        </div>

        {/* Bottom Center */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-14 h-14 bg-[#0f0f14] rounded-full ">
          <img
            src={getBossPowerImage("bottom")}
            alt="Bottom Power"
            className={`w-full h-full object-contain cursor-pointer transition-opacity ${getOpacityClass(
              "bottom"
            )}`}
            onMouseEnter={() =>
              setHoveredImage({ ...hoveredImage, bottom: true })
            }
            onMouseLeave={() =>
              setHoveredImage({ ...hoveredImage, bottom: false })
            }
            onClick={() => handleHoverPowersSeason11("bottom")}
          />
        </div>

        {/* Left */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-14 h-14 bg-[#0f0f14] rounded-full ">
          <img
            src={getBossPowerImage("left")}
            alt="Left Power"
            className={`w-full h-full object-contain cursor-pointer transition-opacity ${getOpacityClass(
              "left"
            )}`}
            onMouseEnter={() =>
              setHoveredImage({ ...hoveredImage, left: true })
            }
            onMouseLeave={() =>
              setHoveredImage({ ...hoveredImage, left: false })
            }
            onClick={() => handleHoverPowersSeason11("left")}
          />
        </div>

        {/* Right */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-14 h-14 bg-[#0f0f14] rounded-full ">
          <img
            src={getBossPowerImage("right")}
            alt="Right Power"
            className={`w-full h-full object-contain cursor-pointer transition-opacity ${getOpacityClass(
              "right"
            )}`}
            onMouseEnter={() =>
              setHoveredImage({ ...hoveredImage, right: true })
            }
            onMouseLeave={() =>
              setHoveredImage({ ...hoveredImage, right: false })
            }
            onClick={() => handleHoverPowersSeason11("right")}
          />
        </div>

        {/* Catalyst 1 (mid left) */}
        <div className="absolute left-24 top-1/2 -translate-y-1/2 w-14 h-14 bg-[#0f0f14] rounded-full ">
          <img
            src={getBossPowerImage("catalyst1")}
            alt="Catalyst 1"
            className={`w-full h-full object-contain cursor-pointer transition-opacity ${getOpacityClass(
              "catalyst1"
            )}`}
            onMouseEnter={() =>
              setHoveredImage({ ...hoveredImage, catalyst1: true })
            }
            onMouseLeave={() =>
              setHoveredImage({ ...hoveredImage, catalyst1: false })
            }
            onClick={() => handleHoverPowersSeason11("catalyst1")}
          />
        </div>
        {/* Catalyst 2 (mid top) */}
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-14 h-14 bg-[#0f0f14] rounded-full ">
          <img
            src={getBossPowerImage("catalyst2")}
            alt="Catalyst 2"
            className={`w-full h-full object-contain cursor-pointer transition-opacity ${getOpacityClass(
              "catalyst2"
            )}`}
            onMouseEnter={() =>
              setHoveredImage({ ...hoveredImage, catalyst2: true })
            }
            onMouseLeave={() =>
              setHoveredImage({ ...hoveredImage, catalyst2: false })
            }
            onClick={() => handleHoverPowersSeason11("catalyst2")}
          />
        </div>
        {/* Catalyst 3 (mid bottom) */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 w-14 h-14 bg-[#0f0f14] rounded-full ">
          <img
            src={getBossPowerImage("catalyst3")}
            alt="Catalyst 3"
            className={`w-full h-full object-contain cursor-pointer transition-opacity ${getOpacityClass(
              "catalyst3"
            )}`}
            onMouseEnter={() =>
              setHoveredImage({ ...hoveredImage, catalyst3: true })
            }
            onMouseLeave={() =>
              setHoveredImage({ ...hoveredImage, catalyst3: false })
            }
            onClick={() => handleHoverPowersSeason11("catalyst3")}
          />
        </div>

        {/* Catalyst 4 (mid Right) */}
        <div className="absolute right-24 top-1/2 -translate-y-1/2 w-14 h-14 bg-[#0f0f14] rounded-full ">
          <img
            src={getBossPowerImage("catalyst4")}
            alt="Catalyst 4"
            className={`w-full h-full object-contain cursor-pointer transition-opacity ${getOpacityClass(
              "catalyst4"
            )}`}
            onMouseEnter={() =>
              setHoveredImage({ ...hoveredImage, catalyst4: true })
            }
            onMouseLeave={() =>
              setHoveredImage({ ...hoveredImage, catalyst4: false })
            }
            onClick={() => handleHoverPowersSeason11("catalyst4")}
          />
        </div>
      </div>

      {/* Gems Section */}
      <div className="mt-8">
        <h4 className="font-bold text-lg text-white text-center mb-3">
          Pierres précieuses
        </h4>
        <div className="flex justify-center gap-3 flex-wrap">
          {gems.map((gem, index) => {
            if (gem.label === "") {
              return (
                <div
                  key={index}
                  className="bg-[#1f2025] rounded-sm border border-[#424243] w-16 h-16"
                />
              );
            }
            return (
              <GemItem key={index} gem={gem} indexGem={index} mode={mode} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
