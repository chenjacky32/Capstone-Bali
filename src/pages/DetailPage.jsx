import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import {
  bookmarkDestination,
  unbookmarkDestination,
  getDestinationResponse,
  getBookmarkedDestinations,
  addRating,
} from "../libs/api";
import { AuthContext } from "../context/AuthContext";
import LoadingSpinner from "../components/LoadingSpinner";
import ReactStars from "react-rating-stars-component";

const DetailPage = () => {
  const { id } = useParams();
  const [destination, setDestination] = useState(null);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { isLoggedIn } = useContext(AuthContext);
  const [rating, setRating] = useState(0);

  const ratingChanged = async (newRating) => {
    setRating(newRating);
    const token = localStorage.getItem("accessToken");
    if (!token) {
      console.error("User is not authenticated.");
      return;
    }

    try {
      const response = await addRating(id, newRating, token);
      if (response.status === "success") {
        console.log("Rating added successfully");
      } else {
        console.error(response.message);
      }
    } catch (error) {
      console.error("An error occurred while adding the rating.");
    }
  };
  useEffect(() => {
    const fetchDestination = async () => {
      try {
        // Fetch destination details
        const response = await getDestinationResponse(`destinations/${id}`);
        if (response.status === "success") {
          setDestination(response.data);
        } else {
          console.error(response.message);
        }

        if (isLoggedIn) {
          // Fetch user's bookmarked destinations
          const token = localStorage.getItem("accessToken");
          if (token) {
            const bookmarkedResponse = await getBookmarkedDestinations(token);
            if (bookmarkedResponse.status === "success") {
              // Check if the current destination is bookmarked
              const bookmarked = bookmarkedResponse.data.Bookmarks.some(
                (bookmark) => bookmark.dest_id === id
              );
              setIsBookmarked(bookmarked);
            }
          }
        }
      } catch (error) {
        console.error("An error occurred while fetching the destination.");
      } finally {
        setIsLoading(false); // Set loading to false once data is fetched (success or error)
      }
    };

    fetchDestination();
  }, [id, isLoggedIn]);

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
        setIsBookmarked(!isBookmarked); // Toggle bookmark status
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

        {/* Row 2: Name, Bookmark Button and Rating */}
        <div className="pb-6 mb-6 border-b-2">
          <h2 className="text-2xl font-bold text-gray-900">
            {destination.name}
          </h2>
          <div className="flex items-center justify-between space-x-4">
            {isLoggedIn && (
              <button
                onClick={handleBookmark}
                className={`px-4 py-2 text-white rounded ${
                  isBookmarked
                    ? "bg-red-600 hover:bg-red-700"
                    : "bg-gradient-to-r from-purple-600 to-blue-500"
                }`}
              >
                {isBookmarked ? "Remove Bookmark" : "Add to Bookmark"}
              </button>
            )}
            <div>
              <p className="mb-1 font-medium text-center text-gray-700">
                Give Rating
              </p>
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={36}
                activeColor="#ffd700"
              />
            </div>
          </div>
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
