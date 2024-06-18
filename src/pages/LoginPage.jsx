import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { AiOutlineArrowLeft } from "react-icons/ai"; // Import the arrow left icon

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState(""); // Add this for the register form
  const [isLogin, setIsLogin] = useState(true); // Add this to toggle between login and register
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { isLoggedIn, logIn } = useContext(AuthContext); // Access the isLoggedIn and logIn function

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/destinations"); // Redirect to another page if logged in
    }
  }, [isLoggedIn, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_API_KEY}/login`,
        {
          email,
          password,
        }
      );

      if (response.data.status === "success") {
        localStorage.setItem("accessToken", response.data.data.accessToken);
        logIn(); // Update the isLoggedIn state
        navigate("/destinations"); // Redirect to dashboard or any other page
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_API_KEY}/register`,
        {
          name,
          email,
          password,
        }
      );

      if (response.data.status === "success") {
        setIsLogin(true);
        setError("Registration successful. Please log in.");
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-600 to-blue-500 dark:from-gray-800 dark:to-black">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        {/* Navigation back to /destinations */}
        <button
          onClick={() => navigate("/destinations")}
          className="absolute p-10 text-white hover:text-yellow-300 top-4 left-4"
        >
          <AiOutlineArrowLeft className="inline-block mr-2 text-xl" />
          Back to Destinations
        </button>
        {/* End navigation button */}
        <h2 className="mb-6 text-3xl font-bold text-center text-gray-900">
          {isLogin ? "Login" : "Register"}
        </h2>
        {error && <div className="mb-4 text-red-600">{error}</div>}
        <form onSubmit={isLogin ? handleLogin : handleRegister}>
          {!isLogin && (
            <div className="mb-4">
              <label className="block mb-2 text-gray-700" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
              />
            </div>
          )}
          <div className="mb-4">
            <label className="block mb-2 text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white transition duration-200 rounded bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-purple-600 dark:from-gray-800 dark:to-black"
          >
            {isLogin ? "Login" : "Register"}
          </button>
          {/* Conditionally render the "Don't have an account?" and "Already have an account?" text */}
          {isLogin && (
            <p className="mt-4 text-center text-gray-700">
              Don't have an account?{" "}
              <button
                type="button"
                onClick={() => setIsLogin(false)}
                className="text-purple-600 hover:underline focus:outline-none"
              >
                Register Now
              </button>
            </p>
          )}
          {!isLogin && (
            <p className="mt-4 text-center text-gray-700">
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => setIsLogin(true)}
                className="text-purple-600 hover:underline focus:outline-none"
              >
                Login Now
              </button>
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
