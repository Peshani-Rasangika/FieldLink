import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const ResetPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

  const [newPassword, setNewPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (!validatePassword(newPassword)) {
      alert(
        "Password must be at least 8 characters, include uppercase, lowercase, number, and special character."
      );
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    try {
      const response = await fetch(
        "http://localhost:8080/api/users/reset-password",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, newPassword }),
        }
      );
      if (response.ok) {
        alert("Password reset successful!");
        navigate("/login");
      } else {
        alert("Failed to reset password.");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  };

  const validatePassword = (password) => {
    return (
      password.length >= 8 &&
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      /\d/.test(password) &&
      /[^A-Za-z0-9]/.test(password)
    );
  };

  return (
    <>
      <h1 className="text-center text-blue-700 font-bold text-2xl md:text-3xl mb-8">
        Set New Password
      </h1>
      <form onSubmit={handleResetPassword}>
        <div className="space-y-4">
          <input
            className="rounded-lg p-3 w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="password"
            placeholder="Enter your new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <div className="text-xs text-gray-500 mt-1">
            *Password must be at least 8 characters and include uppercase,
            lowercase, special character, and a number.
          </div>
          <input
            className="rounded-lg p-3 w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="password"
            placeholder="Confirm your new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button
            className="w-full bg-green-500 hover:bg-green-600 font-semibold text-white rounded-lg py-3 transition"
            type="submit"
          >
            Set Password
          </button>
        </div>
      </form>
    </>
  );
};

export default ResetPassword;
