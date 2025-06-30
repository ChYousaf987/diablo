import Logo from "@/components/shared/Logo";
import { footerLinks, socialLinks } from "@/constants";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="bg-[#1a1b1f] text-white w-full  flex-none border-[#1f2025] border-t pb-5">
      <div className="flex justify-between items-center px-[120px]">
        <div className="w-[40%]">
          <Logo className="transition-all hover:scale-105" />
          <p className="text-sm font-light mt-3 text-[#FFFFFF99]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque ad
            deserunt earum sunt nobis quod dignissimos debitis ex impedit nulla,
            amet minima sapiente in libero hic iste ipsum. Nemo, facere?
          </p>
        </div>
        <div className="w-[11%]">
          <h3 className="font-bold text-lg">More Links</h3>
          <div className="mt-4 flex flex-col justify-center items-start gap-1 text-[#FFFFFF99]">
            {footerLinks.map((link) => (
              <Link
                key={link.route}
                className="text-sm font-light"
                href={link.route}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        {/* <div className="col-span-12 md:col-span-3">
          <h3 className="font-bold text-lg">More Links</h3>
          <div className="mt-4 flex flex-col justify-center items-start gap-1 text-[#FFFFFF99]">
            {socialLinks.map((link) => (
              <Link
                key={link.route}
                className="text-sm font-light"
                href={link.route}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div> */}
      </div>
      <div className="m-auto max-w-7xl flex justify-between items-center pt-3 mt-3 gap-7 border-t-[.5px] border-[#1f2025]">
        <span className="text-xs font-light">
          Made by{" "}
          <Link
            className="underline"
            target="_blank"
            href="https://softxsol.com/"
          >
            SoftXSolutions
          </Link>
        </span>
        <span className="text-xs font-light">
          © {new Date().getFullYear()} All rights reserved
        </span>
      </div>
    </div>
  );
}
