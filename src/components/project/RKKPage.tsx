import ProjectDetail from "./projectDetail";
import { projects } from "../../assets/ProjectsData";
import { Project } from "../../../types/project";
// Copy imports from pages

function RKKPage() {
  const project = projects[1]; //MAKE SURE THIS ID MATCHES WITH projectsData.ts ID
  

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
        <h2 className="text-2xl font-bold font-ozpPrimary text-white">
          Project RKK
        </h2>
      </div>
    </main>
  );
}

export default RKKPage;
