import React from "react";
import CardParagonHover from "./CardParagonHover";
import CardParagonModal from "./CardParagonModal";
import CardGlyphModal from "./CardGlyphModal";
import { useAppSelector } from "@/lib/hooks";
import { selectGlyphs } from "@/lib/redux/slice";

const ParagonBoard = ({ item, style }) => {
  const glyphs = useAppSelector(selectGlyphs);
  
  const findItemIndex = (items, index) => {
    return items.find((item) => item.index === index) || null;
  };

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
                if (bord.id === "barbarian_1_1") {
                  return (
                    <CardParagonModal
                      key={`modal_${bord.id}`}
                      item={bord}
                      size={30}
                      baseDemansions={demansions}
                    />
                  );
                }
                if (bord.id === "barbarian_1_23") {
                  // Add special styling to make the glyph node more visible
                  const glyphItem = {
                    ...bord,
                    label: bord.label || "Glyph Socket",
                    // Add a special class or property to identify this as a glyph socket
                    is_glyph_socket: true,
                    // Pass the glyph_id if it exists
                    glyph_id: bord.glyph_id || null
                  };
                  
                  // Determine if a glyph is selected for this node
                  const hasSelectedGlyph = glyphItem.glyph_id !== undefined && glyphItem.glyph_id !== null;
                  
                  return (
                    <div className="relative" key={`glyph_${bord.id}`}>
                      {/* Add a pulsing effect or highlight to draw attention */}
                      <div className={`absolute inset-0 ${hasSelectedGlyph ? 'bg-red-500' : 'bg-yellow-500'} opacity-20 animate-pulse rounded-full z-0`}></div>
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
                  item={{ ...bord, glyph_id: bord.glyph_id || null }} // Ensure glyph_id is passed
                  size={30}
                />
              );
            }
          )
        )}
      </div>
    </div>
  );
};

export default ParagonBoard;
