import React from "react";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="text-center text-blue-700 font-bold text-2xl md:text-3xl mb-8">
        Set New Password
      </h1>
      <div className="space-y-4">
        <input
          className="rounded-lg p-3 w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="password"
          placeholder="Enter your new password"
        />
        <input
          className="rounded-lg p-3 w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="password"
          placeholder="Confirm your new password"
        />
        <button
          className="w-full bg-green-500 hover:bg-green-600 font-semibold text-white rounded-lg py-3 transition"
          onClick={() => navigate("/login")}
        >
          Set Password
        </button>
      </div>
    </>
  );
};

export default ResetPassword;
