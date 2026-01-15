"use client";
import React, { useState } from "react";
import GearStatsRow from "./GearStatsRow";
import Image from "next/image";

export default function GearStatsItem({ gear, mode = "create", onUpdate }) {
  return (
    <div className="bg-[#1f2025] rounded-sm ">
      <h5 className="flex justify-start items-center gap-3 text-white font-bold p-2">
        <Image src={gear.image} width={30} height={30} alt="health" />
        {gear.label}
      </h5>
      <div className="">
        {gear.details?.selects1.slice(0, 1).map((select, index) => (
          <GearStatsRow
            key={index}
            gear={gear}
            nameField="selects1"
            index={index}
            onlySelect={true}
            mode={mode}
            onUpdate={(newGear) => onUpdate(newGear)}
          />
        ))}

        {gear.details?.selects2.slice(0, 3).map((select, index) => (
          <GearStatsRow
            key={index}
            gear={gear}
            nameField="selects2"
            index={index}
            mode={mode}
            onUpdate={(newGear) => onUpdate(newGear)}
          />
        ))}
        <hr
          className="border-t-[.5px] border-[#424243]  "
          mode={mode}
        />

        {gear.details?.selects3.slice(0, 1).map((select, index) => (
          <GearStatsRow
            key={index}
            gear={gear}
            nameField="selects3"
            index={index}
            mode={mode}
            onUpdate={(newGear) => onUpdate(newGear)}
          />
        ))}
      </div>
    </div>
  );
}
