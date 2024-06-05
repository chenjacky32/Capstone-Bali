// src/App.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRouter from "./utils/PrivateRoute";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import DestinationPage from "./pages/DestinationPage";
import LoginPage from "./pages/LoginPage";
// import DashboardPage from "./pages/DashboardPage";
import DetailPage from "./pages/DetailPage";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-color-dark">
      <NavBar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/destinations" element={<DestinationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/destinations/:id" element={<DetailPage />} />
          {/*<PrivateRouter path="/dashboard" component={DashboardPage} />*/}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
