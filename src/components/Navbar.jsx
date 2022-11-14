import React, { useState } from "react";
import {
  AiFillTag,
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaWallet, FaUserFriends } from "react-icons/fa";

const menus = [
  {
    title: "Orders",
    icon: <TbTruckDelivery />,
  },
  {
    title: "Favourites",
    icon: <MdFavorite />,
  },
  {
    title: "Wallet",
    icon: <FaWallet />,
  },
  {
    title: "Help",
    icon: <MdHelp />,
  },
  {
    title: "Promotions",
    icon: <AiFillTag />,
  },
  {
    title: "Best Ones",
    icon: <BsFillSaveFill />,
  },
  {
    title: "Invite Friends",
    icon: <FaUserFriends />,
  },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* left side */}
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Best <span className="font-bold">Eats</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-black rounded-full text-white p-2">Delivery</p>
          <p className="p-2 ">Pickup</p>
        </div>
      </div>

      {/* search input */}

      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px]">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent p-2 focus:outline-none w-full"
          type="text"
          name=""
          id=""
          placeholder="search foods"
        />
      </div>

      {/* cart button */}
      <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full">
        <BsFillCartFill size={20} className="mr-2" /> Cart
      </button>

      {/* mobile menu */}

      {/* overlay */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}
      {/* side drawer menu */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen z-10 bg-white duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen z-10 bg-white duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4">
          Best <span className="font-bold">Eats</span>
        </h2>
        <ul className="flex flex-col p-4 text-gray-800">
          {menus.map((menu, index) => (
            <li
              key={index}
              className="text-xl py-4 flex justify-start items-center"
            >
              <span className="mr-4 ">{menu.icon}</span>
              {menu.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
