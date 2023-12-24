"use client";
import {
  AddNewProductIcon,
  LanguageIcon,
  NavbarToggleIcon,
  NotificationsIcon,
  SearchIcon,
} from "@/icons";
import Image from "next/image";
import React, { useState } from "react";
import { CustomButton } from "./custom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navbarLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Blog",
      path: "/blog",
    },
    {
      name: "Gifts",
      path: "/gifts",
    },
    {
      name: "Form",
      path: "/form",
    },
  ];

  return (
    <div className="h-[68px] bg-white overflow-hidden">
      <div className="wrapper flex justify-between items-center relative">
        <div className="w-full md:hidden flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <NavbarToggleIcon onClick={() => setOpen(!open)} />
            <Image src="/logo.png" alt="profile" width={108} height={43} />
          </div>

          <div className="flex items-center gap-2">
            <SearchIcon />
            <span className="w-[1px] h-[22px] bg-[#e0e0e0]" />
            <NotificationsIcon />
            <span className="w-[1px] h-[22px] bg-[#e0e0e0]" />

            {/* Profile */}
            <Image src="/profile.png" alt="profile" width={40} height={40} />
          </div>
        </div>
        <div
          className={`flex md:justify-between justify-center md:flex-row flex-col gap-0 items-center fixed md:static ${
            open ? "left-0" : "-left-full"
          } top-0 w-full h-screen bg-white transition-all`}
        >
          {/* close btn */}
          <div
            className="absolute right-2 top-2 md:hidden block"
            onClick={() => setOpen(!open)}
          >
            <IoClose fontSize={25} />
          </div>

          <div className="flex md:mb-0 mb-5">
            {/* Logo */}
            <Image
              src="/logo.png"
              alt="profile"
              width={108}
              height={43}
              className="md:block hidden"
            />

            {/* Links */}
            <div className="flex md:flex-row flex-col gap-10 items-center ml-7 font-bold">
              {navbarLinks.map(({ name, path }) => {
                return (
                  <Link
                    href={path}
                    key={path}
                    className={`relative h-full flex items-center hover:text-primary after:w-11 after:h-[6px] after:bg-primary after:absolute ${
                      pathname === path
                        ? "after:block text-primary"
                        : "after:hidden text-black"
                    }  after:left-1/2 after:translate-x-[-50%] after:rounded-tr-lg after:rounded-tl-lg  transition-all after:-bottom-[12px]`}
                  >
                    <div>{name}</div>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="flex items-center md:flex-row flex-col gap-6">
            {/* Icons */}
            <SearchIcon className="hidden md:block" />
            <span className="w-[1px] h-[22px] bg-[#e0e0e0] hidden md:block" />
            <NotificationsIcon className="hidden md:block" />
            <span className="w-[1px] h-[22px] bg-[#e0e0e0] hidden md:block" />

            {/* Profile */}
            <Image
              src="/profile.png"
              alt="profile"
              width={40}
              height={40}
              className="hidden md:block"
            />

            {/* Add Button */}
            <CustomButton className="flex items-center gap-1">
              <AddNewProductIcon />
              <span>Add new product</span>
            </CustomButton>

            {/* Language */}
            <div className="flex gap-2 font-bold">
              <LanguageIcon />
              <span className="w-[1px] h-[22px] bg-[#e0e0e0]" />
              EN
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
