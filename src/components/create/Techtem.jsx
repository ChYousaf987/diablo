import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { selectOptionTechs } from "@/lib/redux/slice";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { optiontechs } from "@/constants";
import HoverTech from "./HoverTech";

export default function Techtem({ tech, onUpdate }) {
  const techOptions = useAppSelector(selectOptionTechs);
  const techSelected = tech.option_id
    ? optiontechs.find((item) => item.id === tech.option_id)
    : null;

  const handlUnequip = () => {
    if (onUpdate) {
      onUpdate({ ...tech, option_id: null });
    }
  };

  return (
    <Dialog>
      <DialogTrigger>
        {tech.option_id ? (
          <HoverCard closeDelay="1000">
            <HoverCardTrigger className="flex flex-col justify-center items-center">
              <Image
                src={`${techSelected.image}`}
                className="object-contain transition-all bg-[#1f2025] hover:scale-105 rounded-sm border-[.5px] border-[#b9bac9] "
                alt="logo"
                width={60}
                height={60}
              />
            </HoverCardTrigger>
            <HoverCardContent className="bg-[#15161a] text-white max-w-[500px] w-full p-1">
              <div>
                <div className="flex justify-center items-center gap-3 border-b-[.5px] py-2">
                  
                  <div className="flex flex-col items-start">
                    <span className="font-bold text-yellow-600">
                      {techSelected.code}
                    </span>
                  </div>
                </div>
                <ul className="px-3 my-2">
                  <li
                    className="text-sm text-white text-start"
                    dangerouslySetInnerHTML={{ __html: techSelected.details }}
                  />
                </ul>
              </div>
            </HoverCardContent>
          </HoverCard>
        ) : (
          <div className="flex flex-col justify-center items-center">
            
          </div>
        )}
      </DialogTrigger>
      <DialogContent className="bg-[#1f2025] dailog-content">
        <DialogHeader>
          <DialogTitle className="flex justify-between items-center gap-3">
            <div className="flex justify-end items-center gap-2 mr-5">
              <Button className="bg-[#1a1b1f]" onClick={handlUnequip}>
                Unequip
              </Button>
            </div>
          </DialogTitle>
          <div className="mt-2 max-h-96 overflow-y-auto">
            {techOptions.map((optiontech, index) => (
              <HoverTech
                key={index}
                item={optiontech}
                tech={tech}
                onUpdate={onUpdate}
              />
            ))}
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
