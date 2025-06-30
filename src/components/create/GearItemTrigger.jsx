import React from "react";
import Image from "next/image";
import { aspects } from "@/constants";

export default function GearItemTrigger({ gear, reverse = false, size = 40 }) {
  const aspect = gear.aspect_id
    ? aspects.find((aspect) => aspect.id === gear.aspect_id)
    : null;
  const isAspectID = gear.aspect_id ? true : false;
  console.log(isAspectID, gear);

  return (
    <div
      className={`flex justify-start items-center gap-3 ${
        reverse ? "sm:flex-row-reverse " : "flex-row"
      }`}
      onClick={() => {
        if (gear?.description === "Empty") {
          // console.log("Empty Gear");
        } else {
          // console.log("Gear: ", gear);
        }
      }}
    >
      {gear.image === "empty.png" ? (
        <div className="w-[60px] h-[60px] bg-[#1f2025] hidden sm:block hover:scale-105 rounded-sm"></div>
      ) : (
        <div className="w-[60px] h-[60px] bg-[#1f2025] hover:bg-gray-700 hover:scale-105  rounded-sm text-center">
          <Image
            src={`${gear.aspect_id ? aspect.image : gear.image}`}
            className="object-contain transition-all hover:scale-105 rounded-sm m-auto mt-3"
            alt="logo"
            width={size}
            height={size}
          />
        </div>
      )}
      <div
        className={`flex flex-col ${reverse ? "sm:items-end " : "items-start"}`}
      >
        <span className=" text-[#a3a4a5]">
          {gear?.aspect_id ? aspect?.label : gear?.label}
        </span>
        <span
          className={` ${
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
    </div>
  );
}
