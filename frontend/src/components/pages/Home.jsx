import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex flex-col items-center justify-center">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-xl w-full text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
          Welcome to FieldLink!
        </h1>
        <p className="text-gray-700 mb-6">
          You have successfully logged in. <br />
          Explore your dashboard, manage your field activities, and stay
          connected!
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition">
            Dashboard
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg transition">
            Profile
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-blue-700 font-semibold py-2 px-6 rounded-lg transition">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
