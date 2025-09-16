import React, { useEffect, useState, useRef } from "react";
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
import ReactDOM from "react-dom";

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
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });
  const triggerRef = useRef(null);

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

  const handleMouseEnter = (event) => {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      const scrollX = window.scrollX || window.pageXOffset;
      const scrollY = window.scrollY || window.pageYOffset;
      setPopupPosition({
        top: rect.bottom + scrollY + 4,
        left: rect.left + scrollX - 96, // Center by offsetting half the popup width (192px / 2)
      });
      setIsPopupVisible(true);
    }
  };

  const handleMouseLeave = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className="flex relative" onMouseLeave={handleMouseLeave}>
      <div
        ref={triggerRef}
        className={`flex flex-col justify-center items-center text-white ${
          (item.rank === 0 && size === 20) || level < min_score || !isClickable
            ? "opacity-50"
            : ""
        }`}
        onMouseEnter={handleMouseEnter}
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
      </div>
      {isPopupVisible &&
        ReactDOM.createPortal(
          <div
            className="absolute bg-[#1f2025] border border-[#424243] rounded-md p-3 shadow-lg text-white w-72"
            style={{
              top: `${popupPosition.top}px`,
              left: `${popupPosition.left}px`,
              zIndex: 2000, // Higher z-index to ensure it stays on top
            }}
          >
            <div className="flex gap-4 items-center mb-2">
              <img
                src={item.image}
                alt={item.label}
                className="w-12 h-12 object-contain mb-2"
              />
              <h4 className="font-bold text-lg">{item.label}</h4>
            </div>
            <p className="text-sm text-[#a3a4a5]">
              Power: {item.rank || (item.powers && item.powers.join(", "))}
            </p>

            {item.details && item.details.length > 0 && (
              <div className="text-sm text-[#a3a4a5] mt-1">
                {item.details.map((detail, index) => (
                  <p key={index} dangerouslySetInnerHTML={{ __html: detail }} />
                ))}
              </div>
            )}
            <hr />
            <p className="text-sm text-end text-[#a3a4a5] mt-1">
              {" "}
              {item.detail}
            </p>
            <p className="text-sm text-end text-[#a3a4a5] mt-1">
              {" "}
              {item.footer}
            </p>
          </div>,
          document.body
        )}
    </div>
  );
}
