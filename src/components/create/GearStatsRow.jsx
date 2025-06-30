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
import { set } from "zod";
export default function GearStatsRow({
  onUpdate,
  gear,
  nameField,
  index,
  mode = "create",
  onlySelect = false,
}) {
  const select = gear?.details?.[nameField];
  const [active, setActive] = useState(select ? select[index]?.value : 0);
  const [selectedValue, setSelectedValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);

  const handleActive = (key = null, selectedValue = null) => {
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

    if (key !== null && totalValue - getSelectActive().value + key > 3) {
      console.warn("Total value exceeds the limit of 3");
      return;
    }

    const newLevel = key !== null && key === getSelectActive().value ? 0 : key;

    const selectCopy = select.map((item, idx) =>
      idx === index
        ? {
            ...item,
            ...(selectedValue !== null && { selectedValue }),
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
  };

  const getSelectActive = () => {
    const defaultSelect = { value: 0, selectedValue: "" };
    return select ? select[index] || defaultSelect : defaultSelect;
  };

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

    const options = gear?.details?.[nameField] || [];
    const currentValue = select?.[index]?.selectedValue;

    return (
      <Select
        className="text-white bg-[#15161a] shadow-none border border-transparent !outline-none grow"
        value={selectedValue}
        onValueChange={(value) => {
          setSearchValue("");
          setSelectedValue(value);
          handleActive(null, value);
        }}
      >
        <SelectTrigger
          className={`bg-[#26272d] border border-transparent  max-w-[274.66px] ${color}`}
        >
          <SelectValue
            className={`placeholder:${color} ${color}`}
            placeholder={placeholder}
          />
        </SelectTrigger>
        <SelectContent className="bg-[#26272d] border border-transparent text-[#9b9c9d]">
          <Input
            className="w-full outline-none border border-[#15161a]"
            type="text"
            placeholder="Search"
            value={searchValue || ""}
            onFocus={() => {}}
            onBlur={() => {}}
            autoComplete="off"
            autoCorrect="off"
            spellCheck="false"
            autoCapitalize="none"
            onChange={(e) => setSearchValue(e.target.value)}
          />
          {filteredOptions?.map((option, idx) => (
            <SelectItem
              key={idx}
              value={option?.selectedValue || "Strength"}
              className="hover:!bg-[#15161a] text-[#9b9c9d] hover:!text-white"
            >
              {option?.selectedValue || "Strength"}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    );
  };

  const renderIndicators = () => (
    <div className="flex justify-end items-center gap-2">
      {[1, 2, 3].map((level) => (
        <p
          key={level}
          onClick={() => handleActive(level)}
          className={`h-5 w-5 rounded-full ${
            getSelectActive().value >= level
              ? indicatorColors[level].bg
              : "bg-[#dfe1e4]"
          } hover:${indicatorColors[level].bg} cursor-pointer`}
        ></p>
      ))}
    </div>
  );

  const indicatorColors = {
    1: { bg: "bg-[#6d6ed9]", text: "text-[#6d6ed9]" },
    2: { bg: "bg-[#f1f25c]", text: "text-[#f1f25c]" },
    3: { bg: "bg-[#d98c3c]", text: "text-[#d98c3c]" },
  };

  const selectedOption = getSelectActive(); // this gets both value & selectedValue
  const colorClass =
    indicatorColors[selectedOption.value]?.text || "text-[#dfe1e4]";

  return (
    <div className="flex justify-stretch gap-5 items-center p-2">
      {mode === "guest" ? (
        <div
          className={`h-9 w-full bg-[#15161a] rounded-md text-md text-center font-bold pt-1.5 ${
            indicatorColors[select[index]?.value]?.text
          }`}
        >
          {select ? select[index]?.selectedValue : ""}
        </div>
      ) : (
        renderSelect(colorClass)
      )}
      {!onlySelect && mode !== "guest" && renderIndicators()}
    </div>
  );
}
