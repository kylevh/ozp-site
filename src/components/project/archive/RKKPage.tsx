import ProjectDetail from "./projectDetail";
import { projects } from "../../../assets/ProjectsData";
import { Project } from "../../../types/project";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import React from "react";
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
          CUSTOM STUFF GOES BELOW HERE
        <div className="grid grid-cols-2 m-[10rem] mr-[16rem]">
          <h2 className="text-2xl font-ozpPrimary text-ozp-grey leading-normal">
            RKK Solutions is our in-house <span className="text-ozp-purple">digital transformation</span> team, committed to developing tech solutions 
            for local businesses in the Seattle area. Our expertise encompasses a wide range of services 
            designed to <span className="text-ozp-purple">elevate</span> your digital presence and streamline operations.
          </h2>
        </div>

        <div className="flex justify-center items-center w-full mb-[3rem]">
          <h1 className="text-white text-5xl">Our Projects:</h1>
        </div>

        {/* the carousel */}
        <div className="justify-center items-center flex w-full mb-[2rem]">
          <Carousel>
            <CarouselContent className="w-[70rem]">
              {/* item 1 */}
              <CarouselItem>
                <div className="mb-[2rem] shadow-inner-lg border-2 border-slate-800">
                  <img src="\img\rkk_carousel_1.png" alt="Carousel1" className="relative -z-50"/>
                </div>
                <div className="items-center justify-center flex mb-[4rem]">
                  <h2 className="text-2xl font-ozpPrimary text-ozp-grey leading-normal w-3/4 text-center">
                    Dep Homes is a ncoksmalclahiwefvnawoilfja kfahbefehlvan wievlfjnFWIKBUEFHJNHLNjnweuhbj
                  </h2>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="mb-[2rem] shadow-inner-lg border-2 border-slate-600">
                  <img src="\img\rkk_carousel_2.png" alt="Carousel1" className="relative -z-50"/>
                </div>
                <div className="items-center justify-center flex mb-[4rem]">
                  <h2 className="text-2xl font-ozpPrimary text-ozp-grey leading-normal w-3/4 text-center">
                    Dep Homes is a ncoksmalclahiwefvnawoilfja kfahbefehlvan wievlfjnFWIKBUEFHJNHLNjnweuhbj
                  </h2>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="mb-[2rem] shadow-inner-lg border-2 border-slate-800">
                  <img src="\img\rkk_carousel_3.png" alt="Carousel1" className="relative -z-50"/>
                </div>
                <div className="items-center justify-center flex mb-[4rem]">
                  <h2 className="text-2xl font-ozpPrimary text-ozp-grey leading-normal w-3/4 text-center">
                    Dep Homes is a ncoksmalclahiwefvnawoilfja kfahbefehlvan wievlfjnFWIKBUEFHJNHLNjnweuhbj
                  </h2>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        



        </div>

    </main>
  );
}

export default RKKPage;
