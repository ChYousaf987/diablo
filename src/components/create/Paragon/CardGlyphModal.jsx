"use client";

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
  const [selectedGlyph, setSelectedGlyph] = useState(null);

  // Check if this node already has a glyph assigned
  const hasGlyph = item.glyph_id !== undefined && item.glyph_id !== null;

  const handleSelectGlyph = (glyph) => {
    console.log("Selecting glyph:", glyph);
    console.log("For node:", item);
    console.log("Paragon ID:", paragonId);
    
    // Set the selected glyph for UI updates
    setSelectedGlyph(glyph);
    
    dispatch(
      updateGlyph({
        node_id: item.id,
        glyph_id: glyph.id,
        paragon_id: paragonId,
      })
    );
    
    // Log after dispatch
    console.log("Dispatched updateGlyph action");
    
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="cursor-pointer">
          <CardParagonHover item={item} size={size} />
        </div>
      </DialogTrigger>
      <DialogContent className="bg-[#1f2025] dailog-content">
        <DialogHeader>
          <DialogTitle className="flex justify-between items-center gap-3 mb-8">
            Select Glyph
          </DialogTitle>
          <div className="flex flex-col max-h-96 overflow-y-auto pr-2">
            {glyphs.map((glyph, index) => (
              <div
                key={index}
                onClick={() => handleSelectGlyph(glyph)}
                className="flex justify-between items-center gap-2 border-b-[.5px] border-gray-300 mb-1 pb-2 cursor-pointer hover:bg-[#2a2b31]"
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
                  className="bg-[#1a1b1f] p-2 rounded-sm text-white"
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
