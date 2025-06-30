import React from "react";
import Image from "next/image";
import CardSkillTreeHover from "./CardSkillTreeHover";

const SkillNode = ({ id, image, top, left, size = 60 }) => (
  <div
    id={id}
    className="object-contain builder2 transition-all hover:scale-105 rounded-sm absolute flex justify-center items-center"
    style={{ top, left }}
  >
    <Image
      src={image}
      className="object-contain transition-all hover:scale-105 rounded-sm m-auto "
      alt="Skill Icon"
      width={size}
      height={size}
    />


  </div>
);

export default SkillNode;
