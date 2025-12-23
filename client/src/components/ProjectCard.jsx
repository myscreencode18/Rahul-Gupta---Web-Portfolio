// // 
// import { Link } from "react-router-dom";

// const ProjectCard = ({ title, description, image, techStack = [], slug }) => {
//   return (
//     <div className="relative group rounded-2xl overflow-hidden shadow-lg bg-gray-900 hover:shadow-2xl transition-all duration-500 ease-in-out">

//       {/* Project Image */}
//       <img
//         src={image}
//         alt={title}
//        loading="lazy"
//         className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
//       />

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">

//         <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
//         <p className="text-gray-300 text-sm mb-4 px-4">{description}</p>

       
        
// <div className="flex flex-wrap justify-center gap-3 mb-4">
//   {techStack.map((tech, index) => {
//     const Icon = tech.icon;
//     return (
//       <div
//         key={index}
//         className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-white text-xs"
//       >
//         {Icon && <Icon size={14} />}
//         <span>{tech.name}</span>
//       </div>
//     );
//   })}
// </div>

//         {/* View Project Button */}
//         {slug && (
//           <Link
//             to={`/projects/${slug}`}
//             className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-xl transition-all duration-300"
//           >
//             View Project
//           </Link>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;

import { useState } from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ title, description, image, techStack = [], slug }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen(!open)}
      className="relative group rounded-2xl overflow-hidden shadow-lg bg-gray-900 hover:shadow-2xl transition-all duration-500 ease-in-out cursor-pointer"
    >
      {/* Project Image */}
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
      />

      {/* 🔹 DESKTOP OVERLAY (hover only) */}
      <div className="absolute inset-0 bg-black/70 hidden md:flex flex-col justify-center items-center text-center opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
        <OverlayContent
          title={title}
          description={description}
          techStack={techStack}
          slug={slug}
        />
      </div>

      {/* 🔹 MOBILE OVERLAY (tap only) */}
      {open && (
        <div className="absolute inset-0 bg-black/70 flex md:hidden flex-col justify-center items-center text-center transition-opacity duration-300">
          <OverlayContent
            title={title}
            description={description}
            techStack={techStack}
            slug={slug}
          />
        </div>
      )}
    </div>
  );
};

const OverlayContent = ({ title, description, techStack, slug }) => (
  <>
    <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-300 text-sm mb-4 px-4">{description}</p>

    <div className="flex flex-wrap justify-center gap-3 mb-4">
      {techStack.map((tech, index) => {
        const Icon = tech.icon;
        return (
          <div
            key={index}
            className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-white text-xs"
          >
            {Icon && <Icon size={14} />}
            <span>{tech.name}</span>
          </div>
        );
      })}
    </div>

    {slug && (
      <Link
        to={`/projects/${slug}`}
        onClick={(e) => e.stopPropagation()}
        className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-xl transition-all duration-300"
      >
        View Project
      </Link>
    )}
  </>
);

export default ProjectCard;
