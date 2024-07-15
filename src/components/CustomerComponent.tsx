"use client";
import { newProducts, products } from "@/lib/Products";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";

const CustomerReview = () => {
  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    setStartIndex((prevIndex) =>
      prevIndex + 1 >= products.length ? products.length - 4 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setStartIndex((prevIndex) =>
      prevIndex - 1 < 0 ? products.length - 4 : prevIndex - 1
    );
  };

  const renderStars: string[] = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <StarIcon
          key={i}
          className={`h-3 w-3 ${i <= rating ? "text-black" : "text-gray-300"}`}
        />
      );
    }
    return stars;
  };

  return (
    <div className="mb-8">
      <div className="container mt-16">
        <div className="">
          <h1 className="text-2xl md:text-5xl text-center text-black">
            Customer Say!
          </h1>
          <p className="text-center text-lg text-zinc-600 mt-4 mb-5">
            Customers love our products and we always strive to please them all.
          </p>
        </div>
      </div>
      <div className="relative px-4 md:px-20 mt-4 md:mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {newProducts.slice(startIndex, startIndex + 3).map((product) => (
            <div className="p-30 border border-gray-100 rounded-xl overflow-hidden relative shadow-md shadow-blue-50 text-center">
              <div className="p-8">
                <div className="flex justify-center mt-5">
                  <img
                    className="object-cover w-20 h-20 mb-8 rounded-full "
                    src="./card1.png"
                    alt=""
                  />
                </div>
                <p className="text-center">
                  A perfect product, it keeps you very warm without over
                  heating. True to size, I couldn't be happier with the
                  purchase... Thank you! 🤗
                </p>
                <div className="flex items-center justify-center mt-5">
                  {renderStars(product.star)}
                </div>
                <p className="text-center mt-5 mb-8">
                  Algistino Lionel - Verified Buyer
                </p>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={prevSlide}
          className="absolute top-0 left-1/2 md:left-20 md:top-2/4 transform -translate-y-1/2 bg-white bg-opacity-40  md:p-6 rounded-full p-2 focus:outline-none hover:bg-slate-400 hover:bg-opacity-30"
        >
          <ChevronLeftIcon className="h-6 w-6 text-black" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-20 top-2/4 transform -translate-y-1/2 bg-white bg-opacity-50 md:p-6 rounded-full p-2 focus:outline-none hover:bg-slate-400 hover:bg-opacity-30"
        >
          <ChevronRightIcon className="h-6 w-6 text-black" />
        </button>
      </div>
    </div>
  );
};

export default CustomerReview;
