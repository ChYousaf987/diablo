import React from "react";
import SkillNode from "./SkillNode";
import OptionNode from "./OptionNode";

const CategoryNodes = ({ category }) => (
  <>
    <SkillNode
      id={`node${category.id}`}
      image={category.image}
      top={category.top}
      left={category.left}
      type="category"
    />
    {category.options?.map((option) => (
      <React.Fragment key={option.id}>
        <OptionNode
          id={`node${option.id}`}
          top={option.top}
          left={option.left}
          item={option}
          min_score={category.min_score}
          type="option"
        />
        {option.children?.map((child) => {
          const itemChild = {
            ...child,
            image: option.image,
            details: [child.notes],
          };
          return (
            <OptionNode
              key={child.id}
              id={`node${child.id}`}
              top={child.top}
              left={child.left}
              item={itemChild}
              size={20}
              children={option.children}
              min_score={category.min_score}
              type="child"
            />
          );
        })}
        {/* Add connections to linked secondOptions */}
        {option.linkedSecondOptions?.map((secondOptionId) => {
          const secondOption = category.secondOptions?.find(
            (so) => so.id === secondOptionId
          );
          if (secondOption) {
            return (
              <OptionNode
                key={`link_${option.id}_${secondOptionId}`}
                id={`node${secondOptionId}`}
                top={secondOption.top}
                left={secondOption.left}
                item={secondOption}
                size={30}
                min_score={category.min_score}
                type="secondOption"
                parentOptionId={option.id}
              />
            );
          }
          return null;
        })}
      </React.Fragment>
    ))}
    {category.secondOptions?.map((secondOption) => (
      <React.Fragment key={secondOption.id}>
        <OptionNode
          id={`node${secondOption.id}`}
          top={secondOption.top}
          left={secondOption.left}
          item={secondOption}
          size={30}
          min_score={category.min_score}
          type="secondOption"
        />
        {secondOption.children?.map((child) => {
          const itemChild = {
            ...child,
            image: secondOption.image,
            details: [child.notes],
          };
          return (
            <OptionNode
              key={child.id}
              id={`node${child.id}`}
              top={child.top}
              left={child.left}
              item={itemChild}
              size={30} // Maintain the same size as parent
              children={secondOption.children}
              min_score={category.min_score}
              type="secondOptionChild"
            />
          );
        })}
      </React.Fragment>
    ))}
  
  </>
);

export default CategoryNodes;
