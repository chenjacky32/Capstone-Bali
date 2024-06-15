import React, { useState, useEffect, useContext } from "react";
import { getBookmarkedDestinations } from "../libs/api";
import { AuthContext } from "../context/AuthContext";

export default function DashboardPage() {
  const [name, setName] = useState("");
  const [bookmarkedDestinations, setBookmarkedDestinations] = useState([]);
  const { logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut();
    localStorage.removeItem("accessToken");
  };

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        const response = await fetch(
          `${import.meta.env.VITE_REACT_APP_API_KEY}/users/me`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        const data = await response.json();
        if (data.status === "success") {
          setName(data.data.name);
        }
      } catch (error) {
        console.error(
          "An error occurred while fetching the user details.",
          error
        );
      }
    };

    const fetchBookmarkedDestinations = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        const response = await getBookmarkedDestinations(accessToken);
        if (response.status === "success") {
          setBookmarkedDestinations(response.data.Bookmarks);
        }
      } catch (error) {
        console.error(
          "An error occurred while fetching the bookmarked destinations.",
          error
        );
      }
    };

    fetchUserDetails();
    fetchBookmarkedDestinations();
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
      <div className="w-full max-w-2xl mt-8">
        <h2 className="text-xl font-bold text-gray-900">
          Bookmarked Destinations
        </h2>
        {bookmarkedDestinations.length === 0 ? (
          <p className="mt-4 text-gray-600">Start Bookmarking Now</p>
        ) : (
          <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 md:grid-cols-3">
            {bookmarkedDestinations.map((destination) => (
              <div
                key={destination.dest_id}
                className="p-4 bg-white rounded shadow-md"
              >
                <h3 className="text-lg font-bold">{destination.dest_name}</h3>
                <p className="text-sm text-gray-600">{destination.location}</p>
                <a
                  href={`/destinations/${destination.dest_id}`}
                  className="mt-2 text-blue-500 hover:underline"
                >
                  View Details
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
