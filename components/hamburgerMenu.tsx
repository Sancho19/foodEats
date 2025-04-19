// components/HamburgerMenu.tsx
"use client";

import { useState } from "react";
import { FaBars, FaTimes, FaSignOutAlt } from "react-icons/fa";
import Link from "next/link";
import {
  CarFront,
  ReceiptText,
  ShoppingBasket,
  ShoppingCart,
  User,
} from "lucide-react";

export default function HamburgerMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    console.log("User logged out");
  };

  return (
    <>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="fixed top-5 left-4 z-50 text-white text-xl md:hidden cursor-pointer"
      >
        {menuOpen ? "" : <FaBars />}
      </button>
      {/* Backdrop Blur Overlay */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 z-30 bg-black/50 backdrop-blur-xs md:hidden"
        />
      )}
      <div
        className={`fixed z-40 top-0 bottom-0 left-0 bg-black text-white p-8 flex flex-col items-start space-y-6 md:hidden transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } min-h-screen w-56`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-4 right-4 text-white text-xl cursor-pointer"
        >
          <FaTimes />
        </button>

        <div className="flex flex-col items-center mb-6 mt-2">
          <div className="w-12 h-12 rounded-full bg-yellow-800 text-center flex items-center justify-center font-bold mb-2">
            S
          </div>
          <p className="text-md">Welcome, Sipho!</p>
        </div>

        <div className="w-full space-y-4 text-sm">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="flex items-center space-x-2 p-2 w-full rounded-xl active:bg-yellow-500 active:text-black transition duration-200"
          >
            <ShoppingCart size={20} /> <span>Restaurants</span>
          </Link>
          <Link
            href="/profile"
            onClick={() => setMenuOpen(false)}
            className="flex items-center space-x-2 p-2 w-full rounded-xl active:bg-yellow-500 active:text-black transition duration-200"
          >
            <User size={20} /> <span>Profile</span>
          </Link>
          <Link
            href="/order"
            onClick={() => setMenuOpen(false)}
            className="flex items-center space-x-2 p-2 w-full rounded-xl active:bg-yellow-500 active:text-black transition duration-200"
          >
            <ReceiptText size={20} /> <span>My Orders</span>
          </Link>
          <Link
            href="/cart"
            onClick={() => setMenuOpen(false)}
            className="flex items-center space-x-2 p-2 w-full rounded-xl active:bg-yellow-500 active:text-black transition duration-200"
          >
            <ShoppingBasket size={20} /> <span>My Cart</span>
          </Link>
          <Link
            href="/driver"
            onClick={() => setMenuOpen(false)}
            className="flex items-center space-x-2 p-2 w-full rounded-xl active:bg-yellow-500 active:text-black transition duration-200"
          >
            <CarFront size={20} /> <span>Become a Driver</span>
          </Link>
        </div>

        <div className="w-full border-t-2 border-white my-4" />

        <div className="mt-auto w-full text-sm">
          <button
            onClick={() => {
              setMenuOpen(false);
              handleLogout();
            }}
            className="flex items-center space-x-2  p-2 w-full rounded-xl bg-yellow-800 active:bg-yellow-500 active:text-black transition duration-200 cursor-pointer"
          >
            <FaSignOutAlt size={20} /> <span>Logout</span>
          </button>
        </div>
      </div>
    </>
  );
}
