import React, { Suspense, useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import LoadingSpinner from "./components/LoadingSpinner";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const DestinationPage = React.lazy(() => import("./pages/DestinationPage"));
const LoginPage = React.lazy(() => import("./pages/LoginPage"));
const DashboardPage = React.lazy(() => import("./pages/DashboardPage"));
const DetailPage = React.lazy(() => import("./pages/DetailPage"));
const NotFoundPage = React.lazy(() => import("./pages/NotFoundPage"));

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for loading purposes
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay time as needed

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-color-dark">
      <NavBar />
      <main className="flex-grow">
        <Suspense fallback={loading ? <LoadingSpinner /> : null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/destinations" element={<DestinationPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/destinations/:id" element={<DetailPage />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <DashboardPage />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
