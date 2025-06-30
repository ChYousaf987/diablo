"use client";
import React, { useEffect } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { useAppSelector } from "@/lib/hooks";
import { selectMaxLevelParagon, selectParagonBuilds } from "@/lib/redux/slice";
import ParagonBoard from "./ParagonBoard";
import { MapInteractionCSS } from "react-map-interaction";
import { countActiveAndInactive, extractActiveDataParagon } from "@/lib/utils";

const Paragon = () => {
  const paragon_builds = useAppSelector(selectParagonBuilds);
  const maxLevelParagon = useAppSelector(selectMaxLevelParagon);
  let { activeCount, inactiveCount, nullCount } =
    countActiveAndInactive(paragon_builds);
  console.log("paragon_builds", paragon_builds);

  return (
    <>
      <div className="flex items-center justify-center h-11 bg-[#26272d]">
        <div className=" flex items-center space-x-2 mr-2">
          <span className="font-semibold text-white">Points:</span>
          <div className=" text-blue-500 font-bold bg-[#1f2025] px-2  rounded-lg">
            {activeCount}
          </div>
        </div>
        <div className=" flex items-center space-x-2">
          <span className="font-semibold text-white">Remaining:</span>
          <div className="  bg-[#1f2025] px-2 text-red-400 rounded-lg font-bold">
            {maxLevelParagon - activeCount}
          </div>
        </div>
      </div>
      <div className="h-full min-h-screen w-[20000px] grid ">
        <MapInteractionCSS>
          {paragon_builds.map((item, index) => {
            if (item.is_active) {
              return (
                <div key={index}>
                  <ParagonBoard
                    item={item}
                    style={{
                      position: "absolute",
                      top: item.top,
                      left: item.left,
                    }}
                  />
                </div>
              );
            } else {
              return null; // Or handle inactive items differently if needed
            }
          })}
        </MapInteractionCSS>
      </div>
    </>
  );
};

export default Paragon;
