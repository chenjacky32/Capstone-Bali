// components/ToggleDisplayMode.jsx
import React from "react";
import { FiGrid, FiList } from "react-icons/fi"; // Import icons from react-icons library

export default function ToggleDisplayMode({ displayMode, setDisplayMode }) {
  return (
    <div className="flex justify-end p-4 mx-auto rounded max-w-screen-2xl">
      {/* Grid View Button */}
      <button
        onClick={() => setDisplayMode("grid")}
        className={`flex items-center px-4 py-2 text-white focus:outline-none transition-colors duration-300 ease-in-out ${
          displayMode === "grid"
            ? "bg-blue-500 hover:bg-blue-600"
            : "bg-gray-500 hover:bg-gray-600"
        }`}
      >
        <FiGrid />
      </button>

      {/* List View Button */}
      <button
        onClick={() => setDisplayMode("list")}
        className={`flex items-center px-4 py-2 text-white focus:outline-none transition-colors duration-300 ease-in-out ${
          displayMode === "list"
            ? "bg-blue-500 hover:bg-blue-600"
            : "bg-gray-500 hover:bg-gray-600"
        }`}
      >
        <FiList />
      </button>
    </div>
  );
}
