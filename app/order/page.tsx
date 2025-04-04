"use client";
import Navbar from "@/components/navbar";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Order() {
  const [activeTab, setActiveTab] = useState("active");
  const activeOrders = [
    {
      id: "A123",
      created_at: "2025-04-01T12:34:56Z",
      status: "Preparing",
    },
    {
      id: "A124",
      created_at: "2025-04-02T15:22:31Z",
      status: "Out for Delivery",
    },
  ];

  const pastOrders = [
    {
      id: "P101",
      created_at: "2025-03-20T09:15:00Z",
      status: "Completed",
    },
    {
      id: "P102",
      created_at: "2025-03-15T18:45:22Z",
      status: "Completed",
    },
    {
      id: "P103",
      created_at: "2025-03-14T09:15:00Z",
      status: "Completed",
    },
    {
      id: "P104",
      created_at: "2025-03-09T18:45:22Z",
      status: "Completed",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="container mt-12 px-4 py-8">
        <h2 className=" text-2xl font-bold text-center mb-6">Your Orders</h2>

        {/* Tabs */}
        <div className="flex justify-center mb-6">
          <button
            className={`px-4 py-2 mx-2 rounded-md transition-all duration-300 ${
              activeTab === "active"
                ? "bg-white text-black"
                : " bg-neutral-400/40"
            }`}
            onClick={() => setActiveTab("active")}
          >
            Active Orders
          </button>
          <button
            className={`px-4 py-2 mx-2 rounded-md transition-all duration-300 ${
              activeTab === "past"
                ? "bg-white text-black"
                : " bg-neutral-400/40"
            }`}
            onClick={() => setActiveTab("past")}
          >
            Past Orders
          </button>
        </div>

        {/* Order List */}
        <div className="space-y-4">
          {(activeTab === "active" ? activeOrders : pastOrders).length > 0 ? (
            (activeTab === "active" ? activeOrders : pastOrders).map(
              (order) => (
                <motion.div
                  key={order.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="border rounded-xl p-4 shadow-xl "
                >
                  <p className="text-md font-semibold">Order ID: {order.id}</p>
                  <p className="text-xs text-neutral-400">
                    Date: {new Date(order.created_at).toLocaleDateString()}
                  </p>
                  <p
                    className={`text-sm font-medium mt-2 ${
                      order.status === "Completed"
                        ? "text-green-500"
                        : "text-yellow-500"
                    }`}
                  >
                    Status: {order.status}
                  </p>
                </motion.div>
              )
            )
          ) : (
            <p className="text-center text-neutral-400">No orders found.</p>
          )}
        </div>
      </div>
    </>
  );
}
