"use client";
import { useState } from "react";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import {
  selectId,
  selectCategory,
  updateCategory,
  // resetSkillTree,
} from "@/lib/redux/slice";
import { useRouter } from "next/navigation";
import { useToast } from "../ui/use-toast";
import { useDelete } from "@/hooks/useDelete";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import { Share } from "lucide-react";
import { FaRegCopy } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";
import Image from "next/image";
import { categories } from "@/constants";
import BuildSave from "./BuildSave";

export default function BuildAction({ mode = "create" }) {
  const dispatch = useAppDispatch();
  const category = useAppSelector(selectCategory) || "barbarian";
  const [activeCategory, setActiveCategory] = useState(() => {
    const index = categories.findIndex((item) => item.value === category);
    return index !== -1 ? index : 0;
  });
  const id = useAppSelector(selectId);
  const { handleDelete, loading } = useDelete(`/api/builds/${id}`);
  const router = useRouter();
  const { toast } = useToast();

  const handleCategoryChange = (value) => {
    const index = categories.findIndex((item) => item.value === value);
    if (index !== -1) {
      setActiveCategory(index);
      dispatch(updateCategory(value));
      // dispatch(resetSkillTree());
    }
  };

  const handleShare = () => {
    const shareUrl = `${window.location.origin}/build/${id}`;
    if (navigator.share) {
      navigator
        .share({
          title: `Check out my build`,
          url: shareUrl,
        })
        .then(() => console.log("Thanks for sharing!"))
        .catch((error) => console.error("Error sharing:", error));
    } else {
      prompt("Copy this URL to share:", shareUrl);
    }
  };

  const handleCopy = () => {
    const copyUrl = `/build-planner?build_id=${id}`;
    router.push(copyUrl);
  };

  return (
    <div className="md:flex grid md:justify-between items-center max-w-7xl mx-auto px-3 my-2 text-white">
      <div className="flex items-center gap-3 w-full">
        <Image
          src={`/${categories[activeCategory]?.image}`}
          className="object-contain transition-all hover:scale-105 bg-[#1a1b1f] p-2 rounded-sm"
          alt="logo"
          width={60}
          height={60}
        />
        <div>
          {mode === "create" && (
            <Select
              className="text-white bg-[#15161a] shadow-none border-none outline-none"
              value={categories[activeCategory]?.value || "barbarian"}
              onValueChange={handleCategoryChange}
            >
              <SelectTrigger className="w-[220px] bg-[#26272d] text-white">
                <SelectValue
                  placeholder={categories[activeCategory]?.label || "Barbare"}
                />
              </SelectTrigger>
              <SelectContent className="bg-[#26272d] text-[#9b9c9d]">
                {categories?.map((category, index) => (
                  <SelectItem
                    key={category?.value}
                    value={category?.value || "barbarian"}
                    className="hover:!bg-[#15161a] text-[#9b9c9d] hover:!text-white"
                  >
                    {category?.label || "Barbare"}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
          {mode === "edit" ||
            (mode === "guest" && <h1>{categories[activeCategory]?.label}</h1>)}
          <p>{categories[activeCategory]?.description}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 md:flex md:items-end mt-2 md:mt-0 gap-3">
        <BuildSave mode={mode} />
        {mode === "edit" && (
          <>
            <Button
              className="bg-transparent hover:bg-transparent flex items-center gap-2"
              onClick={handleShare}
            >
              <Share size={24} />
              Share
            </Button>
            <Button
              className="bg-transparent hover:bg-transparent flex items-center gap-2"
              onClick={handleCopy}
            >
              <FaRegCopy size={24} />
              Copy
            </Button>
            <Button
              className="bg-transparent hover:bg-transparent flex items-center gap-2"
              onClick={() => handleDelete()}
              disabled={loading}
            >
              {!loading ? (
                <MdDeleteOutline size={24} />
              ) : (
                <AiOutlineLoading className="animate-spin mr-2" />
              )}
              Delete Build
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
