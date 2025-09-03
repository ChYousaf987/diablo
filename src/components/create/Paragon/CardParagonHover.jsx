import React, { useEffect } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Image from "next/image";
import {
  selectParagonBuilds,
  selectGlyphs,
  updateBordItem,
} from "@/lib/redux/slice";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { findItemsInBordByIds } from "@/lib/utils";

export default function CardParagonHover({ item, size = 30 }) {
  const dispatch = useAppDispatch();
  const paragon_builds = useAppSelector(selectParagonBuilds);
  const glyphs = useAppSelector(selectGlyphs);

  // Extract board number from item.id (assuming item.id is like "barbarian_X_Y")
  const boardNumber =
    item.id && typeof item.id === "string" && item.id.includes("_")
      ? parseInt(item.id.split("_")[1], 10)
      : 1;

  // Define glyph socket IDs for each board
  const glyphSocketIds = {
    1: "barbarian_1_23",
    2: "barbarian_2_173",
    3: "barbrian_3_145", // Fix: was "barbrian_3_145"
    4: "barbrian_4_79",
    5: "barbrian_5_37",
    6: "barbrian_6_133",
    7: "barbrian_7_39",
    8: "barbrian_8_41",
    9: "barbrian_9_118",
    10: "barbrian_10_38",
    // Add more boards as needed
  };

  // Find the glyph socket node for the current board
  const currentBoard = paragon_builds.find((board) => board.id === boardNumber);
  const glyphSocketId =
    glyphSocketIds[boardNumber] || `barbarian_${boardNumber}_23`;
  const glyphSocketNode = currentBoard?.bord
    .flat()
    .find((node) => node && node.id === glyphSocketId);
  const selectedGlyphId = glyphSocketNode?.glyph_id;

  // Find the glyph assigned to this node, if any (for glyph sockets)
  const selectedGlyph =
    item.is_glyph_socket && item.glyph_id
      ? glyphs.find((glyph) => glyph.id === item.glyph_id)
      : null;

  const filterStyle =
    item.link || item.active ? "grayscale(0%)" : "grayscale(100%)";
  const tile_bg = !item.bg
    ? "card-board"
    : item.bg === "magic"
    ? "card-board-magic"
    : "card-board-rare";

  const parent_of_item = item.activable_ids
    ? findItemsInBordByIds(paragon_builds, item.activable_ids)
    : null;
  const is_active = parent_of_item
    ? parent_of_item.some((item) => item.active)
    : false;

  const handleUpdate = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const isLeftClick = event.button === 0;
    const isRightClick = event.button === 2;
    const cannotActivateOrDeactivate =
      (is_active || !item.activable_ids) && !item.link && item.active === false;

    if (isLeftClick && cannotActivateOrDeactivate) {
      dispatch(updateBordItem({ id: item.id, active: true }));
    } else if (isRightClick) {
      dispatch(updateBordItem({ id: item.id, active: false }));
    }
  };

  // Determine highlighting and background classes
  let highlightClass = "";
  let bgClass = "";

  if (item.is_glyph_socket) {
    if (item.glyph_id !== undefined && item.glyph_id !== null) {
      highlightClass =
        " shadow-lg hover:scale-105 transition-all";
      bgClass = ""; // Red background for glyph socket with glyph
    } else {
      highlightClass =
        " bg-opacity-30 shadow-lg hover:bg-opacity-50 hover:scale-105 transition-all";
    }
  } else {
    // Apply green background to nodes with matching glyph_id
    if (
      item.glyph_id !== undefined &&
      item.glyph_id !== null &&
      item.glyph_id === selectedGlyphId
    ) {
      highlightClass =
        "green shadow-green-500/50";
      bgClass = "card-board-green-bg";
    } else {
      highlightClass = item.active
        ? "border-4 border-green-500 text-green-500 shadow-lg shadow-green-500/50"
        : "bg-opacity-30 shadow-lg shadow-gray-500/50 hover:shadow-gray-500/70 hover:bg-opacity-50 hover:scale-105 transition-all";
      bgClass = item.active ? "card-board-green-bg" : "";
    }
  }

  return (
    <div className="flex">
      <HoverCard closeDelay="200" openDelay={200} className="bg-[#1a1b1f]">
        <HoverCardTrigger
          className={`flex flex-col justify-center bg-[#1a1b1f] items-center text-white ${
            bgClass || tile_bg
          } p-1 ${highlightClass}`}
        >
          {!item.is_icon ? (
            <div
              onClick={(e) => {
                if (item.link === false && !item.is_glyph_socket) {
                  handleUpdate(e);
                }
              }}
              onContextMenu={item.link === false ? handleUpdate : null}
              className={`${item.link ? "card-board-legendary" : tile_bg} ${
                is_active || item.activable_ids == null ? "" : ""
              } w-full h-full opacity-70 hover:opacity-100 cursor-pointer`}
            >
              <img
                src={selectedGlyph?.image || item.image}
                style={{ filter: filterStyle }}
                className={`w-full z-0`}
                alt="logo"
              />
            </div>
          ) : (
            <img
              src={selectedGlyph?.image || item.image}
              className={`w-full z-0 cursor-pointer`}
              alt="logo"
            />
          )}
        </HoverCardTrigger>
        <HoverCardContent className="bg-[#26272d] z-[9999] text-white max-w-[400px] w-full p-1">
          {!item.is_icon ? (
            <div>
              <div className="flex justify-center items-center gap-3 border-b-[.5px] py-2">
                <Image
                  src={selectedGlyph?.image || item.image}
                  className="transition-all bg-[#1f2025] hover:scale-105 rounded-sm"
                  alt="logo"
                  width={40}
                  height={40}
                />
                <div className="flex flex-col items-start">
                  <span className="font-bold">{item.label}</span>
                  <span className="font-bold">{item.secondLabel}</span>
                </div>
              </div>
              <ul className="px-3 my-2">
                {item.options &&
                  item.options.map((detail, index) => (
                    <li
                      key={index}
                      className="text-sm mb-2"
                      dangerouslySetInnerHTML={{ __html: detail }}
                    />
                  ))}
              </ul>
            </div>
          ) : (
            <div className="flex justify-center items-center gap-3 border-b-[.5px] py-2">
              {item.label}
            </div>
          )}
        </HoverCardContent>
      </HoverCard>
    </div>
  );
}
