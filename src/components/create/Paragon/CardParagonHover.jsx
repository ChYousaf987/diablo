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
import { useAppSelector } from "@/lib/hooks";
import { findItemsInBordByIds } from "@/lib/utils";
import { useDispatch } from "react-redux";

export default function CardParagonHover({ item, size = 30 }) {
  const paragon_builds = useAppSelector(selectParagonBuilds);
  const glyphs = useAppSelector(selectGlyphs);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("State updated:", { paragon_builds, glyphs });

    // Debug specific node and glyph status
    const specificNode = paragon_builds.flatMap((paragon) =>
      paragon.bord.flatMap((row) =>
        row.filter((node) => node && node.id === "barbarian_1_23")
      )
    )[0];

    if (specificNode) {
      console.log("Specific node barbarian_1_23:", specificNode);
      console.log("Has glyph_id:", specificNode.glyph_id);

      // Find if Glyph of Strength or Dexterity is assigned to this node
      const strengthGlyph = glyphs.find(
        (glyph) => glyph.id === 1 && glyph.node_id === "barbarian_1_23"
      );
      const dexterityGlyph = glyphs.find(
        (glyph) => glyph.id === 2 && glyph.node_id === "barbarian_1_23"
      );
      console.log("Strength glyph assigned to node:", strengthGlyph);
      console.log("Dexterity glyph assigned to node:", dexterityGlyph);
    }
  }, [paragon_builds, glyphs]);

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

  // Find the glyph assigned to the glyph socket (barbarian_1_23)
  const glyphSocketNode = paragon_builds.flatMap((paragon) =>
    paragon.bord.flatMap((row) =>
      row.filter((node) => node && node.id === "barbarian_1_23")
    )
  )[0];
  const selectedGlyphId = glyphSocketNode?.glyph_id || null;

  // Debug item properties and glyphs
  console.log("Current node:", {
    id: item.id,
    glyph_id: item.glyph_id,
    active: item.active,
    is_glyph_socket: item.is_glyph_socket,
  });
  console.log("Selected glyph ID in socket:", selectedGlyphId);
  console.log("All glyphs:", glyphs);

  // Determine highlighting class based on glyph_id and node type
  let highlightClass = "";
  let bgClass = "";

  if (item.is_glyph_socket) {
    if (item.glyph_id !== undefined && item.glyph_id !== null) {
      highlightClass =
        "border-4 border-yellow-500 shadow-lg shadow-yellow-500/50 hover:shadow-yellow-500/70 hover:scale-105 transition-all";
      bgClass = "card-board-red-bg";
      console.log(
        "Applying yellow border and red background to glyph socket:",
        item.id
      );
    } else {
      highlightClass =
        "border-4 border-yellow-500 bg-yellow-900 bg-opacity-30 shadow-lg shadow-yellow-500/50 hover:shadow-yellow-500/70 hover:bg-opacity-50 hover:scale-105 transition-all";
      console.log("Applying yellow border to empty glyph socket:", item.id);
    }
  } else if (selectedGlyphId !== null && item.glyph_id === selectedGlyphId) {
    highlightClass =
      "green  hover:scale-105 transition-all";
    bgClass = "card-board-green-bg";
    console.log(
      "Applying green border and background to node with glyph_id:",
      item.id
    );
  } else {
    highlightClass = item.active
      ? "border-4 border-green-500 text-green-500 shadow-lg shadow-green-500/50"
      : "bg-opacity-30 shadow-lg shadow-gray-500/50 hover:shadow-gray-500/70 hover:bg-opacity-50 hover:scale-105 transition-all";
    bgClass = item.active ? "card-board-green-bg" : "";
    console.log(
      `Applying ${item.active ? "green" : "gray"} border to node:`,
      item.id
    );
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
                src={`${item.image}`}
                style={{ filter: filterStyle }}
                className={`w-full z-0`}
                alt="logo"
              />
            </div>
          ) : (
            <img
              src={`${item.image}`}
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
                  src={`${item.image}`}
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
