// @ts-nocheck

"use client";

import React, { useState } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function SkeletalWarriors({ boons = [], mode = "create" }) {
  // Fill up to 12 slots (3 rows × 4 columns)
  const filledboons = [...boons];
  while (filledboons.length < 12) {
    filledboons.push({
      image: "/necromancer/empty-slot.webp", // change to your empty slot image
      label: "Empty",
      details: "No upgrade selected",
    });
  }

  // Split into 3 rows × 4 columns
  const rows = [
    filledboons.slice(0, 4),
    filledboons.slice(4, 8),
    filledboons.slice(8, 12),
  ];

  // Main icon positions (first column of each row)
  const mainIconIndices = [0, 4, 8];

  // Local selected state
  const [selectedIndices, setSelectedIndices] = useState([]);

  const toggleSelect = (globalIndex) => {
    // Main icons cannot be selected
    if (mainIconIndices.includes(globalIndex)) return;

    setSelectedIndices((prev) => {
      if (prev.includes(globalIndex)) {
        return prev.filter((i) => i !== globalIndex);
      }

      const rowIndex = Math.floor(globalIndex / 4);
      const selectedInRow = prev.filter(
        (i) => Math.floor(i / 4) === rowIndex
      ).length;

      // Max 3 selectable per row (columns 1,2,3)
      if (selectedInRow >= 3) {
        return prev;
      }

      return [...prev, globalIndex];
    });
  };

  return (
    <div className="relative mx-auto max-w-3xl py-6 px-4  rounded-xl border border-[#2a2a2a]">
      {/* Connecting lines - horizontal only, game-like */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid meet"
      >
        {[0.17, 0.21, 0.48, 0.52, 0.79, 0.83].map(
          (yPos, rowIdx) => (
            <line
              key={`row-line-${rowIdx}`}
              x1="25%"
              y1={`${yPos * 100}%`}
              x2="83%"
              y2={`${yPos * 100}%`}
              stroke="#424242"
              strokeWidth="5"
              opacity="0.9"
            />
          )
        )}
      </svg>

      {/* Grid - 3 rows × 4 columns */}
      <div className="grid grid-cols-4 gap-x-10 gap-y-3 relative z-10">
        {rows.map((row, rowIndex) => (
          <React.Fragment key={rowIndex}>
            {row.map((item, colIndex) => {
              const globalIndex = rowIndex * 4 + colIndex;
              const isMain = mainIconIndices.includes(globalIndex);
              const isDiamond = colIndex === 3; // last column = diamond upgrade
              const isSelected = selectedIndices.includes(globalIndex);

              return (
                <HoverCard key={globalIndex} openDelay={100} closeDelay={50}>
                  <HoverCardTrigger asChild>
                    <div
                      className={`
                        relative flex items-center justify-center cursor-pointer transition-all duration-200
                        ${
                          isMain
                            ? "w-20 h-20 md:w-16 md:h-16" // main icons larger
                            : isDiamond
                            ? "w-20 h-20 md:w-16 md:h-16 " // diamond shape
                            : "w-16 h-16 md:w-16 md:h-16"
                        }
                        ${isDiamond ? " rounded-none" : "rounded-full "}
                        ${
                          isSelected && !isMain && !isDiamond
                            ? "ring-2 ring-yellow-500 ring-offset-2 ring-offset-black scale-105"
                            : ""
                        }
                        ${
                          !isMain && !isDiamond && !isSelected
                            ? "hover:ring-2 hover:ring-amber-400/70 hover:shadow-[0_0_10px_rgba(245,158,11,0.4)]"
                            : ""
                        }
                      `}
                      onClick={() =>
                        !isMain && !isDiamond && toggleSelect(globalIndex)
                      }
                    >
                      <img
                        src={item.image}
                        alt={item.label}
                        className={`
                          object-contain z-10
                          
                        `}
                      />

                      {/* Subtle inner glow for selected / main */}
                      {(isSelected || isMain) && (
                        <div className="absolute inset-0 border border-gray-700 rounded-lg pointer-events-none" />
                      )}
                    </div>
                  </HoverCardTrigger>

                  {!item.label.includes("Empty") && (
                    <HoverCardContent
                      className="w-72 bg-[#0f1015] border border-[#3a4a3a] text-white p-4 shadow-2xl"
                      side="top"
                      align="center"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <img
                            src={item.image}
                            alt={item.label}
                            className="w-14 h-14 object-contain rounded-full border-2 border-amber-700"
                          />
                          <h3 className="font-bold text-lg text-amber-300">
                            {item.label}
                          </h3>
                        </div>
                        <p className="text-sm text-gray-300">
                          {item.details || "No description available"}
                        </p>
                      </div>
                    </HoverCardContent>
                  )}
                </HoverCard>
              );
            })}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
