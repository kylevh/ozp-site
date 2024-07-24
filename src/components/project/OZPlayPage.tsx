import ProjectDetail from "./projectDetail";
import { projects } from "../../assets/ProjectsData";
import { Project } from "../../../types/project";
// Copy imports from pages

function OZPlayPage() {
  const project = projects[3]; //MAKE SURE THIS ID MATCHES WITH projectsData.ts ID
  

  return (
    // Make sure here to 'CUSTOM STUFF GOES HERE' is the same through all pages
    <main
      id="projects"
      className="bg-ozp-background min-h-screen min-w-screen max-w-screen flex flex-col"
    >
      <ProjectDetail projectId={project.id} />
      <div
          id="CUSTOM-CONTENT"
          className="w-full min-h-[50rem] justify-start items-start flex flex-col"
        >
          {/* CUSTOM STUFF GOES BELOW HERE */}
        <div className="grid grid-col-2">
          <h2 className="text-[10rem] font-bold font-ozpPrimary text-white">
          Project RKK
          </h2>
        </div>  
      </div>
    </main>
  );
}

export default OZPlayPage;
