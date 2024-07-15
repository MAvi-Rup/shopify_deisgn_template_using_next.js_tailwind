"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <div className="hidden md:block">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center mx-4 py-4">
        <div className="flex flex-col md:flex-row items-center md:items-start lg:items-center gap-2 md:gap-4">
          <div className="text-xs lg:text-sm">+222-1800-2628</div>
          <div className="text-xs lg:text-sm">blueskytechcompany@gmail.com</div>
        </div>

        <div className="hidden lg:flex justify-center items-center text-xs lg:text-sm">
          Sign up for 10% off your first order:{" "}
          <a href="#" className="text-blue-600 hover:underline ml-1">
            Sign Up
          </a>
        </div>

        <div className="flex items-center justify-center md:justify-end space-x-2 lg:space-x-4">
          <ul className="flex flex-row space-x-4">
            <li className="text-xs lg:text-sm hidden lg:block">Our Stores</li>
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center space-x-1 text-xs lg:text-sm">
                  <span>United States (USD $)</span>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="h-4 w-4 lg:h-5 lg:w-5 text-gray-400"
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem className="hover:translate-x-4 hover:scale-110 duration-300">
                    France (EUR €)
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:translate-x-4 hover:scale-110 duration-300">
                    Japan (JPY ¥)
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:translate-x-4 hover:scale-110 duration-300">
                    Netherlands (EUR €)
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:translate-x-4 hover:scale-110 duration-300">
                    United Kingdom (GBP £)
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center space-x-1 text-xs lg:text-sm">
                  <span>English</span>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="h-4 w-4 lg:h-5 lg:w-5 text-gray-400"
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem className="hover:translate-x-4 hover:scale-110 duration-300">
                    France
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:translate-x-4 hover:scale-110 duration-300">
                    日本語
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
          </ul>
        </div>
      </div>
      <div className="lg:hidden flex justify-center items-center text-xs py-2 bg-gray-100">
        Sign up for 10% off your first order:{" "}
        <a href="#" className="text-blue-600 hover:underline ml-1">
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default Header;
