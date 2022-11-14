import React from "react";

const cards = [
  {
    title: "Sun's Out, BOGO's Out",
    description: "Through 8/26",
    image:
      "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "New Restaurants",
    description: "Added Daily",
    image:
      "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "We Deliver Desserts Too",
    description: "Tasty Treats",
    image:
      "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto px-4 py-12 grid md:grid-cols-3 gap-6">
      {/* card */}
      {cards.map((card, index) => (
        <div key={card.index} className="rounded-xl relative">
          {/* overlay */}
          <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
            <p className="font-bold text-2xl px-2 pt-4">{card.title}</p>
            <p className="px-2">{card.description}</p>
            <button className="border-white bg-white text-black mx-2 absolute bottom-4">
              Order Now
            </button>
          </div>
          <img
            className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
            src={card.image}
            alt=""
          />
        </div>
      ))}
    </div>
  );
};

export default HeadlineCards;
