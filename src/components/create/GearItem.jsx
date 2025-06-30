"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search, SlidersHorizontal, Star } from "lucide-react";
import { Button } from "../ui/button";
import GearItemTrigger from "./GearItemTrigger";
import GearStatsRow from "./GearStatsRow";
import { aspectsFilter } from "@/constants";
import { GiRoundStar } from "react-icons/gi";

export default function GearItem({
  gear,
  aspects = [],
  reverse = false,
  onUpdate,
  mode = "create",
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredAspects, setFilteredAspects] = useState(aspects);

  const handleSearch = (value) => {
    setSearchTerm(value);
    setFilteredAspects(
      value
        ? aspects.filter((aspect) =>
            aspect.label.toLowerCase().includes(value.toLowerCase())
          )
        : aspects
    );
  };

  const handleUpdate = (aspect) => {
    onUpdate({ ...gear, aspect_id: aspect.id });
  };

  const handleUnequip = () => {
    onUpdate({ ...gear, aspect_id: null });
  };

  return (
    <>
      {mode === "guest" ? (
        <GearItemTrigger gear={gear} reverse={reverse} />
      ) : (
        <Dialog>
          <DialogTrigger>
            <GearItemTrigger gear={gear} reverse={reverse} />
          </DialogTrigger>
          <DialogContent className="bg-[#1f2025] p-0 dailog-content">
            <DialogHeader className="w-full ">
              <DialogTitle className="flex justify-between items-center gap-3 px-3 py-2">
                <div className="flex items-center gap-2">
                  <div className="flex items-center bg-[#444757] w-[280px] px-2 rounded-sm">
                    <Search size={18} className="text-white " />
                    <Input
                      className="placeholder:text-[#76788b] font-normal w-auto border-none focus:outline-none bg-[#76788b] bg-transparent text-white focus:ring-0 focus:border-0"
                      placeholder="Rechercher par nom, compétence, etc..."
                      value={searchTerm}
                      onChange={(e) => handleSearch(e.target.value)}
                    />
                  </div>
                  <Popover className="border-none outline-none shadow-none w-[100px] !rounded-[0px]">
                    <PopoverTrigger>
                      <SlidersHorizontal
                        className="bg-[#444757] p-2 rounded-sm text-white"
                        size={35}
                      />
                    </PopoverTrigger>
                    <PopoverContent className="flex flex-col gap-4 bg-[#444757] text-[#717690]">
                      {aspectsFilter?.map((filter, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2"
                        >
                          <Checkbox
                            className="text-[#717690] border-[#717690]"
                            id={filter.label}
                          />
                          <label
                            htmlFor={filter.label}
                            className="text-sm font-medium"
                          >
                            {filter.label}
                          </label>
                        </div>
                      ))}
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="flex justify-end items-center gap-2 mr-10">
                  <Button className="bg-[#444757]" onClick={handleUnequip}>
                    Unequip
                  </Button>
                </div>
              </DialogTitle>
              <Tabs defaultValue="aspect" className="h-full ">
                <TabsList className="bg-[#1f2025] border-y-[0.5px] shadow-none border-white rounded-none text-white my-0 p-0 w-full flex h-[40px] justify-between">
                  <TabsTrigger
                    value="aspect"
                    className="w-1/2 h-full text-center rounded-none"
                  >
                    Aspects & Uniques
                  </TabsTrigger>
                  <TabsTrigger value="item" className="w-1/2 h-full">
                    Statistiques des objets
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="aspect">
                  <div className="flex flex-col max-h-96 overflow-y-auto pr-2">
                    {filteredAspects.map((aspect, index) => (
                      <div
                        key={index}
                        onClick={() => handleUpdate(aspect)}
                        className="flex justify-between items-center gap-2 border-b-[.5px] border-[#424243] mb-1 pb-2 cursor-pointer"
                      >
                        <GearItemTrigger gear={aspect} size={45} />
                        {/* <Star
                          className="text-[#444757] hover:text-[#6973b2]"
                          size={35}
                        /> */}
                        <GiRoundStar
                          className={`text-[#444757] hover:text-[#6973b2] text-2xl ${
                            aspect.rarity === "legendary"
                              ? "text-yellow-400"
                              : ""
                          }`}
                        />
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="item" className="flex flex-col gap-2">
                  {gear.details?.selects1?.slice(0, 1).map((item, index) => (
                    <GearStatsRow
                      key={index}
                      gear={gear}
                      nameField={"selects1"}
                      index={index}
                      onUpdate={onUpdate}
                    />
                  ))}
                  {gear.details?.selects2?.slice(0, 3).map((item, index) => (
                    <GearStatsRow
                      key={index}
                      gear={gear}
                      nameField={"selects2"}
                      index={index}
                      onUpdate={onUpdate}
                    />
                  ))}
                  {gear.details?.selects2 && (
                    <hr className="border-t-[.5px] my-5 border-[#424243]" />
                  )}
                  {gear.details?.selects3?.slice(0, 2)?.map((item, index) => (
                    <GearStatsRow
                      key={index}
                      gear={gear}
                      nameField={"selects3"}
                      index={index}
                      onUpdate={onUpdate}
                    />
                  ))}
                </TabsContent>
              </Tabs>
              <div className="mt-2 border-t-[.5px] border-[#424243] flex justify-center">
                <span className="text-slate-200 font-normal pt-2">
                  Affichage {filteredAspects.length} Résultats de la barre
                </span>
              </div>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
