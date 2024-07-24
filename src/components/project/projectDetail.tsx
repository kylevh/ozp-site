import { Project } from "../../assets/ProjectsData";
import { projects } from "../../assets/ProjectsData";

// DO NOT TOUCH BELOW
export default function ProjectDetail({ projectId }: { projectId: number }) {
  const project = projects.find((project) => project.id === projectId);
  return (
    <div
      id="DATA-CONTENT"
      className="bg-ozp-background min-h-[80vh] min-w-screen max-w-screen flex flex-col"
    >
      {/* Page Title */}
      <div className="h-32  flex flex-col justify-end items-start p-4">
        <h1 className="text-2xl font-bold text-center text-white pl-10">
          //PROJECTS
        </h1>
      </div>

      {/* Project About */}
      <div className="flex flex-col items-center flex-grow w-screen relative">
        {/* Content when hovering over number */}
        <div className="w-screen flex-grow flex flex-col items-center absolute inset-0 z-0">
          {/* Project Title + Tags */}
          {project && (
            <>
              <div className="flex flex-row w-screen py-5 items-start justify-between px-20">
                {/* Tags */}
                <div
                  id="tags"
                  className="flex flex-col items-start justify-center"
                >
                  {project.tags.map((tag: string, index: number) => (
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
                    {project.edgyName}
                  </h2>
                </div>
              </div>

              {/* Project Image + Description */}
              <div
                className={`flex flex-row w-screen items-center ${
                  project.description ? "justify-between" : "justify-center"
                } px-20 py-5 relative h-[27rem]`}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center  ">
                  <h2 className="text-[10rem] text-white font-ozpPrimary mix-blend-difference">
                    {project.name}
                  </h2>
                </div>
                <div
                  className={`w-[${
                    project.description ? "40%" : "100%"
                  }] pl-10 min-h-[25rem] flex items-center justify-center`}
                >
                  <img
                    src={`${project.projectImg}`}
                    alt={project.name}
                    className={`w-[${
                      project.description ? "100%" : "45%"
                    }] bg-cover`}
                  />
                </div>
                {project.description && (
                  <div className="flex flex-col items-start justify-center w-[40%]  mr-20 pr-10">
                    <p className="text-white text-xl font-ozpPrimary text-left">
                      {project.description}
                    </p>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
} // <-- Missing closing bracket added here
