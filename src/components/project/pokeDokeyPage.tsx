import ProjectDetail from "./projectDetail";
import { projects } from "../../assets/ProjectsData";
import { Project } from "../../../types/project";
import "../../../src/index.css"

// Copy imports from pages

function PokeDokeyPage() {
  const project = projects[4]; //MAKE SURE THIS ID MATCHES WITH projectsData.ts ID
  

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
        <div className="justify-center items-center flex w-full grid grid-cols-1">
          <div>
            <h2 className="text-2xl font-bold font-ozpPrimary text-ozp-grey text-center mx-[36rem] leading-relaxed">
              Poke Dokey is Hawaiian-theme brick breaker currently being developed for iOS devices.
            </h2>
          </div>
          <div className="py-20">
            <h2 className="text-2xl font-bold font-ozpPrimary text-ozp-grey text-center mx-[36rem] leading-relaxed">
              We don't have too much to show for it at the moment but take a look at some screenshots:
            </h2>
          </div>
        </div>

        {/* images */}
        <div className="justify-center items-center flex w-full h-full">
          {/* <div className="grid grid-cols-2"> */}
            <div className="mb-[10rem]">
              <img
                src="\img\pokedokey2.png"
                alt="Poke Dokey World Select"
                className="h-[40rem] translate-x-[5rem]"
              />
            </div>   

            <div className="mt-[10rem]">
            <img
                src="\img\pokedokey3.png"
                alt="Poke Dokey In-Game"
                className="h-[40rem] -translate-x-[5rem]"
              />
            </div>
        </div>
        


      </div>
    </main>
  );
}

export default PokeDokeyPage;
