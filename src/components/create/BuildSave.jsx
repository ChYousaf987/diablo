"use client";
import React from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  selectId,
  selectLevel,
  selectName,
  selectNotes,
  selectUrl,
  selectVariants,
  selectCategory,
  updateName,
  selectParagonBuilds,
  selectOptionSkills,
} from "@/lib/redux/slice";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useToast } from "../ui/use-toast";
import { AiOutlineLoading } from "react-icons/ai";
import { useSession } from "next-auth/react";
import {
  extractActiveDataParagon,
  extractIdAndRankSkillTree,
} from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useCreate } from "@/hooks/useCreate";

export default function BuildSave({ mode = "create" }) {
  const { toast } = useToast();
  const { data: session, status } = useSession();
  const paragon_builds = useAppSelector(selectParagonBuilds);
  const optionSkills = useAppSelector(selectOptionSkills);
  const router = useRouter();

  const name = useAppSelector(selectName);
  const id = useAppSelector(selectId);
  const notes = useAppSelector(selectNotes);
  const level = useAppSelector(selectLevel);
  const url = useAppSelector(selectUrl);
  const category = useAppSelector(selectCategory);
  const variants = useAppSelector(selectVariants);

  const dispatch = useAppDispatch();
  const onUpdateName = (newName) => dispatch(updateName(newName));

  const generateJsonData = () => ({
    name,
    notes,
    level,
    url,
    user_id: session?.user?.id,
    paragons: extractActiveDataParagon(paragon_builds),
    skill_tree: extractIdAndRankSkillTree(optionSkills),
    category,
    variants,
  });

  const { handleCreate, loading: loadingCreate } = useCreate(
    "/api/builds",
    generateJsonData,
    () => router.push("/my-builds")
  );
  const { handleUpdate, loading: loadingUpdate } = useCreate(
    `/api/builds/${id}`,
    generateJsonData,
    () => router.push("/my-builds")
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (mode === "create") {
      handleCreate();
    } else {
      handleUpdate();
    }
  };

  return (
    <>
      {mode === "guest" && <ButtonSave mode={mode} />}
      {(mode === "create" || mode === "edit") && (
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-[#6973b2] hover:bg-[#6973b2] font-bold">
              {mode === "edit" ? "Sauvegarder Changes" : "Sauvegarder Build"}
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-[#1f2025] dialog-content">
            <DialogHeader>
              <DialogTitle className="flex justify-between items-center gap-3 text-white">
                {mode === "create"
                  ? "Créer & Sauvegarder Build"
                  : "Sauvegarder Changes"}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="buildName"
                  className="block text-sm font-medium text-white"
                >
                  Nommez votre{" "}
                  <span className="text-yellow-500">
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </span>{" "}
                  Build
                </label>
                <Input
                  id="buildName"
                  type="text"
                  autoComplete="off"
                  value={name}
                  onChange={(e) => onUpdateName(e.target.value)}
                  placeholder="Build Name..."
                  className="mt-1 block w-full text-white"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-[#1a1b1f]"
                disabled={!name || loadingCreate || loadingUpdate}
              >
                {(loadingCreate || loadingUpdate) && (
                  <AiOutlineLoading className="animate-spin mr-2" />
                )}
                {mode === "create"
                  ? "Sauvegarder Build"
                  : "Sauvegarder Changes"}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}

const ButtonSave = ({ mode }) => {
  return (
    <div className="md:order-first order-last">
      <Button className="bg-[#6973b2] hover:bg-[#6973b2] font-bold">
        {mode === "edit" ? "Save Changements" : "Save Build"}
      </Button>
    </div>
  );
};
