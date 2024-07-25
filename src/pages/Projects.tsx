import { useState } from "react";
import ProjectSelector from "@/components/projects/ProjectSelector";
import ProjectHoverInfo from "@/components/projects/ProjectHoverInfo";
import { Project } from "@/types";

// DO NOT TOUCH BELOW

function Projects() {
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);

  return (
    // Projects Section on home page (full page section)
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

      {/* Project Selecttion and Hover Info */}
      <div className="flex flex-col items-center flex-grow w-screen relative">
        <ProjectHoverInfo hoveredProject={hoveredProject} />
        <ProjectSelector
          hoveredProject={hoveredProject}
          setHoveredProject={setHoveredProject}
        />
      </div>
    </main>
  );
}

export default Projects;
