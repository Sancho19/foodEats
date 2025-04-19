"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { FaSearch, FaFilter } from "react-icons/fa";

export default function AdminDashboard() {
  const [orders, setOrders] = useState([
    {
      id: 1,
      user: "Puleng Van Wyk",
      status: "Pending",
      items: [{ name: "Zai Burger", quantity: 2, price: 85 }],
      totalPrice: 170,
      deliveryMode: "Delivery",
      date: "2025-04-19",
    },
    {
      id: 2,
      user: "Maria Dos Santos",
      status: "Completed",
      items: [{ name: "Pizza", quantity: 1, price: 120 }],
      totalPrice: 120,
      deliveryMode: "Collection",
      date: "2025-04-18",
    },
    {
      id: 3,
      user: "Sancho Xavi",
      status: "Pending",
      items: [{ name: "Cheese Burger", quantity: 2, price: 175 }],
      totalPrice: 350,
      deliveryMode: "Delivery",
      date: "2025-04-15",
    },
  ]);

  const handleStatusUpdate = (id: number, status: string) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, status: status } : order
      )
    );
  };

  return (
    <>
      <Navbar />
      <div className="container mt-16 px-4 py-10 min-h-screen">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold mb-6 text-center"
        >
          Admin Dashboard
        </motion.h1>

        {/* Summary Cards */}
        <div className="grid grid-cols-3 gap-4 mb-6 text-center text-white">
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="text-lg font-bold">{orders.length}</p>
            <p className="text-xs text-gray-400">Total Orders</p>
          </div>
          <div className="bg-yellow-700 p-4 rounded-lg">
            <p className="text-lg font-bold">
              {orders.filter((o) => o.status === "Pending").length}
            </p>
            <p className="text-xs">Pending</p>
          </div>
          <div className="bg-green-700 p-4 rounded-lg">
            <p className="text-lg font-bold">
              {orders.filter((o) => o.status === "Completed").length}
            </p>
            <p className="text-xs">Completed</p>
          </div>
        </div>

        {/* Search + Filter */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-4 w-full">
            <div className="flex items-center border border-gray-300 rounded-full px-3 py-1 flex-grow">
              <FaSearch className="text-gray-300 mr-2" />
              <input
                type="text"
                placeholder="Search Orders"
                className="outline-none bg-transparent text-sm text-gray-300 w-full"
              />
            </div>
            <div className="flex items-center border border-gray-300 rounded-full px-3 py-1">
              <FaFilter className="text-gray-500 mr-2" />
              <select className="outline-none bg-transparent text-sm text-gray-500">
                <option>Status</option>
                <option>Pending</option>
                <option>Completed</option>
                <option>Canceled</option>
              </select>
            </div>
          </div>
        </div>

        {/* Order Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {orders.map((order) => (
            <motion.div
              key={order.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-xl shadow-md shadow-gray-500 text-white p-5 flex flex-col space-y-4"
            >
              {/* Top: User + Status */}
              <div className="flex justify-between items-center">
                <p className="text-lg font-semibold">{order.user}</p>
                <div className="flex items-center gap-2">
                  <span
                    className={`h-3 w-3 rounded-full inline-block ${
                      order.status === "Pending"
                        ? "bg-yellow-500"
                        : order.status === "Completed"
                        ? "bg-green-500"
                        : "bg-red-500"
                    }`}
                  />
                  <span
                    className={`px-3 py-1 rounded-full text-xs text-white ${
                      order.status === "Pending"
                        ? "bg-yellow-600"
                        : order.status === "Completed"
                        ? "bg-green-700"
                        : "bg-red-500"
                    }`}
                  >
                    {order.status}
                  </span>
                </div>
              </div>

              {/* Price */}
              <div className="text-sm text-gray-300">
                <p className="font-medium">Total Price:</p>
                <p>R {order.totalPrice}</p>
              </div>

              {/* Delivery */}
              <div className="text-sm text-gray-300">
                <p className="font-medium">Delivery Mode:</p>
                <p>{order.deliveryMode}</p>
              </div>

              {/* Date */}
              <div className="text-sm text-gray-300">
                <p className="font-medium">Date:</p>
                <p>{order.date}</p>
              </div>

              {/* Items */}
              <div className="text-sm text-gray-300">
                <p className="font-medium mb-1">Items:</p>
                <ul className="list-disc ml-4 space-y-1">
                  {order.items.map((item, i) => (
                    <li key={i}>
                      {item.quantity} x {item.name} (R {item.price})
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="mt-auto">
                {order.status !== "Completed" && (
                  <button
                    onClick={() => handleStatusUpdate(order.id, "Completed")}
                    className="w-full py-2 bg-green-700 text-white rounded-md font-semibold mt-2"
                  >
                    Mark as Completed
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Action Button (FAB) */}
      <button className="fixed bottom-5 right-5 bg-blue-600 text-white text-2xl rounded-full p-4 shadow-lg">
        +
      </button>

      <Footer />
    </>
  );
}
