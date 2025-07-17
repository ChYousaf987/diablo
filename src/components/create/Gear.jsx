"use client";
import React from "react";
import { aspects, aspectsRight } from "@/constants";
import GearItem from "./GearItem";
import MainGearSeason8 from "./MainGearSeason8";
import MainGearSeason9 from "./MainGearSeason9";
import SkillTech from "./Skill";
import GearStats from "./GearStats";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  updateGearLeft,
  updateGearRight,
  selectGearLeft,
  selectGearRight,
  selectSeason,
} from "@/lib/redux/slice";
import SeasonsDropdown from "../SeasonsDropdown";

export default function Gear({ mode = "create" }) {
  const gearLeft = useAppSelector(selectGearLeft);
  const gearRight = useAppSelector(selectGearRight);
  const season = useAppSelector(selectSeason);
  const dispatch = useAppDispatch();

  const onUpdateGearLeft = (index, newGear) =>
    dispatch(updateGearLeft({ index, newGear }));
  const onUpdateGearRight = (index, newGear) =>
    dispatch(updateGearRight({ index, newGear }));

  return (
    <div>
      <div className="grid sm:flex justify-between items-stretch">
        <div className="sm:hidden">
          <SeasonsDropdown mode={mode} />
        </div>
        <div className="h-full flex flex-col justify-stretch items-stretch gap-3 mx-6 sm:mx-0 mt-2 sm:w-[20%]">
          {gearLeft.map((gear, index) => {
            if (gear.image === "empty.png") {
              return (
                <div
                  key={index}
                  className="w-[60px] h-[60px] bg-[#1f2025] hover:scale-105 rounded-sm"
                ></div>
              );
            }
            return (
              <GearItem
                key={index}
                position={index}
                gear={gear}
                aspects={aspects}
                mode={mode}
                onUpdate={(newGear) => onUpdateGearLeft(index, newGear)}
                side="left"
              />
            );
          })}
        </div>
        <div className="grow justify-stretch items-stretch hidden sm:flex">
          {season === "Season 9" ? (
            <MainGearSeason9 mode={mode} />
          ) : (
            <MainGearSeason8 mode={mode} />
          )}
        </div>
        <div className="h-full flex flex-col justify-start sm:items-end gap-3 mx-6 sm:mx-0 sm:w-[20%]">
          {gearRight.map((gear, index) => {
            if (gear.image === "empty.png") {
              return (
                <div
                  key={index}
                  className="w-[60px] h-[60px] bg-[#1f2025] hover:scale-105 rounded-sm"
                ></div>
              );
            }
            return (
              <GearItem
                key={index}
                position={index}
                gear={gear}
                reverse
                aspects={aspectsRight}
                mode={mode}
                onUpdate={(newGear) => onUpdateGearRight(index, newGear)}
                side="right"
              />
            );
          })}
        </div>
        <div className="grow justify-stretch items-stretch sm:hidden mx-6 sm:mx-0">
          {season === "Season 9" ? (
            <MainGearSeason9 mode={mode} />
          ) : (
            <MainGearSeason8 mode={mode} />
          )}
        </div>
      </div>
      <SkillTech mode={mode} />
      <GearStats
        mode={mode}
        onUpdateGearRight={(index, newGear) =>
          onUpdateGearRight(index, newGear)
        }
        onUpdateGearLeft={(index, newGear) => onUpdateGearLeft(index, newGear)}
      />
    </div>
  );
}
