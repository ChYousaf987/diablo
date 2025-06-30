"use client";

import { useState, useEffect, useRef } from "react";
import { useAppSelector } from "@/lib/hooks";
import {
  selectCategory,
  selectMaxLevel,
  selectOptionSkills,
} from "@/lib/redux/slice";
import CategoryNodes from "./SkillTree/CategoryNodes";
import Connection from "./SkillTree/Connection";
import { generateConnections, sumScores } from "@/lib/utils";

const SkillTree = () => {
  const optionSkills = useAppSelector(selectOptionSkills);
  const category = useAppSelector(selectCategory);
  const maxLevel = useAppSelector(selectMaxLevel);
  const level = sumScores(optionSkills);
  const [scale, setScale] = useState(1);
  const zoomContainerRef = useRef(null);
  const connectionsData = generateConnections(optionSkills);

  // Reset scale and log category change
  useEffect(() => {
    console.log(
      "SkillTree re-rendered with category:",
      category,
      "optionSkills:",
      optionSkills
    );
    setScale(1); // Reset zoom scale on category change
  }, [category]);

  // Apply scale to zoom container
  useEffect(() => {
    const zoomContainer = zoomContainerRef.current;
    if (zoomContainer) {
      zoomContainer.style.transform = `scale(${scale})`;
    }
  }, [scale]);

  // Adjust connections when optionSkills or scale changes
  useEffect(() => {
    if (!zoomContainerRef.current) return;

    const adjustConnections = () => {
      const zoomContainer = zoomContainerRef.current;
      const allConnections = [
        ...connectionsData.connections,
        ...connectionsData.Child,
        ...connectionsData.Options,
        ...(connectionsData.SecondOptions || []),
        ...(connectionsData.SecondOptionChild || []),
      ];

      console.log(
        "Adjusting connections for category:",
        category,
        "Connections:",
        allConnections
      );

      allConnections.forEach(({ from, to, id }) => {
        const fromElem = document.getElementById(from);
        const toElem = document.getElementById(to);
        const connectionElem = document.getElementById(id);

        if (fromElem && toElem && connectionElem && zoomContainer) {
          const fromRect = fromElem.getBoundingClientRect();
          const toRect = toElem.getBoundingClientRect();
          const zoomRect = zoomContainer.getBoundingClientRect();

          const x1 = fromRect.left + fromRect.width / 2 - zoomRect.left;
          const y1 = fromRect.top + fromRect.height / 2 - zoomRect.top;
          const x2 = toRect.left + toRect.width / 2 - zoomRect.left;
          const y2 = toRect.top + toRect.height / 2 - zoomRect.top;

          const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
          const angle = (Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI;

          connectionElem.style.width = `${length}px`;
          connectionElem.style.transform = `rotate(${angle}deg)`;
          connectionElem.style.top = `${y1}px`;
          connectionElem.style.left = `${x1}px`;
        } else {
          console.warn("Missing elements for connection:", {
            id,
            from,
            to,
            fromElem,
            toElem,
            connectionElem,
          });
        }
      });
    };

    // Delay adjustment to ensure DOM is rendered
    const timer = setTimeout(adjustConnections, 100);
    return () => clearTimeout(timer);
  }, [connectionsData, scale, category]);

  return (
    <>
      <div className="flex items-center justify-center h-11 bg-[#26272d]">
        <div className="flex items-center space-x-2 mr-2">
          <span className="font-semibold text-white">Points:</span>
          <div className="text-blue-500 font-bold bg-[#1f2025] px-2 rounded-lg">
            {level}
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <span className="font-semibold text-white">Remaining:</span>
          <div className="bg-[#1f2025] px-2 text-red-400 rounded-lg font-bold">
            {maxLevel - level}
          </div>
        </div>
      </div>
      <div
        className="bg-[#1A1B1F] h-[1800px] relative bg-center bg-cover bg-no-repeat min-w-[900px]"
        // style={{ backgroundImage: "url('/skill-tree/bg.webp')" }}
      >
        <div id="zoom-container" className="skill-tree" ref={zoomContainerRef}>
          {optionSkills.map((category) => (
            <CategoryNodes key={category.id} category={category} />
          ))}
          {connectionsData.connections.map((connection) => (
            <Connection
              key={connection.id}
              id={connection.id}
              className="connection pt-1.5 z-50"
            />
          ))}
          {connectionsData.Options.map((connection) => (
            <Connection
              key={connection.id}
              id={connection.id}
              className="connection_options pt-[3px] z-0"
            />
          ))}
          {connectionsData.Child.map((connection) => (
            <Connection
              key={connection.id}
              id={connection.id}
              className="connection_child pt-1.5 z-50"
            />
          ))}
          {connectionsData.SecondOptions?.map((connection) => (
            <Connection
              key={connection.id}
              id={connection.id}
              className="connection_second_options pt-[3px] z-0"
            />
          ))}
          {/* {connectionsData.SecondOptionChild?.map((connection) => (
            <Connection
              key={connection.id}
              id={connection.id}
              className="connection_second_option_child pt-[3px] z-0"
            />
          ))} */}
        </div>
      </div>
    </>
  );
};

export default SkillTree;
