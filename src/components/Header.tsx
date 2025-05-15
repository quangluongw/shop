import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <>
            {/* Top Header */}
            <div className="top-header bg-black text-white px-4 py-2 flex justify-between items-center text-sm">
                <div className="title-header overflow-hidden">
                    <p>
                        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                        <button className="ml-2 font-bold text-white underline">Shop Now</button>
                    </p>
                </div>
                <div className="change-lg">
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


            <header className=" flex items-center justify-between px-10 py-8 ">

                <div className="logo text-2xl font-bold">Exclusive</div>


                <nav className="hidden lg:flex items-center gap-6">
                    <a href="#" className="text-sm hover:text-gray-600">Home</a>
                    <a href="#" className="text-sm hover:text-gray-600">Contact</a>
                    <a href="#" className="text-sm hover:text-gray-600">About</a>
                    <a href="#" className="text-sm hover:text-gray-600">Sign Up</a>


                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Tìm kiếm"
                            className="px-3 py-1.5 bg-gray-100 rounded-md text-sm"
                        />

                    </div>


                    <div className="flex items-center gap-4 text-lg">
                        <span>Favorite</span>
                        <span>Cart</span>
                        <span>User</span>
                    </div>
                </nav>


                <div className="bg-black lg:hidden flex items-center justify-between px-4 py-2 rounded-md ">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-2xl focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        ☰
                    </button>
                </div>
            </header>


            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="lg:hidden bg-white shadow-md px-4 py-3 space-y-2 overflow-hidden border m-1"
                    >
                        <a href="#" className="block text-sm">Home</a>
                        <a href="#" className="block text-sm">Contact</a>
                        <a href="#" className="block text-sm">About</a>
                        <a href="#" className="block text-sm">Sign Up</a>
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
