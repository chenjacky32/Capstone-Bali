import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext"; // Import the context

export default function NavBar() {
  const { isLoggedIn } = useContext(AuthContext); // Access the login state

  return (
    <nav className="p-4 bg-gray-800">
      <div className="container flex items-center justify-between mx-auto">
        <div className="text-xl font-bold text-white">Explore Bali</div>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-gray-400">
            Home
          </Link>
          <Link to="/destinations" className="text-white hover:text-gray-400">
            Destination
          </Link>
          {isLoggedIn ? (
            <Link to="/dashboard" className="text-white hover:text-gray-400">
              Dashboard
            </Link>
          ) : (
            <Link to="/login" className="text-white hover:text-gray-400">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
