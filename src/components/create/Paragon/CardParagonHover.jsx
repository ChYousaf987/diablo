// CardParagonHover.js
import React, { useState } from "react";
import { usePopper } from "react-popper";
import Image from "next/image";
import { createPortal } from "react-dom"; // <-- Yeh add karo
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

  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const { styles, attributes, update } = usePopper(
    referenceElement,
    popperElement,
    {
      placement: "top",
      modifiers: [
        { name: "offset", options: { offset: [0, 8] } },
        { name: "preventOverflow", options: { padding: 8 } },
        {
          name: "flip",
          options: { fallbackPlacements: ["bottom", "left", "right"] },
        },
      ],
    }
  );

  // Mouse enter/leave pe update trigger karo for smooth positioning
  const handleMouseEnter = () => {
    setIsOpen(true);
    update?.();
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  // --- Same logic as before (no change) ---
  const boardNumber =
    item.id && typeof item.id === "string" && item.id.includes("_")
      ? parseInt(item.id.split("_")[1], 10)
      : 1;
  const prefix = item.id ? item.id.split("_")[0] : "barbarian";

  const socketNumbers = {
    barbarian: {
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
    },
    druid: {
      1: 23,
      2: 38,
      3: 118,
      4: 173,
      5: 145,
      6: 134,
      7: 37,
      8: 79,
      9: 41,
      10: 39,
    },
    necromancer: {
      1: 23,
      2: 134,
      3: 118,
      4: 145,
      5: 41,
      8: 79,
      9: 134,
      10: 38,
    },
    rogue: {
      1: 23,
      2: 79,
      3: 38,
      4: 39,
      5: 37,
      6: 41,
      7: 118,
      8: 145,
      9: 134,
      10: 173,
    },
    sorcerer: {
      1: 23,
      2: 145,
      3: 118,
      4: 37,
      5: 38,
      6: 173,
      7: 39,
      8: 134,
      9: 41,
      10: 79,
    },
    spiritborn: {
      1: 23,
      2: 37,
      3: 118,
      4: 134,
      5: 41,
      6: 145,
      7: 38,
      8: 173,
      9: 79,
    },
  };

  const socketNum = socketNumbers[prefix]?.[boardNumber] || 23;
  const glyphSocketId = `${prefix}_${boardNumber}_${socketNum}`;

  const currentBoard = paragon_builds.find((board) => board.id === boardNumber);
  const glyphSocketNode = currentBoard?.bord
    ?.flat()
    .find((node) => node && node.id === glyphSocketId);
  const selectedGlyphId = glyphSocketNode?.glyph_id;

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
    ? parent_of_item.some((i) => i.active)
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

  let highlightClass = "";
  let bgClass = "";

  if (item.is_glyph_socket) {
    highlightClass = item.glyph_id
      ? "shadow-lg hover:scale-105 transition-all"
      : "bg-opacity-30 shadow-lg hover:bg-opacity-50 hover:scale-105 transition-all";
  } else {
    const hasMatchingGlyphId = item.glyph_ids?.includes(selectedGlyphId);
    if (hasMatchingGlyphId) {
      highlightClass =
        "border-2 border-green-800 bg-[#204522] shadow-lg shadow-green-500/50";
      bgClass = "card-board-green-bg";
    } else {
      highlightClass = item.active
        ? "border-4 border-green-500 shadow-lg shadow-green-500/50"
        : "bg-opacity-30 shadow-lg shadow-gray-500/50 hover:shadow-gray-500/70 hover:bg-opacity-50 hover:scale-105 transition-all";
      bgClass = item.active ? "card-board-green-bg" : "";
    }
  }

  const imageSrc =
    item.is_glyph_socket && selectedGlyphs[0]?.image
      ? selectedGlyphs[0].image
      : item.image;

  // Tooltip content
  const tooltipContent = isOpen && (
    <div
      ref={setPopperElement}
      style={{ ...styles.popper, zIndex: 9999 }}
      {...attributes.popper}
      className="bg-[#15161A] text-white max-w-[280px] p-4 rounded-lg shadow-2xl border border-gray-700"
    >
      <div className="flex items-center gap-3 mb-3 border-b border-gray-600 pb-3">
        <Image
          src={imageSrc}
          width={48}
          height={48}
          alt={item.label}
          className="rounded-sm bg-[#1f2025] border border-gray-600"
        />
        <div>
          <div className="font-bold text-yellow-400">{item.label}</div>
          {item.secondLabel && (
            <div className="text-sm text-gray-300">{item.secondLabel}</div>
          )}
        </div>
      </div>

      {item.options && item.options.length > 0 && (
        <ul className="text-sm space-y-1">
          {item.options.map((detail, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: detail }} />
          ))}
        </ul>
      )}

      {item.is_glyph_socket && item.glyph_id && (
        <div className="mt-3 pt-2 border-t border-gray-600 text-green-400 text-xs font-semibold">
          ✓ Glyph Equipped
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* Main Node */}
      <div
        ref={setReferenceElement}
        className={`flex flex-col justify-center items-center text-white ${
          bgClass || tile_bg
        } p-1 ${highlightClass}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {!item.is_icon ? (
          <div
            onClick={(e) =>
              item.link === false && !item.is_glyph_socket && handleUpdate(e)
            }
            onContextMenu={item.link === false ? handleUpdate : null}
            className={`${
              item.link ? "card-board-legendary" : tile_bg
            } w-full h-full opacity-70 hover:opacity-100 cursor-pointer`}
          >
            <img
              src={imageSrc}
              style={{ filter: filterStyle }}
              className="w-full z-0"
              alt={item.label}
            />
          </div>
        ) : (
          <img
            src={imageSrc}
            className="w-full z-0 cursor-pointer"
            alt={item.label}
          />
        )}
      </div>

      {/* Portal: Tooltip rendered outside transform container */}
      {tooltipContent && createPortal(tooltipContent, document.body)}
    </>
  );
}