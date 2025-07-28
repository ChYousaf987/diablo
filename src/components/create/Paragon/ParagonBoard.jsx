import React from "react";
import CardParagonHover from "./CardParagonHover";
import CardParagonModal from "./CardParagonModal";
import CardGlyphModal from "./CardGlyphModal";

const ParagonBoard = ({ item, style }) => {
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
                if (bord.id === "barbrian_1_1") {
                  return (
                    <CardParagonModal
                      key={`modal_${bord.id}`}
                      item={bord}
                      size={30}
                      baseDemansions={demansions}
                    />
                  );
                }
                if (bord.id === "barbrian_1_23") {
                  return (
                    <CardGlyphModal
                      key={`glyph_${bord.id}`}
                      item={bord}
                      size={30}
                      baseDemansions={demansions}
                      paragonId={item.id}
                    />
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
