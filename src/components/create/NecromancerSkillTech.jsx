// components/skill-tech/NecromancerSkillTech.jsx
import React from "react";
import SkillItem from "./SkillItem";
import ElixirItem from "./ElixirItem";
import SkeletalWarriors from "./SkeletalWarriors"; // ← tumhara Spirit Boons component
import {
  selectSkills,
  selectElixirs,
  selectSkeletalWarriors,
  updateSkills,
  updateElixir,
  updateSkeletalWarriors,
} from "@/lib/redux/slice";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";

export default function NecromancerSkillTech({ mode = "create" }) {
  const skills = useAppSelector(selectSkills);
  const elixirs = useAppSelector(selectElixirs);
  const skeletalWarriors = useAppSelector(selectSkeletalWarriors);
  const dispatch = useAppDispatch();

  const onUpdateSkills = (index, newSkill) =>
    dispatch(updateSkills({ index, newSkill }));
  const onUpdateElixir = (index, newElixir) =>
    dispatch(updateElixir({ index, newElixir }));
  const onUpdateSkeletalWarriors = (newBoons) =>
    dispatch(updateSkeletalWarriors({ index: 0, newBoons })); // assuming single slot

  return (
    <div className="mx-6 border-y-[.5px] border-[#424243] mt-5 py-5">
      <div className=" max-w-6xl mx-auto">
        <div className="flex flex-wrap gap-6 max-w-6xl mx-auto border-b-[.5px] border-[#424243] pb-5">
          {/* Skills – pehle */}
          <div className="w-full md:w-[55%] border-r border-[#424243] pr-4">
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
              <h3 className="font-bold text-base text-gray-100 mb-3">
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

        {/* Spirit Boons – last */}
        {skeletalWarriors?.length > 0 && (
          <div className="w-full mx-auto mt-4">
            <h3 className="font-bold text-base text-center -mb-6  text-gray-100 ">
              Skeletal Warriors
            </h3>
            <div className="flex gap-9">
              <SkeletalWarriors
                boons={skeletalWarriors}
                onUpdate={onUpdateSkeletalWarriors}
                mode={mode}
              />
              <SkeletalWarriors
                boons={skeletalWarriors}
                onUpdate={onUpdateSkeletalWarriors}
                mode={mode}
              />
              <SkeletalWarriors
                boons={skeletalWarriors}
                onUpdate={onUpdateSkeletalWarriors}
                mode={mode}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
