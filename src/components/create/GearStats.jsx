import React from "react";
import GearStatsItem from "./GearStatsItem";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  updateGearLeft,
  updateGearRight,
  selectGearLeft,
  selectGearRight,
} from "@/lib/redux/slice";

export default function GearStats({
  mode = "create",
  onUpdateGearLeft,
  onUpdateGearRight,
}) {
  const gearLeft = useAppSelector(selectGearLeft);
  const gearRight = useAppSelector(selectGearRight);

  return (
    <div className="mx-6 mt-5 pt-5">
      <h4 className="font-bold text-base text-gray-100">Gear Stats</h4>
      <div className="grid sm:grid-cols-3 gap-3 py-3">
        {gearLeft
          .filter((gear) => gear.image !== "empty.png")
          .map((gear, index) => (
            <GearStatsItem
              key={index}
              gear={gear}
              mode={mode}
              onUpdate={(newGear) => onUpdateGearLeft(index, newGear)}
            />
          ))}

        {gearRight
          .filter((gear) => gear.image !== "empty.png")
          .map((gear, index) => (
            <GearStatsItem
              key={index}
              gear={gear}
              mode={mode}
              onUpdate={(newGear) => onUpdateGearRight(index, newGear)}
            />
          ))}
      </div>
    </div>
  );
}
