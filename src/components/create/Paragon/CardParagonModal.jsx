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
import Image from "next/image";

export default function CardParagonModal({ item, baseDemansions }) {
  const paragon_builds = useAppSelector(selectParagonBuilds);
  console.log("paragon_builds", paragon_builds);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false); // Step 1

  // Hover state for paragon tooltip
  const [hoveredParagon, setHoveredParagon] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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
                    className="flex justify-between items-center gap-2 border-b-[.5px] border-gray-300 mb-1 pb-2 cursor-pointer hover:bg-[#2a2b31]"
                    onMouseEnter={(e) => {
                      setHoveredParagon(paragon);
                      setMousePosition({ x: e.clientX, y: e.clientY });
                    }}
                    onMouseMove={(e) =>
                      setMousePosition({ x: e.clientX, y: e.clientY })
                    }
                    onMouseLeave={() => setHoveredParagon(null)}
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

        {/* Tooltip - Positioned near mouse with auto-flip */}
        {hoveredParagon && (
          <div
            className="fixed pointer-events-none z-50"
            style={{
              left: `${
                window.innerWidth - mousePosition.x < 320
                  ? mousePosition.x - 320 - 0 // Flip to left
                  : mousePosition.x + -450 // To the right
              }px`,
              top: `${
                window.innerHeight - mousePosition.y < 300
                  ? mousePosition.y - 300 - 100 // Flip above
                  : mousePosition.y + -80 // Below
              }px`,
            }}
          >
            <div className="bg-[#15161A] text-white max-w-[320px] p-4 rounded-lg shadow-2xl border border-gray-700">
              <div className="flex items-center gap-3 mb-3 pb-3 border-b border-gray-600">
                <Image
                  src={hoveredParagon.image || "/paragon/default-image.png"} // Fallback image if needed
                  width={56}
                  height={56}
                  alt={hoveredParagon.label}
                  className="rounded-sm bg-[#1f2025] border border-gray-600"
                />
                <div>
                  <div className="font-semibold text-yellow-500 ">
                    {hoveredParagon.power}
                  </div>
                  <div className="font-semibold text-white text-lg">
                    {hoveredParagon.label || "Unknown Board"}
                  </div>
                </div>
              </div>

              {hoveredParagon.power && (
                <div className="space-y-2 text-sm">
                  <p className="text-gray-200">{hoveredParagon.description}</p>
                </div>
              )}

              <div className="space-y-2 text-sm mt-3">
                <div className="text-blue-400 font-semibold uppercase tracking-wide">
                  Glyph Radius Stats:
                </div>
                <ul className="list-disc pl-5 flex gap-5 text-gray-200">
                  <li>Str: {hoveredParagon.str || 0}</li>
                  <li>Dex: {hoveredParagon.dex || 0}</li>
                  <li>Int: {hoveredParagon.int || 0}</li>
                  <li>Will: {hoveredParagon.will || 0}</li>
                </ul>
              </div>

              {hoveredParagon.options && hoveredParagon.options.length > 0 && (
                <div className="space-y-2 text-sm mt-3">
                  <div className="text-blue-400 font-semibold uppercase tracking-wide">
                    Options:
                  </div>
                  <ul className="list-disc pl-5 text-gray-200">
                    {hoveredParagon.options.map((option, i) => (
                      <li
                        key={i}
                        dangerouslySetInnerHTML={{ __html: option }}
                      />
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
