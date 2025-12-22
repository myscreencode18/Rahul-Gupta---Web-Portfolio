import React from "react";
import { useNavigate } from "react-router-dom";
import { XCircle } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen bg-[#0A192F] text-white flex flex-col items-center justify-center px-6 text-center">
      <XCircle size={80} className="text-pink-500 mb-6 animate-bounce" />
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-gray-400 mb-6">Oops! Page not found.</p>
      <button
        onClick={() => navigate("/")}
        className="bg-cyan-400 hover:bg-cyan-500 text-black px-6 py-3 rounded-xl font-semibold transition-all duration-300"
      >
        Go Back Home
      </button>
    </div>
  );
};

export default NotFound;
