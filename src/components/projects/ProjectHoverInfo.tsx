import { Project } from "../../types";

export default function ProjectHoverInfo({
  hoveredProject,
}: {
  hoveredProject: Project | null;
}) {
  return (
    <>
      <div className="flex flex-col items-center flex-grow w-screen relative">
        {/* Content when hovering over number */}
        <div className="w-screen flex-grow flex flex-col items-center absolute inset-0 z-0">
          {/* Project Title + Tags */}
          {hoveredProject && (
            <>
              <div className="flex flex-row w-screen py-5 items-start justify-between px-20">
                {/* Tags */}
                <div
                  id="tags"
                  className="flex flex-col items-start justify-center"
                >
                  {hoveredProject.tags.map((tag, index) => (
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
                    {hoveredProject.edgyName}
                  </h2>
                </div>
              </div>

              {/* Project Image + Description */}
              <div
                className={`flex flex-row w-screen items-center ${
                  hoveredProject.description
                    ? "justify-between"
                    : "justify-center"
                } px-20 py-5 relative h-[27rem]`}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center  ">
                  <h2 className="text-[10rem] text-white font-ozpPrimary mix-blend-difference">
                    {hoveredProject.name}
                  </h2>
                </div>
                <div
                  className={`w-[${
                    hoveredProject.description ? "40%" : "100%"
                  }] pl-10 min-h-[25rem] flex items-center justify-center`}
                >
                  <img
                    src={`${hoveredProject.coverImg}`}
                    // src={`${project.projectImg}`}
                    alt={hoveredProject.name}
                    className={`w-[${
                      hoveredProject.description ? "100%" : "45%"
                    }] bg-cover`}
                  />
                </div>
                {hoveredProject.description && (
                  <div className="flex flex-col items-start justify-center w-[40%]  mr-20 pr-10">
                    <p className="text-white text-xl font-ozpPrimary text-left">
                      {hoveredProject.description}
                    </p>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
