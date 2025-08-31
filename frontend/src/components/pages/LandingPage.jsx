import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex flex-col items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-xl w-full text-center">
        <img
          src="/logo192.png"
          alt="FieldLink Logo"
          className="mx-auto mb-6 w-20 h-20"
        />
        <h1 className="text-4xl font-bold text-blue-700 mb-4">
          Welcome to FieldLink
        </h1>
        <p className="text-gray-700 mb-8">
          Manage your field activities, connect with your team, and streamline
          your workflow—all in one place.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition"
            onClick={() => navigate("/login")}
          >
            Log In
          </button>
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg transition"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </button>
        </div>
      </div>
      <footer className="mt-8 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} FieldLink. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
