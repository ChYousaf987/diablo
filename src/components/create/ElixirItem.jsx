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
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Input } from "@/components/ui/input";
import { Search, Star } from "lucide-react";
import { Button } from "../ui/button";
import { useAppSelector } from "@/lib/hooks";
import { selectOptionElixirs } from "@/lib/redux/slice";

export default function ElixirItem({ elixir, onUpdate, mode = "create" }) {
  const optionElixirs = useAppSelector(selectOptionElixirs);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const elixirSelected = elixir.option_id
    ? optionElixirs.find((e) => e.id === elixir.option_id)
    : null;

  const handleUnequip = () => {
    if (onUpdate) {
      onUpdate({ ...elixir, option_id: null });
    }
    setIsOpen(false);
  };

  // Filter based on search
  const filteredElixirs = optionElixirs.filter((el) =>
    el.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const displayImage = elixirSelected?.image || elixir.image;

  return (
    <>
      {mode === "guest" ? (
        <div className="flex flex-col justify-center items-center">
          <img
            src={displayImage}
            className="w-[50px] h-[50px] object-contain bg-[#1f2025] rounded-sm border-[.5px] border-[#424243]"
            alt={elixirSelected?.label || "Elixir"}
          />
          {elixirSelected && (
            <span className="text-xs text-gray-400 mt-1 truncate max-w-[50px] text-center">
              {elixirSelected.label}
            </span>
          )}
        </div>
      ) : (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <div className="flex flex-col justify-center items-center cursor-pointer group">
              <img
                src={displayImage}
                className="w-[50px] h-[50px] object-contain opacity-40 transition-all bg-[#1f2025] group-hover:scale-105 rounded-sm border-[.5px] border-[#424243] group-hover:border-purple-500/50"
                alt={elixirSelected?.label || "Elixir"}
              />
              {elixirSelected && (
                <span className="text-xs text-gray-400 mt-1 truncate max-w-[50px] text-center">
                  {elixirSelected.label}
                </span>
              )}
            </div>
          </DialogTrigger>

          <DialogContent className="bg-[#0f1015] text-white border border-[#2a2b35] max-h-[85vh] w-[1320px] p-3 overflow-hidden">
            {/* Header with Search & Unequip */}
            <DialogHeader className="p-4 border-b border-[#2a2b35] flex flex-row items-center justify-between gap-3">
              <div className="flex-1 relative">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  size={16}
                />
                <Input
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9 bg-[#1a1b22] border-[#2a2b35] text-white placeholder:text-gray-500 focus:ring-purple-500"
                />
              </div>

              <Button
                variant="ghost"
                size="sm"
                className="text-red-400 hover:text-red-300 hover:bg-red-950/30"
                onClick={handleUnequip}
              >
                Unequip
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                ×
              </Button>
            </DialogHeader>

            {/* List with Hover Details */}
            <div className="overflow-y-auto max-h-[calc(85vh-120px)]">
              {filteredElixirs.length === 0 ? (
                <div className="text-center py-12 text-gray-500">
                  No elixirs found
                </div>
              ) : (
                filteredElixirs.map((optionElixir) => {
                  const isSelected = elixir.option_id === optionElixir.id;

                  return (
                    <HoverCard
                      key={optionElixir.id}
                      openDelay={150}
                      closeDelay={100}
                    >
                      <HoverCardTrigger asChild>
                        <div
                          className={`flex items-center gap-3 px-4 py-3 border-b border-[#2a2b35] cursor-pointer hover:bg-[#1e1f28] transition-colors ${
                            isSelected ? "bg-[#272835]" : ""
                          }`}
                          onClick={() => {
                            onUpdate({ ...elixir, option_id: optionElixir.id });
                            setIsOpen(false);
                          }}
                        >
                          {/* Icon */}
                          <img
                            src={
                              optionElixir.image || "/skill-tech/pot-empty.webp"
                            }
                            alt={optionElixir.label}
                            className="w-10 h-10 object-contain rounded-md bg-[#1a1b22] border border-[#3a3b45]"
                          />

                          {/* Name */}
                          <span className="flex-1 text-white font-medium">
                            {optionElixir.label}
                          </span>

                          {/* Star */}
                          <Star
                            className={`w-5 h-5 ${
                              isSelected
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-600"
                            }`}
                          />
                        </div>
                      </HoverCardTrigger>

                      {/* Hover Popup with Full Details */}
                      <HoverCardContent
                        className="w-96 bg-[#15161a] border border-[#424243] text-white p-2 shadow-2xl z-[99999999]"
                        side="top"
                        align="center"
                        sideOffset={12}
                        avoidCollisions={true}
                        collisionPadding={20}
                      >
                        <div className="space-y-2">
                          <div className="flex items-start gap-4">
                            <img
                              src={
                                optionElixir.image ||
                                "/skill-tech/pot-empty.webp"
                              }
                              alt={optionElixir.label}
                              className="w-14 h-14 object-contain rounded-md bg-[#1f2025] border border-[#424243]"
                            />
                            <div>
                              <h3 className="font-bold text-lg text-white">
                                {optionElixir.label}
                              </h3>
                              <p className="text-purple-400 font-mono text-sm mt-1">
                                [{optionElixir.code || "Elixir"}]
                              </p>
                            </div>
                          </div>

                          <div className="border-t border-[#424243] pt-3">
                            <p className="text-sm text-gray-300 leading-relaxed">
                              {optionElixir.details}
                            </p>
                          </div>

                          {optionElixir.footer && (
                            <p className="text-xs text-gray-500 italic pt-2 border-t border-[#424243]">
                              {optionElixir.footer}
                            </p>
                          )}
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  );
                })
              )}
            </div>

            {/* Footer count */}
            <div className="p-3 border-t border-[#2a2b35] text-center text-sm text-gray-400">
              Showing {filteredElixirs.length} Elixir Results
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
