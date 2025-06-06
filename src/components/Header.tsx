import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { FaCartShopping, FaRegCircleUser } from "react-icons/fa6";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      {/* Top Header */}
      <div className="top-header bg-black text-white px-4 py-2 flex justify-between items-center text-sm ">
        <div className="title-header overflow-hidden max-w-[1280px]">
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <button className="ml-2 font-bold text-white underline">
              Shop Now
            </button>
          </p>
        </div>
        <div className="change-lg ">
          <select
            className="bg-black text-white px-4 py-2 rounded-md appearance-none focus:outline-none"
            name="language"
            id="language"
          >
            <option value="1">English</option>
            <option value="2">Tiếng Việt</option>
          </select>
        </div>
      </div>
      <div className="border-b-2">
        <header className=" flex items-center justify-between px-5 py-8 max-w-[1280px] m-auto">
          <div className="logo text-2xl font-bold">Exclusive</div>

          <nav className="hidden lg:flex items-center gap-6">
            <Link to="/" className="text-[16px] hover:text-gray-600">
              Home
            </Link>
            <Link to="#" className="text-[16px] hover:text-gray-600">
              Contact
            </Link>
            <Link to="#" className="text-[16px] hover:text-gray-600">
              About
            </Link>
            <Link to="#" className="text-[16px] hover:text-gray-600">
              Sign Up
            </Link>
          </nav>
          <div className="lg:flex items-center gap-8 hidden">
            <div className="relative">
              <input
                type="text"
                placeholder="Tìm kiếm"
                className="px-3 py-1.5 bg-gray-100 rounded-md text-sm"
              />
            </div>
            <div className="flex items-center gap-4 text-xl">
              <FaRegHeart />
              <Link to="cart">
              <FaCartShopping />
              </Link>
              <Link to="/accout">
              <FaRegCircleUser  />
              </Link>
            </div>
          </div>
          <div className="bg-black text-white lg:hidden flex items-center justify-between px-4 py-2 rounded-md ">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-2xl focus:outline-none"
              aria-label="Toggle menu"
            >
              ☰
            </button>
          </div>
        </header>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-white shadow-md px-4 py-3 space-y-2 overflow-hidden border m-1"
          >
            <Link to="#" className="block text-sm">
              Home
            </Link>
            <Link to="#" className="block text-sm">
              Contact
            </Link>
            <Link to="#" className="block text-sm">
              About
            </Link>
            <Link to="#" className="block text-sm">
              Sign Up
            </Link>
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-3 py-1.5 bg-gray-100 rounded-md text-sm"
            />
            <div className="flex gap-4 text-lg">
              <span>Favorite</span>
              <span>Cart</span>
              <span>User</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
