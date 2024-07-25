import { projects } from "@/assets/ProjectsData";

export default function RKKSubComponent() {
  return (
    <>
      <div className="w-full flex flex-col items-start md:items-center">
        <img
          src={projects[1].coverImg}
          alt="Project Cover Image"
          className="rounded-lg md:w-[55%]"
        />
      </div>
    </>
  );
}
