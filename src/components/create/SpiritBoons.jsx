// components/SpiritBoons.jsx
import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function SpiritBoons({ boons, onUpdate, mode = "create" }) {
  // Assuming boons is an array of selected boons
  // For simplicity showing a 4x4 grid placeholder
  const grid = Array(16).fill(null); // 16 slots (4x4)

  return (
    <div className="relative">
      {/* Connecting lines (SVG or CSS) */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Add lines connecting circles if needed */}
      </div>

      <div className="grid grid-cols-4 gap-4">
        {grid.map((_, idx) => {
          const boon = boons[idx] || { image: "/spirit-boons/empty.webp" };

          return (
            <HoverCard key={idx}>
              <HoverCardTrigger asChild>
                <div className="w-16 h-16 rounded-full bg-[#1f2025] border-2 border-[#424243] flex items-center justify-center cursor-pointer hover:border-purple-500 transition-all">
                  <img
                    src={boon.image}
                    alt="Spirit Boon"
                    className="w-12 h-12 object-contain"
                  />
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="w-80 bg-[#15161a] border-[#424243] text-white p-4">
                {/* Show details when selected */}
                {boon.label ? (
                  <div>
                    <h3 className="font-bold">{boon.label}</h3>
                    <p className="text-sm mt-2">{boon.details}</p>
                  </div>
                ) : (
                  <p className="text-gray-400">Empty Spirit Boon</p>
                )}
              </HoverCardContent>
            </HoverCard>
          );
        })}
      </div>
    </div>
  );
}
