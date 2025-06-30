"use client";
import BuildItem from "@/components/BuildsItem";
import BuildsTitle from "@/components/BuildsTitle";
import SidebarFilter from "@/components/SidebarFilter";
import Spinner from "@/components/Spinner";
import useFetch from "@/hooks/useFetch";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

export default function MyBuilds() {
  const { data: session, status } = useSession();
  const [filterParams, setFilterParams] = useState({});
  const {
    data: builds,
    loading,
    error,
  } = useFetch("/api/builds", filterParams);

  useEffect(() => {
    if (status === "authenticated" && session?.user?.id) {
      setFilterParams((prev) => ({ ...prev, user_id: session.user.id }));
    }
  }, [status, session]);

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
        {status === "authenticated" && session?.user?.id && !loading && (
          <>
            <div className="col-span-12 md:col-span-8">
              {error ? (
                <div className="text-red-500" key="error">
                  Error: {error.message}
                </div>
              ) : (
                builds.map((item) => (
                  <BuildItem key={item.id} build={item} isEdit={true} />
                ))
              )}
            </div>
          </>
        )}
        {status !== "authenticated" && !loading && <NoBuildsMessage />}
        {loading && (
          <div className="flex justify-center items-center min-h-[200px] md:col-span-8 col-span-12">
            <Spinner />
          </div>
        )}
      </div>
    </div>
  );
}

const NoBuildsMessage = () => {
  return (
    <div className="col-span-12 flex flex-col items-center justify-center bg-[#1a1b1f] p-4">
      <div className="text-center mb-4">
        <p className="text-lg font-medium text-gray-700">
          You don't have any builds yet!
        </p>
      </div>
      <a
        href={`/build-planner`}
        className="bg-[#6973b2] hover:bg-[#747ebc] text-white w-fit px-4 py-2 rounded"
      >
        Create Build
      </a>
    </div>
  );
};
