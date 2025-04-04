"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Profile() {
  const [showAddress, setShowAddress] = useState(false);
  const [showCardDetails, setShowCardDetails] = useState(false);

  const user = {
    firstName: "Sipho",
    lastName: "Van de Merwe",
    phoneNumber: "+27 64 819 4578",
    address: "1234 Elm St, Springfield, IL, 62701",
    cardDetails: "**** **** **** 1234",
  };

  return (
    <>
      <Navbar />
      <motion.div
        className="container mt-12 px-4 py-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-2xl font-semibold text-center mb-2 tracking-wide">
          Profile
        </h1>

        <div className="flex justify-center mb-6">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <FaUserCircle size={50} className="text-neutral-400" />
          </motion.div>
        </div>

        <motion.div
          className="border border-white p-6 rounded-xl shadow-xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-lg font-semibold">Personal Information</h2>
          <p className="mt-2 text-sm text-neutral-400">
            First Name: {user.firstName}
          </p>
          <p className="mt-2 text-sm text-neutral-400">
            Last Name: {user.lastName}
          </p>
          <p className="mt-2 text-sm text-neutral-400">
            Phone Number: {user.phoneNumber}
          </p>
        </motion.div>

        <motion.div
          className="border p-5 rounded-xl shadow-lg mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-lg font-semibold">Address</h2>
          <button
            onClick={() => setShowAddress(!showAddress)}
            className="text-blue-500/70 text-xs mt-2"
          >
            {showAddress ? "Hide Address" : "Show Address"}
          </button>

          <AnimatePresence>
            {showAddress && (
              <motion.p
                className="mt-2 text-sm text-neutral-400"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {user.address}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="border p-5 rounded-xl shadow-sm mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-lg font-semibold">Security</h2>
          <button className="text-blue-500/70 text-xs mt-2">
            Change Password
          </button>
        </motion.div>

        <motion.div
          className="border border-white p-6 rounded-xl shadow-sm mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-lg font-semibold">Card Details</h2>
          <button
            onClick={() => setShowCardDetails(!showCardDetails)}
            className="text-blue-500/70 text-xs mt-2"
          >
            {showCardDetails ? "Hide Card Details" : "Show Card Details"}
          </button>

          <AnimatePresence>
            {showCardDetails && (
              <motion.p
                className="mt-2 text-sm text-neutral-400"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {user.cardDetails}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="border p-5 rounded-xl shadow-sm mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <h2 className="text-lg font-semibold">Preferences</h2>
          <p className="text-sm text-neutral-400 mt-2">
            Notifications: Enabled
          </p>
          <p className="text-sm text-neutral-400 mt-1">Language: English</p>
        </motion.div>

        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="bg-red-800/80 active:bg-red-600 w-full text-white text-sm font-semibold py-2 px-6 rounded-lg transition"
          >
            Log Out
          </motion.button>
        </motion.div>
      </motion.div>
      <Footer />
    </>
  );
}
