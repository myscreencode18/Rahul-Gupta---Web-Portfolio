import React from "react";
import { SiReact, SiNodedotjs, SiJavascript, SiPython } from "react-icons/si";

const funFacts = [
  { icon: <SiReact />, title: "Frontend Experiments", desc: "Building cool UI interactions." },
  { icon: <SiPython />, title: "Automation", desc: "Scripting things to save time." },
  { icon: <SiNodedotjs />, title: "Backend Playground", desc: "Exploring APIs & servers." },
  { icon: <SiJavascript />, title: "Fun Scripts", desc: "Creative JS experiments." },
];

const FunFacts = () => {
  return (
    <section className="min-h-screen bg-[#0A192F] text-white flex flex-col items-center justify-center px-6 py-16">
      <h2 className="text-4xl font-bold mb-12 text-center">
        Some <span className="text-cyan-400">Fun Facts</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 w-full max-w-6xl">
        {funFacts.map((fact, idx) => (
          <div
            key={idx}
            className="bg-[#1E1E1E] rounded-2xl p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
          >
            <div className="text-cyan-400 text-4xl mb-4">{fact.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{fact.title}</h3>
            <p className="text-gray-300 text-sm">{fact.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FunFacts;
