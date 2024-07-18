"use client";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useRef, useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

const slides = [
  {
    image: "/slider1.jpg",
    title: "Stylish",
    title_2: "Top Trending",
    subtitle: "So soft, you don't want to take it off.",
    buttonText: "SHOP NOW",
  },
  {
    image: "/slider2.jpg",
    title: "Hulton",
    title_2: "Perfect Simple",
    subtitle: "Discover the latest trends.",
    buttonText: "EXPLORE",
  },
  {
    image: "/slider3.jpg",
    title: "Online",
    title_2: "Limited Edition",
    subtitle: "Light and breezy styles.",
    buttonText: "SHOP NOW",
  },
];

const MyCarousel = () => {
  const swiperRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="relative w-full">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[500px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
              <Image
                src={slide.image}
                alt={`Slide ${index + 1}`}
                fill
                style={{ objectFit: "cover" }}
                className="scale-110"
              />

              <div className="absolute inset-0 flex flex-col justify-center items-start p-2 sm:p-4 md:p-6 lg:p-10 bg-opacity-30 text-black">
                <div className="md:container">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="flex flex-col justify-start md:justify-center ">
                      <h2 className="text-4xl md:text-7xl mb-2 sm:mb-4 md:mb-6 lg:mb-8 text-left md:text-center">
                        {slide.title}
                      </h2>
                      <h2 className="text-4xl md:text-7xl mb-2 sm:mb-4 md:mb-6 lg:mb-8 text-left md:text-center">
                        {slide.title_2}
                      </h2>
                      <p className="text-base sm:text-lg md:text-xl mb-2 sm:mb-3 md:mb-4 text-left md:text-center">
                        {slide.subtitle}
                      </p>
                      <div className="flex justify-start md:justify-center">
                        <button className="bg-black text-white px-10 py-2.5 md:px-16 md:py-4 text-xs font-semibold rounded-full mt-2 sm:mt-3 md:mt-4 lg:mt-5 ml-2 md:ml-0">
                          {slide.buttonText}
                        </button>
                      </div>
                    </div>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation buttons */}
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className={` hidden md:block absolute top-1/2 left-0 md:left-20 transform -translate-y-1/2 bg-white bg-opacity-40 p-2 md:p-6 rounded-full focus:outline-none hover:bg-black hover:bg-opacity-100 hover:text-white z-10 transition-opacity duration-300`}
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className={`hidden md:block absolute top-1/2 right-0 md:right-20 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 md:p-6 rounded-full focus:outline-none hover:bg-black hover:bg-opacity-100 hover:text-white z-10 transition-opacity duration-300`}
        >
          <ChevronRightIcon className="h-6 w-6" />
        </button>

        {/* Pagination */}
        <div className=" swiper-pagination !bottom-2 sm:!bottom-4 !flex !justify-center !items-center !gap-1 sm:!gap-2"></div>
      </Swiper>
    </div>
  );
};

export default MyCarousel;
