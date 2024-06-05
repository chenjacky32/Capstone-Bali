import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const { id } = useParams();
  const [destination, setDestination] = useState(null);

  useEffect(() => {
    const fetchDestination = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/destinations/${id}`
        );
        const data = await response.json();

        if (data.status === "success") {
          setDestination(data.data);
        } else {
          console.error(data.message);
        }
      } catch (error) {
        console.error("An error occurred while fetching the destination.");
      }
    };

    fetchDestination();
  }, [id]);

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
      </div>
    </div>
  );
};

export default DetailPage;
