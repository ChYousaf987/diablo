"use client";
import React, { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Star } from "lucide-react";

export default function GearStatsRow({
  onUpdate,
  gear,
  nameField,
  index,
  mode = "create",
  onlySelect = false,
}) {
  const select = gear?.details?.[nameField];
  const currentStat = select?.[index] || { value: 0, selectedValue: "" };

  const [active, setActive] = useState(currentStat.value || 0);
  const [selectedValue, setSelectedValue] = useState(
    currentStat.selectedValue || ""
  );
  const [searchValue, setSearchValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [isStarSelected, setIsStarSelected] = useState(false); // ← New: Star favorite state per row

  const handleActive = (key = null, newValue = null) => {
    if (!select) return;

    const selects = [
      ...gear.details.selects1,
      ...gear.details.selects2,
      ...gear.details.selects3,
    ];

    let totalValue = 0;
    for (let item of selects) {
      totalValue += item.value;
    }

    if (key !== null && totalValue - active + key > 3) {
      console.warn("Total value exceeds the limit of 3");
      return;
    }

    const newLevel = key !== null && key === active ? 0 : key;

    const selectCopy = select.map((item, idx) =>
      idx === index
        ? {
            ...item,
            ...(newValue !== null && { selectedValue: newValue }),
            ...(key !== null && { value: newLevel }),
          }
        : item
    );

    const updatedGear = {
      ...gear,
      details: {
        ...gear.details,
        [nameField]: selectCopy,
      },
    };

    if (onUpdate && mode !== "guest") {
      onUpdate(updatedGear);
    }

    if (key !== null) setActive(newLevel);
    if (newValue !== null) setSelectedValue(newValue);
  };

  const getSelectActive = () => currentStat;

  useEffect(() => {
    if (searchValue !== "") {
      const filtered = gear?.details?.[nameField]?.filter((option) =>
        option?.selectedValue?.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredOptions(filtered);
    } else {
      setFilteredOptions(gear?.details?.[nameField]);
    }
  }, [searchValue, gear?.details?.[nameField]]);

  const renderSelect = (color = "text-[#dfe1e4]") => {
    const placeholder =
      nameField === "selects1"
        ? gear.type === "Weapon"
          ? "Type d'arme"
          : "État implicite"
        : nameField === "selects3"
        ? `Tempering Stat ${index + 1}`
        : `Stat ${index + 1}`;

    return (
      <Select
        value={selectedValue}
        onValueChange={(value) => handleActive(null, value)}
      >
        <SelectTrigger
          className={`bg-[#26272d] border border-transparent flex-1 max-w-full ${color}`}
        >
          <SelectValue
            className={`placeholder:${color} ${color}`}
            placeholder={placeholder}
          />
        </SelectTrigger>
        <SelectContent className="bg-[#26272d] border border-transparent text-[#9b9c9d] max-h-60 overflow-y-auto">
          <div className="p-2 sticky top-0 bg-[#26272d] z-10 border-b border-[#3a3b45]">
            <Input
              className="w-full outline-none border border-[#15161a] bg-[#1f2025] text-white placeholder:text-gray-500"
              type="text"
              placeholder="Search stat..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>

          {filteredOptions?.map((option, idx) => (
            <SelectItem
              key={idx}
              value={option?.selectedValue || "Strength"}
              className="hover:!bg-[#15161a] text-[#9b9c9d] hover:!text-white py-2 px-3"
            >
              {option?.selectedValue || "Strength"}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    );
  };

  const renderIndicators = () => (
    <div className="flex items-center gap-1.5">
      {[1].map((level) => (
        <div
          key={level}
          onClick={() => handleActive(level)}
          className={`w-4 h-4 rounded-full cursor-pointer transition-all ${
            active === level
              ? indicatorColors[level].bg
              : "bg-[#3a3b45] hover:bg-[#4a4b55]"
          }`}
        />
      ))}
    </div>
  );

  const indicatorColors = {
    1: { bg: "bg-[#6d6ed9]" },
  };

  const colorClass = indicatorColors[active]?.text || "text-[#dfe1e4]";

  return (
    <div className="flex items-center gap-3 px-3 py-2 hover:bg-[#26272d]/50 transition-colors border-b border-[#2a2b35] last:border-b-0">
      {/* Star icon – clickable */}
      <button
        onClick={() => setIsStarSelected(!isStarSelected)}
        className="focus:outline-none"
      >
        <Star
          className={`w-5 h-5 transition-colors ${
            isStarSelected
              ? "text-yellow-400 fill-yellow-400"
              : "text-gray-600 hover:text-yellow-400"
          }`}
        />
      </button>

      {/* Select input – middle, full width */}
      <div className="flex-1 min-w-0">
        {mode === "guest" ? (
          <div
            className={`h-9 w-full bg-[#15161a] rounded-md text-md text-center font-bold flex items-center justify-center ${colorClass}`}
          >
            {select?.[index]?.selectedValue || "—"}
          </div>
        ) : (
          renderSelect(colorClass)
        )}
      </div>

      {/* Circles – only one active at a time */}
      {!onlySelect && mode !== "guest" && renderIndicators()}
    </div>
  );
}
