import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-600 to-blue-500">
      <h1 className="mb-4 text-6xl font-bold text-white">404</h1>
      <h2 className="mb-8 text-2xl text-white">Page Not Found</h2>
      <Link
        to="/destinations"
        className="px-4 py-2 font-bold text-white bg-yellow-500 rounded hover:bg-orange-500"
      >
        Go Back
      </Link>
    </div>
  );
}
