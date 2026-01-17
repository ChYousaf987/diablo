// components/skill-tech/SkillTech.jsx
import React from "react";
import { useAppSelector } from "@/lib/hooks";
import { selectCategory } from "@/lib/redux/slice";

import BarbarianSkillTech from "./BarbarianSkillTech";
import DruidSkillTech from "./DruidSkillTech";
import NecromancerSkillTech from "./NecromancerSkillTech";

export default function SkillTech({ mode = "create" }) {
  const category = useAppSelector(selectCategory);

  switch (category) {
    case "barbarian":
      return <BarbarianSkillTech mode={mode} />;
    case "druid":
      return <DruidSkillTech mode={mode} />;
    case "necromancer":
      return <NecromancerSkillTech mode={mode} />;
    // case "rogue": return <RogueSkillTech mode={mode} />;
    default:
      // Fallback – agar koi class match na ho
      return <BarbarianSkillTech mode={mode} />; // ya empty div
  }
}
