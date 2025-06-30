"use client";
import { Input } from '@/components/ui/input';
import React from 'react';
import { IoIosSend } from 'react-icons/io';

const Showcase = () => {
  return (
    <div className="w-full max-w-3xl mx-auto p-6  text-white min-h-[500px]">
      <label htmlFor="youtubeLink" className="block mb-2 text-lg">
        Do you have a YouTube video where you showcase this build? Paste the link below!
      </label>
      <div className="flex">
        <Input
          type="text"
          id="youtubeLink"
          className="flex-grow p-4 bg-[#444757] border border-gray-600 rounded-l-lg rounded-r-none text-white text-base focus:border-gray-500 focus:outline-none"
          placeholder="https://www.youtube.com/watch?v=LILITH"
        />
        <button className="w-8 flex justify-center pt-2.5 bg-[#6973b2]  text-white rounded-r-lg">
        <IoIosSend />

        </button>
      </div>
    </div>
  );
};

export default Showcase;
