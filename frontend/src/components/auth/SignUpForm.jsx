import React from "react";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/otp", { state: { next: "/home" } });
  };

  return (
    <>
      <h1 className="text-center text-blue-700 font-bold text-2xl md:text-3xl mb-8">
        Welcome to FieldLink!
      </h1>
      <div className="space-y-4">
        <input
          className="rounded-lg p-3 w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          placeholder="First name"
        />
        <input
          className="rounded-lg p-3 w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          placeholder="Last name"
        />
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

        <div className="text-sm text-gray-600">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/login")}
            className="text-blue-600 hover:underline"
          >
            Log In
          </button>
        </div>

        <button
          className="w-full bg-green-500 hover:bg-green-600 font-semibold text-white rounded-lg py-3 mt-4 transition"
          onClick={handleSignup}
        >
          Sign Up
        </button>
      </div>
    </>
  );
};

export default SignupForm;
