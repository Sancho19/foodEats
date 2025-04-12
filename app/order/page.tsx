"use client";
import Navbar from "@/components/navbar";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Define order types
interface ActiveOrder {
  id: string;
  created_at: string;
  status: string;
  etaMinutes: number;
  items: string[];
}

interface PastOrder {
  id: string;
  created_at: string;
  status: string;
  items: string[];
  rating: number;
}

export default function Order() {
  const [activeTab, setActiveTab] = useState("active");
  const [searchTerm, setSearchTerm] = useState("");
  const [hasMounted, setHasMounted] = useState(false); // Hydration fix

  // Hydration fix - This ensures that Date rendering only happens client-side
  useEffect(() => {
    setHasMounted(true);
  }, []);

  const activeOrders: ActiveOrder[] = [
    {
      id: "Z123",
      created_at: "2025-04-01T12:34:56Z",
      status: "Preparing",
      etaMinutes: 30,
      items: ["Zai Burger", "Fries"],
    },
    {
      id: "Z124",
      created_at: "2025-04-02T15:22:31Z",
      status: "Out for Delivery",
      etaMinutes: 15,
      items: ["Pizza"],
    },
  ];

  const pastOrders: PastOrder[] = [
    {
      id: "Z101",
      created_at: "2025-03-20T09:15:00Z",
      status: "Completed",
      items: ["Cheese Burger", "Chicken Empanadas"],
      rating: 4,
    },
    {
      id: "Z102",
      created_at: "2025-03-15T18:45:22Z",
      status: "Completed",
      items: ["Fresh Fruit Salad"],
      rating: 4,
    },
    {
      id: "Z103",
      created_at: "2025-02-28T11:15:00Z",
      status: "Completed",
      items: ["Creamy Mussels", "Chicken Livers"],
      rating: 4,
    },
    {
      id: "Z104",
      created_at: "2025-02-21T14:45:22Z",
      status: "Completed",
      items: ["Zai Benedict"],
      rating: 5,
    },
  ];

  const [expandedOrders, setExpandedOrders] = useState<string[]>([]);
  const [ratings, setRatings] = useState<{ [key: string]: number }>({});

  const handleToggleExpand = (id: string) => {
    setExpandedOrders((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handleRating = (id: string, rating: number) => {
    setRatings((prev) => ({ ...prev, [id]: rating }));
  };

  const filteredOrders = (
    activeTab === "active" ? activeOrders : pastOrders
  ).filter(
    (order) =>
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className="container mt-12 px-4 py-8">
        <h2 className="text-2xl font-bold text-center mb-6">Your Orders</h2>

        {/* Tabs */}
        <div className="flex justify-center mb-4">
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

        {/* Search */}
        <div className="max-w-md mx-auto mb-6">
          <input
            type="text"
            placeholder="Search orders..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg text-sm"
          />
        </div>

        {/* Order List */}
        <div className="space-y-4">
          {filteredOrders.length > 0 ? (
            filteredOrders.map((order) => (
              <motion.div
                key={order.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="border rounded-xl p-4 shadow-xl"
              >
                <p className="text-md font-semibold">Order ID: {order.id}</p>

                {/* Hydration fix - Only display dates client-side */}
                <p className="text-xs text-neutral-400">
                  Date:{" "}
                  {hasMounted
                    ? new Date(order.created_at).toLocaleDateString()
                    : ""}
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

                {/* Progress Bar for active */}
                {activeTab === "active" && "etaMinutes" in order && (
                  <>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                      <div
                        className={`h-2 rounded-full ${
                          order.status === "Preparing"
                            ? "bg-yellow-400 w-[40%]"
                            : "bg-yellow-600 w-[80%]"
                        }`}
                      ></div>
                    </div>
                    <p className="text-xs text-neutral-400 mt-1">
                      Estimated Delivery: {order.etaMinutes} mins
                    </p>
                  </>
                )}

                {/* View Details Toggle */}
                <button
                  onClick={() => handleToggleExpand(order.id)}
                  className="text-blue-400/80 text-sm mt-2 active:underline"
                >
                  {expandedOrders.includes(order.id)
                    ? "Hide Details"
                    : "View Details"}
                </button>

                {/* Order Details */}
                {expandedOrders.includes(order.id) && (
                  <div className="mt-2 text-sm text-neutral-600">
                    <p>Items:</p>
                    <ul className="list-disc ml-5">
                      {order.items.map((item: string, idx: number) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                    {activeTab === "past" && "rating" in order && (
                      <>
                        <div className="mt-2">
                          <p className="text-sm">Rate this order:</p>
                          <div className="flex space-x-1 mt-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <span
                                key={star}
                                className={`cursor-pointer text-lg ${
                                  (ratings[order.id] || order.rating || 0) >=
                                  star
                                    ? "text-yellow-500"
                                    : "text-gray-300"
                                }`}
                                onClick={() => handleRating(order.id, star)}
                              >
                                ★
                              </span>
                            ))}
                          </div>
                        </div>
                        <button className="mt-4 text-yellow-500 active:underline text-sm">
                          Reorder
                        </button>
                      </>
                    )}
                  </div>
                )}
              </motion.div>
            ))
          ) : (
            <p className="text-center text-neutral-400">No orders found.</p>
          )}
        </div>
      </div>
    </>
  );
}
