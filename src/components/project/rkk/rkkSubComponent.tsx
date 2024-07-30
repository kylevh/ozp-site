import { projects } from "@/assets/ProjectsData";

export default function RKKSubComponent() {
  return (
    <>
      <div className="w-full flex flex-col justify-center -translate-x-[2rem] items-start md:items-center pt-[18%] -translate-y-[2rem]">
        <img
          src={projects[1].coverImg}
          alt="Project Cover Image"
          className="rounded-lg md:w-[55%]"
        />
      </div>
      <div className="">

      </div>
    </>
  );
}
