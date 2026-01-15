"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "../ui/button";
import { useAppSelector } from "@/lib/hooks";
import { selectOptionTechs } from "@/lib/redux/slice";

export default function TechItem({ tech, onUpdate, mode = "create" }) {
  const optionTechs = useAppSelector(selectOptionTechs);
  const [isOpen, setIsOpen] = useState(false);

  const techSelected = tech.option_id
    ? optionTechs.find((t) => t.id === tech.option_id)
    : null;

  const handleUnequip = () => {
    if (onUpdate) {
      onUpdate({ ...tech, option_id: null });
    }
    setIsOpen(false);
  };

  const emptyImage = "/skill-tech/empty_skill.png";

  return (
    <>
      {mode === "guest" ? (
        <div className="flex flex-col justify-center items-center">
          <img
            src={techSelected?.image || emptyImage}
            className="w-[60px] h-[60px] object-contain bg-[#1f2025] rounded-sm border-[.5px] border-[#424243]"
            alt={techSelected?.label || "Technique"}
          />
          {techSelected && (
            <span className="text-xs text-gray-400 mt-1 truncate max-w-[60px] text-center">
              {techSelected.label}
            </span>
          )}
        </div>
      ) : (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <div className="flex flex-col justify-center items-center cursor-pointer">
              <img
                src={techSelected?.image || emptyImage}
                className="w-[60px] h-[60px] object-contain transition-all bg-[#1f2025] hover:scale-105 rounded-sm border-[.5px] border-[#424243]"
                alt={techSelected?.label || "Technique"}
              />
              {techSelected && (
                <span className="text-xs text-gray-400 mt-1 truncate max-w-[60px] text-center">
                  {techSelected.label}
                </span>
              )}
            </div>
          </DialogTrigger>

          <DialogContent className="bg-[#1f2025] dailog-content max-h-[80vh] z-[99999] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="flex justify-between items-center gap-3 px-4 py-3 border-b border-[#424243]">
                <span className="text-white text-lg font-semibold">
                  Select Technique
                </span>
                <div className="flex items-center gap-3">
                  {techSelected && (
                    <Button
                      variant="outline"
                      className="bg-[#1a1b1f] hover:bg-red-900/30 text-white border-red-700/50 hover:text-white transition-colors"
                      onClick={handleUnequip}
                    >
                      Unequip
                    </Button>
                  )}
                </div>
              </DialogTitle>

              <div className="mt-4 px-2 space-y-2">
                {optionTechs.length === 0 ? (
                  <p className="text-center text-gray-400 py-8">
                    No techniques available
                  </p>
                ) : (
                  optionTechs.map((optionTech, index) => {
                    const isSelected = tech.option_id === optionTech.id;

                    return (
                      <HoverCard key={index} openDelay={150} closeDelay={100}>
                        <HoverCardTrigger asChild>
                          <div
                            className={`flex items-center gap-4 p-3 rounded-lg cursor-pointer transition-all hover:bg-[#2a2b35] border-b border-[#424243]/50 last:border-b-0 ${
                              isSelected
                                ? "bg-[#3a3b45] border-l-4 border-blue-500"
                                : ""
                            }`}
                            onClick={() => {
                              onUpdate({ ...tech, option_id: optionTech.id });
                              setIsOpen(false);
                            }}
                          >
                            {/* Image */}
                            <div className="flex-shrink-0">
                              <img
                                src={
                                  optionTech.image ||
                                  "/skill-tech/empty_skill.png"
                                }
                                alt={optionTech.label}
                                className="w-14 h-14 object-contain rounded-md bg-[#1a1b1f] border border-[#424243]"
                              />
                            </div>

                            {/* Text */}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2">
                                <span className="font-semibold text-white truncate">
                                  {optionTech.label}
                                </span>
                                {isSelected && (
                                  <span className="text-xs bg-blue-600/30 text-blue-300 px-2 py-0.5 rounded-full">
                                    Selected
                                  </span>
                                )}
                              </div>

                            </div>
                          </div>
                        </HoverCardTrigger>

                        {/* Hover Popup – now showing ABOVE the item */}
                        <HoverCardContent
                          className="w-96 bg-[#15161a] border border-[#424243] text-white p-4 shadow-xl z-[999999]"
                          side="top" // ← Changed to top (above the hovered item)
                          align="center"
                          sideOffset={12} // More space from the item
                        >
                          <div className="space-y-3">
                            <div className="flex items-start gap-4">
                              <img
                                src={
                                  optionTech.image ||
                                  "/skill-tech/empty_skill.png"
                                }
                                alt={optionTech.label}
                                className="w-20 h-20 object-contain rounded-md bg-[#1f2025] border border-[#424243]"
                              />
                              <div>
                                <h3 className="font-bold text-lg text-white">
                                  {optionTech.label}
                                </h3>
                                <p className="text-yellow-500 font-mono text-sm mt-1">
                                  [{optionTech.code}]
                                </p>
                              </div>
                            </div>

                            <div className="border-t border-[#424243] pt-3">
                              <p className="text-sm text-gray-300 leading-relaxed">
                                {optionTech.details}
                              </p>
                            </div>

                            {optionTech.footer && (
                              <p className="text-xs text-gray-500 italic pt-2 border-t border-[#424243]">
                                {optionTech.footer}
                              </p>
                            )}
                          </div>
                        </HoverCardContent>
                      </HoverCard>
                    );
                  })
                )}
              </div>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
