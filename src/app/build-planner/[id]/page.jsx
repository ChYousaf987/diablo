"use client";
import BuildAction from "@/components/create/BuildAction";
import Gear from "@/components/create/Gear";
import Tags from "@/components/create/Tags";
import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Notes from "../components/Notes";
import Showcase from "../components/Showcase";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { initailizeGear, selectVariants } from "@/lib/redux/slice";
import Paragon from "@/components/create/Paragon/Paragon";
import SkillTree from "@/components/create/SkillTree";
import CopyVariant from "@/components/create/CopyVariant";
import Spinner from "@/components/Spinner";

export default function BuildEdit(request) {
  const { id } = request.params;
  const variants = useAppSelector(selectVariants);

  const [Loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useAppDispatch();

  const onInitailizeGear = (build, variants) =>
    dispatch(initailizeGear({ build, variants }));

  useEffect(() => {
    setLoading(true);
    const showBuild = async () => {
      try {
        const response = await fetch(`/api/builds/${id}`);
        const data = await response.json();
        setLoading(false);
        onInitailizeGear(data, data.variants);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    showBuild();
  }, [id]);



  if (Loading) return (<div className="flex justify-center items-center min-h-[80vh] col-span-12 "><Spinner /></div>);
  if (error) return (<div className="text-red-500">Error: {error.message}</div>);

  return (
    <div>
      <BuildAction mode="edit" />
      <Tags mode="edit" />
      <Tabs defaultValue="gear" className="max-w-7xl px-3 mx-auto my-4">
        <div className="flex justify-between w-full">
          <TabsList className="bg-[#1a1b1f] text-white">
            <TabsTrigger value="gear">
              <Image
                src="/tabs/gear_skills.png"
                width={25}
                height={25}
                alt="gear"
              />
              <span className="hidden sm:block ml-1">Gear & Skills</span>
            </TabsTrigger>
            <TabsTrigger value="skill">
              <Image
                src="/tabs/skill_tree.png"
                width={25}
                height={25}
                alt="skill_tree"
              />
              <span className="hidden sm:block ml-1">Skill Tree</span>
            </TabsTrigger>

            <TabsTrigger value="paragon">
              <Image
                src="/tabs/paragon.png"
                width={25}
                height={25}
                alt="paragon"
              />
              <span className="hidden sm:block ml-1">Paragon</span>
            </TabsTrigger>
            <TabsTrigger value="notes">
              <Image src="/tabs/notes.png" width={25} height={25} alt="notes" />
              <span className="hidden sm:block ml-1">Notes</span>
            </TabsTrigger>

            <TabsTrigger value="showcase">
              <Image
                src="/tabs/showcase.png"
                width={25}
                height={25}
                alt="showcase"
              />
              <span className="hidden sm:block ml-1">Showcase</span>
            </TabsTrigger>
          </TabsList>
          {variants.length > 1 && <CopyVariant mode={"create"} />}
        </div>

        <TabsContent className="bg-[#1a1b1f] p-3 mt-3 rounded-sm" value="gear">
          <Gear />
        </TabsContent>
        <TabsContent className="bg-[#1a1b1f] p-3 mt-3 rounded-sm" value="skill">
          <SkillTree />
        </TabsContent>
        <TabsContent
          className="bg-[#1a1b1f] p-3 mt-3 rounded-sm"
          value="paragon"
        >
          <Paragon />
        </TabsContent>
        <TabsContent className="bg-[#1a1b1f] p-3 mt-3 rounded-sm" value="notes">
          <Notes />
        </TabsContent>
        <TabsContent
          className="bg-[#1a1b1f] p-3 mt-3 rounded-sm"
          value="showcase"
        >
          <Showcase />
        </TabsContent>
      </Tabs>
    </div>
  );
}
