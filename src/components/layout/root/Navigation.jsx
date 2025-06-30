import { navigationLinks } from "@/constants";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <>
      {navigationLinks.map((item) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;

        return (
          <Link
            key={item.route}
            href={item.route}
            className={`text-sm font-medium  text-white transition-all hover:scale-105 pb-2 ${
              isActive && " underlineLink scale-105 font-bold border-b-4  border-red-500"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </>
  );
}
