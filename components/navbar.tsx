"use client";
import Link from "next/link";
import { useState } from "react";
import { FaTimes, FaBars, FaSignOutAlt } from "react-icons/fa";
import Image from "next/image";

import { ShoppingCart } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems] = useState([
    { id: 1, name: "Burger", price: 50, quantity: 2 },
  ]);

  const handleLogout = () => {
    console.log("User logged out");
  };
  return (
    <nav className="bg-orange-400/30 backdrop-blur-3xl shadow-sm text-white fixed top-0 left-0 w-full z-50 py-5">
      <div className="container mx-auto flex justify-between items-center px-4 relative">
        {/* Hamburger Menu */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden cursor-pointer text-lg text-gray-300"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Store Name in Center */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link href="/">
            <Image
              src="/Logo.png" // Path to your logo image
              alt="Store Logo"
              width={80} // Define width (28*4 for scale)
              height={80} // Set height to auto, maintaining aspect ratio
              className="w-20 h-14"
            />
          </Link>
        </div>

        {/* Right Side (Cart & Login) */}
        <div className="ml-auto flex items-center space-x-4">
          {/* Cart Icon */}
          <button onClick={() => setCartOpen(!cartOpen)} className="relative">
            <ShoppingCart
              size={24}
              className="text-gray-300 hover:text-neutral-400  cursor-pointer transition"
            />
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                {cartItems.length}
              </span>
            )}
          </button>

          {/* Cart Dropdown */}
          {cartOpen && (
            <div className="fixed top-12 right-2 w-72 bg-black shadow-lg rounded-lg p-4 z-50">
              <button
                onClick={() => setCartOpen(false)}
                className="absolute top-2 right-2 text-white active:text-red-500 cursor-pointer"
              >
                <FaTimes size={16} />
              </button>
              <h3 className="text-md font-semibold mb-2">Cart Items</h3>
              {cartItems.length > 0 ? (
                <div className="max-h-60 overflow-y-auto ">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between p-2 border-b"
                    >
                      <div>
                        <p className="text-sm font-medium">{item.name}</p>
                        <p className="text-xs text-gray-500">R{item.price}</p>
                      </div>
                      <p className="text-xs font-semibold">
                        QTY: {item.quantity}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-sm text-center ">
                  Your cart is empty.
                </p>
              )}
              <Link href="/cart">
                <button
                  onClick={() => setCartOpen(false)}
                  className="mt-3 w-full cursor-pointer font-semibold bg-yellow-500 text-black py-2 rounded-lg hover:bg-white transition"
                >
                  View Cart
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed z-20 top-0 bottom-0 left-0 bg-black text-white p-8 flex flex-col items-start space-y-6 md:hidden transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } min-h-screen`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-4 right-4 text-white text-xl cursor-pointer"
        >
          <FaTimes />
        </button>

        {/* User Section */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-12 h-12 rounded-full bg-orange-400/30 text-center flex items-center justify-center font-bold mb-2">
            A
          </div>
          <p className="text-md">Welcome, Sipho!</p>
        </div>

        {/* Navigation Links */}
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
            <FaBars size={20} /> <span>Profile</span>
          </Link>
          <Link
            href="/order"
            onClick={() => setMenuOpen(false)}
            className="flex items-center space-x-2 p-2 w-full rounded-xl active:bg-yellow-500 active:text-black transition duration-200"
          >
            <FaBars size={20} /> <span>My Orders</span>
          </Link>
          <Link
            href="/wishlist"
            onClick={() => setMenuOpen(false)}
            className="flex items-center space-x-2 p-2 w-full rounded-xl active:bg-yellow-500 active:text-black transition duration-200"
          >
            <FaBars size={20} /> <span>Wishlist</span>
          </Link>
        </div>

        <div className="w-full border-t-2 border-white my-4"></div>

        {/* Logout Section */}
        <div className="mt-auto w-full text-sm">
          <button
            onClick={() => {
              setMenuOpen(false);
              handleLogout();
            }}
            className="flex items-center space-x-2  p-2 w-full rounded-xl bg-orange-400/30 active:bg-yellow-500 active:text-black transition duration-200 cursor-pointer"
          >
            <FaSignOutAlt size={20} /> <span>Logout</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
