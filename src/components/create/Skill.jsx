import React from "react";
import SkillItem from "./SkillItem";
import {
  selectSkills,
  selectTechnique,
  updateSkills,
  updateTechnique,
} from "@/lib/redux/slice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Techtem from "./Techtem";

export default function SkillTech({ mode = "create" }) {
  const Skills = useAppSelector(selectSkills);
  const techniques = useAppSelector(selectTechnique);
  const dispatch = useAppDispatch();

  const onUpdateSkills = (index, newSkill) =>
    dispatch(updateSkills({ index, newSkill }));

  const onUpdateTechs = (index, newTechnique) =>
    dispatch(updateTechnique({ index, newTechnique }));

  return (
    <div className="mx-6 border-y-[.5px] border-[#424243] mt-5 py-5 grid  md:grid-cols-12 gap-6">
      <div className="flex md:items-end flex-col md:col-span-8 pr-3">
        <div className="font-bold text-base text-gray-100 !w-full text-center ">
          Skills
        </div>
        <div className="grid grid-cols-4 sm:flex sm:justify-end items-center gap-3 mt-2">
          {Skills.map((skill, index) => {
            return (
              <SkillItem
                skill={skill}
                key={index}
                onUpdate={(newSkill) => onUpdateSkills(index, newSkill)}
                mode={mode}
              />
            );
          })}
        </div>
      </div>
      {techniques?.length > 0 && (
        <div className="md:col-span-4  md:border-l-[.5px] pl-8 md:border-[#424243]">
          <h4 className="font-bold text-base text-gray-100">Technique</h4>
          <div className="flex justify-start mt-2">
            {techniques.map((technique, index) => (
              <Techtem
                tech={technique}
                key={index}
                onUpdate={(newTechnique) => onUpdateTechs(index, newTechnique)}
                mode={mode}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
