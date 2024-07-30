import { Project } from "@/types";
import { projects } from "@/assets/ProjectsData";

export default function PokeDokeyMainContent() {
  return (
    <>
      <div className="">
        <h3 className="text-xl font-normal text-white font-ozpPrimary pb-5">.SCREENSHOTS</h3>
        <div className="relative flex items-center justify-center space-x-4">
          <img
            src="/img/pokedokey2.png"
            alt="Project Cover Image"
            className="rounded-lg w-[60%]"
          />
          {/* <img
            src="/img/pokedokey3.png"
            alt="Project Cover Image"
            className="rounded-lg md:w-[40%] absolute rotate-12 left-1/3 top-1/2 lg:translate-x-[15%] -translate-y-[43%] z-10"
          /> */}
        </div>
      </div>
    </>
  );
}
