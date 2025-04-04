"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function Cart() {
  type CartItem = {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
  };

  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Zai Burger",
      price: 85,
      quantity: 2,
      image: "/deal2.jpg",
    },
    {
      id: 2,
      name: "Pizza",
      price: 120,
      quantity: 1,
      image: "/deal3.png",
    },
  ]);

  const handleAdd = (item: CartItem) => {
    setCartItems((prev) =>
      prev.map((i) =>
        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
      )
    );
  };

  const handleRemove = (item: CartItem) => {
    setCartItems((prev) =>
      prev
        .map((i) =>
          i.id === item.id ? { ...i, quantity: Math.max(1, i.quantity - 1) } : i
        )
        .filter((i) => i.quantity > 0)
    );
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const deliveryFee = subtotal > 0 ? 25 : 0;
  const total = subtotal + deliveryFee;
  return (
    <>
      <Navbar />
      <div className="container mt-12 px-2 py-10 min-h-screen ">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold mb-6 text-center"
        >
          Your Cart
        </motion.h1>

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-400">Your cart is empty.</p>
        ) : (
          <>
            <div className="grid gap-6 lg:grid-cols-3">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-6">
                {cartItems.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center py-4 justify-between p-4 shadow-md shadow-neutral-900 rounded-xl transition duration-300 "
                  >
                    <div className="flex items-center space-x-6">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={80}
                        height={80}
                        className="object-cover rounded-md"
                      />
                      <div>
                        <p className="text-md font-medium">{item.name}</p>
                        <p className="text-neutral-500 text-sm">
                          R{item.price}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col items-end space-y-2">
                      <p className="text-lg font-semibold">
                        R{item.price * item.quantity}
                      </p>
                      <div className="flex items-center space-x-4">
                        <button
                          onClick={() => handleRemove(item)}
                          className="text-xl text-red-600 active:text-red-800"
                        >
                          -
                        </button>
                        <span className="text-xs font-medium">
                          QTY: {item.quantity}
                        </span>
                        <button
                          onClick={() => handleAdd(item)}
                          className="text-xl text-green-600 active:text-green-800"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="w-full h-[1px] bg-yellow-500/50 opacity-10 mt-6"></div>
              {/* Summary Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                className=" p-6 rounded-xl shadow-md"
              >
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                <div className="flex justify-between mb-2 text-sm">
                  <span>Subtotal</span>
                  <span>R {subtotal}</span>
                </div>
                <div className="flex justify-between mb-2 text-sm">
                  <span>Delivery</span>
                  <span>R {deliveryFee}</span>
                </div>
                <div className="border-t border-gray-300 my-3" />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>R {total}</span>
                </div>
                <button className="mt-6 w-full text-black py-2 rounded-lg bg-yellow-500 active:bg-white active:text-black transition">
                  Browse Restaurants
                </button>
                <button className="mt-6 w-full  py-2 rounded-lg bg-green-900/60 text-white active:bg-white active:text-black transition">
                  Proceed to Checkout
                </button>
              </motion.div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}
