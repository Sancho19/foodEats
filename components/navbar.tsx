"use client";
import Link from "next/link";
import { useState } from "react";
import { FaTimes, FaBars, FaSignOutAlt } from "react-icons/fa";
import Image from "next/image";

import {
  CarFront,
  ReceiptText,
  ShoppingBasket,
  ShoppingCart,
  User,
} from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems] = useState([
    { id: 1, name: "Cheese Burger", price: 50, quantity: 2 },
    { id: 2, name: "Zai Benedict", price: 75, quantity: 2 },
  ]);

  const handleLogout = () => {
    console.log("User logged out");
  };
  return (
    <nav className="bg-yellow-700 backdrop-blur-3xl shadow-sm text-white fixed top-0 left-0 w-full z-50 py-5">
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
              className="text-gray-300 active:text-neutral-400  cursor-pointer transition"
            />
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                {cartItems.length}
              </span>
            )}
          </button>

          {/* Cart Dropdown */}
          {cartOpen && (
            <div className="fixed top-12 right-2 w-75 bg-black shadow-xl rounded-xl p-4 z-50 space-y-4">
              <button
                onClick={() => setCartOpen(false)}
                className="absolute top-2 right-2"
              >
                <FaTimes size={16} />
              </button>

              <h3 className="text-md font-semibold mb-3">Cart Items</h3>

              {cartItems.length > 0 ? (
                <div className="space-y-4 max-h-64 overflow-y-auto pr-1">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between p-2 rounded-lg shadow-sm border border-neutral-200/20"
                    >
                      <div className="flex items-center space-x-4">
                        <div>
                          <p className="text-sm font-semibold">{item.name}</p>
                          <p className="text-xs text-gray-400">R{item.price}</p>
                        </div>
                      </div>
                      <div className="text-right text-xs font-medium">
                        <p>Qty: {item.quantity}</p>
                        <p className="text-gray-400 mt-1">
                          R{item.price * item.quantity}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400 text-sm text-center mt-4">
                  Your cart is empty.
                </p>
              )}

              <Link href="/cart">
                <button
                  onClick={() => setCartOpen(false)}
                  className="w-full mt-1 bg-yellow-500 text-black text-sm font-semibold py-2 rounded-lg hover:bg-yellow-400 transition"
                >
                  View Full Cart
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
          <div className="w-12 h-12 rounded-full bg-yellow-800 text-center flex items-center justify-center font-bold mb-2">
            S
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
          {/* <Link
            href="/wishlist"
            onClick={() => setMenuOpen(false)}
            className="flex items-center space-x-2 p-2 w-full rounded-xl active:bg-yellow-500 active:text-black transition duration-200"
          >
            <FaBars size={20} /> <span>Wishlist</span>
          </Link> */}
        </div>

        <div className="w-full border-t-2 border-white my-4"></div>

        {/* Logout Section */}
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
    </nav>
  );
}
