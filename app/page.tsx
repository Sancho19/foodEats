"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaStar, FaSearch } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";

export default function HomePage() {
  const [location, setLocation] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const deals = [
    {
      title: "50% Off on Burgers",
      image: "/deal2.jpg",
      description: "Limited time offer!",
      buttonText: "Grab Deal",
    },
    {
      title: "Buy 1 Get 1 Free Pizza",
      image: "/deal3.png",
      description: "Today only!",
      buttonText: "Order Now",
    },
    {
      title: "Waffle Combo Offer",
      image: "/waffle.jpg",
      description: "Fresh Waffle at amazing prices!",
      buttonText: "Order Now",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % deals.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [deals.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % deals.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + deals.length) % deals.length
    );
  };
  return (
    <div className="bg-black min-h-screen text-white font-sans">
      {/* Hero Section */}
      <motion.section
        className="relative flex flex-col items-center justify-center text-center p-12 bg-gradient-to-b from-yellow-800 to-black text-black"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-7xl font-extrabold drop-shadow-lg text-white tracking-wide mb-2">
          ZaiEats
        </h1>
        <h2 className="text-md text-neutral-400 font-extrabold drop-shadow-lg mb-4">
          Gourmet Moments, Delivered With Elegant Ease.
        </h2>
        <div className="flex mt-6 space-x-4">
          <div className="flex items-center space-x-2 bg-white px-4 my-2 rounded-full">
            <FaMapMarkerAlt className="text-orange-500/80" />
            <input
              type="text"
              placeholder="Enter your location"
              className="text-gray-800 text-sm py-1 focus:outline-none"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <FaSearch className="text-gray-500 cursor-pointer" />
          </div>
          <button className="px-4 py-2 bg-black text-white text-xs rounded-xl hover:shadow-xl font-tangerine cursor-pointer ">
            Set Location
          </button>
        </div>
      </motion.section>
      <motion.section
        className="w-full flex justify-center px-4 md:px-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="p-1 bg-black w-full max-w-4xl rounded-lg shadow-lg">
          <h2
            className="text-2xl font-semibold mb-6 text-center"
            style={{ fontFamily: '"Rye", cursive' }}
          >
            Exclusive Deals
          </h2>
          <p className="Tangerine text-5xl">Testing Tangerine Font Here</p>

          {/* Wide Carousel Container */}
          <div className="relative flex items-center justify-center w-full">
            {/* Animated Deal Card */}
            <motion.div
              key={deals[currentIndex].title}
              className="bg-gray-950 rounded-lg shadow-lg flex flex-col overflow-hidden w-full"
              initial={{ opacity: 0.3 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative w-full h-[200px] sm:h-[200px] md:h-[360px]">
                <Image
                  src={deals[currentIndex].image}
                  alt={deals[currentIndex].title}
                  layout="fill"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-5 left-5 text-white font-semibold text-xl bg-black px-4 py-2 rounded-md">
                  {deals[currentIndex].title}
                </div>
              </div>
            </motion.div>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all text-xs"
            >
              &lt;
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all text-xs"
            >
              &gt;
            </button>
          </div>
        </div>
      </motion.section>
      {/* Restaurants Section */}
      <motion.section
        className="p-1 bg-black"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold mb-6 mt-12 text-center">
          Top Restaurants
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 px-4 mb-10">
          {[
            { id: 1, name: "Zai", image: "/food1.jpg", rating: 4.8 },
            { id: 2, name: "Bean Bag", image: "/food2.jpg", rating: 4.7 },
            { id: 3, name: "Pizzeria", image: "/food5.jpg", rating: 4.6 },
            { id: 4, name: "Zai Village", image: "/food4.jpg", rating: 4.5 },
          ].map((restaurant) => (
            <motion.div
              key={restaurant.id}
              className="relative group bg-gray-950 rounded-xl overflow-hidden shadow-2xl transform transition-all duration-300"
            >
              {/* Clickable Link to Restaurant Page */}
              <Link href={`/restaurant/${restaurant.id}`} className="block">
                {/* Image Container */}
                <div className="relative w-full h-64">
                  <Image
                    src={restaurant.image}
                    alt={restaurant.name}
                    layout="fill"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-black to-transparent opacity-100" />
                </div>

                {/* Restaurant Name & Order Button */}
                <div
                  className="absolute bottom-4 left-6 text-white font-semibold text-4xl"
                  style={{ fontFamily: '"Tangerine", cursive' }}
                >
                  {restaurant.name}
                </div>
              </Link>
              <div className="absolute bottom-4 right-6 flex items-center gap-2">
                {/* Star Rating */}
                <span className="flex items-center text-yellow-500 text-sm font-semibold">
                  <FaStar className="mr-1" /> {restaurant.rating}
                </span>
                <Link href={`/restaurant/${restaurant.id}`}>
                  <button className="px-4 py-2 bg-yellow-500 text-black text-sm font-bold rounded-full active:bg-black active:text-white transition-colors cursor-pointer ease-in-out">
                    Order Now
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
