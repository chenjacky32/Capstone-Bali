import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import LoadingSpinner from "./components/LoadingSpinner";

// Lazy loading using React.lazy for your page components
const HomePage = React.lazy(() => import("./pages/HomePage"));
const DestinationPage = React.lazy(() => import("./pages/DestinationPage"));
const LoginPage = React.lazy(() => import("./pages/LoginPage"));
const DashboardPage = React.lazy(() => import("./pages/DashboardPage"));
const DetailPage = React.lazy(() => import("./pages/DetailPage"));
const NotFoundPage = React.lazy(() => import("./pages/NotFoundPage"));

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white bg-gradient-to-r dark:from-gray-800 dark:to-black">
      <NavBar />
      <main className="flex-grow">
        {/* Use Suspense to display a fallback while components are loading */}
        <Suspense fallback={<LoadingSpinner />}>
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
            {/* Add the NotFoundPage as the last Route */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
