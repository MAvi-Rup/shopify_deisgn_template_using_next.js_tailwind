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
      <div className=" px-4 md:px-20 mt-4 md:mt-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-1">
          <div className="relative">
            <img className="rounded-lg" src="./gram1.png" />
            <div className=" absolute right-2 top-2">
              <CartIcon />
            </div>
          </div>
          <div className="relative">
            <img className="rounded-lg" src="./gram2.png" />
            <div className=" absolute right-2 top-2">
              <CartIcon />
            </div>
          </div>
          <div className="hidden md:block relative">
            <img className="rounded-lg" src="./gram3.png" />
            <div className=" absolute right-2 top-2">
              <CartIcon />
            </div>
          </div>
          <div className=" hidden md:block relative">
            <img className="rounded-lg" src="./gram6.png" />
            <div className=" absolute right-2 top-2">
              <CartIcon />
            </div>
          </div>
          <div className="hidden md:block relative">
            <img className="rounded-lg" src="./gram5.png" />
            <div className=" absolute right-2 top-2">
              <CartIcon />
            </div>
          </div>
          <div className="hidden md:block relative">
            <img className="rounded-lg" src="./gram6.png" />
            <div className=" absolute right-2 top-2">
              <CartIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopGram;
