import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-8 text-color-dark bg-color-secondary">
      <div className="container flex flex-col items-center justify-between mx-auto space-y-8 md:flex-row md:space-y-0">
        {/* Logo and Description */}
        <div className="w-full text-center md:w-auto md:text-left">
          <img
            src="/assets/header-logo.png"
            alt="Header Logo"
            className="mx-auto md:mx-0"
            width={200}
            height={20}
          />
          <p className="mt-2 text-sm text-black">
            helps you find various types of amazing tourist destinations to meet
            your adventure and travel needs.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="text-center md:text-left">
          <h3 className="mb-2 text-xl font-semibold">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="text-black hover:text-blue-400">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/destination"
                className="text-black hover:text-blue-400"
              >
                Destination
              </Link>
            </li>
            <li>
              <Link to="/login" className="text-black hover:text-blue-400">
                Login
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="text-center md:text-left">
          <h3 className="mb-2 text-xl font-semibold">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: support@mywebsite.com</li>
            <li>Phone: +123 456 7890</li>
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
              className="text-gray-400 hover:text-white"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaYoutube size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="pt-4 mt-8 border-t border-gray-700">
        <p className="text-sm text-center text-gray-500">
          © {new Date().getFullYear()} ExploreBali. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
