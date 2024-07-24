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
        <div className="grid grid-cols-2 m-[10rem] mr-[16rem] h-80">
          <h2 className="text-2xl font-ozpPrimary text-ozp-grey leading-normal">
            RKK Solutions is our in-house <span className="text-ozp-purple">digital transformation</span> team, committed to developing tech solutions 
            for local businesses in the Seattle area. Our expertise encompasses a wide range of services 
            designed to <span className="text-ozp-purple">elevate</span> your digital presence and streamline operations.
          </h2>
        </div>

        <div className="text-ozp-purple flex justify-center items-center w-full">
          <h1 className="text-white text-6xl">Portfolio:</h1>
        </div>
      </div>
    </main>
  );
}

export default RKKPage;
