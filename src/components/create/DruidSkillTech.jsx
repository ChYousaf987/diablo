// components/skill-tech/DruidSkillTech.jsx
import React from "react";
import SkillItem from "./SkillItem";
import ElixirItem from "./ElixirItem";
import SpiritBoons from "./SpiritBoons"; // ← tumhara Spirit Boons component
import {
  selectSkills,
  selectElixirs,
  selectSpiritBoons,
  updateSkills,
  updateElixir,
  updateSpiritBoons,
} from "@/lib/redux/slice";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";

export default function DruidSkillTech({ mode = "create" }) {
  const skills = useAppSelector(selectSkills);
  const elixirs = useAppSelector(selectElixirs);
  const spiritBoons = useAppSelector(selectSpiritBoons);
  const dispatch = useAppDispatch();

  const onUpdateSkills = (index, newSkill) =>
    dispatch(updateSkills({ index, newSkill }));
  const onUpdateElixir = (index, newElixir) =>
    dispatch(updateElixir({ index, newElixir }));
  const onUpdateSpiritBoons = (newBoons) =>
    dispatch(updateSpiritBoons({ index: 0, newBoons })); // assuming single slot

  return (
    <div className="mx-6 border-y-[.5px] border-[#424243] mt-5 py-5">
      <div className="flex flex-wrap gap-6 max-w-6xl mx-auto">
        {/* Skills – pehle */}
        <div className="w-full md:w-[55%]">
          <h3 className="font-bold text-base text-gray-100 mb-3">Skills</h3>
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

        {/* Elixirs – beech mein */}
        {elixirs?.length > 0 && (
          <div className="w-full md:w-[30%]">
            <h3 className="font-bold text-base text-gray-100 mb-3">Elixirs</h3>
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

        {/* Spirit Boons – last */}
        {spiritBoons?.length > 0 && (
          <div className="w-full md:w-[30%]">
            <h3 className="font-bold text-base text-gray-100 mb-3">
              Spirit Boons
            </h3>
            <SpiritBoons
              boons={spiritBoons}
              onUpdate={onUpdateSpiritBoons}
              mode={mode}
            />
          </div>
        )}
      </div>
    </div>
  );
}
