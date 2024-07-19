import HomeHero from "./sections/home/homeHero";
import AllProjects from "./AllProjects";

function Home() {
  return (
    <>
      <main id="main-container" className="bg-ozp-background min-h-screen min-w-screen max-w-screen">
        <HomeHero />
        <AllProjects />
      </main>
    </>
  );
}

export default Home;
