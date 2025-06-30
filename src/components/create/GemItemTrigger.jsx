import React from "react";
import Image from "next/image";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import HoverGem from "./HoverGem";

export default function GemItemTrigger({
  gem,
  reverse = false,
  size = 40,
  onUpdateGem,
}) {
  return (
      <HoverCard closeDelay="500" >
        <HoverCardTrigger
          onClick={() => onUpdateGem(gem)}
          className={`flex justify-start items-center gap-3 border-b-[.5px] border-[#424243] cursor-pointer ${
            reverse ? "flex-row-reverse" : "flex-row"
          }`}
        >
          {gem.image === "empty.png" ? (
            <div className="w-[60px] h-[60px] bg-[#1f2025] hover:scale-105 rounded-sm"></div>
          ) : (
            <div className="w-[60px] h-[60px] bg-[#1f2025] hover:bg-gray-700 hover:scale-105  rounded-sm text-center">
              <Image
                src={`${gem.image}`}
                className="object-contain transition-all hover:scale-105 rounded-sm m-auto mt-3"
                alt="logo"
                width={size}
                height={size}
              />
            </div>
          )}
          <div
            className={`flex flex-col ${reverse ? "items-end" : "items-start"}`}
          >
            <span className="font-bold text-yellow-600">{gem.label}</span>
            <span className="text-white">{gem.code}</span>
          </div>
        </HoverCardTrigger>
        <HoverCardContent className="bg-[#15161a] w-80">
          <HoverGem gem={gem} />
        </HoverCardContent>
      </HoverCard>
  );
}
