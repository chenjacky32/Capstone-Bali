import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

export default function DashboardPage() {
  const [name, setName] = useState("");
  const { logOut } = useContext(AuthContext); // Access the logOut function

  const handleLogout = () => {
    logOut(); // Call the logOut function
    localStorage.removeItem("accessToken"); // Remove the access token from local storage
  };

  useEffect(() => {
    const fetchName = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        const response = await axios.get("http://localhost:3000/users/me", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (response.data.status === "success") {
          setName(response.data.data.name);
        }
      } catch (error) {
        console.error("An error occurred while fetching the name.", error);
      }
    };

    fetchName();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="mb-4 text-2xl font-bold text-gray-900">
        Welcome, {name}!
      </h1>
      <button
        onClick={handleLogout}
        className="px-4 py-2 text-white transition duration-200 bg-blue-600 rounded hover:bg-blue-700"
      >
        Logout
      </button>
    </div>
  );
}
