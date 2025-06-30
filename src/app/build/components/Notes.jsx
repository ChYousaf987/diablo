"use client";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";

export default function Notes() {

  return (
    <div className="">
    <label htmlFor="buildNotes" className="block mb-2 text-lg text-white">Build Notes (Shared for all Variants)</label>
    <Textarea
      id="buildNotes" 
      className="w-full h-[500px] p-4 bg-[#1f2025] border border-gray-600 rounded-lg text-white text-base resize-none focus:border-gray-500 focus:outline-none" 
      placeholder=""
    ></Textarea>
  </div>);
}
