"use client";
import React, { useEffect, useState } from "react";
import AccountIcon from "./SVG/AccountIcon";
import FavouriteIcon from "./SVG/FavouriteIcon";
import QuickviewIcon from "./SVG/QuickviewIcon";
import SearchIcon from "./SVG/SearchIcon";

const RightMenu: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed lg:right-0 lg:top-1/2 lg:transform lg:-translate-y-1/2 bg-white p-4 rounded-t-lg lg:rounded-r-lg lg:rounded-tl-none shadow-lg w-full lg:w-auto bottom-0 lg:bottom-auto z-50">
      <ul className="flex lg:flex-col justify-around lg:justify-start lg:space-y-4">
        <li>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <QuickviewIcon />
          </button>
        </li>
        <li>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <SearchIcon />
          </button>
        </li>
        <li>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <AccountIcon />
          </button>
        </li>
        <li>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <FavouriteIcon />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default RightMenu;
