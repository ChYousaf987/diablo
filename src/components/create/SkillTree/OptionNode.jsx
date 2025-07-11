import React from "react";
import CardSkillTreeHover from "./CardSkillTreeHover";

const OptionNode = ({
  id,
  top,
  left,
  item,
  size = 40,
  children = null,
  min_score = 0,
  type = "category",
}) => (
  <div
    id={id}
    className="object-contain transition-all hover:scale-105 rounded-sm absolute flex justify-center items-center z-10"
    style={{ top, left }}
  >
    <CardSkillTreeHover
      item={item}
      id={id}
      size={size}
      children={children}
      min_score={min_score}
      type={type}
    />
  </div>
);

export default OptionNode;
