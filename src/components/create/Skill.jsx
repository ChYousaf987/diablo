import React from "react";
import SkillItem from "./SkillItem";
import TechItem from "./TechItem";
import ElixirItem from "./ElixirItem"; // ← new import
import {
  selectSkills,
  selectTechnique,
  selectElixirs, // ← add this
  updateSkills,
  updateTechnique,
  updateElixir, // ← add this
} from "@/lib/redux/slice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

export default function SkillTech({ mode = "create" }) {
  const skills = useAppSelector(selectSkills);
  const techniques = useAppSelector(selectTechnique);
  const elixirs = useAppSelector(selectElixirs); // ← new
  const dispatch = useAppDispatch();

  const onUpdateSkills = (index, newSkill) =>
    dispatch(updateSkills({ index, newSkill }));

  const onUpdateTechs = (index, newTechnique) =>
    dispatch(updateTechnique({ index, newTechnique }));

  const onUpdateElixir = (index, newElixir) =>
    dispatch(updateElixir({ index, newElixir }));

  return (
    <div className="mx-6 border-y-[.5px] border-[#424243] mt-5 py-5">
      <div className="flex gap-6 max-w-4xl mx-auto">
        {/* Skills */}
        <div className="w-[55%]">
          <h3 className="font-bold text-base text-gray-100 mb-3">
            Skills
          </h3>
          <div className="grid grid-cols-4 sm:flex sm:flex-wrap gap-4">
            {skills.map((skill, index) => (
              <SkillItem
                key={index}
                skill={skill}
                onUpdate={(newSkill) => onUpdateSkills(index, newSkill)}
                mode={mode}
              />
            ))}
          </div>
        </div>

        {/* Technique */}
        <div className="w-[15%]">
          {techniques?.length > 0 && (
            <div className="md:col-span-2 md:border-l-[.5px] md:border-[#424243] pl-6">
              <h3 className="font-bold text-base text-gray-100 text-center mb-3">
                Technique
              </h3>
              <div className="flex justify-center">
                {techniques.map((technique, index) => (
                  <TechItem
                    key={index}
                    tech={technique}
                    onUpdate={(newTechnique) =>
                      onUpdateTechs(index, newTechnique)
                    }
                    mode={mode}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Elixirs - 4 slots */}
        <div className="w-[30%]">
          {elixirs?.length > 0 && (
            <div className="md:col-span-2 md:border-l-[.5px] md:border-[#424243] pl-6">
              <h3 className="font-bold text-base text-gray-100  mb-3">
                Elixirs
              </h3>
              <div className="flex gap-4">
                {elixirs.map((elixir, index) => (
                  <ElixirItem
                    key={index}
                    elixir={elixir}
                    onUpdate={(newElixir) => onUpdateElixir(index, newElixir)}
                    mode={mode}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
