// @ts-nocheck

"use client";

import React, { useState } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function SpiritBoons({ boons = [], mode = "create" }) {
  // Fill up to 20 slots if fewer boons are provided
  const filledBoons = [...boons];
  while (filledBoons.length < 20) {
    filledBoons.push({
      image: "/spirit-boons/empty.webp",
      label: "Empty Boon",
      details: "No boon selected",
      active: false,
    });
  }

  // Split into 4 rows × 5 columns
  const rows = [
    filledBoons.slice(0, 5),
    filledBoons.slice(5, 10),
    filledBoons.slice(10, 15),
    filledBoons.slice(15, 20),
  ];

  // Main / special boon positions (0-based global indices)
  const mainBoonIndices = [0, 5, 10, 15];

  // Local state for selected normal boons
  const [selectedIndices, setSelectedIndices] = useState([]);

  const toggleSelect = (globalIndex) => {
    // Main nodes ko select nahi kar sakte
    if (mainBoonIndices.includes(globalIndex)) return;

    setSelectedIndices((prev) => {
      if (prev.includes(globalIndex)) {
        // Deselect
        return prev.filter((i) => i !== globalIndex);
      }

      const rowIndex = Math.floor(globalIndex / 5);

      // Count how many are already selected in this row
      const selectedInThisRow = prev.filter(
        (i) => Math.floor(i / 5) === rowIndex
      ).length;

      // Agar is row mein pehle se 2 hain → nahi allow karenge
      if (selectedInThisRow >= 2) {
        return prev;
      }

      // Check if any other row already has 2 selected
      const anyRowHasTwo = prev.some((i) => {
        const r = Math.floor(i / 5);
        return (
          r !== rowIndex &&
          prev.filter((j) => Math.floor(j / 5) === r).length >= 2
        );
      });

      if (anyRowHasTwo) {
        // Sirf ek row mein hi 2 allowed hain
        return prev;
      }

      // Add new selection
      return [...prev, globalIndex];
    });
  };

  // Check if this row has exactly 2 selected
  const hasExactlyTwoInRow = (rowIdx) =>
    selectedIndices.filter((i) => Math.floor(i / 5) === rowIdx).length === 2;

  return (
    <div className="relative mx-auto py-8 px-4">
      {/* Decorative connecting lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid meet"
      >
        {[0.17, 0.21, 0.37, 0.41, 0.58, 0.62, 0.79, 0.83].map(
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

      {/* Main grid */}
      <div className="grid grid-cols-5 gap-x-20 w-[30%] mx-auto relative items-center justify-center z-10">
        {rows.map((row, rowIndex) => {
          const isActiveRow = hasExactlyTwoInRow(rowIndex);

          return (
            <React.Fragment key={rowIndex}>
              {row.map((boon, colIndex) => {
                const globalIndex = rowIndex * 5 + colIndex;
                const isMain = mainBoonIndices.includes(globalIndex);
                const isEmpty = !boon?.label || boon.label === "Empty Boon";
                const isSelected = selectedIndices.includes(globalIndex);

                return (
                  <HoverCard key={globalIndex} openDelay={150} closeDelay={100}>
                    <HoverCardTrigger asChild>
                      <div
                        className={`
                          relative flex items-center justify-center pointer-events-auto
                          cursor-pointer transition-all duration-200
                          ${
                            isMain
                              ? "w-28 h-28 md:w-20 md:h-20"
                              : "w-16 h-16 md:w-14 md:h-14"
                          }
                          ${
                            isEmpty
                              ? " opacity-70 rounded-full"
                              : "rounded-full"
                          }
                          ${
                            !isMain && !isEmpty && !isSelected
                              ? "hover:border-2 hover:border-yellow-400 hover:shadow-[0_0_8px_rgba(250,204,21,0.5)]"
                              : ""
                          }
                          ${
                            isSelected
                              ? "border-2 border-yellow-500 shadow-[0_0_12px_rgba(234,179,8,0.7)]"
                              : ""
                          }
                        `}
                        onClick={() => toggleSelect(globalIndex)}
                      >
                        {/* Background frame - only for main boons */}
                        {isMain && !isEmpty && (
                          <div
                            className="absolute inset-0 rounded-full"
                            style={{
                              backgroundImage: `url(${
                                isActiveRow
                                  ? "/skill-tech/category_active.webp"
                                  : "/skill-tech/category.webp"
                              })`,
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                              backgroundRepeat: "no-repeat",
                            }}
                          />
                        )}

                        {/* The actual boon/spirit image */}
                        <img
                          src={boon.image}
                          alt={boon.label}
                          className={`
                            object-contain rounded-full z-10 relative
                            ${
                              isMain
                                ? "w-14 h-14 md:w-12 md:h-12"
                                : "w-14 h-14 md:w-14 md:h-14"
                            }
                          `}
                        />

                        {/* Subtle glow for main nodes */}
                        {isMain && !isEmpty && (
                          <div
                            className="
                              absolute inset-0 rounded-full z-20 pointer-events-none
                              
                            "
                          />
                        )}
                      </div>
                    </HoverCardTrigger>

                    {!isEmpty && (
                      <HoverCardContent
                        className="w-80 bg-[#0f1015] border border-[#3a5a3a] text-white p-4 shadow-2xl z-[999999]"
                        side="top"
                        align="center"
                        sideOffset={12}
                      >
                        <div className="space-y-3">
                          <div className="flex items-center gap-4">
                            <img
                              src={boon.image}
                              alt={boon.label}
                              className="w-16 h-16 object-contain rounded-full border-2 border-[#d4af37]"
                            />
                            <h3 className="font-bold text-xl text-[#d4af37]">
                              {boon.label}
                            </h3>
                          </div>

                          <div className="border-t border-[#3a5a3a] pt-3">
                            <p className="text-sm text-gray-300 leading-relaxed">
                              {boon.details || "No description available"}
                            </p>
                          </div>

                          {boon.footer && (
                            <p className="text-xs text-gray-500 italic pt-2 border-t border-[#3a5a3a]">
                              {boon.footer}
                            </p>
                          )}
                        </div>
                      </HoverCardContent>
                    )}
                  </HoverCard>
                );
              })}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
