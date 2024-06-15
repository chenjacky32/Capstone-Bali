import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Fade, Slide } from "react-awesome-reveal";
import galleryImages from "../utils/galery";
import { FaStar, FaListUl, FaSearch, FaRegBookmark } from "react-icons/fa";

export default function HomePage() {
  useEffect(() => {
    document.title = "Explore Bali";
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <div
        id="description"
        className="flex flex-col items-center justify-center h-screen p-6 text-center text-white bg-fixed bg-cover bg-gradient-to-r from-purple-600 to-blue-500"
      >
        <div className="container mx-auto">
          <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
            <Slide direction="left" duration={800} triggerOnce>
              <div>
                <h2 className="mb-4 text-5xl font-bold leading-tight">
                  TOURISM DESTINATION APP
                </h2>
                <p className="text-lg leading-relaxed">
                  <span className="block mb-2 text-2xl font-semibold">
                    DESTINATION APP
                  </span>
                  <span>
                    Helps you find various types of amazing{" "}
                    <b>tourist destinations</b> to meet your <b>adventure</b>{" "}
                    and <b>travel</b> needs.
                  </span>
                </p>
                <Link
                  to="/destinations"
                  className="inline-block px-6 py-3 mt-4 text-xl font-bold text-white transition duration-300 border-2 rounded-lg hover:bg-yellow-600"
                >
                  Explore Now
                </Link>
              </div>
            </Slide>
            <Slide direction="right" duration={800} triggerOnce>
              <div className="flex justify-center">
                <img
                  className="w-full h-auto rounded-lg shadow-lg"
                  src="https://ik.imagekit.io/tvlk/blog/2023/09/shutterstock_631736717.jpg"
                  alt="Tourism Destination"
                />
              </div>
            </Slide>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div
        id="services"
        className="flex flex-col items-center justify-center min-h-screen py-20 text-center bg-gray-100"
      >
        <div className="container mx-auto">
          <Fade cascade damping={0.2} triggerOnce>
            <h2 className="mb-4 text-4xl font-bold text-indigo-700">
              SERVICES
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-lg leading-relaxed text-gray-700">
              <b>Destination App</b> provides various features that can help you
              find amazing travel ideas according to your wishes.
            </p>
          </Fade>
        </div>
        <div className="container grid flex-grow grid-cols-1 gap-8 mx-auto md:grid-cols-2">
          <Fade cascade damping={0.2} triggerOnce>
            {/* Destination List */}
            <div className="p-4 bg-white rounded-lg shadow-lg">
              <h3 className="mb-2 text-2xl font-bold text-indigo-700">
                Destination List
              </h3>
              <div className="flex justify-center mb-2">
                <FaListUl className="w-24 h-24 py-4 text-indigo-700" />
              </div>
              <p className="text-gray-700">
                The <b>Destination List</b> feature provides a random list of
                amazing tourist spots, ranging from mountains, beaches, and
                historical sites.
              </p>
            </div>

            {/* Search Destinations */}
            <div className="p-4 bg-white rounded-lg shadow-lg">
              <h3 className="mb-2 text-2xl font-bold text-indigo-700">
                Search Destinations
              </h3>
              <div className="flex justify-center mb-2">
                <FaSearch className="w-24 h-24 py-4 text-indigo-700" />
              </div>
              <p className="text-gray-700">
                The <b>Search Destinations</b> feature provides a list of
                tourist spots according to the desired location, type, or
                activities available.
              </p>
            </div>

            {/* Bookmark Destination */}
            <div className="p-4 bg-white rounded-lg shadow-lg">
              <h3 className="mb-2 text-2xl font-bold text-indigo-700">
                Bookmark Destination
              </h3>
              <div className="flex justify-center mb-2">
                <FaRegBookmark className="w-24 h-24 py-4 text-indigo-700" />
              </div>
              <p className="text-gray-700">
                The <b>Bookmark Destination</b> feature allows users to save
                their favorite tourist spots for quick access later.
              </p>
            </div>

            {/* Rating Destination */}
            <div className="p-4 bg-white rounded-lg shadow-lg">
              <h3 className="mb-2 text-2xl font-bold text-indigo-700">
                Rating Destination
              </h3>
              <div className="flex justify-center mb-2">
                <FaStar className="w-24 h-24 py-4 text-indigo-700" />
              </div>
              <p className="text-gray-700">
                The <b>Rating Destination</b> feature allows users to provide
                ratings and reviews for tourist spots they have visited.
              </p>
            </div>
          </Fade>
        </div>
      </div>

      {/* Gallery Section */}
      <div
        id="gallery"
        className="flex flex-col items-center justify-center py-8 text-center bg-white"
      >
        <div className="container mx-auto">
          <Fade cascade damping={0.2} triggerOnce>
            <h2 className="mb-4 text-4xl font-bold text-indigo-700">GALLERY</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              {galleryImages.map((src, index) => (
                <div
                  key={index}
                  className="p-2 transition duration-300 transform hover:scale-105"
                >
                  <img
                    className="object-cover w-full h-auto rounded-lg shadow-lg md:h-64"
                    src={src}
                    alt={`Gallery image ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          </Fade>
        </div>
      </div>
    </main>
  );
}
