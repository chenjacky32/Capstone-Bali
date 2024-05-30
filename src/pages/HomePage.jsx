import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  useEffect(() => {
    document.title = "Destination App";
  }, []);

  return (
    <main>
      <div
        id="description"
        className="flex flex-col items-center justify-center h-screen text-center text-white bg-fixed bg-gray-800 bg-center bg-cover"
      >
        <div>
          <h2 className="mb-4 text-4xl font-bold">TOURISM DESTINATION APP</h2>
        </div>
        <div>
          <div className="text-lg">
            <span className="block text-2xl font-semibold">
              DESTINATION APP
            </span>
            <span>
              {" "}
              helps you find various types of amazing{" "}
              <b>tourist destinations</b> to meet your <b>adventure</b> and{" "}
              <b>travel</b> needs.{" "}
            </span>
          </div>
        </div>
      </div>

      <div
        id="services"
        className="flex flex-col items-center justify-center h-screen py-20 text-center text-gray-800 bg-fixed bg-gray-100 bg-center bg-cover"
      >
        <div>
          <h2 className="mb-4 text-4xl font-bold">SERVICES</h2>
        </div>
        <div className="w-full max-w-4xl">
          <div className="mb-8">
            <p className="text-lg">
              <b>Destination App</b> provides various features that can help you
              find amazing travel ideas according to your wishes.
            </p>
            <Link to="/destinations" className="text-blue-500 hover:underline">
              Try our service
            </Link>
          </div>
          <div className="flex flex-wrap justify-around">
            <div className="w-full p-4 service md:w-1/2">
              <h3 className="mb-2 text-2xl font-bold">Destination List</h3>
              <div className="flex justify-center mb-2">
                <img
                  className="w-24 h-24"
                  src="https://via.placeholder.com/96"
                  alt="placeholder"
                />
              </div>
              <p>
                The <b>Destination List</b> feature provides a random list of
                amazing tourist spots, ranging from mountains, beaches, and
                historical sites.
              </p>
            </div>
            <div className="w-full p-4 service md:w-1/2">
              <h3 className="mb-2 text-2xl font-bold">Search Destinations</h3>
              <div className="flex justify-center mb-2">
                <img
                  className="w-24 h-24"
                  src="https://via.placeholder.com/96"
                  alt="placeholder"
                />
              </div>
              <p>
                The <b>Search Destinations</b> feature provides a list of
                tourist spots according to the desired location, type, or
                activities available.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
