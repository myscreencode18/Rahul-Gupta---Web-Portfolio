import React, { useState } from "react";
import { User, Code2, FolderKanban, Mail, X } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

const App = () => {
  const [showImage, setShowImage] = useState(false);

  return (
    <div className="h-screen w-screen flex bg-[#0A192F] text-[#F0F0F0] overflow-hidden">
      {/* Sidebar Navbar */}
      <div className="w-[60px] bg-[#1E1E1E] flex flex-col items-center py-6 space-y-8 border-r border-gray-700">
        <User
          size={24}
          className="text-gray-400 hover:text-white cursor-pointer transition"
          title="About Me"
        />
        <Code2
          size={24}
          className="text-gray-400 hover:text-white cursor-pointer transition"
          title="Skills"
        />
        <FolderKanban
          size={24}
          className="text-gray-400 hover:text-white cursor-pointer transition"
          title="Projects"
        />
        <Mail
          size={24}
          className="text-gray-400 hover:text-white cursor-pointer transition"
          title="Contact"
        />
      </div>

      {/* Main Section */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <div className="flex items-center justify-between px-6 py-3 border-b border-gray-700 bg-[#1E1E1E]">
          <div className="flex items-center space-x-2">
            <img
              src="/images/pro.png" 
              alt="Profile"
              className="w-8 h-8 rounded-full cursor-pointer hover:scale-105 transition"
              onClick={() => setShowImage(true)}
            />
            <span className="text-sm text-gray-300">RahulPortfolio.jsx</span>
          </div>
        </div>

        {/* Hero Section */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6">
          <div className="max-w-2xl w-full bg-[#1E1E1E] rounded-lg shadow-xl p-6 border border-gray-700 font-mono leading-relaxed overflow-hidden">
            <p className="text-gray-500">// Welcome to my portfolio</p>

            <div className="flex items-baseline space-x-2">
              <span className="text-green-400">import</span>
              <span className="text-white">Developer</span>
              <span className="text-gray-400">from</span>
              <span className="text-blue-400">"India"</span>;
            </div>

            <div className="flex items-baseline space-x-2 mt-2">
              <span className="text-green-400">const</span>
              <span className="text-white">name</span>
              <span className="text-gray-400">=</span>
              <span className="text-blue-400">"Rahul Gupta"</span>;
            </div>

            <p className="text-gray-500 mt-4">// Building modern digital experiences</p>

            <div className="flex items-baseline space-x-2">
              <span className="text-blue-400">let</span>
              <span className="text-white">role</span>
              <span className="text-gray-400">=</span>
              <span className="text-yellow-400">
                "<Typewriter
                  words={[
                    "Freelance Web Developer",
                    "Frontend Engineer",
                    "MERN Stack Enthusiast",
                    "React Developer",
                    "UI/UX Advocate",
                    "Code × Creativity",

                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={50}
                  deleteSpeed={30}
                  delaySpeed={2000}
                />"
              </span>;
            </div>

            <div className="flex items-baseline space-x-2 mt-2">
              <span className="text-green-400">function</span>
              <span className="text-white">contact()</span>
              <span className="text-gray-400">{"{"}</span>
            </div>
            <p className="ml-6 text-pink-400">return "rahulgupta97668@gmail.com";</p>
            <p className="text-gray-400">{"}"}</p>

            <p className="text-gray-500 mt-4">// Let's build something amazing</p>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {showImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <button
            onClick={() => setShowImage(false)}
            className="absolute top-6 right-6 text-white text-3xl"
          >
            <X size={32} />
          </button>
          <img
            src="/images/profile.png" 
            alt="Profile"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
};

export default App;
