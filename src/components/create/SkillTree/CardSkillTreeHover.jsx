import React, { useEffect } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {
  selectOptionSkills,
  updateLevel,
  updateOptionSkillScore,
} from "@/lib/redux/slice";
import { useAppSelector } from "@/lib/hooks";
import { generateConnections, sumScores, hasParentRank } from "@/lib/utils";
import { levelRanges } from "@/constants";
import { Button } from "@/components/ui/button";

export default function CardSkillTreeHover({
  item,
  size = 40,
  children = null,
  min_score = 0,
  type = "category",
}) {
  const dispatch = useDispatch();
  const optionSkills = useAppSelector(selectOptionSkills);
  const level = sumScores(optionSkills);
  const isClickable = type !== "child" || hasParentRank(optionSkills, item);

  useEffect(() => {
    console.log("Rendered item:", {
      id: item.id,
      label: item.label,
      rank: item.rank,
      parent_id: item.parent_id,
      isClickable,
    });
  }, [item, isClickable]);

  const handleScoreUpdate = (event) => {
    event.preventDefault();
    event.stopPropagation();

    console.log(
      `Attempting to update ${item.label} (ID: ${
        item.id
      }), isClickable: ${isClickable}, type: ${type}, parent rank: ${
        item.parent_id ? findParentRank(optionSkills, item.parent_id) : "N/A"
      }`
    );

    if (!isClickable) {
      console.log(`Cannot update ${item.label}: Parent rank must be > 0`, {
        item,
        parentRank: item.parent_id
          ? findParentRank(optionSkills, item.parent_id)
          : "N/A",
      });
      return;
    }

    let newScore;
    const canIncreaseScore =
      event.button === 0 && item.rank < item.max_rank && level < 71;
    const canDecreaseScore = event.button === 2 && item.rank > 0;

    if (canIncreaseScore) {
      newScore = item.rank + 1;
      console.log(
        `Increasing ${item.label} (ID: ${item.id}) rank to ${newScore}`,
        { level, currentRank: item.rank }
      );
    } else if (canDecreaseScore) {
      newScore = item.rank - 1;
      console.log(
        `Decreasing ${item.label} (ID: ${item.id}) rank to ${newScore}`,
        { level, currentRank: item.rank }
      );
      if (children) {
        const parent = children.find((child) => child.id === item.id);
        if (parent && parent.rank === 0) {
          children.forEach((child) => {
            if (child.rank > 0) {
              dispatch(
                updateOptionSkillScore({ skillId: child.id, newScore: 0 })
              );
              console.log(
                `Resetting child ${child.label} (ID: ${child.id}) rank to 0`
              );
            }
          });
        }
      }
    }

    if (newScore !== undefined) {
      dispatch(updateOptionSkillScore({ skillId: item.id, newScore }));
      const newLevel =
        sumScores(optionSkills) +
        (canIncreaseScore ? 1 : canDecreaseScore ? -1 : 0);
      dispatch(updateLevel(newLevel));
      console.log(
        `Updated ${item.label} (ID: ${item.id}) to rank ${newScore}, new level: ${newLevel}`
      );
      connectionColoring(newLevel, item, optionSkills);
    }
  };

  const findParentRank = (skills, parentId) => {
    for (const skill of skills) {
      if (skill.id === parentId) return skill.rank;
      if (skill.options) {
        const option = skill.options.find((opt) => opt.id === parentId);
        if (option) return option.rank;
        for (const opt of skill.options) {
          if (opt.children) {
            const child = opt.children.find((ch) => ch.id === parentId);
            if (child) return child.rank;
          }
        }
      }
      if (skill.secondOptions) {
        const secondOption = skill.secondOptions.find(
          (opt) => opt.id === parentId
        );
        if (secondOption) return secondOption.rank;
        for (const opt of skill.secondOptions) {
          if (opt.children) {
            const child = opt.children.find((ch) => ch.id === parentId);
            if (child) return child.rank;
          }
        }
      }
    }
    return 0;
  };

  const findParentItem = (items) => {
    const parents = items.filter((item) => {
      const isChild = items.some((i) => i.id === item.parent_id);
      return !isChild;
    });
    return parents.length > 0 ? parents[0] : null;
  };

  const connectionColoring = (level, item) => {
    const { connections, Options, Child } = generateConnections(optionSkills);

    const applyStyles = (elementId, width) => {
      const connectionElem = document.getElementById(elementId);
      if (connectionElem) {
        connectionElem.classList.add("connection-transition");
        connectionElem.style.backgroundColor = "red";
        connectionElem.style.width = width;
      }
    };

    const applyStylesOption = (option, level) => {
      const width = level === 0 ? "0%" : "100%";
      applyStyles(`steps_${option.id}`, width);
    };

    const applyStylesChild = (item, level, options) => {
      const option = options.find((t) => t.to === `${item.from}`);
      if (option) applyStylesOption(option, level);

      applyStyles(`steps_${item.id}`, level === 0 ? "0%" : "100%");
    };

    // Apply styles to option
    const option = Options.find((option) => option.to === `node${item.id}`);
    if (option) applyStylesOption(option, level);

    // Apply styles to child
    const child = Child.find((child) => child.to === `node${item.id}`);
    if (child) applyStylesChild(child, level, Options);

    // Apply styles based on level ranges
    for (const range of levelRanges) {
      if (level >= range.min && level <= range.max) {
        applyStyles(
          `steps_${connections[range.index].id}`,
          `${((level - range.min) * 100) / (range.max - range.min)}%`
        );
        break;
      }
    }
  };

  return (
    <div className="flex">
      <HoverCard closeDelay="200" openDelay={200}>
        <HoverCardTrigger
          className={`flex flex-col justify-center items-center text-white ${
            (item.rank === 0 && size === 20) ||
            level < min_score ||
            !isClickable
              ? "opacity-50"
              : ""
          }`}
        >
          <div
            className={`${size === 40 ? "builder" : ""} ${
              isClickable ? "cursor-pointer" : "cursor-not-allowed"
            }`}
            onClick={isClickable ? handleScoreUpdate : undefined}
            onContextMenu={isClickable ? handleScoreUpdate : undefined}
          >
            <Image
              src={`${item.image}`}
              className="object-contain transition-all bg-[#1f2025] hover:scale-105 rounded-sm"
              alt="logo"
              width={size}
              height={size}
            />
          </div>
          {size === 20 && item.rank > 0 && (
            <span
              className={`${
                size === 40 ? "-mt-5" : ""
              } text-[8px] bg-red-500 px-0.5`}
            >
              {item.rank} / {item.max_rank}
            </span>
          )}
          {(size === 40 || size === 30) && (
            <span
              className={`${
                size === 40 ? "-mt-5" : ""
              } text-[8px] bg-red-500 px-0.5`}
            >
              {item.rank} / {item.max_rank}
            </span>
          )}
        </HoverCardTrigger>
        <HoverCardContent className="bg-[#15161a] bg-opacity-100 text-white max-w-[300px] w-full p-2 border border-[#2c2d31] shadow-xl rounded-md z-[999]">
          <div>
            <div className="flex justify-center gap-2 ">
              <Image
                src={`${item.image}`}
                className="transition-all hover:scale-105"
                alt={item.label}
                width={50}
                height={50}
              />
              <div className="flex flex-col justify-center">
                <h2 className="mt-0 text-md font-bold text-yellow-400">
                  {item.label}
                </h2>
                {item.rank > 0 && (
                  <p className="mt-0 text-sm font-light">Rank: {item.rank}</p>
                )}
              </div>
            </div>
            <div className="flex justify-center items-center gap-2 my-3">
              {item.powers?.map((subPower) => (
                <Button
                  key={subPower}
                  className="bg-[#1f2025] hover:bg-slate-300 text-white hover:text-black h-6 px-4 text-sm"
                >
                  {subPower}
                </Button>
              ))}
            </div>
            <div className="border-t-2 border-[#1f2025]" />
            <ul className="px-3 my-2">
              {item.details &&
                item.details.map((detail, index) => (
                  <li
                    key={index}
                    className="text-sm"
                    dangerouslySetInnerHTML={{ __html: detail }}
                  />
                ))}
            </ul>
            {item.footer && (
              <div className="flex justify-end items-center gap-2 border-t-[.5px] py-2">
                <span
                  className="text-gray-400 text-xs mr-5"
                  dangerouslySetInnerHTML={{ __html: item.footer }}
                />
              </div>
            )}
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
}
