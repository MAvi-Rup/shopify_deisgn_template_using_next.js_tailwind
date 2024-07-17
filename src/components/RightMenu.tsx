"use client";
import React, { useEffect, useState } from "react";
import FavouriteIcon from "./SVG/FavouriteIcon";
import QuickviewIcon from "./SVG/QuickviewIcon";
import SearchIcon from "./SVG/SearchIcon";
import TimerIcon from "./SVG/TimerIcon";

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
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg hidden lg:block">
      <ul className="space-y-4">
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
            <TimerIcon />
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
