import React, { useState } from "react";
import { Tooltip } from "react-tooltip";
import { ArrowLeft, Github, ExternalLink, Lightbulb, AlertCircle } from "lucide-react";
import "react-tooltip/dist/react-tooltip.css";

const Projects = ({
  title,
  subtitle,
  heroImage,
  projectIcon,
  overview,
  problem,
  solutionSteps = [],
  technologies = [],
  result,
  images = [],
  liveLink,
  codeLink,
  onBack,
}) => {
  const [activeImage, setActiveImage] = useState(null);
const Icon = projectIcon;
  return (
    <div className="min-h-screen bg-[#0A192F] text-white font-body">
      {/* Hero */}
      <div
        className="relative w-full h-96 md:h-[400px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/40"></div>
        <div className="relative text-center px-4 flex flex-col items-center gap-2">
          {Icon && <Icon size={40} className="text-cyan-400" />}
          <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>
          <p className="mt-1 text-gray-300 text-lg md:text-2xl">{subtitle}</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-4 mt-6 flex-wrap">
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-pink-500 hover:bg-pink-600 px-6 py-2 rounded-xl transition-all duration-300"
          >
            <ExternalLink size={16} /> View Live
          </a>
        )}
        {codeLink && (
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 px-6 py-2 rounded-xl transition-all duration-300"
          >
            <Github size={16} /> View Code
          </a>
        )}
        {onBack && (
          <button
            onClick={onBack}
            className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-xl transition-all duration-300"
          >
            <ArrowLeft size={18} /> Back
          </button>
        )}
      </div>

      <div className="max-w-5xl mx-auto mt-12 px-4 space-y-12">
        {/* Overview */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-shrink-0 text-cyan-400">
            <Lightbulb size={28} />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Project Overview</h2>
            <p className="text-gray-300">{overview}</p>
          </div>
        </div>

        {/* Problem */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-shrink-0 text-pink-400">
            <AlertCircle size={28} />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">The Problem</h2>
            <p className="text-gray-300">{problem}</p>
          </div>
        </div>

       {/* Solution Timeline */}
<h2 className="text-2xl font-semibold mb-6">My Solution</h2>
<div className="relative border-l border-gray-700 ml-4 mr-6">
  {solutionSteps.map((step, idx) => (
    <div key={idx} className="mb-10 ml-6 relative"> {/* increased bottom margin */}
      {/* Timeline Dot */}
      <div className="absolute -left-6 top-1 w-5 h-5 bg-cyan-400 rounded-full border border-gray-800"></div> {/* slightly bigger and aligned */}

      {/* Step Title & Description */}
      <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
      <p className="text-gray-300 mb-2">{step.description}</p>

      {/* Step Image */}
      {/* {step.image && (
        <img
          src={step.image}
          alt={step.title}
            onClick={() => setActiveImage(step.image)}
          className="mt-2 max-w-xs w-full rounded-lg cursor-pointer hover:scale-105 transition-transform" 
        />
      )} */}
    </div>
  ))}
</div>
{/* {images.length > 0 && (
  <>
    <h2 className="text-2xl font-semibold">Gallery</h2>
    <div className="grid grid-cols-2 gap-4">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          onClick={() => setActiveImage(img)}
          className="rounded-lg cursor-pointer hover:scale-105 transition"
        />
      ))}
    </div>
  </>
)} */}


        {/* Technologies */}
        <h2 className="text-2xl font-semibold">Technologies Used</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
          {technologies.map((tech, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div
                data-tooltip-id={`${title}-${tech.name}`}
                className="bg-[#1E1E1E] p-4 rounded-full shadow-md hover:scale-110 transition-transform cursor-pointer"
              >
                <tech.icon size={32} className="text-gray-300 hover:text-cyan-400" />
              </div>
              <p className="mt-2 text-center text-gray-300 text-sm">{tech.name}</p>
              <Tooltip
               id={`${title}-${tech.name}`}
                className="!bg-[#1E1E1E] !text-white !border !border-cyan-400 !rounded-lg !px-3 !py-2 text-sm max-w-xs"
              >
                {tech.description}
              </Tooltip>
            </div>
          ))}
        </div>

        {/* Result */}
        <h2 className="text-2xl font-semibold mb-2">The Result</h2>
        <p className="text-gray-300 ">{result}</p>
       
      </div>

      {/* Image Modal */}
      {/* {activeImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-6 right-6 text-white text-3xl"
          >
            ×
          </button>
          <img src={activeImage} alt="Detail" className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg" />
        </div>
      )} */}
    </div>
  );
};

export default Projects;
