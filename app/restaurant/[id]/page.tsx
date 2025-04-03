"use client";
import { notFound } from "next/navigation";
import Image from "next/image";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import Navbar from "@/components/navbar";
import { useState } from "react";
import { useParams } from "next/navigation";

type MenuItem = {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
};

type Restaurant = {
  id: string;
  name: string;
  image: string;
  rating: number;
  menu: MenuItem[];
};

const restaurants: Restaurant[] = [
  {
    id: "1",
    name: "Zai",
    image: "/food1.jpg",
    rating: 4.5,
    menu: [
      {
        id: "101",
        name: "Cheese Burger",
        price: "R50",
        description:
          "2 Chicken Bresteaks, lettuce, a slice of cheese, middle bun, 3 pickles and Dreamy Creamy sauce on a toasted sesame bun. Includes a regular Soul Fries and a 300ml cold drink",
        image: "/food3.jpg",
      },
      {
        id: "102",
        name: "Chicken Wrap",
        price: "R70",
        description:
          "2 Chicken Bresteaks, lettuce, a slice of cheese, middle bun, 3 pickles and Dreamy Creamy sauce on a toasted sesame bun. Includes a regular Soul Fries and a 300ml cold drink",
        image: "/waffle.jpg",
      },
      {
        id: "103",
        name: "Cheese Burger",
        price: "R50",
        description:
          "2 Chicken Bresteaks, lettuce, a slice of cheese, middle bun, 3 pickles and Dreamy Creamy sauce on a toasted sesame bun. Includes a regular Soul Fries and a 300ml cold drink",
        image: "/food3.jpg",
      },
      {
        id: "104",
        name: "Chicken Wrap",
        price: "R70",
        description:
          "2 Chicken Bresteaks, lettuce, a slice of cheese, middle bun, 3 pickles and Dreamy Creamy sauce on a toasted sesame bun. Includes a regular Soul Fries and a 300ml cold drink",
        image: "/waffle.jpg",
      },
      {
        id: "105",
        name: "Cheese Burger",
        price: "R50",
        description:
          "2 Chicken Bresteaks, lettuce, a slice of cheese, middle bun, 3 pickles and Dreamy Creamy sauce on a toasted sesame bun. Includes a regular Soul Fries and a 300ml cold drink",
        image: "/food3.jpg",
      },
      {
        id: "106",
        name: "Chicken Wrap",
        price: "R70",
        description:
          "2 Chicken Bresteaks, lettuce, a slice of cheese, middle bun, 3 pickles and Dreamy Creamy sauce on a toasted sesame bun. Includes a regular Soul Fries and a 300ml cold drink",
        image: "/waffle.jpg",
      },
      {
        id: "107",
        name: "Cheese Burger",
        price: "R50",
        description:
          "2 Chicken Bresteaks, lettuce, a slice of cheese, middle bun, 3 pickles and Dreamy Creamy sauce on a toasted sesame bun. Includes a regular Soul Fries and a 300ml cold drink",
        image: "/food3.jpg",
      },
      {
        id: "108",
        name: "Chicken Wrap",
        price: "R70",
        description:
          "2 Chicken Bresteaks, lettuce, a slice of cheese, middle bun, 3 pickles and Dreamy Creamy sauce on a toasted sesame bun. Includes a regular Soul Fries and a 300ml cold drink",
        image: "/waffle.jpg",
      },
      {
        id: "109",
        name: "Cheese Burger",
        price: "R50",
        description:
          "2 Chicken Bresteaks, lettuce, a slice of cheese, middle bun, 3 pickles and Dreamy Creamy sauce on a toasted sesame bun. Includes a regular Soul Fries and a 300ml cold drink",
        image: "/food3.jpg",
      },
      {
        id: "110",
        name: "Chicken Wrap",
        price: "R70",
        description:
          "2 Chicken Bresteaks, lettuce, a slice of cheese, middle bun, 3 pickles and Dreamy Creamy sauce on a toasted sesame bun. Includes a regular Soul Fries and a 300ml cold drink",
        image: "/waffle.jpg",
      },
    ],
  },
  {
    id: "2",
    name: "Bean Bag",
    image: "/food2.jpg",
    rating: 4.7,
    menu: [
      {
        id: "201",
        name: "Cappuccino",
        price: "R30",
        description:
          "2 Chicken Bresteaks, lettuce, a slice of cheese, middle bun, 3 pickles and Dreamy Creamy sauce on a toasted sesame bun. Includes a regular Soul Fries and a 300ml cold drink",
        image: "/coffee.jpg",
      },
      {
        id: "202",
        name: "Croissant",
        price: "R25",
        description:
          "2 Chicken Bresteaks, lettuce, a slice of cheese, middle bun, 3 pickles and Dreamy Creamy sauce on a toasted sesame bun. Includes a regular Soul Fries and a 300ml cold drink",
        image: "/croissant.jpg",
      },
    ],
  },
];

export default function RestaurantPage() {
  const { id } = useParams();
  const restaurant = restaurants.find((r) => r.id === id);
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});

  const handleIncrease = (itemId: string) => {
    setQuantities((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 1) + 1,
    }));
  };

  const handleDecrease = (itemId: string) => {
    setQuantities((prev) => ({
      ...prev,
      [itemId]: prev[itemId] > 1 ? prev[itemId] - 1 : 1,
    }));
  };
  if (!restaurant) return notFound();

  return (
    <div className="min-h-screen text-white">
      <Navbar />
      {/* Header Section */}
      <div className="relative w-full h-96 md:h-[450px]">
        {" "}
        {/* Increase height for larger space */}
        {/* Background Image */}
        <div className="absolute inset-0 z-10">
          <Image
            src={restaurant.image}
            alt={restaurant.name}
            className="opacity-40 object-cover w-full h-full"
            priority
            width={1920}
            height={450}
          />
        </div>
        {/* Text over the Image */}
        <div className="absolute inset-50 bg-opacity-50 z-20 flex flex-col justify-center items-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-500 text-center tracking-wider">
            {restaurant.name}
          </h1>
          <div className="flex items-center mt-2">
            <FaStar className="text-yellow-500 mr-2" />
            <span className="text-lg font-semibold">
              {restaurant.rating} Stars
            </span>
          </div>
        </div>
      </div>

      {/* Menu Section */}
      <div className="max-w-5xl mx-auto px-2 py-8">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Menu</h2>
        <div className="grid grid-cols-1 gap-6">
          {restaurant.menu.map((item) => (
            <div
              key={item.id}
              className="rounded-xl p-4 shadow-xs shadow-neutral-600 flex flex-row items-center space-x-6"
            >
              {/* Image on the Left */}
              <div className="w-1/2">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={300}
                  height={200}
                  className="rounded-md object-cover"
                />
              </div>

              {/* Text on the Right */}
              <div className="w-50 flex flex-col">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-md text-yellow-500 font-bold">
                  {item.price}
                </p>
                <p className="text-white font-bold text-xs line-clamp-2">
                  {item.description}
                </p>

                {/* Quantity Selector */}
                <div className="flex items-center space-x-4 mt-3">
                  <button
                    onClick={() => handleDecrease(item.id)}
                    className="w-7 h-7 flex items-center justify-center bg-white text-black rounded-full hover:bg-gray-500 transition text-md font-semibold"
                  >
                    -
                  </button>
                  <span className="text-md ">{quantities[item.id] || 1}</span>
                  <button
                    onClick={() => handleIncrease(item.id)}
                    className="w-7 h-7 flex items-center justify-center bg-white text-black rounded-full hover:bg-gray-500 transition text-md font-semibold"
                  >
                    +
                  </button>
                </div>

                {/* Add to Cart Button */}
                <button className="mt-2 flex items-center justify-center gap-2 px-3 py-2 border border-white text-black bg-white rounded-full transition cursor-pointer">
                  <FaShoppingCart />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
