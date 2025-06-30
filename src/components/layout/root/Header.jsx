"use client";

import React, { useState, useEffect } from "react";
import Logo from "@/components/shared/Logo";
import NavbarLinks from "@/components/layout/root/NavbarLinks";
import MobileNavbar from "@/components/layout/root/MobileNavbar";
import Navigation from "./Navigation";
import LoginRegister from "@/components/LoginRegister";
import { IoLogoYoutube } from "react-icons/io";
import { FaTwitch } from "react-icons/fa";

export default function Header() {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    let timeoutId;
    function scrollHeader() {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (window.scrollY >= 70) setIsScroll(true);
        else setIsScroll(false);
      }, 10);
    }
    window.addEventListener("scroll", scrollHeader);

    return () => {
      window.removeEventListener("scroll", scrollHeader);
      clearTimeout(timeoutId);
    };
  }, [isScroll]);

  return (
    <header
      className={`shadow-xl z-50 transition-all ease duration-350 top-0 left-0 w-full sticky px-3 mb-5 flex-none ${
        isScroll ? "bg-[#15161a]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex justify-between items-center flex-between gap-6 p-3 max-w-7xl">
        <Logo className="transition-all hover:scale-105" />
        <nav className="grow flex flex-evenly gap-4 max-w-[800px] max-sm:hidden">
          <NavbarLinks />
        </nav>
        <div className="hidden sm:flex justify-center items-center gap-4">
          <a
            href="https://www.youtube.com/channel/UC1H92p9CF28icXXkrHj1wfQ"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-red-500 transition-all"
          >
            <IoLogoYoutube />
          </a>
          <a
            href="https://www.twitch.tv/shadowdragond4"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-purple-500 transition-all"
          >
            <FaTwitch />
          </a>
        </div>
        <div className="flex flex-end gap-4">
          <LoginRegister />
          <MobileNavbar />
        </div>
      </div>
      <div className=" w-full bg-[#1a1b1f] ">
        <div className="max-w-7xl mx-auto flex justify-center flex-between gap-6 pt-3">
          <Navigation />
        </div>
      </div>
    </header>
  );
}
