"use client";

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
      <div className=" px-8 md:px-20 mt-4 md:mt-16">
        <div className="grid grid-cols-3 gap-4">
          <div className="relative">
            <img
              className="rounded w-full"
              src="./feature1.jpg"
              alt="Clothings"
            />
            <button className="absolute font-semibold bottom-7 left-1/2 transform -translate-x-1/2 py-2 px-8 md:py-4 md:px-16 bg-zinc-50 text-black rounded-full text-center opacity-100 ">
              Clothings
            </button>
          </div>
          <div>
            <div className="relative mb-2 md:mb-9">
              <img
                className="rounded w-full"
                src="./feature2.jpg"
                alt="Sunglass"
              />
              <button className="absolute font-semibold bottom-7 left-1/2 transform -translate-x-1/2 py-2 px-8 md:py-4 md:px-16 bg-zinc-50 text-black rounded-full text-center opacity-100 ">
                Sunglass
              </button>
            </div>
            <div className="relative">
              <img className="rounded w-full" src="./feature3.jpg" alt="Bag" />
              <button className="absolute font-semibold bottom-7 left-1/2 transform -translate-x-1/2 py-2 px-8 md:py-4 md:px-16 bg-zinc-50 text-black rounded-full text-center opacity-100 ">
                Bag
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              className="rounded w-full"
              src="./feature4.jpg"
              alt="Sneakers"
            />
            <button className="absolute font-semibold bottom-7 left-1/2 transform -translate-x-1/2 py-2 px-8 md:py-4 md:px-16 bg-zinc-50 text-black rounded-full text-center opacity-100 ">
              Sneakers
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureContent;
