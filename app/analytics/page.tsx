"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  Legend,
} from "recharts";

const dummyRevenueData = [
  { name: "Jan", Zai: 5400, Pizzeria: 3200, BeanBag: 2100 },
  { name: "Feb", Zai: 6200, Pizzeria: 2800, BeanBag: 3300 },
  { name: "Mar", Zai: 7000, Pizzeria: 4200, BeanBag: 2900 },
  { name: "Apr", Zai: 6700, Pizzeria: 3900, BeanBag: 4000 },
];

const dummyOrderData = [
  { name: "Jan", orders: 120 },
  { name: "Feb", orders: 150 },
  { name: "Mar", orders: 180 },
  { name: "Apr", orders: 170 },
];

export default function AdminAnalytics() {
  return (
    <>
      <Navbar />
      <div className="container px-4 mt-8 py-10 min-h-screen">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold mb-10 text-center"
        >
          Analytics & Reports
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Revenue Overview */}
          <div className="shadow-neutral-800 text-white rounded-xl shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4 ">
              Monthly Revenue by Restaurant
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={dummyRevenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Zai" fill="#eab308" />
                <Bar dataKey="Pizzeria" fill="#38bdf8" />
                <Bar dataKey="BeanBag" fill="#34d399" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Orders Overview */}
          <div className="shadow-md rounded-xl shadow-neutral-800 p-6 text-white">
            <h2 className="text-lg font-semibold mb-4 ">Monthly Orders</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={dummyOrderData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="orders"
                  stroke="#6366f1"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
