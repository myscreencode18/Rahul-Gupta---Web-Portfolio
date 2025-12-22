import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { SiReact, SiNodedotjs, SiPython, SiFigma, SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "React", icon: <SiReact size={40} /> },
  { name: "Node.js", icon: <SiNodedotjs size={40} /> },
  { name: "Python", icon: <SiPython size={40} /> },
  { name: "Figma", icon: <SiFigma size={40} /> },
  { name: "TailwindCSS", icon: <SiTailwindcss size={40} /> },
];

const timeline = [
  {
    event: "Hands-On Development",
    desc: "Built and deployed multiple real-world websites including portfolios, booking systems, and business platforms."
  },
  {
    event: "Frontend & UX Focus",
    desc: "Strong focus on clean UI, responsive layouts, and smooth interactions."
  },
  {
    event: "Professional Direction",
    desc: "Actively applying for frontend and full-stack roles and collaborating on freelance projects."
  }
];


const About = () => {
  return (
    <section id="about" className="min-h-screen bg-[#0A192F] text-white px-6 py-16 flex flex-col items-center">
      {/* Hero */}
      <div className="max-w-3xl text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">
          Hey, I'm <span className="text-cyan-400">Rahul</span> 👋
        </h1>
        <p className="text-gray-300 text-lg">
          <Typewriter
            words={[
              "Building Scalable Web Experiences",
              "UI-Focused Development",
              "Turning Ideas into Products",
              "Code × Design × Story"
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={2000}
          />
        </p>
      </div>

      {/* Story Cards */}
      <div className="flex flex-col md:flex-row gap-6 mb-16">
        {[
          { title: "Who I Am", desc: "A web developer who enjoys turning ideas into clean, thoughtful web experiences." },
          { title: "What I Do", desc: "I build portfolio sites, booking systems, and content-driven websites for creators and businesses." },
          { title: "What I Care About", desc: "Good design, smooth interactions, and code that works reliably in the real world." },
        ].map((card, i) => (
          <motion.div
            key={i}
            className="bg-[#1E1E1E] p-6 rounded-2xl shadow-lg w-full md:w-72 text-center cursor-pointer hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold mb-2 text-cyan-400">{card.title}</h3>
            <p className="text-gray-300">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    

      {/* Skill Playground */}
      <div className="mb-16 flex flex-wrap justify-center gap-10">
        
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            className="bg-white/10 p-4 rounded-xl cursor-pointer hover:bg-cyan-400 hover:text-black transition-colors"
            whileHover={{ scale: 1.2 }}
          >
            <div className="flex flex-col items-center">
              {skill.icon}
              <span className="mt-2 text-sm">{skill.name}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Timeline */}
      <div className="w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-8">Where I’m Headed</h2>
        <div className="relative border-l border-gray-700 ml-4 pl-8">
          {timeline.map((item, i) => (
            <div key={i} className="mb-12 relative">
              <div className="absolute -left-6 top-0 w-4 h-4 bg-cyan-400 rounded-full border border-gray-800"></div>
              <h3 className="font-semibold text-xl">{item.event}</h3>
              <p className="text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
