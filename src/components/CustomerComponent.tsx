"use client";
import { newProducts, products } from "@/lib/Products";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

const CustomerReview = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  //   Handle the Window Size State
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsToShow(1);
      } else {
        setItemsToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setStartIndex((prevIndex) =>
      prevIndex + 1 >= products.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setStartIndex((prevIndex) =>
      prevIndex - 1 < 0 ? products.length - 1 : prevIndex - 1
    );
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <StarIcon
          key={i}
          className={`h-4 w-4 ${i <= rating ? "text-black" : "text-gray-300"}`}
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
        <div
          className={`grid grid-cols-1 md:grid-cols-${itemsToShow} gap-8 justify-items-center`}
        >
          {newProducts
            .slice(startIndex, startIndex + itemsToShow)
            .map((product) => (
              <div
                key={product.id}
                className="p-30 border border-gray-100 rounded-xl overflow-hidden relative shadow-md shadow-blue-50 text-center"
              >
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
          className="absolute top-1/2 left-0 md:left-4 transform -translate-y-1/2 bg-white bg-opacity-40 p-2 md:p-4 rounded-full focus:outline-none hover:bg-slate-400 hover:bg-opacity-30"
        >
          <ChevronLeftIcon className="h-6 w-6 text-black" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-0 md:right-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 md:p-4 rounded-full focus:outline-none hover:bg-slate-400 hover:bg-opacity-30"
        >
          <ChevronRightIcon className="h-6 w-6 text-black" />
        </button>
      </div>
    </div>
  );
};

export default CustomerReview;
