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
  const [isDelivery, setIsDelivery] = useState(true);

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
  const deliveryFee = isDelivery && subtotal > 0 ? 25 : 0;

  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === "zai10") {
      setDiscount(10);
    } else {
      setDiscount(0);
    }
  };

  const estimatedTime = `${30 + cartItems.length * 5} mins`;

  const total = subtotal + deliveryFee - discount;

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
                          className="text-xl text-red-600 active:text-red-800 cursor-pointer"
                        >
                          -
                        </button>
                        <span className="text-xs font-medium">
                          QTY: {item.quantity}
                        </span>
                        <button
                          onClick={() => handleAdd(item)}
                          className="text-xl text-green-600 active:text-green-800 cursor-pointer"
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
                {/* Delivery Mode Toggle */}
                <div className="flex justify-center gap-4 mb-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="deliveryOption"
                      value="delivery"
                      checked={deliveryFee > 0}
                      onChange={() => setIsDelivery(true)}
                      className="accent-yellow-600"
                    />
                    <span className="text-sm font-medium">Delivery</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="deliveryOption"
                      value="collection"
                      checked={deliveryFee === 0}
                      onChange={() => setIsDelivery(false)}
                      className="accent-yellow-600"
                    />
                    <span className="text-sm font-medium">Collection</span>
                  </label>
                </div>

                <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
                <div className="text-sm text-gray-500 mb-4">
                  {isDelivery ? (
                    <>
                      Estimated delivery:{" 25 mins"}
                      <span className="font-medium text-black">
                        {estimatedTime}
                      </span>
                    </>
                  ) : (
                    <span className="font-medium text-black">
                      Ready for collection in 15 mins
                    </span>
                  )}
                </div>

                <div className="flex justify-between mb-2 text-sm">
                  <span>Subtotal</span>
                  <span>R {subtotal}</span>
                </div>
                <div className="flex justify-between mb-2 text-sm">
                  <span>Delivery</span>
                  <span>R {deliveryFee}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between mb-2 text-sm text-green-600 font-medium">
                    <span>Discount</span>
                    <span>- R {discount}</span>
                  </div>
                )}

                <div className="border-t border-gray-300 my-3" />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>

                  <span>R {total}</span>
                </div>
                {/* Promo Code Field */}
                <div className="mt-4">
                  <input
                    type="text"
                    placeholder="Promo Code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="w-full p-2 rounded-lg border border-gray-300 text-sm focus:outline-none"
                  />
                  <button
                    onClick={applyPromoCode}
                    className="mt-4 w-full py-1 rounded-lg bg-blue-600 text-white active:bg-blue-800 transition"
                  >
                    Apply Promo Code
                  </button>
                </div>
                <button className="mt-8 w-full text-black py-2 rounded-lg bg-yellow-500 active:bg-white active:text-black transition cursor-pointer">
                  Browse Restaurants
                </button>
                <button className="mt-6 w-full  py-2 rounded-lg bg-green-900/60 text-white active:bg-white active:text-black transition cursor-pointer">
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
