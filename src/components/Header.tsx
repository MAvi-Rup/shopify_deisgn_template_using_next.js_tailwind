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
    <div className="hidden md:block lg:grid lg:grid-cols-3 lg:gap-4 lg:items-center lg:mx-4">
      <div className="flex flex-col lg:flex-row lg:items-center lg:gap-4 gap-2">
        <div className="text-xs lg:text-sm">+222-1800-2628</div>
        <div className="text-xs lg:text-sm">blueskytechcompany@gmail.com</div>
      </div>

      <div className="hidden md:flex md:justify-center md:items-center text-xs lg:text-sm py-8">
        Sign up for 10% off your first order:{" "}
        <a href="#" className="text-blue-600 hover:underline">
          Sign Up
        </a>
      </div>

      <div className="flex items-center space-x-2 lg:space-x-4 ml-auto">
        <ul className="flex flex-col lg:flex-row lg:space-x-4 space-y-2 lg:space-y-0">
          <li className="text-xs lg:text-sm">Our Stores</li>
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
  );
};

export default Header;
