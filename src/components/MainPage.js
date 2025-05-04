import React from "react";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div 
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat relative" 
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1614028670055-7ef02eeb046d')" }}
    >
      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-blue-400 bg-opacity-50"></div>

      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
          Welcome to FixIt Hostel Portal
        </h1>
        <p className="text-lg md:text-xl opacity-90 mb-6">
          Manage complaints, analytics, and hostel services with ease.
        </p>
        
        {/* Login Options */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
          <button 
            onClick={() => navigate("/student-login")} 
            className="px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg backdrop-blur-lg bg-opacity-70 hover:bg-blue-700 transition duration-300"
          >
            Student Login
          </button>
          <a 
            href="https://fixit-hostel-admin.vercel.app/login" 
            className="px-8 py-3 bg-green-600 text-white text-lg font-semibold rounded-lg shadow-lg backdrop-blur-lg bg-opacity-70 hover:bg-green-700 transition duration-300"
          >
            Admin Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
