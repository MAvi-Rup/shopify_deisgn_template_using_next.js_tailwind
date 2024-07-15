"use client";
import { newProducts, products } from "@/lib/Products";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import CompareIcon from "./SVG/CompareIcon";
import FavouriteIcon from "./SVG/FavouriteIcon";
import QuickviewIcon from "./SVG/QuickviewIcon";

const NewArraival = () => {
  const [startIndex, setStartIndex] = useState<number>(0);

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

  const renderStars: string[] = (rating: number) => {
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
            New Arrivals
          </h1>
          <p className="text-center text-lg text-zinc-600 mt-4 mb-5">
            Find the top most popular items in Umino best sellers.
          </p>
        </div>
      </div>
      <div className="relative px-4 md:px-20 mt-4 md:mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {newProducts.slice(startIndex, startIndex + 4).map((product) => (
            <div key={product.id} className="relative group">
              <div className="aspect-[330/500] overflow-hidden relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-110 duration-300 "
                />
                {product.preOrder === true ? (
                  <button className="absolute w-[calc(100%-20px)] left-1/2 transform -translate-x-1/2 bottom-5 py-2 md:py-4 bg-zinc-50 text-black hover:bg-black hover:text-white rounded-full text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:font-semibold">
                    Pre Order
                  </button>
                ) : (
                  <button className="absolute w-[calc(100%-20px)] left-1/2 transform -translate-x-1/2 bottom-5 py-2 md:py-4 bg-zinc-50 text-black hover:bg-black hover:text-white rounded-full text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:font-semibold">
                    ADD TO CART
                  </button>
                )}

                {product.preOrder === true ? (
                  <div className="absolute top-12 left-2 opacity-100 bg-green-700  text-white text-xs p-2 rounded-full">
                    Pre Order
                  </div>
                ) : (
                  <></>
                )}
                {product.discount && (
                  <div className="absolute top-2 left-2 opacity-100 bg-red-700  text-white text-xs p-2 rounded-full">
                    {product.discount}
                  </div>
                )}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 ">
                  <div className="p-5 bg-white rounded-full flex flex-col mb-1 hover:bg-black hover:text-white">
                    <CompareIcon />
                  </div>
                  <div className="p-5 bg-white  rounded-full flex flex-col mb-1">
                    <FavouriteIcon />
                  </div>
                  <div className="p-5 bg-white  rounded-full flex flex-col mb-2">
                    <QuickviewIcon />
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <div className="flex items-center mt-1">
                  {renderStars(product.star)}
                </div>

                <div className="flex gap-5 mt-2">
                  <p className="font-bold text-red-600">{product.price}</p>
                  {product.actual_price && (
                    <p className="line-through text-gray-500">
                      {product.actual_price}
                    </p>
                  )}
                </div>
                {product.variant && (
                  <div className="flex gap-2 mt-2">
                    {product.variant.map((color) => (
                      <div
                        className={`rounded-full border-2 border-${color}-500`}
                      >
                        <div
                          key={color}
                          className={`w-5 h-5 rounded-full cursor-pointer m-1`}
                          style={{ backgroundColor: color }}
                        ></div>
                      </div>
                    ))}
                  </div>
                )}
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

export default NewArraival;
