import React, { useCallback } from "react";
import SeasonsDropdown from "./SeasonsDropdown";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import { debounce } from "@/lib/utils";

export default function BuildsTitle({ title, onFilterChange }) {

  // Debounce the filter change handler
  const debouncedFilterChange = useCallback(
    debounce((value) => {
      if (onFilterChange) {
        onFilterChange({ name: value });
      }
    }, 500), 
    [onFilterChange]
  );

  const handleInputChange = (event) => {
    const value = event.target.value;
    debouncedFilterChange(value); // Call the debounced function
  };

  return (
    <div className="flex justify-between items-center max-w-7xl mx-auto px-3 my-2 text-white">
      <div className="flex justify-start items-center gap-3">
        <h1 className="text-lg font-bold">{title}</h1>
        <SeasonsDropdown />
      </div>
      <div className="relative">
        <Search className="w-5 h-5 absolute left-2 top-2" />
        <Input
          className="w-38 pl-8 border-[#1a1b1f] placeholder:text-white"
          placeholder="Search by Build or Skill..."
          onChange={onFilterChange ? handleInputChange : null}
        />
      </div>
    </div>
  );
}
