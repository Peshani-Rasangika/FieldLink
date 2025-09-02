import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const OtpForm = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const { email, firstName, lastName, password, purpose, next } =
    location.state || {};

  const handleVerifyOtp = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/otp/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp, purpose }),
      });

      if (response.ok) {
        if (purpose === "signup") {
          const createUserResp = await fetch(
            "http://localhost:8080/api/users/register",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                firstName,
                lastName,
                email,
                password,
                role: "Manager",
              }),
            }
          );

          if (createUserResp.ok) {
            alert("Signup successful!");
            navigate(next || "/home");
          } else {
            alert("Failed to create user account.");
          }
        } else if (purpose === "login") {
          navigate(next || "/home");
        } else if (purpose === "forgot_password") {
          navigate("/reset-password", { state: { email } });
        }
      } else {
        alert("Invalid or expired OTP.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again.");
    }
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
