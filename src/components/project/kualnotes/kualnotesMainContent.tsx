import { projects } from "@/assets/ProjectsData";

export default function KualNotesMainContent() {
  return (
    <>
      <div className="w-full max-w-[40rem] flex flex-col items-start justify-start">
        <h3 className="text-xl font-normal text-white font-ozpPrimary pb-5">.COVER_ART</h3>
        <div className="items-center justify-center flex">
          <img
            src={projects[2].coverImg}
            alt="Project Cover Image"
            className="rounded-lg md:w-[85%]"
          />
        </div>
        <div className="pb-[8%]">

        </div>
      </div>
    </>
  );
}
