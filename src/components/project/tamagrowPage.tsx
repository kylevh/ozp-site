import { Project } from "../../assets/ProjectsData";
import { projects } from "../../assets/ProjectsData";
import { useEffect } from "react";
import ProjectDetail from "./projectDetail";

function TamagrowPage() {
  const project = projects[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main
        id="projects"
        className="bg-ozp-background min-h-screen min-w-screen max-w-screen flex flex-col"
      >
        <ProjectDetail projectId={project.id} />
        <div
          id="CUSTOM-CONTENT"
          className="w-full min-h-[50rem] justify-start items-start flex flex-col"
        >
          {/* CUSTOM CONTENT GOES BELOW HERE */}
          <div className="w-full bg-contain justify-center items-center flex flex-col">
            <img
              src={project.projectLogoImg}
              alt={project.name}
              className="w-full max-w-96 h-full object-contain px-4 pt-10"
            />
            <iframe
              className="mt-28"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/oP6yokR1LOE?si=AwCG5EV9jNw9IToq"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <h2 className="text-white text-2xl font-ozpPrimary mt-36">
              More content here
            </h2>
          </div>
        </div>
      </main>
    </>
  );
}

export default TamagrowPage;
