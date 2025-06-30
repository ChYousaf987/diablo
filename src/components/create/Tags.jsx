"use client";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Pen, Plus, Unlock } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { addNewVariant, selectDefaultIndex, selectVariants , updateDefaultIndex, updateNameVariant} from "@/lib/redux/slice";

export default function Tags({ mode = "guest" }) {
  const variants = useAppSelector(selectVariants);
  const activeTag = useAppSelector(selectDefaultIndex);
  const dispatch = useAppDispatch();
  const onUpdateNameVariant = (index, newName) => dispatch(updateNameVariant({ index, newName }));
  const onUpdateDefaultIndex = (index) => dispatch(updateDefaultIndex(index));
  const onAddNewVariant = () => dispatch(addNewVariant());

  const [showAction, setShowAction] = React.useState(0);

  const changeStateTag = (index) => {
    onUpdateDefaultIndex(index);
  };

  const changeContentTag = (index, e) => {
    if (mode === "guest") {
      return;
    }
    onUpdateNameVariant(index, e.target.value);

  };

  const AddTag = () => {
    onAddNewVariant();
  };
  return (
    <div className="flex justify-start items-center text-white max-w-7xl mx-auto px-3 my-4">
      <div className="bottom-1 rounded-sm flex justify-start items-center gap-2">
        {variants.map((tag, index) => (
          <div
            key={index}
            className="flex justify-start items-center bg-[#1a1b1f] px-2"
            onClick={(e) => changeStateTag(index)}

          >
            <Input
              className={`placeholder:text-white w-auto border-none disabled:bg-[#1a1b1f] bg-[#76788b] bg-transparent text-white focus:ring-0 focus:border-0 active:border-0 active:ring-0 focus:border-transparent focus-visible:ring-0 ${activeTag === index ? "border-[#f5a623] border-2" : "border-none"}`}
              placeholder="Add Tags"
              value={tag.name}
              disabled={mode === "guest"}
              onChange={(e) => changeContentTag(index, e)}
              onClick={(e) => {
                setShowAction(index);
              }}
            />
            {showAction === index && (mode === "edit" || mode === "create") && (
              <Pen
                size={24}
                onClick={(e) => changeStateTag(index)}
                className="cursor-pointer"
              />
            )}
          </div>
        ))}
      </div>
      {(mode === "edit" || mode === "create") && (
      <Button
        className="bg-transparent hover:bg-transparent w-fit"
        onClick={(e) => AddTag()}
      >
        <Plus size={20} />
      </Button>
      )}
    </div>
  );
}
