import { Project } from "@/types";
import { projects } from "@/assets/ProjectsData";

export default function TamagrowMainContent() {
  return (
    <>
      <div className="w-full max-w-[40rem] flex flex-col items-start justify-start">
        <h3 className="text-xl font-normal text-white font-ozpPrimary pb-5">.COVER_ART</h3>
        <img
          src={projects[0].coverImg}
          alt="Project Cover Image"
          className="rounded-lg md:w-[100%]"
        />
      </div>
      <div className="pt-[5%]">
      </div>
    </>
  );
}
