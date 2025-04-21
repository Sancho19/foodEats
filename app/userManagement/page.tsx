"use client";
import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { FaUserEdit, FaTrashAlt } from "react-icons/fa";

export default function UserManagement() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Puleng Van Wyk",
      email: "puleng@gmail.com",
      role: "Manager",
      status: "Active",
      joined: "2023-12-01",
    },
    {
      id: 2,
      name: "Maria Dos Santos",
      email: "maria@gmail.com",
      role: "Customer",
      status: "Active",
      joined: "2024-11-10",
    },
    {
      id: 3,
      name: "Sancho Xavi",
      email: "sancho@gmail.com",
      role: "Admin",
      status: "Active",
      joined: "2024-10-05",
    },
  ]);

  const handleRoleChange = (id: number, newRole: string) => {
    setUsers((prev) =>
      prev.map((user) => (user.id === id ? { ...user, role: newRole } : user))
    );
  };

  const handleDeactivate = (id: number) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id ? { ...user, status: "Deactivated" } : user
      )
    );
  };

  return (
    <>
      <Navbar />
      <div className="container mt-16 px-4 py-10 min-h-screen">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xl sm:text-2xl font-bold mb-6 text-center"
        >
          User Management
        </motion.h1>

        <div className="space-y-4">
          {users.map((user) => (
            <div
              key={user.id}
              className="shadow-gray-800 rounded-xl shadow-md p-4 text-sm space-y-2"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">{user.name}</p>
                  <p className="text-gray-500 text-xs">{user.email}</p>
                </div>
                <span
                  className={`text-xs px-2 py-1 rounded-full font-medium ${
                    user.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {user.status}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <p className="text-gray-600 text-xs">Joined: {user.joined}</p>
                <select
                  value={user.role}
                  onChange={(e) => handleRoleChange(user.id, e.target.value)}
                  className="border bg-black px-2 py-1 rounded text-xs "
                >
                  <option>Customer</option>
                  <option>Admin</option>
                  <option>Staff</option>
                  <option>Manager</option>
                </select>
              </div>

              <div className="flex justify-end gap-4 pt-2">
                <button
                  onClick={() => handleDeactivate(user.id)}
                  className="text-red-500 hover:text-red-700 text-base"
                  title="Deactivate"
                >
                  <FaTrashAlt />
                </button>
                <button
                  onClick={() => alert("Edit user coming soon")}
                  className="text-blue-500 hover:text-blue-700 text-base"
                  title="Edit"
                >
                  <FaUserEdit />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
