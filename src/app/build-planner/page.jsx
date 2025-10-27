// BuildPlanner.js
"use client";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import {
  selectVariants,
  selectCategory,
  initializeGear,
} from "@/lib/redux/slice";
import BuildAction from "@/components/create/BuildAction";
import Tags from "@/components/create/Tags";
import CopyVariant from "@/components/create/CopyVariant";
import Gear from "@/components/create/Gear";
import SkillTree from "@/components/create/SkillTree";
import Paragon from "@/components/create/Paragon/Paragon";
import Notes from "./components/Notes";
import Showcase from "./components/Showcase";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Spinner from "@/components/Spinner";
import Image from "next/image";
import { useToast } from "@/components/ui/use-toast";

function BuildPlannerComp() {
  const searchParams = useSearchParams();
  const buildId = searchParams.get("build_id");
  const variants = useAppSelector(selectVariants);
  const category = useAppSelector(selectCategory);
  const dispatch = useAppDispatch();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (buildId) {
      setLoading(true);
      const showBuild = async () => {
        try {
          const response = await fetch(`/api/builds/${buildId}`);
          if (!response.ok) throw new Error("Failed to fetch build data");
          const data = await response.json();
          dispatch(initializeGear({ build: data, variants: data.variants }));
        } catch (error) {
          setError(error.message);
          toast({ title: "Error", description: error.message });
        } finally {
          setLoading(false);
        }
      };
      showBuild();
    }
  }, [buildId, dispatch, toast]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[80vh] col-span-12">
        <Spinner />
      </div>
    );
  }
  if (error) return <div className="text-red-500">Error: {error.message}</div>;

  return (
    <div>
      <BuildAction mode="create" />
      <Tags mode="create" />
      <Tabs defaultValue="gear" className="max-w-7xl px-3 mx-auto">
        <div className="flex justify-between w-full">
          <TabsList className="bg-[#1a1b1f] text-white">
            <TabsTrigger value="gear">
              <Image
                src="/tabs/gear_skills.png"
                width={25}
                height={25}
                alt="gear"
              />
              <span className="hidden sm:block ml-1">
                Équipement et compétences
              </span>
            </TabsTrigger>
            <TabsTrigger value="skill">
              <Image
                src="/tabs/skill_tree.png"
                width={25}
                height={25}
                alt="skill_tree"
              />
              <span className="hidden sm:block ml-1">Arbre de compétences</span>
            </TabsTrigger>
            <TabsTrigger value="paragon">
              <Image
                src="/tabs/paragon.png"
                width={25}
                height={25}
                alt="paragon"
              />
              <span className="hidden sm:block ml-1">Parangon</span>
            </TabsTrigger>
            <TabsTrigger value="notes">
              <Image src="/tabs/notes.png" width={25} height={25} alt="notes" />
              <span className="hidden sm:block ml-1">Remarques</span>
            </TabsTrigger>
            <TabsTrigger value="showcase">
              <Image
                src="/tabs/showcase.png"
                width={25}
                height={25}
                alt="showcase"
              />
              <span className="hidden sm:block ml-1">Vitrine</span>
            </TabsTrigger>
          </TabsList>
          {variants.length > 1 && <CopyVariant mode="create" />}
        </div>
        <TabsContent className="bg-[#1a1b1f] p-3 mt-3 rounded-sm" value="gear">
          <Gear />
        </TabsContent>
        <TabsContent
          className="bg-[#1a1b1f] p-3 mt-3 rounded-sm overflow-x-auto overflow-y-auto z-0"
          value="skill"
        >
          <Suspense fallback={<Spinner />}>
            <SkillTree key={category} />
          </Suspense>
        </TabsContent>
        <TabsContent
          className="bg-[#1a1b1f] p-3 mt-3 rounded-sm overflow-x-auto"
          value="paragon"
        >
          <Paragon key={category} />
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

const BuildPlanner = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BuildPlannerComp />
    </Suspense>
  );
};

export default BuildPlanner;
