"use client";

import { useState } from "react";

const ClosingHeader = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    isVisible && (
      <div className="hidden md:block bg-red-600 text-white text-center">
        <div className="flex">
          <div className="flex-none w-14 h-12"></div>
          <div className="grow h-12 pt-4">
            Black Friday 50% Off! Limited time only: 119 days 18 hours 20 mins
            26 secs
          </div>
          <div className="flex-none w-12 h-12">
            <button
              className="mr-auto text-white pt-2 font-semibold"
              onClick={() => {
                setIsVisible(false);
              }}
            >
              X
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default ClosingHeader;
