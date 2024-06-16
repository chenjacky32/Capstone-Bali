import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { bookmarkDestination, unbookmarkDestination } from "../libs/api";
import { AuthContext } from "../context/AuthContext";
import LoadingSpinner from "../components/LoadingSpinner";

const DetailPage = () => {
  const { id } = useParams();
  const [destination, setDestination] = useState(null);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // State to track loading
  const { isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    const fetchDestination = async () => {
      // Simulate delay for 1 second
      setTimeout(async () => {
        try {
          const response = await fetch(
            `${import.meta.env.VITE_REACT_APP_API_KEY}/destinations/${id}`
          );
          const data = await response.json();

          if (data.status === "success") {
            setDestination(data.data);
            setIsBookmarked(data.data.isBookmarked); // Assuming `isBookmarked` is part of the response data
          } else {
            console.error(data.message);
          }
        } catch (error) {
          console.error("An error occurred while fetching the destination.");
        } finally {
          setIsLoading(false); // Set loading to false once data is fetched (success or error)
        }
      }, 1000); // Delay of 1 second (1000 milliseconds)
    };

    fetchDestination();
  }, [id]);

  const handleBookmark = async () => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      console.error("User is not authenticated.");
      return;
    }

    try {
      const response = isBookmarked
        ? await unbookmarkDestination(id, token)
        : await bookmarkDestination(id, token);

      if (response.status === "success") {
        setIsBookmarked(!isBookmarked);
      } else {
        console.error(response.message);
      }
    } catch (error) {
      console.error("An error occurred while updating the bookmark status.");
    }
  };

  if (isLoading) {
    return <LoadingSpinner />; // Show loading spinner while data is being fetched
  }

  if (!destination) {
    return (
      <div className="flex items-center justify-center h-screen">
        Error: Destination not found
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-md">
        {/* Row 1: Image */}
        <div className="pb-6 mb-6 border-b-2">
          <img
            className="w-full rounded-lg shadow-lg"
            src={destination.img}
            alt={destination.name}
          />
        </div>

        {/* Row 2: Name and Bookmark Button */}
        <div className="pb-6 mb-6 border-b-2">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            {destination.name}
          </h2>
          {isLoggedIn && (
            <button
              onClick={handleBookmark}
              className={`px-4 py-2 text-white rounded ${
                isBookmarked
                  ? "bg-red-600 hover:bg-red-700"
                  : "bg-gradient-to-r from-purple-600 to-blue-500"
              }`}
            >
              {isBookmarked ? "Remove Bookmark" : "Add Bookmark"}
            </button>
          )}
        </div>

        {/* Row 3: Description */}
        <div>
          <p className="text-gray-700">{destination.description}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
