"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaStar, FaSearch } from "react-icons/fa";
import Image from "next/image";

export default function HomePage() {
  const [location, setLocation] = useState("");

  return (
    <div className="bg-black min-h-screen text-white font-sans">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center p-12 bg-gradient-to-b from-yellow-500 via-yellow-600 to-black text-black">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg leading-tight">
          Fast, Fresh, Local – Delivered to You!
        </h1>
        <p className="mt-4 text-lg text-gray-300 font-light md:max-w-2xl mx-auto">
          Order from the best local restaurants in town and get it delivered to
          your door.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-md max-w-lg w-full">
            <FaMapMarkerAlt className="text-yellow-500" />
            <input
              type="text"
              placeholder="Enter your location"
              className="text-black w-full focus:outline-none"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <FaSearch className="text-gray-600 cursor-pointer" />
          </div>
          <button className="px-6 py-2 bg-black text-yellow-500 font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-101 transition-transform md:w-auto w-full">
            Set Location
          </button>
        </div>
      </section>

      {/* Restaurants Section */}
      <section className="p-12">
        <h2 className="text-3xl font-semibold text-yellow-500 mb-6">
          Top Restaurants
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((id) => (
            <motion.div
              key={id}
              className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
            >
              <Image
                src={`/food${id}.jpg`}
                alt="Restaurant"
                width={300}
                height={200}
                className="rounded-md w-full h-40 object-cover"
              />
              <h3 className="mt-3 text-xl font-semibold text-white">
                Restaurant {id}
              </h3>
              <p className="text-sm text-gray-400">Best dishes in town</p>
              <div className="flex items-center justify-between mt-3">
                <span className="flex items-center text-yellow-500">
                  <FaStar /> 4.{id}{" "}
                </span>
                <button className="px-4 py-2 bg-yellow-500 text-black rounded-md hover:bg-yellow-400 transition-colors">
                  Order Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Deals & Promotions Section */}
      <section className="p-12 bg-gradient-to-r from-gray-900 via-black to-gray-800">
        <h2 className="text-3xl font-semibold text-yellow-500 mb-8 text-center">
          Exclusive Deals
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Deal 1 */}
          <motion.div
            className="bg-gray-900 rounded-lg shadow-lg flex flex-col overflow-hidden"
            transition={{ duration: 0.3 }}
          >
            <div className="relative">
              <Image
                src="/food2.jpg" // Add your image here
                alt="50% Off on Burgers"
                width={400}
                height={250}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 text-white font-semibold text-xl bg-black bg-opacity-60 px-4 py-2 rounded-md">
                50% Off on Burgers
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-400 text-sm mb-4">Limited time offer!</p>
              <button className="px-6 py-2 bg-yellow-500 text-black rounded-md hover:bg-yellow-400 transition-colors">
                Grab Deal
              </button>
            </div>
          </motion.div>

          {/* Deal 2 */}
          <motion.div
            className="bg-gray-900 rounded-lg shadow-lg flex flex-col overflow-hidden"
            transition={{ duration: 0.3 }}
          >
            <div className="relative">
              <Image
                src="/food3.jpg" // Add your image here
                alt="Buy 1 Get 1 Free Pizza"
                width={400}
                height={250}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 text-white font-semibold text-xl bg-black bg-opacity-60 px-4 py-2 rounded-md">
                Buy 1 Get 1 Free Pizza
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-400 text-sm mb-4">Today only!</p>
              <button className="px-6 py-2 bg-yellow-500 text-black rounded-md hover:bg-yellow-400 transition-colors">
                Order Now
              </button>
            </div>
          </motion.div>

          {/* Deal 3 */}
          <motion.div
            className="bg-gray-900 rounded-lg shadow-lg flex flex-col overflow-hidden"
            transition={{ duration: 0.3 }}
          >
            <div className="relative">
              <Image
                src="/food1.jpg" // Add your image here
                alt="Sushi Combo Offer"
                width={400}
                height={250}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 text-white font-semibold text-xl bg-black bg-opacity-60 px-4 py-2 rounded-md">
                Sushi Combo Offer
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-400 text-sm mb-4">
                Fresh sushi at amazing prices!
              </p>
              <button className="px-6 py-2 bg-yellow-500 text-black rounded-md hover:bg-yellow-400 transition-colors">
                Order Now
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-6 text-center text-gray-400 bg-black">
        &copy; {new Date().getFullYear()} ZaiEats - All Rights Reserved
      </footer>
    </div>
  );
}
