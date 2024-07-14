"use client";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const products = [
  { id: 1, image: "./trending1.jpg", name: "Product 1", price: "$19.99" },
  { id: 2, image: "./trending2.jpg", name: "Product 2", price: "$24.99" },
  { id: 3, image: "./trending3.jpg", name: "Product 3", price: "$29.99" },
  { id: 4, image: "./trending4.jpg", name: "Product 4", price: "$34.99" },
  { id: 5, image: "./trending5.jpg", name: "Product 5", price: "$39.99" },
  { id: 6, image: "./trending4.jpg", name: "Product 6", price: "$44.99" },
];

const TrendingPost = () => {
  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    setStartIndex((prevIndex) =>
      prevIndex + 4 >= products.length ? 0 : prevIndex + 4
    );
  };

  const prevSlide = () => {
    setStartIndex((prevIndex) =>
      prevIndex - 4 < 0 ? products.length - 4 : prevIndex - 4
    );
  };

  return (
    <div className="mb-8">
      <div className="container mt-16">
        <div className="">
          <h1 className="text-2xl md:text-5xl text-center text-black">
            Trending this Week
          </h1>
          <p className="text-center text-lg text-zinc-600 mt-4 mb-5">
            Here's some of our most popular products people are in love with.
          </p>
        </div>
      </div>
      <div className="relative px-4 md:px-20 mt-4 md:mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {products.slice(startIndex, startIndex + 4).map((product) => (
            <div key={product.id} className="relative group">
              <div className="aspect-[330/450] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <button className="absolute w-full mx-4  font-semibold bottom-5 left-1/2 transform -translate-x-1/2 py-2 md:py-4 md:px-16 bg-zinc-50 text-black hover:bg-black hover:text-white rounded-full text-center opacity-100 duration-300">
                ADD TO CART
              </button>
            </div>
          ))}
        </div>
        <button
          onClick={prevSlide}
          className="absolute top-0 left-1/2 md:left-20 md:top-1/2 transform -translate-y-1/2 bg-white bg-opacity-40 md:p-6 rounded-full p-2 focus:outline-none"
        >
          <ChevronLeftIcon className="h-6 w-6 text-black" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-20 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 md:p-6 rounded-full p-2 focus:outline-none"
        >
          <ChevronRightIcon className="h-6 w-6 text-black" />
        </button>
      </div>
    </div>
  );
};

export default TrendingPost;
