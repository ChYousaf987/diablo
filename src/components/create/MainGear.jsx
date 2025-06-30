import React, { useState, useEffect } from "react";
import GemItem from "./GemItem";
import SeasonsDropdown from "../SeasonsDropdown";
import { useAppSelector } from "@/lib/hooks";
import { selectGems, selectCategory } from "@/lib/redux/slice";
import { categories } from "@/constants";
import HoverPowers from "./HoverPowers";

export default function MainGear({ mode = "create" }) {
  const [hoveredImage, setHoveredImage] = useState({
    top: false,
    left: false,
    right: false,
    bottom: false,
  });
  const [showHoverPowers, setShowHoverPowers] = useState(false);
  const handleHoverPowers = () => {
    setShowHoverPowers(!showHoverPowers);
  };
  const gems = useAppSelector(selectGems);
  const category = useAppSelector(selectCategory);
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
  // console.log("gems", gems);

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
      <HoverPowers
        open={showHoverPowers}
        onClose={() => {
          setShowHoverPowers(false);
        }}
      />
      <div className="hidden sm:block">
        <SeasonsDropdown mode={mode} />
      </div>
      <div className="text-[#a3a4a5] w-[270px] h-[270px] bg-[#1a1b1f] rounded-full flex justify-center items-center text-sm mt-10 relative">
        <div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[74px] h-[74px] bg-[#15161a] flex justify-center items-center rounded-full"
          onMouseEnter={() => {
            setHoveredImage({ ...hoveredImage, top: true });
          }}
          onMouseLeave={() => {
            setHoveredImage({ ...hoveredImage, top: false });
          }}
          onClick={handleHoverPowers}
        >
          <img
            src="/boss-power-lg.png"
            alt="boss-power"
            className={`w-[85%] h-[85%] object-contain cursor-pointer ${
              hoveredImage.top ? "opacity-100" : "opacity-50"
            }`}
          />
        </div>
        <div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[54px] h-[54px] bg-[#15161a] flex justify-center items-center rounded-full"
          onMouseEnter={() => {
            setHoveredImage({ ...hoveredImage, bottom: true });
          }}
          onMouseLeave={() => {
            setHoveredImage({ ...hoveredImage, bottom: false });
          }}
          onClick={handleHoverPowers}
        >
          <img
            src="/boss-power-sm.png"
            alt="boss-power"
            className={`w-[85%] h-[85%] object-contain cursor-pointer ${
              hoveredImage.bottom ? "opacity-100" : "opacity-50"
            }`}
          />
        </div>
        <div
          className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[54px] h-[54px] bg-[#15161a] flex justify-center items-center rounded-full"
          onMouseEnter={() => {
            setHoveredImage({ ...hoveredImage, left: true });
          }}
          onMouseLeave={() => {
            setHoveredImage({ ...hoveredImage, left: false });
          }}
          onClick={handleHoverPowers}
        >
          <img
            src="/boss-power-sm.png"
            alt="boss-power"
            className={`w-[85%] h-[85%] object-contain cursor-pointer ${
              hoveredImage.left ? "opacity-100" : "opacity-50"
            }`}
          />
        </div>
        <div
          className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[54px] h-[54px] bg-[#15161a] flex justify-center items-center rounded-full"
          onMouseEnter={() => {
            setHoveredImage({ ...hoveredImage, right: true });
          }}
          onMouseLeave={() => {
            setHoveredImage({ ...hoveredImage, right: false });
          }}
          onClick={handleHoverPowers}
        >
          <img
            src="/boss-power-sm.png"
            alt="boss-power"
            className={`w-[85%] h-[85%] object-contain cursor-pointer ${
              hoveredImage.right ? "opacity-100" : "opacity-50"
            }`}
          />
        </div>
        Boss Powers
      </div>
      <div>
        <h4 className="font-bold text-lg text-white">Pierres précieuses</h4>
        <div className="flex justify-center items-start gap-2">
          {gems.map((gem, index) => {
            if (gem.label === "") {
              return (
                <div className=" bg-[#1f2025] rounded-sm border-[.5px] border-[#424243] p-2 min-w-[60px] min-h-[60px]" />
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
