import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Image from "next/image";

export default function HoverTech({ item, onUpdate, tech }) {
  const updateTech = (item_id) => {
    let newTech = { ...tech, option_id: item_id };
    if (onUpdate) {
      onUpdate(newTech);
    }
  };

  return (
    <div className="grid gap-2">
      <div className="flex  ml-3 gap-2">
        {
          <HoverCard closeDelay="200" openDelay={200}>
            <HoverCardTrigger
              className={`flex gap-4 justify-start items-center border-b-2 pb-2 w-full cursor-pointer mt-2 ${
                tech.option_id === item.id ? "opacity-35" : ""
              }`}
              onClick={() => updateTech(item.id)}
            >
              
              <div className={`flex flex-col  items-start`}>
                <span className="font-bold text-yellow-600">{item.label}</span>
              </div>
            </HoverCardTrigger>
            <HoverCardContent className="bg-[#15161a] text-white max-w-[500px] w-full p-1">
              <div>
                <div className="flex justify-center items-center gap-3 border-b-[.5px] py-2">
                  
                  <span className="font-bold !text-white">{item.code}</span>
                </div>
                <ul className=" px-3 my-2">
                  <li
                    className="text-sm"
                    dangerouslySetInnerHTML={{ __html: item.details }}
                  />
                </ul>
              </div>
            </HoverCardContent>
          </HoverCard>
        }
      </div>
    </div>
  );
}
