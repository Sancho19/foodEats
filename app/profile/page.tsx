"use client";
import Navbar from "@/components/navbar";
import { useState } from "react";

export default function Profile() {
  // State to handle visibility of address and card details
  const [showAddress, setShowAddress] = useState(false);
  const [showCardDetails, setShowCardDetails] = useState(false);

  // Sample user data (you can replace this with actual user data from API or authentication state)
  const user = {
    firstName: "Sipho",
    lastName: "Van de Merwe",
    phoneNumber: "+27 64 819 4578",
    address: "1234 Elm St, Springfield, IL, 62701",
    cardDetails: "**** **** **** 1234", // Masked card details
  };

  return (
    <>
      <Navbar />
      <div className="container mt-12 px-4 py-8">
        <h1 className="text-2xl font-semibold text-center mb-6 tracking-wide">
          Profile
        </h1>

        {/* User Information Section */}
        <div className="border border-white p-6 rounded-xl shadow-xl">
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
        </div>

        {/* Address Section */}
        <div className="border p-5 rounded-xl shadow-lg mt-6">
          <h2 className="text-lg font-semibold">Address</h2>
          <button
            onClick={() => setShowAddress(!showAddress)}
            className="text-blue-500/70 text-xs mt-2"
          >
            {showAddress ? "Hide Address" : "Show Address"}
          </button>

          {showAddress && (
            <p className="mt-2 text-sm text-neutral-400">{user.address}</p>
          )}
        </div>

        {/* Card Details Section */}
        <div className="border border-white p-6 rounded-xl shadow-sm mt-6">
          <h2 className="text-lg font-semibold">Card Details</h2>
          <button
            onClick={() => setShowCardDetails(!showCardDetails)}
            className="text-blue-500/70 text-xs mt-2"
          >
            {showCardDetails ? "Hide Card Details" : "Show Card Details"}
          </button>

          {showCardDetails && (
            <p className="mt-2 text-sm text-neutral-400">{user.cardDetails}</p>
          )}
        </div>
      </div>
    </>
  );
}
