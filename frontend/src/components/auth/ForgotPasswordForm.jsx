import React from "react";
import { useNavigate } from "react-router-dom";

const ForgotPasswordForm = () => {
  const navigate = useNavigate();

  const verifyEmail = () => {
    navigate("/otp", { state: { next: "/reset-password" } });
  };

  return (
    <>
      <h1 className="text-center text-blue-700 font-bold text-2xl md:text-3xl mb-8">
        Forgot Password
      </h1>
      <div className="space-y-4">
        <input
          className="rounded-lg p-3 w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          placeholder="Enter your email"
        />
        <button
          onClick={verifyEmail}
          className="w-full bg-blue-500 hover:bg-blue-600 font-semibold text-white rounded-lg py-3 transition"
        >
          Send OTP
        </button>
      </div>
    </>
  );
};

export default ForgotPasswordForm;
