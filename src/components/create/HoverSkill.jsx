import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Image from "next/image";
import { Button } from "../ui/button";

export default function HoverSkill({
  item,
  onUpdate,
  skill,
  handlClose = () => {},
}) {
  const updateSkillTech = (parent_id, item_id) => {
    let newSkillTech = { ...skill, parent_id: parent_id, skill_id: item_id };
    if (onUpdate) {
      onUpdate(newSkillTech);
      handlClose();
    }
  };

  return (
    <div className="flex ">
      <HoverCard closeDelay="200" openDelay={200}>
        <HoverCardTrigger className="flex flex-col justify-center items-center">
          <Image
            src={`${item.image}`}
            className="object-contain transition-all bg-[#1f2025] hover:scale-105 rounded-sm builder"
            alt="logo"
            width={60}
            height={60}
          />
        </HoverCardTrigger>
        <HoverCardContent className="bg-[#15161a] text-white w-fit p-1">
          {item.label}
        </HoverCardContent>
      </HoverCard>
      <div className="flex  ml-3 gap-2">
        {item.options &&
          item.options.map((detail, index) => (
            <HoverCard key={index} closeDelay="200" openDelay={200}>
              <HoverCardTrigger
                className={`flex flex-col justify-center items-center ${
                  skill.skill_id === detail.id ? "opacity-30" : ""
                }`}
                onClick={() => updateSkillTech(item.id, detail.id)}
              >
                <Image
                  src={`${detail.image}`}
                  className="object-contain transition-all bg-[#1f2025] hover:scale-105 rounded-sm"
                  alt="logo"
                  width={50}
                  height={50}
                />
              </HoverCardTrigger>
              <HoverCardContent className="bg-[#26272d] z-[9999] text-white min-w-[300px]  p-1">
                <div>
                  <div className="flex justify-center gap-2">
                    <Image
                      src={`${detail.image}`}
                      className="transition-all hover:scale-105"
                      alt={detail.label}
                      width={50}
                      height={50}
                    />
                    <div className="flex flex-col justify-center">
                      <h2 className="mt-0 text-md font-bold text-yellow-400">
                        {detail.label}
                      </h2>
                      {detail.rank > 0 && (
                        <p className="mt-0 text-sm font-light">
                          Rank: {detail.rank}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex justify-center items-center gap-2 my-3">
                    {detail.powers?.map((subPower) => (
                      <Button
                        key={subPower}
                        className="bg-[#1f2025] hover:bg-slate-300 text-white hover:text-black h-6 px-4 text-sm"
                      >
                        {subPower}
                      </Button>
                    ))}
                  </div>
                  <div className="border-t-2 border-[#1f2025]" />
                  <ul className=" px-3 my-2">
                    {detail.details &&
                      detail.details.map((detail, index) => (
                        <li
                          key={index}
                          className="text-sm"
                          dangerouslySetInnerHTML={{ __html: detail }}
                        />
                      ))}
                  </ul>
                  {detail.footer && (
                    <div className="flex justify-end items-center gap-2  border-t-[.5px] py-2">
                      <span
                        className="text-gray-400 text-xs mr-5"
                        dangerouslySetInnerHTML={{ __html: detail.footer }}
                      />
                    </div>
                  )}
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
      </div>
    </div>
  );
}
