import { Link, useParams } from "react-router-dom";
import { projects } from "../assets/ProjectsData"; // Import the projects array
import type { Project } from "../assets/ProjectsData";
import RKKPage from "../components/project/RKKPage";
import TamagrowPage from "../components/project/tamagrowPage";

// Import custom pages here and add it accordingly to ID
const projectComponents = {
  "1": TamagrowPage,
  "2": RKKPage,
};

// DO NOT TOUCH BELOW

function Project() {
  const { id } = useParams<{ id: string }>();
  const projectId = id ?? "0"; // Ensure id is defined
  const project = projects.find((p) => p.id === parseInt(projectId));

  const ProjectComponent = projectComponents[projectId as keyof typeof projectComponents];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <>
      {ProjectComponent ? <ProjectComponent /> : <div>Project not found</div>}
    </>
  );
}

export default Project;
