"use client";
import { notFound } from "next/navigation";
import Image from "next/image";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import Navbar from "@/components/navbar";
import { useState } from "react";
import { useParams } from "next/navigation";
import { Dialog } from "@headlessui/react";
import Footer from "@/components/footer";

type MenuItem = {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  hasCutOptions?: boolean;
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
        name: "Zai Breakfast",
        price: "R85",
        description:
          "2 eggs any style, streaky bacon, mushrooms, tomato and toast",
        image: "/breakfast.jpg",
      },
      {
        id: "102",
        name: "Fresh Fruit Salad",
        price: "R45",
        description:
          "Muesli, fresh fruits, plain yoghurt drizzled with a little honey",
        image: "/image3.jpg",
      },
      {
        id: "103",
        name: "Cordero",
        price: "R245",
        description:
          "450g Lamb loin chops, marinated in homemade chimichurri, Served with a side of your choice.",
        image: "/image4.jpg",
      },
      {
        id: "104",
        name: "Zai Benedict",
        price: "R75",
        description:
          "Two poached eggs on English muffin with bacon, topped with Spicy Hollandaise sauce and rocket",
        image: "/image5.jpg",
      },
      {
        id: "105",
        name: "Pescadore",
        price: "R195",
        description: "Creamy and spicy garlic prawns",
        image: "/image1.jpg",
      },
      {
        id: "106",
        name: "Vegeterian Empanadas",
        price: "R65",
        description:
          "Home-made pastries done with vegetables, red peppers, onions and mozzarella",
        image: "/food3.jpg",
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
          "2 Chicken Breasts, lettuce, a slice of cheese, middle bun, 3 pickles and Dreamy Creamy sauce on a toasted sesame bun. Includes a regular Soul Fries and a 300ml cold drink",
        image: "/coffee.jpg",
      },
      {
        id: "202",
        name: "Croissant",
        price: "R25",
        description:
          "2 Chicken Breasts, lettuce, a slice of cheese, middle bun, 3 pickles and Dreamy Creamy sauce on a toasted sesame bun. Includes a regular Soul Fries and a 300ml cold drink",
        image: "/croissant.jpg",
      },
    ],
  },
];

export default function RestaurantPage() {
  const { id } = useParams();
  const restaurant = restaurants.find((r) => r.id === id);
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [selectedCut, setSelectedCut] = useState<string[]>([]);

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
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setSelectedCut((prev) => {
      if (e.target.checked) {
        // Add the cut option if it's checked
        return [...prev, value];
      } else {
        // Remove the cut option if it's unchecked
        return prev.filter((cut) => cut !== value);
      }
    });
  };

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
        <div className="absolute inset-0 bg-opacity-50 z-20 flex flex-col justify-center items-center px-0">
          {/* Restaurant Name */}
          <h1 className="text-3xl md:text-5xl font-bold text-yellow-500 text-center tracking-wider ">
            {restaurant.name}
          </h1>

          {/* Restaurant Rating - INLINE */}
          <div className="flex items-center mt-1 space-x-1">
            <FaStar className="text-yellow-500" />
            <span className="text-md font-semibold ">
              {restaurant.rating} Stars
            </span>
          </div>
        </div>
      </div>

      {/* Menu Section */}
      <div className="max-w-5xl mx-auto px-2 py-8">
        {/* Scrollable Category Pills */}
        <div className="overflow-x-auto whitespace-nowrap pb-4 scrollbar-hide">
          <div className="flex space-x-3">
            {[
              "Breakfast",
              "Chicken Only",
              "Chicken Meals",
              "Family Meals",
              "Single Meals",
              "Starters",
              "Burgers",
              "Pizza",
              "Wraps",
              "Pastas",
              "Salads",
              "Seafood",
              "Sides",
              "Desserts",
              "Cold Drinks",
            ].map((category) => (
              <button
                key={category}
                className="px-4 py-2 text-black rounded-full text-sm font-bold bg-yellow-600 cursor-pointer transition "
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <h2 className="text-2xl tracking-wide font-bold text-white mb-6 text-center ">
          Menu
        </h2>
        <div className="grid grid-cols-1 gap-6">
          {restaurant.menu.map((item) => (
            <div
              key={item.id}
              className="rounded-xl p-4 shadow-xs shadow-neutral-600 flex flex-row items-center space-x-6"
            >
              {/* Image on the Left */}
              <div className="w-1/2 cursor-pointer">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={300}
                  height={200}
                  className="rounded-md object-cover"
                  onClick={() => setSelectedItem(item)}
                />
              </div>

              {/* Text on the Right */}
              <div className="w-50 flex flex-col">
                <h3 className="text-lg font-bold">{item.name}</h3>
                <p className="text-md text-yellow-500 font-bold ">
                  {item.price}
                </p>
                <p className="text-white text-xs line-clamp-2 ">
                  {item.description}
                </p>

                {/* Quantity Selector */}
                <div className="flex items-center space-x-4 mt-3">
                  <button
                    onClick={() => handleDecrease(item.id)}
                    className="w-5 h-5 flex items-center justify-center bg-white font-bold text-black rounded-full transition text-md cursor-pointer active:text-red-800"
                  >
                    -
                  </button>
                  <span className="text-md ">{quantities[item.id] || 1}</span>
                  <button
                    onClick={() => handleIncrease(item.id)}
                    className="w-5 h-5 flex items-center justify-center bg-white text-black rounded-full transition text-md cursor-pointer font-bold active:text-green-800"
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
      {selectedItem && (
        <Dialog
          open={true}
          onClose={() => setSelectedItem(null)}
          className="fixed z-100 inset-0 flex items-center justify-center bg-black/90"
        >
          <div className="bg-black shadow-white shadow-xs p-6 rounded-2xl w-96 max-h-[80vh] overflow-y-auto relative scrollbar-hide">
            {/* ✅ "X" Button fixed inside the modal */}
            <div className="absolute top-2 right-2">
              <button
                className=" w-6 h-6 flex items-center justify-center rounded-full cursor-pointer text-xs"
                onClick={() => setSelectedItem(null)}
              >
                ✖
              </button>
            </div>
            <div className="mt-4">
              <Image
                src={selectedItem.image}
                alt={selectedItem.name}
                width={400}
                height={300}
                className="rounded-md mb-4"
              />
              <h3 className="text-xl font-bold text-white ">
                {selectedItem.name}
              </h3>
              <p className="text-sm text-neutral-400 ">
                {selectedItem.description}
              </p>
              <p className="text-lg font-bold text-yellow-500 mt-2 ">
                {selectedItem.price}
              </p>

              {/* Chicken Cut Options */}
              <div className="w-full h-[1px] bg-white opacity-10 mt-2"></div>
              <div className="mt-4">
                <label className="block text-white text-sm tracking-wide font-bold mb-2">
                  How would you like your Chicken Cut:
                </label>
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="uncut"
                      value="Uncut"
                      checked={selectedCut.includes("Uncut")}
                      onChange={(e) => handleCheckboxChange(e)}
                      className="w-4 h-4 mr-2 border-1 border-white rounded-full bg-transparent cursor-pointer 
               appearance-none checked:bg-yellow-800
               transition-all duration-200 ease-in-out"
                    />
                    <label htmlFor="uncut" className="text-sm">
                      No Cut
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="halves"
                      value="Halves"
                      checked={selectedCut.includes("Halves")}
                      onChange={(e) => handleCheckboxChange(e)}
                      className="w-4 h-4 mr-2 border-1 border-white rounded-full bg-transparent cursor-pointer 
               appearance-none checked:bg-yellow-800
               transition-all duration-200 ease-in-out"
                    />
                    <label htmlFor="halves" className="text-sm">
                      Cut in 2
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="quarters"
                      value="Quarters"
                      checked={selectedCut.includes("Quarters")}
                      onChange={(e) => handleCheckboxChange(e)}
                      className="w-4 h-4 mr-2 border-1 border-white rounded-full bg-transparent cursor-pointer 
               appearance-none checked:bg-yellow-800
               transition-all duration-200 ease-in-out"
                    />
                    <label htmlFor="quarters" className="text-sm">
                      Cut in 4
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="quarters"
                      value="Quarters"
                      checked={selectedCut.includes("Quarters")}
                      onChange={(e) => handleCheckboxChange(e)}
                      className="w-4 h-4 mr-2 border-1 border-white rounded-full bg-transparent cursor-pointer 
               appearance-none checked:bg-yellow-800
               transition-all duration-200 ease-in-out"
                    />
                    <label htmlFor="quarters" className="text-sm">
                      Cut in 6
                    </label>
                  </div>
                </div>
              </div>
              <div className="w-full h-[1px] bg-yellow-500 opacity-10 mt-2"></div>
              <div className="mt-4">
                <label className="block text-white text-sm tracking-wide font-bold mb-2">
                  Which Basting would you like:
                </label>
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="uncut"
                      value="BBQ Basting"
                      checked={selectedCut.includes("BBQ Basting")}
                      onChange={(e) => handleCheckboxChange(e)}
                      className="w-4 h-4 mr-2 border-1 border-white rounded-full bg-transparent cursor-pointer
               appearance-none checked:bg-yellow-800
               transition-all duration-200 ease-in-out"
                    />
                    <label htmlFor="uncut" className="text-sm">
                      BBQ Basting
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="halves"
                      value="Hot Basting"
                      checked={selectedCut.includes("Hot Basting")}
                      onChange={(e) => handleCheckboxChange(e)}
                      className="w-4 h-4 mr-2 border-1 border-white rounded-full bg-transparent cursor-pointer
               appearance-none checked:bg-yellow-800
               transition-all duration-200 ease-in-out"
                    />
                    <label htmlFor="halves" className="text-sm">
                      Hot Basting
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="quarters"
                      value="Mild Basting"
                      checked={selectedCut.includes("Mild Basting")}
                      onChange={(e) => handleCheckboxChange(e)}
                      className="w-4 h-4 mr-2 border-1 border-white rounded-full bg-transparent cursor-pointer 
               appearance-none checked:bg-yellow-800
               transition-all duration-200 ease-in-out"
                    />
                    <label htmlFor="quarters" className="text-sm">
                      Mild Basting
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="quarters"
                      value="Lemon & Herb Basting"
                      checked={selectedCut.includes("Lemon & Herb Basting")}
                      onChange={(e) => handleCheckboxChange(e)}
                      className="w-4 h-4 mr-2 border-1 border-white rounded-full bg-transparent cursor-pointer 
               appearance-none checked:bg-yellow-800
               transition-all duration-200 ease-in-out "
                    />
                    <label htmlFor="quarters" className="text-sm">
                      Lemon & Herb Basting
                    </label>
                  </div>
                </div>
              </div>
              <div className="w-full h-[1px] bg-yellow-500 opacity-10 mt-2"></div>
              <button className="mt-4 w-full text-black bg-white font-semibold py-2 rounded-full cursor-pointer">
                Add to Cart
              </button>
            </div>
          </div>
        </Dialog>
      )}
      <Footer />
    </div>
  );
}
