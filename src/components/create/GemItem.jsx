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
import { Button } from "@/components/ui/button";
import GemItemTrigger from "./GemItemTrigger";
import { GemsOptions } from "@/constants";
import HoverGem from "./HoverGem";
import { useAppDispatch } from "@/lib/hooks";
import { updateGems } from "@/lib/redux/slice";

export default function GemItem({ gem, indexGem, mode = "create" }) {
  const count = GemsOptions.length;

  const dispatch = useAppDispatch();

  const onupdateGems = (index, newGem) =>
    dispatch(updateGems({ index, newGem }));

  const updateGem = (item) => {
    const newGem = { ...gem, option_id: item.id, image: item.image };

    onupdateGems(indexGem, newGem);
  };
  const gemOptions = GemsOptions.find(
    (gemOption) => gemOption.id === gem?.option_id ?? 0
  );

  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      {mode === "guest" && <GemCard gem={gem} gemOptions={gemOptions} />}
      {mode !== "guest" && (
        <Dialog>
          <DialogTrigger>
            {gemOptions ? (
              <GemCard gem={gem} gemOptions={gemOptions} />
            ) : (
              <div
                className="flex flex-col justify-center items-center"
                onClick={() => setIsOpen(true)}
              >
                <Image
                  src={`${gem.image}`}
                  className="object-contain transition-all bg-[#1f2025] hover:scale-105 rounded-sm border-[.5px] border-[#424243] p-2"
                  alt="logo"
                  width={60}
                  height={60}
                />
                <span className="text-white text-xs mt-2">{gem.label}</span>
              </div>
            )}
          </DialogTrigger>
          <DialogContent className="bg-[#1f2025] dailog-content">
            <DialogHeader>
              <DialogTitle className="flex justify-between items-center gap-3">
                <div className="flex justify-end items-center gap-2 mr-5">
                  <Button className="bg-[#1a1b1f]">Unequip</Button>
                </div>
              </DialogTitle>

              {GemsOptions.map((gem, index) => (
                <GemItemTrigger key={index} gem={gem} onUpdateGem={updateGem} />
              ))}

              <div className="mt-2 flex justify-center">
                <span className="text-white font-normal">
                  Showing {count} Helm Results
                </span>
              </div>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}

const GemCard = ({ gem, gemOptions }) => {
  return (
    <HoverCard closeDelay="1000">
      <HoverCardTrigger className="flex flex-col justify-center items-center">
        <Image
          src={`${gem.image}`}
          className="object-contain transition-all bg-[#1f2025] hover:scale-105 rounded-sm border-[.5px] border-[#b9bac9] p-2"
          alt="logo"
          width={60}
          height={60}
        />
        <span className="text-white text-xs mt-2">{gem.label}</span>
      </HoverCardTrigger>
      <HoverCardContent className="bg-[#15161a]">
        <HoverGem gem={gemOptions} />
      </HoverCardContent>
    </HoverCard>
  );
};
