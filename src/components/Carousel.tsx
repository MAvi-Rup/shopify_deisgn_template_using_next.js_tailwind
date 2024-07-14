"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

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
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="relative w-full">
      <Carousel
        className="w-full"
        onSelect={(selectedIndex) => setCurrentSlide(selectedIndex)}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="w-full">
              <div className="relative w-full">
                <img
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  className="object-cover w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px]"
                />

                <div className="absolute inset-0 flex flex-col justify-center items-start p-2 sm:p-4 md:p-6 lg:p-10 bg-opacity-30 text-black">
                  <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <div className="flex flex-col justify-center">
                        <h2 className="text-xl sm:text-2xl md:text-5xl font-semibold mb-2 sm:mb-4 md:mb-6 lg:mb-8 text-left md:text-center">
                          {slide.title}
                        </h2>
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold mb-2 sm:mb-4 md:mb-6 lg:mb-8 text-left md:text-center">
                          {slide.title_2}
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl mb-2 sm:mb-3 md:mb-4 text-left md:text-center">
                          {slide.subtitle}
                        </p>
                        <div className="flex justify-start md:justify-center">
                          <button className="bg-black text-white px-4 py-2 sm:px-6 sm:py-3 md:px-10 md:py-4 text-sm sm:text-base md:text-lg font-semibold rounded-full mt-2 sm:mt-3 md:mt-4 lg:mt-5">
                            {slide.buttonText}
                          </button>
                        </div>
                      </div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:block absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-black/90 hover:text-white rounded-full p-1 sm:p-2 md:p-4 lg:p-8 shadow-md transition-colors">
          <ChevronLeftIcon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-gray-700" />
        </CarouselPrevious>
        <CarouselNext className="hidden sm:block absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-black/90 hover:text-white rounded-full p-1 sm:p-2 md:p-4 lg:p-8 shadow-md transition-colors">
          <ChevronRightIcon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-gray-700" />
        </CarouselNext>
        <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-1 sm:h-2 w-1 sm:w-2 rounded-full ${
                index === currentSlide ? "bg-black" : "bg-gray-400"
              } transition-colors hover:bg-black-600 cursor-pointer`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
};

export default MyCarousel;
