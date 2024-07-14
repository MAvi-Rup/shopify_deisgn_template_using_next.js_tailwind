const ExclusivePost = () => {
  return (
    <div className="grid grid-cols-3 gap-8 px-8 mb-5">
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
          className="aspect-[466/605] relative group cursor-pointer"
        >
          <img
            src={item.image}
            className="w-full h-full object-cover rounded"
            alt={item.title}
          />
          <div className="absolute bottom-4 left-4 text-black">
            <p className="text-xs uppercase">{item.caption}</p>
            <h3 className="text-2xl font-normal mb-1">{item.title}</h3>
            <span className="text-xs uppercase relative inline-block">
              SHOP THE LOOK
              <span className="absolute left-0 bottom-0 w-full h-px bg-black"></span>
              <span className="absolute left-0 bottom-0 w-full h-px bg-black opacity-0 group-hover:animate-lineDrawRepeat"></span>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExclusivePost;
