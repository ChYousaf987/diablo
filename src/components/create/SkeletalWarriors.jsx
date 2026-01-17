// @ts-nocheck
"use client";

import React, { useState } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function SkeletalWarriors({ boons = [], mode = "create" }) {
  const filledboons = [...boons];
  while (filledboons.length < 12) {
    filledboons.push({
      image: "/necromancer/empty-slot.webp",
      label: "Empty",
      details: "No upgrade selected",
    });
  }

  const rows = [
    filledboons.slice(0, 4),
    filledboons.slice(4, 8),
    filledboons.slice(8, 12),
  ];

  const mainIconIndices = [0, 4, 8];

  // Single selection
  const [selectedIndex, setSelectedIndex] = useState(null);

  const toggleSelect = (globalIndex) => {
    if (mainIconIndices.includes(globalIndex)) return;
    setSelectedIndex((prev) => (prev === globalIndex ? null : globalIndex));
  };

  const selectedRow =
    selectedIndex !== null ? Math.floor(selectedIndex / 4) : null;

  return (
    <div className="relative mx-auto max-w-3xl py-6 px-4 rounded-xl border border-[#2a2a2a]">
      {/* Lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid meet"
      >
        {[0.17, 0.21, 0.48, 0.52, 0.79, 0.83].map((yPos, i) => (
          <line
            key={i}
            x1="20%"
            y1={`${yPos * 100}%`}
            x2="89%"
            y2={`${yPos * 100}%`}
            stroke="#424242"
            strokeWidth="5"
            opacity="0.9"
          />
        ))}
      </svg>

      {/* Grid */}
      <div className="grid grid-cols-4 gap-x-10 gap-y-3 relative z-10">
        {rows.map((row, rowIndex) =>
          row.map((item, colIndex) => {
            const globalIndex = rowIndex * 4 + colIndex;
            const isMain = mainIconIndices.includes(globalIndex);
            const isDiamond = colIndex === 3;
            const isSelected = selectedIndex === globalIndex;

            const isActiveMain = isMain && selectedRow === rowIndex;

            return (
              <HoverCard key={globalIndex} openDelay={100} closeDelay={50}>
                <HoverCardTrigger asChild>
                  <div
                    className={`
                      group relative flex items-center justify-center
                      transition-all duration-200
                      ${
                        isMain || isDiamond
                          ? "w-20 h-20 md:w-16 md:h-16"
                          : "w-16 h-16 cursor-pointer"
                      }
                      ${isDiamond ? "rounded-none" : "rounded-full"}
                      ${
                        isMain
                          ? `border rounded-lg bg-[#1A1B1F] p-2 ${
                              isActiveMain
                                ? "border-red-500 "
                                : "border-gray-600"
                            }`
                          : ""
                      }
                    `}
                    onClick={() =>
                      !isMain && !isDiamond && toggleSelect(globalIndex)
                    }
                  >
                    {/* Base Icon */}
                    <img
                      src={item.image}
                      alt={item.label}
                      className="object-contain z-10"
                    />

                    {/* Normal Node Active Overlay */}
                    {!isMain && !isDiamond && (
                      <img
                        src="/skill-tech/node_active.webp"
                        alt="active"
                        className={`
                          absolute inset-0 w-full h-full object-contain
                          pointer-events-none z-20
                          transition-all duration-200
                          ${
                            isSelected
                              ? "opacity-100 scale-100"
                              : "opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100"
                          }
                        `}
                      />
                    )}

                    {/* 🔷 Diamond Hover Overlay */}
                    {isDiamond && (
                      <img
                        src="/skill-tech/sacrifice_active.webp"
                        alt="sacrifice"
                        className="
                          absolute inset-0 w-full h-full object-contain
                          pointer-events-none z-20
                          opacity-0 scale-90
                          group-hover:opacity-100 group-hover:scale-100
                          transition-all duration-200
                        "
                      />
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
          })
        )}
      </div>
    </div>
  );
}
