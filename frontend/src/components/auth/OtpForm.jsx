import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const OtpForm = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleVerifyOtp = () => {
    const next = location.state?.next || "/home";
    navigate(next);
  };

  return (
    <>
      <h1 className="text-center text-blue-700 font-bold text-2xl md:text-3xl mb-8">
        Enter OTP
      </h1>
      <div className="space-y-4">
        <input
          className="rounded-lg p-3 w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
        <button
          onClick={handleVerifyOtp}
          className="w-full bg-green-500 hover:bg-green-600 font-semibold text-white rounded-lg py-3 transition"
        >
          Verify OTP
        </button>
      </div>
    </>
  );
};

export default OtpForm;
