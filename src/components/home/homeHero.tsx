function HomeHero() {
  return (
    <>
      <section
        id="home-hero"
        className=" grid grid-cols-3 lg:grid-cols-12 lg:px-20 max-w-screen "
      >
        <div className="col-span-3 flex justify-center pt-32 p-4 lg:pt-0 items-center min-h-[80vh] lg:min-h-screen 
                        lg:col-span-8 lg:col-start-1 lg:items-end lg:pb-20 min-w-screen">
          <img src="/img/ozpstudios_hero.png" alt="OZP Studios Logo" />
        </div>
        <div className="col-span-3 flex flex-col justify-end items-center min-h-[20vh] pb-10 lg:hidden">
          <img
            src="/img/down_arrow.svg"
            alt="Down Arrow"
            className="w-[25%] h-[25%]"
          />
        </div>
      </section>
    </>
  );
}

export default HomeHero;
