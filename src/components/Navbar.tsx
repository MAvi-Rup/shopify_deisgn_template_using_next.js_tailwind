"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import IconWithBadge from "./SVG/IconWithBadge";
import ProfileIcon from "./SVG/ProfileIcon";
import SearchIcon from "./SVG/SearchIcon";
import TimerIcon from "./SVG/TimerIcon";
import { ChevronRightIcon } from "@heroicons/react/16/solid";

const Navbar = () => {
  const menuArray = [
    { name: "Home", content: "Home Content" },
    { name: "Shop", content: "Shop Content" },
    { name: "Products", content: "Products Content" },
    {
      name: "Blog",
      content: (
        <ul className="flex flex-col p-4 space-y-1">
          {["Blog 1", "Blog 2", "Blog 3", "Blog 4"].map((blog, index) => (
            <li
              key={index}
              className="p-1 hover:translate-x-4 hover:scale-110 duration-300"
            >
              {blog}
            </li>
          ))}
        </ul>
      ),
    },
    { name: "Page", content: "Page Content" },
    { name: "Sale", content: "Sale Content" },
  ];
  return (
    <div>
      {/* Navbar for larger screens */}
      <div className="hidden lg:grid lg:grid-cols-3 lg:gap-4 lg:items-center lg:mx-2">
        <div className="p-4 flex items-center">
          <Image src="/logo.jpg" width={95} height={20} alt="Logo" />
        </div>
        <div className="m-auto flex justify-center">
          <ul className="flex items-center justify-center p-4 space-x-3 lg:space-x-6">
            {menuArray.map((item, index) => (
              <li key={index} className="p-2">
                <HoverCard>
                  <HoverCardTrigger className="flex items-center">
                    {item.name}
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="ml-1 h-5 w-5 text-gray-400"
                    />
                  </HoverCardTrigger>
                  <HoverCardContent align="start">
                    {item.content}
                  </HoverCardContent>
                </HoverCard>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-end p-4 space-x-4">
          <SearchIcon />
          <ProfileIcon />
          <TimerIcon />
          <div className="relative">
            <IconWithBadge badgeContent="0" />
          </div>
        </div>
      </div>

      {/* Navbar for mobile screens */}
      <Sheet>
        <div className="lg:hidden flex justify-between items-center">
          <SheetTrigger>
            <button className="text-gray-500">
              <Bars3Icon className="h-6 w-6 text-black" />
            </button>
          </SheetTrigger>
          <div>
            <Image src="/logo.jpg" width={95} height={20} alt="Logo" />
          </div>
          <div className="flex items-center space-x-4">
            <SearchIcon />
            <div className="relative">
              <IconWithBadge badgeContent="0" />
            </div>
          </div>
        </div>

        <SheetContent>
          <div className="bg-white p-4">
            <div className="flex justify-start items-center align-middle pb-4 pt-4  bg-orange-700 text-white mb-5">
              <h2 className="text-xl font-semibold mr-5">Menu</h2>
              <h2 className="text-xl font-semibold">Categories</h2>
            </div>
            <ul className="flex flex-col">
              {menuArray.map((item, index) => (
                <li key={index} className="mb-4">
                  <HoverCard>
                    <HoverCardTrigger className="flex items-center justify-between">
                      {item.name}
                      <ChevronRightIcon
                        aria-hidden="true"
                        className="ml-1 h-5 w-5 text-gray-400"
                      />
                    </HoverCardTrigger>
                    <HoverCardContent align="start">
                      {item.content}
                    </HoverCardContent>
                  </HoverCard>
                  <hr className="mt-4" />
                </li>
              ))}
            </ul>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Navbar;