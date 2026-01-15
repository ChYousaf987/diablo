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
import HoverSkill from "./HoverSkill";
import { selectOptionSkills } from "@/lib/redux/slice";
import { useAppSelector } from "@/lib/hooks";

export default function SkillItem({ skill, onUpdate, mode = "create" }) {
  const optionSkills = useAppSelector(selectOptionSkills);
  const [isOpen, setIsOpen] = useState(false);

  const category = skill.parent_id
    ? optionSkills.find((item) => item.id === skill.parent_id)
    : null;

  const skillSelected = category
    ? category.options.find((item) => item.id === skill.skill_id)
    : null;

  const handleUnequip = () => {
    if (onUpdate) {
      onUpdate({ ...skill, skill_id: null, parent_id: null });
      setIsOpen(false);
    }
  };

  const emptyImage = "/skill-tech/empty_skill.png"; // dark pattern wala empty card

  return (
    <>
      {mode === "guest" ? (
        <div className="flex flex-col justify-center items-center">
          <img
            src={skillSelected?.image || emptyImage}
            className="w-[60px] h-[60px] object-contain bg-[#1f2025] rounded-sm border-[.5px] border-[#424243] hover:scale-105 transition-all"
            alt={skillSelected?.label || "Skill"}
          />
        </div>
      ) : (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <div className="flex flex-col justify-center items-center cursor-pointer group">
              <HoverCard openDelay={150} closeDelay={100}>
                <HoverCardTrigger asChild>
                  <img
                    src={skillSelected?.image || emptyImage}
                    className="w-[60px] h-[60px] object-contain transition-all bg-[#1f2025] group-hover:scale-105 rounded-sm border-[.5px] border-[#424243] group-hover:border-blue-500/50"
                    alt={skillSelected?.label || "Skill"}
                  />
                </HoverCardTrigger>

                {skillSelected && (
                  <HoverCardContent
                    className="w-96 bg-[#15161a] border border-[#424243] text-white p-4 shadow-xl z-[999999]"
                    side="top"
                    align="center"
                    sideOffset={12}
                  >
                    {/* Full details popup – same as before */}
                    <div className="space-y-3">
                      <div className="flex items-start gap-4">
                        <img
                          src={skillSelected.image || emptyImage}
                          alt={skillSelected.label}
                          className="w-20 h-20 object-contain rounded-md bg-[#1f2025] border border-[#424243]"
                        />
                        <div>
                          <h3 className="font-bold text-lg text-white">
                            {skillSelected.label}
                          </h3>
                          <p className="text-yellow-400 font-mono text-sm mt-1">
                            Rank: {skillSelected.rank || 0}
                          </p>
                        </div>
                      </div>

                      <div className="border-t border-[#424243] pt-3">
                        <p className="text-sm text-gray-300 leading-relaxed">
                          {skillSelected.details?.join(" ")}
                        </p>
                      </div>

                      {skillSelected.footer && (
                        <p className="text-xs text-gray-500 italic pt-2 border-t border-[#424243]">
                          {skillSelected.footer}
                        </p>
                      )}
                    </div>
                  </HoverCardContent>
                )}
              </HoverCard>
            </div>
          </DialogTrigger>

          <DialogContent className="bg-[#1f2025] max-h-[80vh] z-[99999] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="flex justify-between items-center gap-3 px-4 py-3 border-b border-[#424243]">
                <span className="text-white text-lg font-semibold">
                  Select Skill
                </span>
                <div className="flex items-center gap-3">
                  {skillSelected && (
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
                {optionSkills.map((optionSkill, idx) => {
                  if (optionSkill.hidden) return null;
                  return (
                    <HoverSkill
                      handlClose={() => setIsOpen(false)}
                      key={idx}
                      item={optionSkill}
                      skill={skill}
                      onUpdate={onUpdate}
                    />
                  );
                })}
              </div>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
