import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import HoverSkill from "./HoverSkill";
import { selectOptionSkills } from "@/lib/redux/slice";
import { useAppSelector } from "@/lib/hooks";

export default function SkillItem({ skill, onUpdate, mode = "create" }) {
  const optionSkills = useAppSelector(selectOptionSkills);
  const [isOpen, setIsOpen] = React.useState(false);

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

  return (
    <>
      {mode === "guest" ? (
        <HoverCardSkill skillSelected={skillSelected} skill={skill} />
      ) : (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger onClick={() => setIsOpen(true)}>
            <HoverCardSkill skillSelected={skillSelected} skill={skill} />
          </DialogTrigger>
          <DialogContent className="bg-[#1f2025] dailog-content max-h-[80vh] z-50 overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="flex justify-between items-center gap-3">
                <span className="text-white text-lg font-semibold">
                  Select Skill
                </span>
                <div className="flex justify-end items-center gap-2 mr-5">
                  <Button className="bg-[#1a1b1f]" onClick={handleUnequip}>
                    Unequip
                  </Button>
                </div>
              </DialogTitle>
              <div className="mt-2">
                {optionSkills.map((optionSkill, index) => {
                  return optionSkill.hidden ? null : (
                    <HoverSkill
                      handlClose={() => setIsOpen(false)}
                      key={index}
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

const HoverCardSkill = ({ skillSelected, skill }) => {
  return (
    <HoverCard closeDelay="1000">
      <HoverCardTrigger className="flex flex-col justify-center items-center">
        <Image
          src={`${skillSelected ? skillSelected.image : skill.image}`}
          className="object-contain transition-all bg-[#1f2025] hover:scale-105 rounded-sm border-[.5px] border-[#424243]"
          alt={skillSelected ? skillSelected.label : "skill"}
          width={60}
          height={60}
        />
      </HoverCardTrigger>
      {skillSelected && (
        <HoverCardContent className="bg-[#15161a] text-white min-w-[300px] p-1">
          <div>
            <div className="flex justify-center gap-2">
              <Image
                src={`${skillSelected.image}`}
                className="transition-all hover:scale-105"
                alt={skillSelected.label}
                width={50}
                height={50}
              />
              <div className="flex flex-col justify-center">
                <h2 className="mt-0 text-md font-bold text-yellow-400">
                  {skillSelected.label}
                </h2>
                {skillSelected.rank > 0 && (
                  <p className="mt-0 text-sm font-light">
                    Rank: {skillSelected.rank}
                  </p>
                )}
              </div>
            </div>
            <div className="flex justify-center items-center gap-2 my-3">
              {skillSelected.powers?.map((subPower) => (
                <Button
                  key={subPower}
                  className="bg-[#1f2025] hover:bg-slate-300 text-white hover:text-black h-6 px-4 text-sm"
                >
                  {subPower}
                </Button>
              ))}
            </div>
            <div className="border-t-2 border-[#1f2025]" />
            <ul className="px-3 my-2">
              {skillSelected.details &&
                skillSelected.details.map((detail, index) => (
                  <li
                    key={index}
                    className="text-sm text-white text-start"
                    dangerouslySetInnerHTML={{ __html: detail }}
                  />
                ))}
            </ul>
            {skillSelected.footer && (
              <div className="flex justify-end items-center gap-2 border-t-[.5px] py-2">
                <span
                  className="text-gray-400 text-xs mr-5"
                  dangerouslySetInnerHTML={{ __html: skillSelected.footer }}
                />
              </div>
            )}
          </div>
        </HoverCardContent>
      )}
    </HoverCard>
  );
};
