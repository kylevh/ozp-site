import HomeHero from "./sections/home/homeHero";

function Home() {
  return (
    <>
      <main id="main-container" className="bg-ozp-background min-h-screen min-w-screen max-w-screen">
        <HomeHero />
        <div className="min-h-screen" data-scroll-section>t</div>
      </main>
    </>
  );
}

export default Home;
