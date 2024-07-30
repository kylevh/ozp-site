import { useParams } from "react-router-dom";
import { projects } from "../assets/ProjectsData"; // Import the projects array
import type { Project } from "@/types";
import { convertTextStyling } from "../lib/convertTextStyling";
import type { ProjectComponents } from "../types";


import TamagrowMainContent from "@/components/project/tamagrow/tamagrowMainContent";
import TamagrowSubContent from "@/components/project/tamagrow/tamagrowSubContent";
import RKKMainContent from "@/components/project/rkk/rkkMainComponent";
import RKKSubContent from "@/components/project/rkk/rkkSubComponent";
import KualNotesMainContent from "@/components/project/kualnotes/kualnotesMainContent";
import KualNotesSubContent from "@/components/project/kualnotes/kualnotesSubContent";
import OZPlayMainContent from "@/components/project/ozplay/ozplayMainContent";
import OZPlaySubContent from "@/components/project/ozplay/ozplaySubContent";
import PokeDokeyMainContent from "@/components/project/pokedokey/pokedokeyMainContent";
import PokeDokeySubContent from "@/components/project/pokedokey/pokedokeySubContent";
import MoreMainContent from "@/components/project/more/moreMainContent";
import MoreSubContent from "@/components/project/more/moreSubContent";




// Use the defined type for projectComponents
const projectComponents: ProjectComponents = {
  "1": {
    MainContent: TamagrowMainContent,
    SubContent: TamagrowSubContent,
  },
  "2": {
    MainContent: RKKMainContent,
    SubContent: RKKSubContent,
  },
  "3": {
    MainContent: KualNotesMainContent,
    SubContent: KualNotesSubContent
  },
  "4": {
    MainContent: PokeDokeyMainContent,
    SubContent: PokeDokeySubContent
  },
  "5": {
    MainContent: OZPlayMainContent,
    SubContent: OZPlaySubContent
  },
  "6": {
    MainContent: MoreMainContent,
    SubContent: MoreSubContent
  }
  // Add other projects here
};

// DO NOT TOUCH BELOW

function Project() {
  const { id } = useParams<{ id: string }>();
  const projectId = id ?? "0"; // Ensure id is defined
  const project = projects.find((p) => p.id === parseInt(projectId));

  const MainContent = projectComponents[projectId]?.MainContent;
  const SubContent = projectComponents[projectId]?.SubContent;

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <>
      <main className="w-screen min-h-screen bg-ozp-background flex justify-center">
        <div
          id="grid-container"
          className="w-full relative h-max max-w-[120rem] grid grid-cols-3 md:grid-cols-12 pt-32 md:pt-22 px-6 md:px-20 gap-y-10 auto-rows-min justify-start"
        >

          {/* Project Title */}
          <div
            id="ProjectTitle"
            className="col-span-3 md:col-span-12 grid grid-cols-3 md:grid-cols-12 md:mb-4 "
          >
            {/* Mobile Title */}
            <div className="flex flex-row items-end justify-between col-span-3 md:hidden">
              <h3 className="text-6xl font-bold text-center text-white font-ozpPrimary">
                {projectId}
              </h3>
              <h1 className="text-2xl font-normal text-center text-white font-ozpPrimary md:text-6xl">
                {project.edgyName}
              </h1>
            </div>

            {/* Desktop title */}

            <div className="hidden md:flex col-span-4 border-b-2 border-ozp-grey ">
              <h3></h3>
            </div>
            <h1 className="hidden md:flex col-span-6 col-start-8 font-normal text-center text-white font-ozpPrimary pb-1 items-end md:text-2xl lg:text-5xl whitespace-nowrap">
              {project.edgyName}
            </h1>
          </div>

          <div className="col-span-3 col-start-1 md:col-span-6 md:col-start-1 md:row-start-2 flex flex-col justify-start">
            {/* MAIN COMPONENT (Cover image/carousel/whatever) */}
            {MainContent && <MainContent />}

            {/* Logo (desktop view) */}
            <div className="hidden md:flex w-full mt-14">
              <img
                src={project.logoImg}
                alt=""
                className="w-full max-w-[50rem]"
              />
            </div>
          </div>

          {/* Logo (mobile view) */}
          <div className="md:hidden flex col-span-3 mt-5">
            <img src={project.logoImg} alt="" />
          </div>

          {/* Project Description + Sub Content */}
          <div className="col-span-3 md:col-span-5 md:col-start-8 flex flex-col flex-grow justify-center items-center md:row-span-1 md:row-start-2">
            <h3 className="text-xl leading-normal font-normal text-left text-ozp-grey font-ozpPrimary whitespace-pre-line">
              {project.description
                ? convertTextStyling(project.description)
                : ""}
            </h3>

            <div className="w-full flex flex-col md:pt-10 mt-10 md:border-t-2 md:pb-0 pb-10 md:border-ozp-grey">
              {/* SUB COMPONENT (youtube embed, another image, etc..) */}
              {SubContent && <SubContent />}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Project;
