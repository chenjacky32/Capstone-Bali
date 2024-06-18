import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkedAlt,
  faUser,
  faSignInAlt,
  faBars,
  faTimes,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  const { isLoggedIn } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  const location = useLocation();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Check if current path is '/login'
  if (location.pathname === "/login") {
    return null; // Return null to render nothing when on the login page
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className="p-4 shadow-md bg-gradient-to-r from-purple-600 to-blue-500 dark:from-gray-800 dark:to-black">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="mb-4 text-2xl font-bold text-white lg:mb-0">
            <Link to="/" className="flex items-center text-white">
              Explore Bali
            </Link>
          </div>
          <div className="flex items-center lg:hidden">
            <button
              onClick={toggleMenu}
              className="mr-4 text-white focus:outline-none"
            >
              <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
            </button>
            <button
              onClick={toggleDarkMode}
              className="text-white focus:outline-none"
            >
              <FontAwesomeIcon icon={darkMode ? faSun : faMoon} size="lg" />
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
                <FontAwesomeIcon icon={faMapMarkedAlt} className="mr-3" />
                Destination
              </Link>
              {isLoggedIn ? (
                <Link
                  to="/dashboard"
                  className="flex items-center text-white hover:text-yellow-300"
                >
                  <FontAwesomeIcon icon={faUser} className="mr-4" />
                  Dashboard
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="flex items-center text-white hover:text-yellow-300"
                >
                  <FontAwesomeIcon icon={faSignInAlt} className="mr-4" />
                  Login
                </Link>
              )}
              <button
                onClick={toggleDarkMode}
                className="flex items-center text-white hover:text-yellow-300 lg:ml-4"
              >
                <FontAwesomeIcon
                  icon={darkMode ? faSun : faMoon}
                  className="mr-4"
                />
                {darkMode ? "Light Mode" : "Dark Mode"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
