import React from "react";
import { useNavigate } from "react-router-dom";

const ForgotPasswordForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = React.useState("");

  const verifyEmail = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/otp/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, purpose: "forgot_password" }),
      });

      if (response.ok) {
        navigate("/otp", {
          state: {
            email,
            purpose: "forgot_password",
            next: "/reset-password",
          },
        });
      } else {
        alert("Failed to send OTP. Try again.");
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <h1 className="text-center text-blue-700 font-bold text-2xl md:text-3xl mb-8">
        Forgot Password
      </h1>
      <div className="space-y-4">
        <input
          className="rounded-lg p-3 w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
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
