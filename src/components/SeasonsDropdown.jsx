import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { seasons } from "@/constants";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { selectSeason, updateSeason } from "@/lib/redux/slice";

export default function SeasonsDropdown({ mode = "create" }) {
  const dispatch = useAppDispatch();
  const selectedSeason = useAppSelector(selectSeason) || "Season 8";

  const handleSeasonChange = (value) => {
    dispatch(updateSeason(value));
  };

  return (
    <>
      {mode === "guest" && (
        <div className="h-9 w-40 bg-[#15161a] rounded-md"></div>
      )}
      {mode !== "guest" && (
        <Select
          className="text-white bg-[#15161a] shadow-none"
          value={selectedSeason}
          onValueChange={handleSeasonChange}
        >
          <SelectTrigger className="w-[220px] bg-[#26272d] text-white">
            <SelectValue
              className="text-white placeholder:text-white"
              placeholder="Saison 8"
            />
          </SelectTrigger>
          <SelectContent className="bg-[#26272d] border-none outline-none text-[#9b9c9d]">
            {seasons?.map((season) => (
              <SelectItem
                key={season?.value}
                value={season?.value || "Season 8"}
                className="hover:!bg-[#15161a] text-[#9b9c9d] hover:!text-white"
              >
                {season?.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
    </>
  );
}
