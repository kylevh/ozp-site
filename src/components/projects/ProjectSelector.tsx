import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../../assets/ProjectsData";
import { Project } from "../../types";

export default function ProjectSelector({
  hoveredProject,
  setHoveredProject,
}: {
  hoveredProject: Project | null;
  setHoveredProject: (project: Project | null) => void;
}) {
  const handleMouseEnter = (project: Project) => {
    setHoveredProject(project);
  };

  return (
    <>
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
    </>
  );
}
