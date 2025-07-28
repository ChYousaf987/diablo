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
  }, [paragon_builds, glyphs]);

  const filterStyle =
    item.link || item.active ? "grayscale(0%)" : "grayscale(100%)";

  const tile_bg = !item.bg
    ? "card-board"
    : item.bg === "magic"
    ? "card-board-magic "
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

  const isGlyphSelected = glyphs.some((glyph) => {
    console.log("Checking glyph:", glyph.id, glyph.node_id);
    return glyph.id === 1 && glyph.node_id !== null;
  });

  const allNodes = paragon_builds.flatMap((paragon) => paragon.bord.flat());
  const nodesWithGlyphId2 = allNodes.filter((node) => node.glyph_id === 2);

  console.log("Glyphs State:", glyphs);
  console.log("Paragon Builds State:", paragon_builds);
  console.log("All Nodes:", allNodes);
  console.log("Nodes with glyph_id: 2:", nodesWithGlyphId2);
  console.log("Rendered Item:", item);
  console.log("Is Glyph Selected:", isGlyphSelected);
  console.log("Item glyph_id:", item.glyph_id);

  // Only highlight if glyph_id matches 2 and Glyph of Strength is selected
  const highlightGlyph2 =
    isGlyphSelected && item.glyph_id === 2 ? "border-4 border-blue-500" : "";

  return (
    <div className="flex">
      <HoverCard closeDelay="200" openDelay={200} className="bg-[#1a1b1f]">
        <HoverCardTrigger
          className={`flex flex-col justify-center bg-[#1a1b1f] items-center text-white ${tile_bg} p-1 ${highlightGlyph2}`}
        >
          {!item.is_icon ? (
            <div
              onClick={item.link == false ? handleUpdate : null}
              onContextMenu={item.link == false ? handleUpdate : null}
              className={`${item.link ? "card-board-legendary" : tile_bg} ${
                (is_active || item.activable_ids == null) &&
                !item.link &&
                item.active == false
                  ? "rounded-full border-2 border-red-500"
                  : ""
              } w-full h-full opacity-70 hover:opacity-100`}
            >
              <img
                src={`${item.image}`}
                style={{ filter: filterStyle }}
                className={`w-full z-0`}
                alt="logo"
              />
            </div>
          ) : (
            <img src={`${item.image}`} className={`w-full z-0`} alt="logo" />
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