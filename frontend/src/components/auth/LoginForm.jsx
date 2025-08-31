import React from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/otp", { state: { next: "/home" } });
  };

  return (
    <>
      <h1 className="text-center text-blue-700 font-bold text-2xl md:text-3xl mb-8">
        Welcome Back!
      </h1>
      <div className="space-y-4">
        <input
          className="rounded-lg p-3 w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          placeholder="Enter your email"
        />
        <input
          className="rounded-lg p-3 w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="password"
          placeholder="Enter your password"
        />

        <div className="flex justify-between text-sm text-gray-600">
          <button
            onClick={() => navigate("/forgot-password")}
            className="text-blue-600 hover:underline"
          >
            Forgot Password?
          </button>
          <span>
            Don’t have an account?{" "}
            <button
              onClick={() => navigate("/signup")}
              className="text-blue-600 hover:underline"
            >
              Sign Up
            </button>
          </span>
        </div>

        <button
          className="w-full bg-green-500 hover:bg-green-600 font-semibold text-white rounded-lg py-3 mt-4 transition"
          onClick={handleLogin}
        >
          Log In
        </button>
      </div>
    </>
  );
};

export default LoginForm;
