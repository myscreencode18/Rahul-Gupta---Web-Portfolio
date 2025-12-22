import React from "react";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiFigma,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiExpress,
} from "react-icons/si";

const skills = [
  {
    icon: <SiReact />,
    name: "React",
    desc: "Building scalable and performant single-page applications.",
  },
  {
    icon: <SiNodedotjs />,
    name: "Node.js",
    desc: "Experienced in creating robust, event-driven backend services.",
  },
  {
    icon: <SiMongodb />,
    name: "MongoDB",
    desc: "Designing efficient schemas for scalable NoSQL databases.",
  },
  {
    icon: <SiFigma />,
    name: "Figma",
    desc: "Designing user-centric interfaces from wireframe to prototype.",
  },
  {
    icon: <SiJavascript />,
    name: "JavaScript",
    desc: "Writing clean, modern, and efficient ES6+ code.",
  },
  {
    icon: <SiHtml5 />,
    name: "HTML5",
    desc: "Crafting semantic, accessible, and responsive structures.",
  },
  {
    icon: <SiCss3 />,
    name: "CSS3",
    desc: "Building responsive layouts with modern CSS features.",
  },
  {
    icon: <SiExpress />,
    name: "Express",
    desc: "Building RESTful APIs with modular and scalable architecture.",
  },
];

const InteractiveStack = () => {
  return (
    <section id="skills" className="relative w-full min-h-screen bg-[#0f1116] text-gray-200 px-6 py-20">
      {/* Title */}
      <h2 className="text-4xl font-bold text-center mb-14 text-white">
        Interactive Stack
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="relative group flex flex-col items-center justify-center p-6 rounded-xl bg-[#1a1d24] shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            <div className="text-6xl text-gray-400 group-hover:text-cyan-400 transition-colors">
              {skill.icon}
            </div>
            <p className="mt-3 text-sm font-medium text-gray-300">{skill.name}</p>

            {/* Tooltip */}
            <div className="absolute bottom-full mb-3 hidden group-hover:flex items-center justify-center">
              <div className="bg-[#1e222b] text-sm text-gray-200 border border-cyan-400 rounded-lg px-4 py-2 max-w-[220px] text-center shadow-lg animate-fadeIn">
                {skill.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InteractiveStack;
