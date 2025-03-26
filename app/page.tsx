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
      <section className="relative flex flex-col items-center justify-center text-center p-12 bg-gradient-to-b from-yellow-800 via-yellow-600 to-black text-black">
        <h1 className="text-6xl font-extrabold drop-shadow-lg text-white tracking-wide mb-4">
          ZaiEats
        </h1>
        <h2 className="text-2xl font-extrabold drop-shadow-lg mb-4">
          Fast, Fresh, Local – Delivered to You!
        </h2>
        <p className="mt-3 text-md text-white">
          Order from the best restaurants in town.
        </p>
        <div className="flex mt-6 space-x-4">
          <div className="flex items-center space-x-2 bg-white px-4 my-2 rounded-full">
            <FaMapMarkerAlt className="text-yellow-800" />
            <input
              type="text"
              placeholder="Enter your location"
              className="text-gray-800 text-md focus:outline-none"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <FaSearch className="text-gray-500 cursor-pointer" />
          </div>
          <button className="px-4 py-2 bg-black text-yellow-500 text-xs font-semibold rounded-xl hover:shadow-xl   cursor-pointer ">
            Set Location
          </button>
        </div>
      </section>

      {/* Restaurants Section */}
      <section className="p-12 bg-black">
        <h2 className="text-3xl font-bold text-yellow-500 mb-12 text-center">
          Top Restaurants
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {[1, 2, 3, 4].map((id) => (
            <motion.div
              key={id}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:shadow-lg"
            >
              {/* Image with gradient overlay */}
              <div className="relative">
                <Image
                  src={`/food${id}.jpg`} // Replace with your image paths
                  alt={`Restaurant ${id}`}
                  width={400}
                  height={250}
                  className="w-full h-full object-cover transition duration-300 ease-in-out"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-black to-transparent opacity-100" />
                <div className="absolute bottom-4 left-6 text-white font-semibold text-2xl z-10">
                  Restaurant {id}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col justify-between">
                <p className="text-gray-400 text-sm mb-4">
                  Best dishes in town
                </p>
                <div className="flex items-center justify-between">
                  <span className="flex items-center text-yellow-400 text-sm font-semibold">
                    <FaStar className="mx-2" /> 4.{id}
                  </span>
                  <button className="px-4 py-2 bg-yellow-400 text-black text-sm font-bold cursor-pointer tracking-wider rounded-md hover:bg-black hover:text-yellow-400 transition-colors ease-in-out">
                    Order Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Deals & Promotions Section */}
      <section className="p-12 bg-black">
        <h2 className="text-3xl font-semibold text-yellow-500 mb-8 text-center">
          Exclusive Deals
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Deal 1 */}
          <motion.div
            className="bg-gray-950 rounded-lg shadow-lg flex flex-col overflow-hidden"
            transition={{ duration: 0.3 }}
          >
            <div className="relative">
              <Image
                src="/food2.jpg" // Add your image here
                alt="50% Off on Burgers"
                width={200}
                height={150}
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-4 left-4 text-white font-semibold text-lg bg-black bg-opacity-60 px-4 py-2 rounded-lg">
                50% Off on Burgers
              </div>
            </div>
            <div className="p-3 mx-3">
              <p className="text-gray-400 text-sm mb-4">Limited time offer !</p>
              <button className="px-4 py-1 bg-yellow-400 text-black rounded-md hover:bg-gray-900 cursor-pointer text-md tracking-wide  font-semibold hover:text-yellow-500 transition-colors">
                Grab Deal
              </button>
            </div>
          </motion.div>

          {/* Deal 2 */}
          <motion.div
            className="bg-gray-950 rounded-lg shadow-lg flex flex-col overflow-hidden"
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
              <div className="absolute bottom-4 left-4 text-white font-semibold text-lg bg-black bg-opacity-60 px-4 py-2 rounded-lg">
                Buy 1 Get 1 Free Pizza
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-400 text-sm mb-4">Today only !</p>
              <button className="px-4 py-1 bg-yellow-400 text-black rounded-md hover:bg-gray-900 cursor-pointer text-md tracking-wide  font-semibold hover:text-yellow-500 transition-colors">
                Order Now
              </button>
            </div>
          </motion.div>

          {/* Deal 3 */}
          <motion.div
            className="bg-gray-950 rounded-lg shadow-lg flex flex-col overflow-hidden"
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
              <div className="absolute bottom-4 left-4 text-white font-semibold text-lg bg-black bg-opacity-60 px-4 py-2 rounded-lg">
                Sushi Combo Offer
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-400 text-sm mb-4">
                Fresh sushi at amazing prices !
              </p>
              <button className="px-4 py-1 bg-yellow-400 text-black rounded-md hover:bg-gray-900 cursor-pointer text-md tracking-wide  font-semibold hover:text-yellow-500 transition-colors">
                Order Now
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-6 text-center text-gray-400 bg-gray-950">
        &copy; {new Date().getFullYear()} ZaiEats - All Rights Reserved
      </footer>
    </div>
  );
}
