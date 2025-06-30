"use client";
import BuildItem from "@/components/BuildsItem";
import BuildsTitle from "@/components/BuildsTitle";
import CAlert from "@/components/CAlert";
import SidebarFilter from "@/components/SidebarFilter";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useState } from "react";
import useFetch from "@/hooks/useFetch"; // Ensure this hook is correctly defined
import Spinner from "@/components/Spinner"; // Import the Spinner component

const initialFilterParams = {
  category: "",
  name: "",
};

export default function MetaBuilds() {
  const [filterParams, setFilterParams] = useState(initialFilterParams);
  const {
    data: builds,
    loading,
    error,
  } = useFetch("/api/builds", filterParams);

  const handleFilterChange = (newFilters) => {
    setFilterParams((prev) => ({ ...prev, ...newFilters }));
  };

  return (
    <div>
      <BuildsTitle title="My Builds" onFilterChange={handleFilterChange} />
      <div className="grid grid-cols-12 gap-3 max-w-7xl px-3 mx-auto my-4">
        <div className="col-span-12 md:col-span-4">
          <SidebarFilter onFilterChange={handleFilterChange} />
        </div>
        <div className="col-span-12 md:col-span-8">
          <Tabs defaultValue="leveling" className="w-full ">
            <TabsList className="bg-[#1a1b1f]">
              <TabsTrigger value="leveling">Leveling</TabsTrigger>
              {/* <TabsTrigger value="endgame">Endgame</TabsTrigger> */}
            </TabsList>
            <TabsContent value="leveling">
              <CAlert title="Popular Builds" />
              {loading ? (
                <div className="flex justify-center items-center min-h-[200px]">
                  <Spinner /> {/* Show spinner while loading */}
                </div>
              ) : (
                builds?.length > 0 &&
                builds?.map((item) => <BuildItem key={item.id} build={item} />)
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
