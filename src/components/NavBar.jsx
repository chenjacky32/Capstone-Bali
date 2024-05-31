import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="p-4 bg-gray-800">
      <div className="container flex items-center justify-between mx-auto">
        <div className="text-xl font-bold text-white">Explore Bali</div>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-gray-400">
            Home
          </Link>
          <Link to="/destination" className="text-white hover:text-gray-400">
            Destination
          </Link>
          <Link to="/login" className="text-white hover:text-gray-400">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
