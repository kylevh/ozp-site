import { Link } from "react-router-dom";
import { useState } from "react";
import { projects } from "../assets/ProjectsData"; // Import the projects array
import type { Project } from "../assets/ProjectsData";
import { motion } from "framer-motion";

// DO NOT TOUCH BELOW

function ProjectsPage() {
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);

  const handleMouseEnter = (project: Project) => {
    setHoveredProject(project);
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
  };

  return (
    <main
      id="projects"
      className="bg-ozp-background min-h-screen min-w-screen max-w-screen flex flex-col"
      data-scroll-section
    >
      {/* Page Title */}
      <div className="h-32 flex flex-col justify-end items-start p-4">
        <h1 className="text-2xl font-bold text-center text-white  pl-10">
          //PROJECTS
        </h1>
      </div>

      {/* Project Details */}
      <div className="flex flex-col items-center flex-grow w-screen relative">
        {/* Project About */}
        <div className="flex flex-col items-center flex-grow w-screen relative">
          {/* Content when hovering over number */}
          <div className="w-screen flex-grow flex flex-col items-center absolute inset-0 z-0">
            {/* Project Title + Tags */}
            {hoveredProject && (
              <>
                <div className="flex flex-row w-screen py-5 items-start justify-between px-20">
                  {/* Tags */}
                  <div
                    id="tags"
                    className="flex flex-col items-start justify-center"
                  >
                    {hoveredProject.tags.map((tag, index) => (
                      <h3
                        key={index}
                        className="font-ozpPrimary text-gray-500 text-xl pb-1"
                      >
                        <span className="pr-2">+</span>
                        {tag}
                      </h3>
                    ))}
                  </div>
                  {/* Project Title */}
                  <div className="flex flex-col items-center justify-end pt-2">
                    <h2 className="font-ozpPrimary text-3xl text-white">
                      {hoveredProject.edgyName}
                    </h2>
                  </div>
                </div>

                {/* Project Image + Description */}
                <div
                  className={`flex flex-row w-screen items-center ${
                    hoveredProject.description
                      ? "justify-between"
                      : "justify-center"
                  } px-20 py-5 relative h-[27rem]`}
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center  ">
                    <h2 className="text-[10rem] text-white font-ozpPrimary mix-blend-difference">
                      {hoveredProject.name}
                    </h2>
                  </div>
                  <div
                    className={`w-[${
                      hoveredProject.description ? "40%" : "100%"
                    }] pl-10 min-h-[25rem] flex items-center justify-center`}
                  >
                    <img
                      src={`${hoveredProject.projectImg}`}
                      // src={`${project.projectImg}`}
                      alt={hoveredProject.name}
                      className={`w-[${
                        hoveredProject.description ? "100%" : "45%"
                      }] bg-cover`}
                    />
                  </div>
                  {hoveredProject.description && (
                    <div className="flex flex-col items-start justify-center w-[40%]  mr-20 pr-10">
                      <p className="text-white text-xl font-ozpPrimary text-left">
                        {hoveredProject.description}
                      </p>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Numbers */}
        <motion.div className="grid grid-cols-2 w-screen md:grid-cols-6 gap-4 p-4 flex-grow md:items-end md:pb-20">
          {projects.map((project, index) => (
            <Link
              to={project.link}
              key={index}
              className={`flex flex-col items-center justify-center duration-150 ${
                hoveredProject?.id === project.id ? "scale-[120%]" : ""
              }`}
              onMouseEnter={() => handleMouseEnter(project)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative h-20 w-20 lg:h-28 lg:w-28 duration-150">
                <img
                  className={`absolute inset-0 h-full w-full transition-opacity duration-150 ${
                    hoveredProject?.id === project.id ? "opacity-0" : ""
                  }`}
                  src={project.numberSrc}
                  alt={project.name}
                />
                <img
                  className={`absolute inset-0 h-full w-full transition-opacity duration-150 max-h-[10rem] ${
                    hoveredProject?.id === project.id
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                  src={project.hoverSrc}
                  alt={project.name}
                />
              </div>
              <h3 className="md:hidden pt-5 text-white font-ozpPrimary text-lg">
                {project.name}
              </h3>
            </Link>
          ))}
        </motion.div>
      </div>
    </main>
  );
}

export default ProjectsPage;
