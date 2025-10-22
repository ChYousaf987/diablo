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

const CardGlyphModal = ({ item, size, baseDemansions, paragonId }) => {
  const glyphs = useAppSelector(selectGlyphs);
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  // Initialize with glyph_ids or convert glyph_id to array for compatibility
  const [selectedGlyphs, setSelectedGlyphs] = useState(
    item.glyph_ids || (item.glyph_id ? [item.glyph_id] : [])
  );

  const handleSelectGlyph = (glyph) => {
    let newGlyphIds;
    if (item.is_glyph_socket) {
      // Glyph sockets allow only one glyph
      newGlyphIds = [glyph.id];
      setOpen(false); // Close dialog for glyph sockets
    } else {
      // Non-glyph-socket nodes allow multiple glyphs
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
      <DialogContent className="bg-[#1f2025] dailog-content">
        <DialogHeader>
          <DialogTitle className="flex justify-between items-center gap-3 mb-8">
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
      </DialogContent>
    </Dialog>
  );
};

export default CardGlyphModal;
