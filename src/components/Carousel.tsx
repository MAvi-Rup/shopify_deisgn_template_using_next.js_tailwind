"use client";
import { Button } from "@/components/ui/button";
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
    title: "Stylish Top Trending",
    subtitle: "So soft, you don't want to take it off.",
    buttonText: "SHOP NOW",
  },
  {
    image: "/slider2.jpg",
    title: "New Arrivals",
    subtitle: "Discover the latest trends.",
    buttonText: "EXPLORE",
  },
  {
    image: "/slider3.jpg",
    title: "Summer Collection",
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
                  height={400}
                  alt={`Slide ${index + 1}`}
                  className="object-cover"
                  style={{ marginTop: "-80px" }}
                />

                <div className="absolute inset-0 flex flex-col justify-center items-start p-2 lg:p-10 bg-opacity-30 text-black">
                  <div className="ml-5 md:ml-48">
                    <h2 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4">
                      {slide.title}
                    </h2>
                    <p className="text-lg md:text-xl mb-4">{slide.subtitle}</p>
                    <Button
                      variant="outline"
                      className="bg-black text-white px-6 py-3 md:px-10 md:py-4 rounded-full text-center"
                    >
                      {slide.buttonText}
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:block absolute top-1/2 left-4 transform -translate-y-1/2 z-10" />
        <CarouselNext className="hidden md:block absolute top-1/2 right-4 transform -translate-y-1/2 z-10" />
      </Carousel>
    </div>
  );
};

export default MyCarousel;
