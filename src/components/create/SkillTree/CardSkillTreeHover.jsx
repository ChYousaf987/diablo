import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {
  selectOptionSkills,
  updateLevel,
  updateOptionSkillScore,
} from "@/lib/redux/slice";
import { useAppSelector } from "@/lib/hooks";
import { generateConnections, sumScores } from "@/lib/utils";
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
  const totalLevel = sumScores(optionSkills);
  const maxTotalLevel = 71; // Adjust if your max changes

  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });
  const triggerRef = useRef(null);

  // Helper: Find rank of parent by parent_id
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

  // === MAIN CLICKABILITY LOGIC ===
  const isCategoryUnlocked = totalLevel >= min_score;

  const isChildType = type === "child" || type === "secondOptionChild";
  const parentHasRank =
    !isChildType ||
    (item.parent_id && findParentRank(optionSkills, item.parent_id) > 0);

  const canIncrease = item.rank < item.max_rank && totalLevel < maxTotalLevel;
  const canDecrease = item.rank > 0;

  const isClickable =
    isCategoryUnlocked && parentHasRank && (canIncrease || canDecrease);

  // Visual dimming: dim if locked category, or zero rank small node, or not clickable
  const isDimmed =
    (item.rank === 0 && size === 20) || !isCategoryUnlocked || !parentHasRank;

  useEffect(() => {
    console.log("Rendered item:", {
      id: item.id,
      label: item.label,
      rank: item.rank,
      type,
      min_score,
      totalLevel,
      isCategoryUnlocked,
      parentHasRank,
      isClickable,
    });
  }, [
    item,
    type,
    min_score,
    totalLevel,
    isCategoryUnlocked,
    parentHasRank,
    isClickable,
  ]);

  const handleScoreUpdate = (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (!isClickable) {
      console.log("Click blocked: node not clickable", {
        item,
        totalLevel,
        min_score,
      });
      return;
    }

    let newScore = item.rank;
    const isLeftClick = event.button === 0;
    const isRightClick = event.button === 2;

    if (isLeftClick && canIncrease) {
      newScore = item.rank + 1;
    } else if (isRightClick && canDecrease) {
      newScore = item.rank - 1;

      // If decreasing parent to 0, reset all its children
      if (children && newScore === 0) {
        children.forEach((child) => {
          if (child.rank > 0) {
            dispatch(
              updateOptionSkillScore({ skillId: child.id, newScore: 0 })
            );
          }
        });
      }
    } else {
      return; // No valid action
    }

    dispatch(updateOptionSkillScore({ skillId: item.id, newScore }));

    const levelChange = isLeftClick ? 1 : -1;
    const newTotalLevel = totalLevel + levelChange;
    dispatch(updateLevel(newTotalLevel));

    console.log(
      `Updated ${item.label} to rank ${newScore}, new total level: ${newTotalLevel}`
    );
    connectionColoring(newTotalLevel, item, optionSkills);
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

    const applyStylesOption = (option, width) => {
      applyStyles(`steps_${option.id}`, width);
    };

    const optionConn = Options.find((o) => o.to === `node${item.id}`);
    if (optionConn) applyStylesOption(optionConn, level > 0 ? "100%" : "0%");

    const childConn = Child.find((c) => c.to === `node${item.id}`);
    if (childConn) applyStylesOption(childConn, level > 0 ? "100%" : "0%");

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
        left: rect.left + scrollX - 96,
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
          isDimmed ? "opacity-50" : ""
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
            src={item.image}
            className="object-contain transition-all bg-[#1f2025] hover:scale-105 rounded-sm"
            alt={item.label}
            width={size}
            height={size}
          />
        </div>

        {(size === 20 || size === 30 || size === 40) && item.rank > 0 && (
          <span className="text-[8px] bg-red-500 px-0.5 -mt-5">
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
              zIndex: 2000,
            }}
          >
            <div className="flex gap-4 items-center mb-2">
              <img
                src={item.image}
                alt={item.label}
                className="w-12 h-12 object-contain"
              />
              <h4 className="font-bold text-lg">{item.label}</h4>
            </div>
            <p className="text-sm text-[#a3a4a5]">
              {item.rank !== undefined
                ? `${item.rank} / ${item.max_rank}`
                : item.powers?.join(", ")}
            </p>

            {item.details && item.details.length > 0 && (
              <div className="text-sm text-[#a3a4a5] mt-1">
                {item.details.map((detail, index) => (
                  <p key={index} dangerouslySetInnerHTML={{ __html: detail }} />
                ))}
              </div>
            )}
            <hr className="my-3" />
            <p className="text-sm text-[#a3a4a5] text-right">{item.detail}</p>
            <p className="text-sm text-[#a3a4a5] text-right">{item.footer}</p>
          </div>,
          document.body
        )}
    </div>
  );
}
