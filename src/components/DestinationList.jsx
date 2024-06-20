import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import { FaStar } from "react-icons/fa";
import ToTitleCase from "../utils/ToTitleCase";

export default function DestinationList({ api, displayMode }) {
  return (
    <div
      className={
        displayMode === "grid"
          ? "grid grid-cols-2 gap-4 px-4 mx-auto mb-8 max-w-screen-2xl sm:grid-cols-3 md:grid-cols-5"
          : "px-4 mx-auto mb-8 max-w-screen-2xl"
      }
    >
      {api?.map((destination, index) => (
        <a
          href={`/destinations/${destination.id}`}
          className={`relative block overflow-hidden text-white transition-transform transform-gpu rounded shadow-lg cursor-pointer hover:text-blue-500 hover:scale-105 hover:shadow-2xl hover:brightness-110 ${
            displayMode === "list" ? "mb-4 h-36" : ""
          }`}
          key={index}
        >
          <div className="relative h-full">
            <img
              src={destination.img}
              alt={destination.name}
              className="object-cover w-full transition-transform rounded h-96 transform-gpu hover:rotate-1"
            />
            <div className="absolute top-0 right-0 flex items-center px-2 space-x-2 rounded bg-gradient-to-r from-purple-600 to-blue-500">
              <HiLocationMarker className="text-lg text-white" />
              <p className="text-white">{destination.location}</p>
            </div>
            <div className="absolute right-0 flex items-center px-2 space-x-2 bg-yellow-600 top-7">
              <FaStar className="text-lg text-white" />
              <p className="text-white">{destination.avgRating}</p>
            </div>
            <div
              className={`absolute bottom-0 left-0 w-full h-24 p-4 font-bold bg-black bg-opacity-80 md:text-xl ${
                displayMode === "list" ? "h-14" : ""
              }`}
            >
              {ToTitleCase(destination.name)}
            </div>
            <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold transition-opacity bg-black bg-opacity-50 opacity-0 hover:opacity-75">
              Explore Now
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
