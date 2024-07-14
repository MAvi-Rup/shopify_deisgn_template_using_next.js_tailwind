"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
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
                <Image
                  src={slide.image}
                  layout="responsive"
                  width={1200}
                  height={800}
                  alt={`Slide ${index + 1}`}
                  className="object-cover"
                  style={{ marginTop: "-80px" }}
                />

                <div className="absolute inset-0 flex flex-col justify-center items-start p-2 lg:p-10 bg-opacity-30 text-black">
                  <div className="container">
                    <div className="grid grid-cols-2">
                      <div className="md:flex md:flex-col md:justify-center">
                        <h2 className="text-2xl md:text-6xl font-semibold md:mb-8 md:text-center">
                          {slide.title}
                        </h2>
                        <h2 className="text-3xl md:text-6xl font-semibold md:mb-8 md:text-center">
                          {slide.title_2}
                        </h2>
                        <p className="text-lg md:text-xl md:mb-4 md:text-center">
                          {slide.subtitle}
                        </p>
                        <div className="md:flex md:justify-center">
                          <button className="bg-black text-white px-6 py-3 md:px-20 md:py-6 font-semibold rounded-full ml-0 md:mt-5">
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
        <CarouselPrevious className="hidden md:block absolute left-4 p-8 text-center hover:bg-black hover:text-white" />
        <CarouselNext className="hidden md:block absolute  right-4 p-8 text-center hover:bg-black hover:text-white" />
      </Carousel>
    </div>
  );
};

export default MyCarousel;
