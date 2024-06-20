import React, { useState, useEffect, useContext } from "react";
import { getBookmarkedDestinations } from "../libs/api";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import LogoutConfirmationModal from "../components/LogoutConfirmationModal";
import LoadingSpinner from "../components/LoadingSpinner";
import ToTitleCase from "../utils/ToTitleCase";

export default function DashboardPage() {
  const [name, setName] = useState("");
  const [bookmarkedDestinations, setBookmarkedDestinations] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true); // Loading state with delay
  const { logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut();
    localStorage.removeItem("accessToken");
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const confirmLogout = () => {
    handleLogout();
    closeModal();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");

        // Simulate loading delay
        setTimeout(async () => {
          const userDetailsResponse = await fetch(
            `${import.meta.env.VITE_REACT_APP_API_KEY}/users/me`,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );
          const userDetails = await userDetailsResponse.json();
          if (userDetails.status === "success") {
            setName(userDetails.data.name);
          }

          const bookmarkedResponse = await getBookmarkedDestinations(
            accessToken
          );
          if (bookmarkedResponse.status === "success") {
            setBookmarkedDestinations(bookmarkedResponse.data.Bookmarks);
          }

          setLoading(false); // Set loading to false after delay
        }, 1000); // Simulated delay of 1 second
      } catch (error) {
        console.error("An error occurred while fetching data:", error);
        setLoading(false); // Ensure loading state is set to false on error
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <LoadingSpinner />; // Show loading spinner while data is being fetched
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100 bg-gradient-to-r dark:from-gray-800 dark:to-black">
      <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-lg">
        <h1 className="mb-4 text-3xl font-bold text-gray-900">
          Welcome, {name}!
        </h1>
        <button
          onClick={openModal}
          className="px-4 py-2 mb-6 text-white rounded-md bg-gradient-to-r from-purple-600 to-blue-500 focus:outline-none focus:ring-2 dark:from-gray-800 dark:to-black"
        >
          Logout
        </button>
        <h2 className="mb-4 text-2xl font-bold text-gray-900">
          Bookmarked Destinations
        </h2>
        {bookmarkedDestinations.length === 0 ? (
          <div className="p-4">
            <p className="text-lg text-gray-600">
              Start Bookmarking Your Favorite Destinations!
            </p>
            <Link
              to="/destinations"
              className="inline-block px-4 py-2 mt-2 text-white rounded-md bg-gradient-to-r from-purple-600 to-blue-500 focus:outline-none focus:ring-2 dark:from-gray-800 dark:to-black"
            >
              Explore Destinations
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {bookmarkedDestinations.map((destination) => (
              <div
                key={destination.dest_id}
                className="overflow-hidden bg-white rounded-lg shadow-md"
              >
                <Link
                  to={`/destinations/${destination.dest_id}`}
                  className="text-blue-600 hover:underline"
                >
                  <div className="p-4">
                    <h3 className="mb-2 text-xl font-bold">
                      {ToTitleCase(destination.dest_name)}
                    </h3>
                    <p className="mb-2 text-gray-600">{destination.location}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
      <LogoutConfirmationModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={confirmLogout}
      />
    </div>
  );
}
