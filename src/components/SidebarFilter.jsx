"use client";
import React, { useState } from "react";
import Image from "next/image";
import { categories } from "@/constants";
import { Input } from "./ui/input";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function SidebarFilter({ onFilterChange }) {
  const [selectedCategories, setSelectedCategories] = useState("");

  const handleRadioChange = (label) => {
    setSelectedCategories(label);
    if (onFilterChange) {
      onFilterChange({ category: label });
    }
  };

  return (
    <div className="md:bg-[#1a1b1f] text-white rounded-xl flex md:block">
      {categories.map((category) => (
        <label
          key={category.label}
          className={`flex justify-between items-center hover:bg-[#303136] py-2 border-t-[.5px] first:border-t-0 last:border-b-0 border-[#26272d] px-3 cursor-pointer ${
            selectedCategories === category.label ? "bg-[#26272d]" : ""
          }`}
        >
          <div className="flex justify-start items-center gap-3">
            <HoverCard closeDelay="200" openDelay={200}>
              <HoverCardTrigger>
                <Image
                  src={`/${category.image}`}
                  className={`object-contain transition-all hover:scale-105 ${category.bg} rounded-lg p-2`}
                  alt="logo"
                  width={50}
                  height={50}
                />
              </HoverCardTrigger>
              <HoverCardContent className="bg-[#15161a] text-white w-fit p-1">
                {category.label}
              </HoverCardContent>
            </HoverCard>
            <span className="hidden md:block">{category.label}</span>
          </div>
          <div className="relative md:flex items-center justify-center w-4 h-4 hidden">
            <Input
              id={category.label}
              type="radio"
              className="hidden"
              name="category"
              value={category.value}
              checked={selectedCategories === category.value}
              onChange={() => handleRadioChange(category.value)}
            />
            <div
              className={`hidden md:block w-3.5 h-3.5 rounded-sm border-2 ${
                selectedCategories === category.value
                  ? "border-[#c62828] bg-[#c62828] rotate-45 animate-out"
                  : "border-[#26272d] bg-[#1a1b1f]"
              }`}
            >
            </div>
          </div>
        </label>
      ))}
    </div>
  );
}
