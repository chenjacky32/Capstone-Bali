// components/NavBar.jsx
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faMapMarkedAlt,
  faUser,
  faSignInAlt,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  const { isLoggedIn } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-4 shadow-md bg-gradient-to-r from-purple-600 to-blue-500">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="mb-4 text-2xl font-bold text-white lg:mb-0">
            <Link
              to="/"
              className="flex items-center text-white hover:text-yellow-300"
            >
              <FontAwesomeIcon icon={faHome} className="mr-2" />
              Explore Bali
            </Link>
          </div>
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
            </button>
          </div>
          <div
            className={`w-full lg:w-auto lg:flex ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <div className="flex flex-col mt-4 space-y-4 lg:flex-row lg:mt-0 lg:space-x-8 lg:space-y-0">
              <Link
                to="/destinations"
                className="flex items-center text-white hover:text-yellow-300"
              >
                <FontAwesomeIcon icon={faMapMarkedAlt} className="mr-2" />
                Destination
              </Link>
              {isLoggedIn ? (
                <Link
                  to="/dashboard"
                  className="flex items-center text-white hover:text-yellow-300"
                >
                  <FontAwesomeIcon icon={faUser} className="mr-2" />
                  Dashboard
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="flex items-center text-white hover:text-yellow-300"
                >
                  <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
