import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { bookmarkDestination, unbookmarkDestination } from "../libs/api";
import { AuthContext } from "../context/AuthContext";

const DetailPage = () => {
  const { id } = useParams();
  const [destination, setDestination] = useState(null);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const { isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    const fetchDestination = async () => {
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
      }
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

  if (!destination) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-md">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">
          {destination.name}
        </h2>
        <img
          className="w-full mb-4 rounded-lg shadow-lg"
          src={destination.img}
          alt={destination.name}
        />
        <p className="mb-4 text-gray-700">{destination.description}</p>
        <p className="text-sm text-gray-500">{destination.location}</p>
        {isLoggedIn && (
          <button
            onClick={handleBookmark}
            className="px-4 py-2 mt-4 text-white bg-blue-600 rounded hover:bg-blue-700"
          >
            {isBookmarked ? "Remove Bookmark" : "Add Bookmark"}
          </button>
        )}
      </div>
    </div>
  );
};

export default DetailPage;
