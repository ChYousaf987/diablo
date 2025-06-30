import React, { useState } from "react";
import { useAppSelector } from "@/lib/hooks";
import {
  updateParagonBuildDemansion,
  selectParagonBuilds,
} from "@/lib/redux/slice";
import { useDispatch } from "react-redux";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Star } from "lucide-react";
import CardParagonHover from "./CardParagonHover";
import ParagonItemTrigger from "./ParagonItemTrigger";

export default function CardParagonModal({ item, baseDemansions }) {
  const paragon_builds = useAppSelector(selectParagonBuilds);
  console.log("paragon_builds", paragon_builds);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false); // Step 1

  const handelUpdate = (paragon) => {
    const demansions = { ...baseDemansions };

    switch (item.direction) {
      case "top":
        demansions.top -= 1135;
        break;
      case "bottom":
        demansions.top += 1135;
        break;
      case "left":
        demansions.left -= 1135;
        break;
      case "right":
        demansions.left += 1135;
        break;
      default:
        break;
    }

    dispatch(
      updateParagonBuildDemansion({ id: paragon.id, newDemansion: demansions })
    );
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <CardParagonHover item={item} size={30} />
      </DialogTrigger>
      <DialogContent className="bg-[#1f2025] dailog-content">
        <DialogHeader>
          <DialogTitle className="flex justify-between items-center gap-3 mb-8" />
          <div className="flex flex-col max-h-96 overflow-y-auto pr-2">
            {paragon_builds.map(
              (paragon, index) =>
                !paragon.is_active && (
                  <div
                    key={index}
                    onClick={() => handelUpdate(paragon)}
                    className="flex justify-between items-center gap-2 border-b-[.5px] border-gray-300 mb-1 pb-2 cursor-pointer"
                  >
                    <ParagonItemTrigger item={paragon} size={45} />
                    <Star
                      className="bg-[#1a1b1f] p-2 rounded-sm text-white"
                      size={35}
                    />
                  </div>
                )
            )}
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
