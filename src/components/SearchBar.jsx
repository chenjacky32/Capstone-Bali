// components/SearchBar.jsx
import React, { useState } from "react";
import { HiSearch } from "react-icons/hi"; // Import search icon

export default function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="flex justify-end p-4 mx-auto max-w-screen-2xl">
      <div className="relative w-full max-w-lg">
        <HiSearch className="absolute top-0 left-0 w-6 h-6 mt-2 ml-3 text-gray-400" />
        <input
          type="text"
          className="w-full p-2 pl-10 border border-gray-300 rounded shadow-sm focus:ring focus:ring-blue-300 focus:outline-none"
          placeholder="Search destinations..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
    </div>
  );
}
