import Image from "next/image";

const FeatureContent = () => {
  return (
    <div className="mb-8">
      <div className="container mt-16">
        <div className="">
          <h1 className="text-2xl md:text-5xl text-center text-black">
            Featured Collections
          </h1>
          <p className="text-center text-lg text-zinc-600 mt-4 mb-5">
            Upgrade your style with our curated sets. Choose confidence, embrace
            your unique look.
          </p>
        </div>
      </div>
      <div className=" px-8 md:px-20 mt-4 md:mt-16 overflow-hidden relative">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <div className="relative overflow-hidden aspect-w-1 aspect-h-1">
              <Image
                className="rounded-md hover:scale-110 duration-300"
                src="/feature1.jpg"
                alt="Clothings"
                layout="fill"
                objectFit="cover"
              />
              <button className="absolute font-semibold bottom-1 md:bottom-7 left-1/2 transform -translate-x-1/2 py-2 px-6 md:py-4 md:px-16 bg-zinc-50 text-black rounded-full text-center opacity-100 ">
                Clothings
              </button>
            </div>

            {/* sunglass for small screeen */}

            <div className="relative mb-2 md:mb-7 overflow-hidden md:hidden mt-2 aspect-w-1 aspect-h-1">
              <Image
                className="rounded-md hover:scale-110 duration-300"
                src="/feature2.jpg"
                alt="Sunglass"
                layout="fill"
                objectFit="cover"
              />
              <button className="absolute font-semibold bottom-1 md:bottom-7 left-1/2 transform -translate-x-1/2 py-2 px-8 md:py-4 md:px-16 bg-zinc-50 text-black rounded-full text-center opacity-100 ">
                Sunglass
              </button>
            </div>
          </div>
          <div>
            <div className=" hidden md:block relative mb-2 md:mb-7 overflow-hidden aspect-w-1 aspect-h-1">
              <Image
                className="rounded-md hover:scale-110 duration-300"
                src="/feature2.jpg"
                alt="Sunglass"
                layout="fill"
                objectFit="cover"
              />
              <button className="absolute font-semibold bottom-1 md:bottom-7 left-1/2 transform -translate-x-1/2 py-2 px-8 md:py-4 md:px-16 bg-zinc-50 text-black rounded-full text-center opacity-100 ">
                Sunglass
              </button>
            </div>
            <div className="relative overflow-hidden aspect-w-1 aspect-h-1">
              <Image
                className="rounded-md hover:scale-110 duration-300"
                src="/feature3.jpg"
                alt="Bag"
                layout="fill"
                objectFit="cover"
              />
              <button className="absolute font-semibold bottom-1 md:bottom-7 left-1/2 transform -translate-x-1/2 py-2 px-8 md:py-4 md:px-16 bg-zinc-50 text-black rounded-full text-center opacity-100 ">
                Bag
              </button>
            </div>
            <div className="relative overflow-hidden md:hidden mt-2 aspect-w-1 aspect-h-1">
              <Image
                className="rounded-md hover:scale-110 duration-300"
                src="/feature4.jpg"
                alt="Sneakers"
                layout="fill"
                objectFit="cover"
              />
              <button className="absolute font-semibold bottom-1 md:bottom-7 left-1/2 transform -translate-x-1/2 py-2 px-8 md:py-4 md:px-16 bg-zinc-50 text-black rounded-full text-center opacity-100 ">
                Sneakers
              </button>
            </div>
          </div>
          <div className=" hidden md:block relative overflow-hidden aspect-w-1 aspect-h-1">
            <Image
              className="rounded-md hover:scale-110 duration-300"
              src="/feature4.jpg"
              alt="Sneakers"
              layout="fill"
              objectFit="cover"
            />
            <button className="absolute font-semibold bottom-1 md:bottom-7 left-1/2 transform -translate-x-1/2 py-2 px-2 md:py-4 md:px-16 bg-zinc-50 text-black rounded-full text-center opacity-100 ">
              Sneakers
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureContent;
