import React from "react";
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

  // Extract board number from item.id
  const boardNumber =
    item.id && typeof item.id === "string" && item.id.includes("_")
      ? parseInt(item.id.split("_")[1], 10)
      : 1;

  // Dynamic prefix from item.id
  const prefix = item.id ? item.id.split("_")[0] : "barbarian";

  // Shared socket numbers per board
  const socketNumbers = {
    1: 23,
    2: 173,
    3: 145,
    4: 79,
    5: 37,
    6: 133,
    7: 39,
    8: 41,
    9: 118,
    10: 38,
  };

  // Dynamic glyph socket ID
  const socketNum = socketNumbers[boardNumber] || 23;
  const glyphSocketId = `${prefix}_${boardNumber}_${socketNum}`;

  // Find the glyph socket node for the current board
  const currentBoard = paragon_builds.find((board) => board.id === boardNumber);
  const glyphSocketNode = currentBoard?.bord
    .flat()
    .find((node) => node && node.id === glyphSocketId);
  const selectedGlyphId = glyphSocketNode?.glyph_id;

  // Find glyphs assigned to this node
  const selectedGlyphs = item.is_glyph_socket
    ? item.glyph_id
      ? [glyphs.find((glyph) => glyph.id === item.glyph_id)]
      : []
    : (item.glyph_ids || [])
        .map((id) => glyphs.find((glyph) => glyph.id === id))
        .filter(Boolean);

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
      highlightClass = "shadow-lg hover:scale-105 transition-all";
      bgClass = "";
    } else {
      highlightClass =
        "bg-opacity-30 shadow-lg hover:bg-opacity-50 hover:scale-105 transition-all";
    }
  } else {
    // Highlight if any glyph_id in glyph_ids matches selectedGlyphId
    const hasMatchingGlyphId = item.glyph_ids?.includes(selectedGlyphId);
    if (hasMatchingGlyphId) {
      highlightClass = "green shadow-green-500/50";
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
                src={
                  item.is_glyph_socket && selectedGlyphs[0]?.image
                    ? selectedGlyphs[0].image
                    : item.image
                }
                style={{ filter: filterStyle }}
                className={`w-full z-0`}
                alt="logo"
              />
            </div>
          ) : (
            <img
              src={
                item.is_glyph_socket && selectedGlyphs[0]?.image
                  ? selectedGlyphs[0].image
                  : item.image
              }
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
                  src={
                    item.is_glyph_socket && selectedGlyphs[0]?.image
                      ? selectedGlyphs[0].image
                      : item.image
                  }
                  className="transition-all bg-[#1f2025] hover:scale-105 rounded-sm"
                  alt="logo"
                  width={40}
                  height={40}
                />
                <div className="flex flex-col items-start">
                  <span className="font-bold">{item.label}</span>
                  <span className="font-bold">{item.secondLabel}</span>
                  {/* Display associated glyph labels for non-glyph-socket nodes */}
                  {selectedGlyphs.length > 0 && !item.is_glyph_socket && (
                    <div>
                      <span className="font-bold text-yellow-600">
                        Associated Glyphs:
                      </span>
                      {selectedGlyphs.map((glyph, index) => (
                        <span key={index} className="block text-sm">
                          {glyph?.label || "Unknown Glyph"}
                        </span>
                      ))}
                    </div>
                  )}
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
