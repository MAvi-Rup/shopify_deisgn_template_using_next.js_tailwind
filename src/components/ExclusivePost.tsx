"use client";

const ExclusivePost = () => {
  return (
    <div className="overflow-x-auto w-screen ">
      <div className="flex gap-8 px-8 mb-5 mt-5 md:mt-10 md:mb-10 justify-center">
        {[
          {
            image: "/exclusive.jpg",
            caption: "ONLINE EXCLUSIVE",
            title: "Oversized Shirt",
          },
          {
            image: "/exclusive2.jpg",
            caption: "BEST-SELLERS",
            title: "Unique SS'23",
          },
          {
            image: "/exclusive3.jpg",
            caption: "LIMITED EDITION",
            title: "Autumn Trending",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="relative cursor-pointer overflow-hidden flex-shrink-0 group"
            style={{ width: "450px", height: "600px" }}
          >
            <img
              src={item.image}
              className="w-full h-full object-cover rounded transition ease-out hover:scale-110 duration-300"
              alt={item.title}
            />
            <div className="absolute bottom-4 left-4 text-black">
              <p className="text-xs uppercase">{item.caption}</p>
              <h3 className="text-3xl font-medium mb-1">{item.title}</h3>
              <span className="text-xs uppercase relative inline-block">
                SHOP THE LOOK
                <span className="absolute left-0 bottom-0 w-full h-px bg-black transform scale-x-0 group-hover:scale-x-100  transition-transform duration-300  "></span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExclusivePost;
{
  /* <span className="absolute left-0 bottom-0 w-full h-px bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span> */
}
