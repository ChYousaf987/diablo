import Image from "next/image";
import React from "react";

export default function HoverGem({ gem }) {
  return (
    <div>
      <div className="flex justify-center items-center gap-3 border-b-[.5px]">
        <Image
          src={`${gem?.image}`}
          className="transition-all bg-[#1f2025] hover:scale-105 rounded-sm "
          alt="logo"
          width={60}
          height={60}
        />
        <div className="flex flex-col items-start">
          <span className="font-bold text-yellow-600">{gem?.label}</span>
          <span className="text-white">{gem?.code}</span>
        </div>
      </div>
      <ul className="text-white px-3">
      {gem.options && gem.options.map((detail, index) => (
        <li key={index} className="text-sm">{detail}</li>
      ))}
      </ul>
    </div>
  );
}
