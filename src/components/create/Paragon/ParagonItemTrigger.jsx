import React from "react";
import Image from "next/image";
import { aspects } from "@/constants";

export default function ParagonItemTrigger({
  item,
  reverse = false,
  size = 40,
}) {
  return (
    <div
      className={`flex justify-start items-center gap-3 ${
        reverse ? "sm:flex-row-reverse " : "flex-row"
      }`}
    >
      {item.image === "empty.png" ? (
        <div className="w-[60px] h-[60px] bg-[#1f2025] hidden sm:block hover:scale-105 rounded-sm "></div>
      ) : (
        <div
          className={`w-[60px] h-[60px] bg-[#3b3b3c] sm:block hover:scale-105 rounded-sm `}
        >
          <div
            className={`card-board-rare-2 w-[50px] h-[50px] opacity-50 hover:opacity-100 mx-auto mt-1`}
          >
            <img
              src={`${item.image}`}
              className={`w-[50px] h-[50px]  z-0 `}
              alt="logo"
            />
          </div>
        </div>
      )}
      <div
        className={`flex flex-col ${reverse ? "sm:items-end " : "items-start"}`}
      >
        <span className="font-bold text-yellow-600">{item.label}</span>
        <span className="text-white">{item.power}</span>
      </div>
    </div>
  );
}
