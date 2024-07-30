import { projects } from "@/assets/ProjectsData";
export default function PokeDokeySubContent() {
  return (
    <>
      <div className="">
      <h3 className="text-xl font-normal text-white font-ozpPrimary pb-5">
          .ARTWORK
        </h3>
        <img
          src={projects[3].coverImg}
          alt="Project Cover Image"
          className="rounded-lg md:w-[84%] w-full flex flex-col items-start md:items-center"
        />
      </div>
      
    </>
  );
}
