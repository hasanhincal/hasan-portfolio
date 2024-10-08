"use client";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import { links } from "@/constants";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false); // menüyü acıp kapatmak için
  const pathName = usePathname();

  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger
        className="flex justify-center items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>

      <SheetContent className="flex flex-col">
        {/* logo */}
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href={"/"}>
            <h1 className="text-4xl font-semibold">
              Hasan<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>

        {/* nav */}
        <nav className="flex flex-col gap-8 justify-center items-center">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                onClick={closeMenu} //link tıklandığında menüyü kapat
                className={`${
                  link.path === pathName &&
                  "text-accent border-b-2 border-accent"
                } text-xl capitalize hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
