// components/Footer.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  const location = useLocation();

  // Check if current path is '/login'
  if (location.pathname === "/login") {
    return null; // Return null to render nothing when on the login page
  }

  return (
    <footer className="py-8 text-white bg-gradient-to-r from-purple-600 to-blue-500">
      <div className="container flex flex-col items-center justify-between mx-auto space-y-8 md:flex-row md:space-y-0">
        {/* Logo and Description */}
        <div className="w-full text-center md:w-auto md:text-left">
          <Link
            to="/"
            className="flex items-center justify-center text-xl font-semibold text-white md:justify-start"
          >
            Explore Bali
          </Link>
          <p className="max-w-xs mx-auto mt-2 text-base md:mx-0">
            Helps you find various types of amazing tourist destinations to meet
            your adventure and travel needs.
          </p>
        </div>

        {/* Contact Information */}
        <div className="text-base text-center md:text-left">
          <h3 className="mb-2 text-xl font-semibold">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>
              Email:{" "}
              <a
                href="mailto:support@mywebsite.com"
                className="hover:text-yellow-300"
              >
                support@mywebsite.com
              </a>
            </li>
            <li>
              Phone:{" "}
              <a href="tel:+1234567890" className="hover:text-yellow-300">
                +123 456 7890
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="text-center md:text-left">
          <h3 className="mb-2 text-xl font-semibold">Follow Us</h3>
          <div className="flex justify-center space-x-4 md:justify-start">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-400"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-400"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-400"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-400"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-400"
            >
              <FaYoutube size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="pt-4 mt-8 border-t">
        <p className="text-sm text-center">
          © {new Date().getFullYear()} Explore Bali. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
