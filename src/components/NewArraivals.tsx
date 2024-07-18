"use client";
import { newProducts } from "@/lib/Products";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CompareIcon from "./SVG/CompareIcon";
import FavouriteIcon from "./SVG/FavouriteIcon";
import QuickviewIcon from "./SVG/QuickviewIcon";

const NewArrivals = () => {
  const swiperRef = useRef(null);
  const [isHovering, setIsHovering] = useState<boolean>(false);

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
        <div className="flex flex-col items-center md:block">
          <h1 className="text-2xl md:text-5xl text-center text-black">
            New Arrivals
          </h1>
          <p className="text-center text-lg text-zinc-600 mt-4 mb-5">
            Find the top most popular items in Umino best sellers.
          </p>
          <div className="flex justify-center space-x-4 mt-4 lg:hidden">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="bg-white bg-opacity-40 p-2 rounded-full focus:outline-none hover:bg-black hover:text-white border"
            >
              <ChevronLeftIcon className="h-6 w-6 text-black hover:text-white" />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="bg-white bg-opacity-50 p-2 rounded-full focus:outline-none hover:bg-black hover:text-white border"
            >
              <ChevronRightIcon className="h-6 w-6 text-black hover:text-white" />
            </button>
          </div>
        </div>
      </div>
      <div
        className="relative px-4 md:px-20 mt-4 md:mt-16"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={2}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {newProducts.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="relative group">
                <div className="aspect-[330/500] overflow-hidden relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    objectFit="cover"
                    className="hover:scale-110 duration-300 rounded"
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

                  {product.preOrder === true && (
                    <div className="absolute top-12 left-2 opacity-100 bg-green-700 text-white text-xs p-2 rounded-full">
                      Pre Order
                    </div>
                  )}
                  {product.discount && (
                    <div className="absolute top-2 left-2 opacity-100 bg-red-700 text-white text-xs p-2 rounded-full">
                      {product.discount}
                    </div>
                  )}
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100">
                    <div className="p-5 bg-white rounded-full flex flex-col mb-1 hover:bg-black hover:text-white">
                      <CompareIcon />
                    </div>
                    <div className="p-5 bg-white rounded-full flex flex-col mb-1">
                      <FavouriteIcon />
                    </div>
                    <div className="p-5 bg-white rounded-full flex flex-col mb-2">
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
                          key={color}
                          className={`rounded-full border-2 border-${color}-500`}
                        >
                          <div
                            className={`w-5 h-5 rounded-full cursor-pointer m-1`}
                            style={{ backgroundColor: color }}
                          ></div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div>
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className={` hidden md:block absolute top-1/2 left-0 md:left-20 transform -translate-y-1/2 bg-white bg-opacity-40 p-2 md:p-6 rounded-full focus:outline-none hover:bg-black hover:bg-opacity-100 hover:text-white z-10 transition-opacity duration-300 ${
              isHovering ? "opacity-100" : "opacity-0"
            }`}
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className={` hidden md:block absolute top-1/2 right-0 md:right-20 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 md:p-6 rounded-full focus:outline-none hover:bg-black hover:bg-opacity-100 hover:text-white z-10 transition-opacity duration-300 ${
              isHovering ? "opacity-100" : "opacity-0"
            }`}
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
