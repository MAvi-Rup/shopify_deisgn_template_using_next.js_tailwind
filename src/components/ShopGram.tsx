import Image from "next/image";
import CartIcon from "./SVG/CartIcon";

const ShopGram = () => {
  return (
    <div className="mb-8">
      <div className="container mt-16">
        <div className="">
          <h1 className="text-2xl md:text-5xl text-center text-black">
            Shop by Gram
          </h1>
          <p className="text-center text-lg text-zinc-600 mt-4 mb-5">
            Inspire and let yourself be inspired, from one unique fashion to
            another.
          </p>
        </div>
      </div>
      <div className="px-4 md:px-20 mt-4 md:mt-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-1">
          <div className="relative">
            <Image
              className="rounded-lg"
              src="/gram1.png"
              alt="Gram 1"
              layout="responsive"
              width={100}
              height={100}
            />
            <div className="absolute right-2 top-2">
              <CartIcon />
            </div>
          </div>
          <div className="relative">
            <Image
              className="rounded-lg"
              src="/gram2.png"
              alt="Gram 2"
              layout="responsive"
              width={100}
              height={100}
            />
            <div className="absolute right-2 top-2">
              <CartIcon />
            </div>
          </div>
          <div className="hidden md:block relative">
            <Image
              className="rounded-lg"
              src="/gram3.png"
              alt="Gram 3"
              layout="responsive"
              width={100}
              height={100}
            />
            <div className="absolute right-2 top-2">
              <CartIcon />
            </div>
          </div>
          <div className="hidden md:block relative">
            <Image
              className="rounded-lg"
              src="/gram6.png"
              alt="Gram 6"
              layout="responsive"
              width={100}
              height={100}
            />
            <div className="absolute right-2 top-2">
              <CartIcon />
            </div>
          </div>
          <div className="hidden md:block relative">
            <Image
              className="rounded-lg"
              src="/gram5.png"
              alt="Gram 5"
              layout="responsive"
              width={100}
              height={100}
            />
            <div className="absolute right-2 top-2">
              <CartIcon />
            </div>
          </div>
          <div className="hidden md:block relative">
            <Image
              className="rounded-lg"
              src="/gram6.png"
              alt="Gram 6"
              layout="responsive"
              width={100}
              height={100}
            />
            <div className="absolute right-2 top-2">
              <CartIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopGram;
