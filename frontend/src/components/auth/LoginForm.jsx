import React from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/otp/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, purpose: "login" }),
      });

      if (response.ok) {
        navigate("/otp", {
          state: {
            email,
            password,
            purpose: "login",
            next: "/home",
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
        Welcome Back!
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
        <input
          className="rounded-lg p-3 w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
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
