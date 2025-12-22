import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    text: "Rahul delivered an outstanding website that exceeded our expectations. Very professional and easy to work with.",
    name: "Amit Sharma",
    role: "CEO, TechCorp",
  },
  {
    text: "His attention to detail and creative solutions helped our project succeed. Highly recommended!",
    name: "Priya Singh",
    role: "Product Manager, InnovateX",
  },
  {
    text: "Amazing work! Rahul transformed our ideas into a functional and visually stunning application.",
    name: "Rohan Verma",
    role: "Founder, Startify",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="min-h-screen bg-[#0A192F] text-white flex flex-col items-center justify-center py-16 px-4">
      <h2 className="text-4xl font-bold mb-12 text-center">
        What <span className="text-cyan-400">Clients Say</span>
      </h2>

      <div className="relative w-full max-w-3xl">
        <AnimatePresence>
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-[#1E1E1E] p-8 rounded-2xl shadow-lg text-center"
          >
            <Quote size={40} className="mx-auto text-cyan-400 mb-4" />
            <p className="text-gray-300 italic mb-4">"{testimonials[current].text}"</p>
            <h3 className="text-white font-semibold">{testimonials[current].name}</h3>
            <p className="text-gray-400 text-sm">{testimonials[current].role}</p>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-cyan-400/20 hover:bg-cyan-400 text-white p-2 rounded-full"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-cyan-400/20 hover:bg-cyan-400 text-white p-2 rounded-full"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Dots */}
      <div className="flex mt-6 space-x-2">
        {testimonials.map((_, idx) => (
          <span
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              idx === current ? "bg-cyan-400" : "bg-gray-600"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
