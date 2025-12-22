import React from "react";
import ProjectCard from "../components/ProjectCard";
import { projectsData } from "./SampleProject";

const ProjectsGrid = () => {
  return (
    <section id="projects" className="py-20 bg-[#0f1116]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Project Showcase
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              description={project.overview}
              image={project.heroImage}
              techStack={project.technologies}
              slug={project.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
