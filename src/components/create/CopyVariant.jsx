"use client";
import React from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  selectDefaultIndex,
  selectVariants,
  handleCopyVariant,
} from "@/lib/redux/slice";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";
import { FaRegCopy } from "react-icons/fa6";

export default function CopyVariant({ mode = "guest" }) {
  const { toast } = useToast();

  const variants = useAppSelector(selectVariants);
  const currentIndex = useAppSelector(selectDefaultIndex);

  const dispatch = useAppDispatch();

  const onhandleCopyVariant = (index) => {
    dispatch(handleCopyVariant(index));
    toast({
      title: "Variant copié avec succès !",
      description: `La variante ${index + 1} a été copiée.`,
    });
  };

  return (
    <>
      {mode !== "guest" && (
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-[#1f2025] hover:bg-transparent flex w-fit items-center gap-2">
              <FaRegCopy size={24} />
              Copier
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-[#1f2025] dialog-content">
            <DialogHeader>
              <DialogTitle className="flex justify-between items-center gap-3 text-white">
                Copier
              </DialogTitle>
            </DialogHeader>

            {variants &&
              variants.map((variant, index) => {
                if (index !== currentIndex) {
                  return (
                    <div
                      key={index}
                      className="mt-2 bg-gray-800 cursor-pointer rounded-md text-gray-100 text-sm leading-7 list-disc mb-1.5 p-1.5 break-words"
                      onClick={() => onhandleCopyVariant(index)}
                    >
                      {variant.name}
                    </div>
                  );
                }
                return null;
              })}
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
