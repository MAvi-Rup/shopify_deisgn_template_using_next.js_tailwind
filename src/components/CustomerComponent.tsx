"use client";
import { reviews } from "@/lib/Products";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const CustomerReview = () => {
  const swiperRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

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
      <div
        className="relative px-4 md:px-20 mt-4 md:mt-16"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="p-30 border border-gray-100 rounded-xl overflow-hidden relative shadow-md shadow-blue-50 text-center">
                <div className="p-8">
                  <div className="flex justify-center mt-5">
                    <img
                      className="object-cover w-20 h-20 mb-8 rounded-full "
                      src={review.image}
                      alt=""
                    />
                  </div>
                  <p className="text-center">{review.review}</p>
                  <div className="flex items-center justify-center mt-5">
                    {renderStars(review.star)}
                  </div>
                  <p className="text-center mt-5 mb-8">{review.name}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className={`absolute top-1/2 left-0 md:left-28 transform -translate-y-1/2 bg-white bg-opacity-40 p-2 md:p-4 rounded-full focus:outline-none hover:bg-black hover:bg-opacity-100 hover:text-white z-10 transition-opacity duration-300 ${
            isHovering ? "opacity-100" : "opacity-0"
          }`}
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className={`absolute top-1/2 right-0 md:right-28 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 md:p-4 rounded-full focus:outline-none hover:bg-black hover:bg-opacity-100 hover:text-white z-10 transition-opacity duration-300 ${
            isHovering ? "opacity-100" : "opacity-0"
          }`}
        >
          <ChevronRightIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default CustomerReview;
