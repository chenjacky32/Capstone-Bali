import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import galleryImages from "../utils/galery";

export default function HomePage() {
  useEffect(() => {
    document.title = "Explore Bali";
  }, []);

  return (
    <main>
      <div
        id="description"
        className="flex flex-col items-center justify-center h-screen p-6 text-center text-black bg-fixed bg-white bg-center bg-cover"
      >
        <div className="container mx-auto">
          <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-4xl font-bold leading-tight">
                TOURISM DESTINATION APP
              </h2>
              <p className="text-lg leading-relaxed">
                <span className="block mb-2 text-2xl font-semibold">
                  DESTINATION APP
                </span>
                <span>
                  helps you find various types of amazing{" "}
                  <b>tourist destinations</b> to meet your <b>adventure</b> and{" "}
                  <b>travel</b> needs.
                </span>
              </p>
            </div>
            <div className="flex justify-center">
              <img
                className="w-full h-auto rounded-lg shadow-lg"
                src="https://ik.imagekit.io/tvlk/blog/2023/09/shutterstock_631736717.jpg"
                alt="Tourism Destination"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        id="services"
        className="flex flex-col items-center justify-center h-screen py-20 text-center text-gray-800 bg-fixed bg-gray-100 bg-center bg-cover"
      >
        <div>
          <h2 className="mb-4 text-4xl font-bold text-indigo-700">SERVICES</h2>
        </div>
        <div className="w-full max-w-4xl">
          <div className="mb-8">
            <p className="text-lg leading-relaxed text-gray-700">
              <b>Destination App</b> provides various features that can help you
              find amazing travel ideas according to your wishes.
            </p>
            <Link
              to="/destinations"
              className="text-blue-500 hover:text-indigo-700 hover:underline"
            >
              Try our service
            </Link>
          </div>
          <div className="flex flex-wrap justify-around">
            <div className="w-full p-4 service md:w-1/2">
              <h3 className="mb-2 text-2xl font-bold text-indigo-700">
                Destination List
              </h3>
              <div className="flex justify-center mb-2">
                <img
                  className="w-24 h-24"
                  src="https://via.placeholder.com/96"
                  alt="placeholder"
                />
              </div>
              <p className="text-gray-700">
                The <b>Destination List</b> feature provides a random list of
                amazing tourist spots, ranging from mountains, beaches, and
                historical sites.
              </p>
            </div>
            <div className="w-full p-4 service md:w-1/2">
              <h3 className="mb-2 text-2xl font-bold text-indigo-700">
                Search Destinations
              </h3>
              <div className="flex justify-center mb-2">
                <img
                  className="w-24 h-24"
                  src="https://via.placeholder.com/96"
                  alt="placeholder"
                />
              </div>
              <p className="text-gray-700">
                The <b>Search Destinations</b> feature provides a list of
                tourist spots according to the desired location, type, or
                activities available.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        id="gallery"
        className="flex flex-col items-center justify-center py-8 text-center bg-fixed bg-white bg-center bg-cover"
      >
        <div className="container mx-auto">
          <h2 className="mb-4 text-4xl font-bold text-indigo-700">GALLERY</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {galleryImages.map((src, index) => (
              <div key={index} className="p-2">
                <img
                  className="object-cover w-full h-auto rounded-lg shadow-lg md:h-64"
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
