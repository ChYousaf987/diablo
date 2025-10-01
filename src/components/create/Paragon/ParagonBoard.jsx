import React from "react";
import CardParagonHover from "./CardParagonHover";
import CardParagonModal from "./CardParagonModal";
import CardGlyphModal from "./CardGlyphModal";
import { useAppSelector } from "@/lib/hooks";
import { selectGlyphs, selectParagonBuilds } from "@/lib/redux/slice";
import Image from "next/image";

const ParagonBoard = ({ item, style }) => {
  const glyphs = useAppSelector(selectGlyphs);
  const paragon_builds = useAppSelector(selectParagonBuilds);

  const findItemIndex = (items, index) => {
    return items.find((item) => item && item.index === index) || null;
  };

  // Extract board number from item.id
  const boardNumber =
    typeof item.id === "number"
      ? item.id
      : typeof item.id === "string" && item.id.includes("_")
      ? parseInt(item.id.split("_")[1], 10)
      : 1;

  // Extract prefix dynamically from the first available bord.id (assumes consistent prefix per board)
  const firstNodeId = item.bord.flat().find((node) => node)?.id;
  const prefix = firstNodeId ? firstNodeId.split("_")[0] : "barbarian";

  // Shared socket numbers per board (adjust if class-specific)
  const socketNumbers = {
    1: 23,
    2: 173,
    3: 145, // Fixed typo
    4: 79,
    5: 37,
    6: 133,
    7: 39,
    8: 41,
    9: 118,
    10: 38,
  };

  // Get the glyph socket ID dynamically
  const socketNum = socketNumbers[boardNumber] || 23;
  const glyphSocketId = `${prefix}_${boardNumber}_${socketNum}`;

  // Normalize item.id to match imagePositions keys (use prefix dynamically)
  const normalizedId =
    typeof item.id === "number"
      ? `${prefix}_${item.id}`
      : typeof item.id === "string"
      ? item.id.toLowerCase()
      : `${prefix}_1`;

  // Define image positions for each Paragon board (assuming shared; add per-class if needed)
  const imagePositions = {
    barbarian_1: { top: "-1%", left: "14.2%" },
    barbarian_2: { top: "27.7%", left: "23.7%" },
    barbarian_3: { top: "42%", left: "-9.7%" },
    barbarian_4: { top: "18.4%", left: "23.7%" },
    barbarian_5: { top: "8.7%", left: "14.2%" },
    barbarian_6: { top: "27.8%", left: "14.2%" },
    barbarian_7: { top: "-0.9%", left: "14.2%" },
    barbarian_8: { top: "-5.64%", left: "38.2%" },
    barbarian_9: { top: "42%", left: "-9.8%" },
    barbarian_10: { top: "-5.6%", left: "-9.8%" },
    // Add druid_*, rogue_*, etc. if positions differ
  };

  const imagePosition = imagePositions[normalizedId] || {
    top: "0%",
    left: "0%",
  };

  // Find the glyph socket node for the current board
  const glyphSocketNode = item.bord
    .flat()
    .find((node) => node && node.id === glyphSocketId);
  const hasSelectedGlyph =
    glyphSocketNode?.glyph_id !== undefined &&
    glyphSocketNode?.glyph_id !== null;

  const demansions = { top: item.top, left: item.left };

  return (
    <div
      className="flex flex-col items-center justify-center w-fit border-2 relative border-red-600"
      style={style}
    >
      <div className="text-white text-sm absolute top-1 left-1 bg-[#26272d] px-2 py-1 rounded-lg">
        {item.label} |
        <span className="text-xs text-yellow-600"> Str:{item.str}</span>
        <span className="text-xs">
          {" "}
          <b>•</b> Dex:{item.dex}
        </span>
        <span className="text-xs">
          {" "}
          <b>•</b> Int:{item.int}
        </span>
        <span className="text-xs">
          {" "}
          <b>•</b> Will:{item.will}
        </span>
      </div>
      <div className="w-[100%] relative">
        {hasSelectedGlyph && (
          <Image
            className="absolute h-[112vh]"
            style={{ top: imagePosition.top, left: imagePosition.left }}
            src="/paragon/boards.png"
            alt="Paragon Board Background"
            width={840}
            height={830}
            priority
          />
        )}
        <div
          className="grid gap-1 Paragon-board"
          style={{
            gridTemplateColumns: "repeat(21, 50px)",
            gridTemplateRows: "repeat(21, 50px)",
          }}
        >
          {item.bord.map((items, rowIndex) =>
            Array.from({ length: 21 }, (_, colIndex) => colIndex).map(
              (colIndex) => {
                const bord = findItemIndex(items, colIndex);
                if (!bord) {
                  return <div key={`empty_${rowIndex}_${colIndex}`} />;
                }
                if (bord.link === true) {
                  // Dynamic gate check: extract prefix from bord.id
                  const gatePrefix = bord.id.split("_")[0];
                  if (bord.id === `${gatePrefix}_${boardNumber}_1`) {
                    return (
                      <CardParagonModal
                        key={`modal_${bord.id}`}
                        item={bord}
                        size={30}
                        baseDemansions={demansions}
                      />
                    );
                  }
                  // Glyph socket check (dynamic)
                  if (bord.is_glyph_socket || bord.id === glyphSocketId) {
                    const glyphItem = {
                      ...bord,
                      label: bord.label || "Glyph Socket",
                      is_glyph_socket: true,
                      glyph_id: bord.glyph_id || null,
                    };
                    return (
                      <div className="relative" key={`glyph_${bord.id}`}>
                        <div
                          className={`absolute inset-0 ${
                            glyphItem.glyph_id ? "bg-red-500" : "bg-yellow-500"
                          } opacity-20 animate-pulse rounded-full z-0`}
                        ></div>
                        <CardGlyphModal
                          key={`glyph_${bord.id}`}
                          item={glyphItem}
                          size={30}
                          baseDemansions={demansions}
                          paragonId={item.id}
                        />
                      </div>
                    );
                  }
                }
                return (
                  <CardParagonHover
                    key={`hover_${bord.id}`}
                    item={{ ...bord, glyph_id: bord.glyph_id || null }}
                    size={30}
                  />
                );
              }
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ParagonBoard;
