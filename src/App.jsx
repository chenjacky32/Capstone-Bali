// src/App.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import DestinationPage from "./pages/DestinationPage";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-color-dark">
      <NavBar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/destinations" element={<DestinationPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
