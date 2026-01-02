// CardGlyphModal.js
import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { selectGlyphs, updateGlyph } from "@/lib/redux/slice";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CardParagonHover from "./CardParagonHover";
import { Star } from "lucide-react";
import Image from "next/image";

const CardGlyphModal = ({ item, size, baseDemansions, paragonId }) => {
  const glyphs = useAppSelector(selectGlyphs);
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);

  // Hover state
  const [hoveredGlyph, setHoveredGlyph] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const [selectedGlyphs, setSelectedGlyphs] = useState(
    item.glyph_ids || (item.glyph_id ? [item.glyph_id] : [])
  );

  const handleSelectGlyph = (glyph) => {
    let newGlyphIds;
    if (item.is_glyph_socket) {
      newGlyphIds = [glyph.id];
      setOpen(false);
    } else {
      newGlyphIds = selectedGlyphs.includes(glyph.id)
        ? selectedGlyphs.filter((id) => id !== glyph.id)
        : [...selectedGlyphs, glyph.id];
    }
    setSelectedGlyphs(newGlyphIds);
    dispatch(
      updateGlyph({
        node_id: item.id,
        glyph_ids: newGlyphIds,
        paragon_id: paragonId,
      })
    );
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="cursor-pointer">
          <CardParagonHover
            item={{ ...item, glyph_ids: selectedGlyphs }}
            size={size}
          />
        </div>
      </DialogTrigger>

      <DialogContent className="bg-[#1f2025] dailog-content overflow-visible">
        <DialogHeader>
          <DialogTitle className="flex text-white justify-between items-center gap-3 mb-8">
            Select Glyph{!item.is_glyph_socket && "s"}
          </DialogTitle>

          <div className="flex flex-col max-h-96 overflow-y-auto pr-2">
            {glyphs.map((glyph, index) => (
              <div
                key={index}
                onClick={() => handleSelectGlyph(glyph)}
                className={`flex justify-between items-center gap-2 border-b-[.5px] border-gray-300 mb-1 pb-2 cursor-pointer hover:bg-[#2a2b31] ${
                  selectedGlyphs.includes(glyph.id) ? "bg-[#2a2b31]" : ""
                }`}
                onMouseEnter={(e) => {
                  setHoveredGlyph(glyph);
                  setMousePosition({ x: e.clientX, y: e.clientY });
                }}
                onMouseMove={(e) =>
                  setMousePosition({ x: e.clientX, y: e.clientY })
                }
                onMouseLeave={() => setHoveredGlyph(null)}
              >
                <div className="flex items-center gap-3">
                  <img
                    src={glyph.image}
                    className="w-[50px] h-[50px] bg-[#3b3b3c] rounded-sm"
                    alt={glyph.label}
                  />
                  <div className="flex flex-col">
                    <span className="font-bold text-yellow-600">
                      {glyph.label}
                    </span>
                    <span className="text-white">{glyph.effects[0]}</span>
                  </div>
                </div>

                <Star
                  className={`bg-[#1a1b1f] p-2 rounded-sm ${
                    selectedGlyphs.includes(glyph.id)
                      ? "text-yellow-600"
                      : "text-white"
                  }`}
                  size={35}
                />
              </div>
            ))}
          </div>
        </DialogHeader>

        {/* Tooltip - Now INSIDE DialogContent, above overlay */}
        {hoveredGlyph && (
          <div
            className="fixed pointer-events-none z-50"
            style={{
              // Smart positioning with flip logic
              left:
                window.innerWidth - mousePosition.x < 350
                  ? `${mousePosition.x - 0}px` // Agar right edge pe hai → left mein show karo
                  : `${mousePosition.x + -500}px`, // Normal: right mein

              top:
                window.innerHeight - mousePosition.y < 400
                  ? `${mousePosition.y - 0}px` // Agar bottom edge pe hai → upar dikhao
                  : `${mousePosition.y + -70}px`, // Normal: neeche dikhao
            }}
          >
            <div className="bg-[#15161A] text-white max-w-[320px] p-4 rounded-lg shadow-2xl border border-gray-700">
              <div className="flex items-center gap-3 mb-3 pb-3 border-b border-gray-600">
                <Image
                  src={hoveredGlyph.image}
                  width={56}
                  height={56}
                  alt={hoveredGlyph.label}
                  className="rounded-sm bg-[#1f2025] border border-gray-600"
                />
                <div>
                  <div className="font-bold text-yellow-500 text-lg">
                    {hoveredGlyph.label}
                  </div>
                  <div className="text-xs text-gray-400">Glyph</div>
                </div>
              </div>

              {hoveredGlyph.effects && hoveredGlyph.effects.length > 0 && (
                <div className="space-y-2 text-sm">
                  <div className="text-blue-400 font-semibold">Effects:</div>
                  {hoveredGlyph.effects.map((eff, i) => (
                    <div key={i} dangerouslySetInnerHTML={{ __html: eff }} />
                  ))}
                </div>
              )}

              {hoveredGlyph.radius_bonus && (
                <div className="mt-3 pt-3 border-t border-gray-600">
                  <div className="text-green-400 font-semibold text-sm">
                    Radius Bonus:
                  </div>
                  <div
                    className="text-sm mt-1"
                    dangerouslySetInnerHTML={{
                      __html: hoveredGlyph.radius_bonus,
                    }}
                  />
                </div>
              )}

              {hoveredGlyph.upgrade && (
                <div className="mt-2 text-purple-400 text-xs italic">
                  ↑ {hoveredGlyph.upgrade}
                </div>
              )}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CardGlyphModal;