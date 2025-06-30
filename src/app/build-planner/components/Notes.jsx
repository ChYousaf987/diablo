"use client";
import { Textarea } from "@/components/ui/textarea";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { selectNotes, updateNotes } from "@/lib/redux/slice";
import React, { useEffect, useState } from "react";

export default function Notes({ mode = "create" }) {
  const dispatch = useAppDispatch();
  const notes = useAppSelector(selectNotes);

  const onUpdateNotes = (newNotes) => {
    dispatch(updateNotes(newNotes));
  };

  const handleChange = (event) => {
    const newText = event.target.value;
    if (mode === "create" || mode === "edit") {
      onUpdateNotes(newText);
    }
  };

  return (
    <div className="">
      <label htmlFor="buildNotes" className="block mb-2 text-lg text-white">
        Build Notes (Shared for all Variants) dsadsadasdasdasdasdadadad
      </label>
      <Textarea
        id="buildNotes"
        className="w-full h-[500px] p-4 bg-[#1f2025] border border-gray-600 rounded-lg text-white text-base resize-none focus:border-gray-500 focus:outline-none"
        placeholder=""
        value={notes}
        onChange={handleChange}
      />
    </div>
  );
}
