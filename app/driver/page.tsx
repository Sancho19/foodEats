"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";

export default function BecomeDriver() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    vehicle: "Car",
    notes: "",
  });

  const [idFile, setIdFile] = useState<File | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setIdFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Driver Application Submitted:", form);
    console.log("Uploaded ID:", idFile);
    alert("Thank you for applying! We'll be in touch soon.");
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen mt-16 bg-black text-white px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto  border border-neutral-700 p-8 rounded-2xl shadow-2xl"
        >
          <h1 className="text-2xl font-semibold text-center mb-8 text-white">
            Become a Driver
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col">
              <label className="text-sm text-gray-400 mb-1">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                required
                className="p-1 rounded-lg px-2 bg-neutral-400/20 border border-neutral-600 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-yellow-500"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm text-gray-400 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="p-1 rounded-lg px-2 bg-neutral-400/20 border border-neutral-600 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm text-gray-400 mb-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                className="p-1 rounded-lg px-2 bg-neutral-400/20 border border-neutral-600 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm text-gray-400 mb-1">Vehicle Type</label>
              <select
                name="vehicle"
                value={form.vehicle}
                onChange={handleChange}
                className="p-2 rounded-lg px-2 bg-neutral-400/20 border border-neutral-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                <option value="Car">Car</option>
                <option value="Bike">Bike</option>
                <option value="Scooter">Scooter</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="text-sm text-gray-400 mb-1">
                Upload ID Document
              </label>
              <input
                type="file"
                accept="image/*,.pdf"
                onChange={handleFileChange}
                className="p-1 rounded-lg px-2 bg-neutral-400/20 border border-neutral-600 text-white file:mr-3 file:bg-yellow-500 file:text-black  file:rounded-lg file:px-3 file:py-1 "
              />
              {idFile && (
                <p className="text-xs text-green-400 mt-1">
                  Selected: {idFile.name}
                </p>
              )}
            </div>

            <div className="flex flex-col">
              <label className="text-sm text-gray-400 mb-1">
                Notes (Optional)
              </label>
              <textarea
                name="notes"
                value={form.notes}
                onChange={handleChange}
                placeholder="Any extra info we should know?"
                rows={3}
                className="p-1 rounded-lg px-2 bg-neutral-400/20 border border-neutral-600 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            <motion.button
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full bg-yellow-500 text-black py-3 rounded-xl font-semibold active:bg-green-800 transition"
            >
              Submit Application
            </motion.button>
          </form>
        </motion.div>
      </div>
    </>
  );
}
