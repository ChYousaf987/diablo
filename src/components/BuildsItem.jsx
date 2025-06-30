"use client";
import React from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import SkillItem from "./create/SkillItem";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { categories } from "@/constants";
import GearItem from "./create/GearItem";

export default function BuildItem({ build, isEdit = false }) {
  const category = categories.find((cat) => cat.value === build.category);

  return (
    <Accordion type="single" collapsible>
      <AccordionItem
        value="item-1"
        className="border-2 px-3 mt-2 bg-[#1a1b1f] rounded-lg border-[#1a1b1f]"
      >
        <AccordionTrigger className="gap-3">
          <div
            className={`w-full sm:flex grid justify-between ${
              build.user_id ? "items-start" : "items-center"
            } `}
          >
            <div className="flex flex-col gap-2">
              <div className="flex justify-start gap-3">
                <Image
                  className={`object-contain transition-all hover:scale-105 ${category.bg} rounded-lg p-2`}
                  src={`/${build.category}.png`}
                  alt={build.category}
                  width={60}
                  height={60}
                />
                <div>
                  <h2 className="text-md font-bold">{build.name}</h2>
                  <p className="text-sm font-semibold text-gray-700">
                    Exp:{" "}
                    <span className="underline font-light">{build.user_id}</span>
                  </p>
                </div>
              </div>
              {build.user_id && (
                <div>
                  <HoverCard>
                    <HoverCardTrigger className="flex justify-start items-center gap-3 cursor-pointer bg-[#26272d] px-2 py-1 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-red-500" />
                      <p className="underline">
                        <span className="font-semibold text-gray-500">By:</span>{" "}
                        {build.user_id}
                      </p>
                    </HoverCardTrigger>
                    <HoverCardContent className="flex justify-center items-center gap-3">
                      <Link target="_blank" href={build.youtube ?? ""}>
                        <Image
                          src="/icons/youtube.png"
                          width={30}
                          height={30}
                        />
                      </Link>
                      <Link target="_blank" href={build.twitch ?? ""}>
                        <Image
                          src="/icons/twitch.png"
                          width={30}
                          height={30}
                        />
                      </Link>
                    </HoverCardContent>
                  </HoverCard>
                </div>
              )}
            </div>
            <div className="flex justify-end items-center gap-3 mt-2 sm:mt-0">
              {build.variants &&
                build.variants.length > 0 &&
                build.variants[0].skills?.map((skill, index) => (
                  <SkillItem
                    key={skill.id ?? index} // Use skill.id if available, fallback to index
                    skill={skill}
                    onUpdate={(newSkill) => onUpdateSkills(index, newSkill)}
                    mode="guest"
                  />
                ))}
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <ViewBuild build={build} isEdit={isEdit} />
          <Aspects build={build} />
          <TextSeparator build={build} />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

const ViewBuild = ({ build, isEdit = false }) => {
  const url = isEdit ? `/build-planner/${build._id}` : `/build/${build._id}`;
  return (
    <div className="flex flex-col gap-3 py-4 border-y-2 w-full text-center justify-center items-center border-[#555864]">
      <a
        href={url}
        className="bg-[#33353b] hover:bg-[#484b53] text-white w-fit px-4 py-2 rounded"
      >
        View Full Build
      </a>
    </div>
  );
};

const Aspects = ({ build }) => {
  const hasVariants = build.variants && build.variants.length > 0;
  const gearRight = hasVariants ? build.variants[0].gearRight : [];
  const gearLeft = hasVariants ? build.variants[0].gearLeft : [];

  return (
    <div className="py-4 border-y-2 w-full text-center justify-center items-center border-[#555864]">
      <div className="text-center mb-2">
        <h2 className="text-white text-md">Aspects</h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {hasVariants && (
          <>
            {gearLeft.length > 0 &&
              gearLeft.map((gear) => {
                // Only render GearItem if gear.image is not "empty.png"
                if (gear.image !== "empty.png") {
                  return (
                    <GearItem
                      key={gear.id ?? gear.image} // Use gear.id if available, fallback to gear.image
                      position={gear.position}
                      gear={gear}
                      aspects={[]}
                      mode={"guest"}
                    />
                  );
                }
                return null; // Return null if gear.image is "empty.png"
              })}
            {gearRight.length > 0 &&
              gearRight.map((gear) => {
                // Only render GearItem if gear.image is not "empty.png"
                if (gear.image !== "empty.png") {
                  return (
                    <GearItem
                      key={gear.id ?? gear.image} // Use gear.id if available, fallback to gear.image
                      gear={gear}
                      aspects={[]}
                      mode={"guest"}
                    />
                  );
                }
                return null; // Return null if gear.image is "empty.png"
              })}
          </>
        )}
      </div>
    </div>
  );
};

const TextSeparator = ({ build }) => {
  const textArray = build.notes
    .split("\n")
    .map((item) => item.trim())
    .filter((item) => item);

  // Create the object
  const textObject = textArray.reduce((obj, item, index) => {
    obj[`line${index + 1}`] = item;
    return obj;
  }, {});

  return (
    <div className="py-4 border-y-2 w-full text-center justify-center items-center border-[#555864]">
      <div className="text-center">
        <h2 className="text-white text-md">Remarques</h2>
      </div>
      <ul>
        {Object.entries(textObject).map(([key, value]) => (
          <li
            key={key}
            className="mt-2 bg-gray-800 rounded-md text-gray-100 text-sm leading-7 list-disc mb-1.5 p-1.5 break-words"
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};
