import HomeHero from "../components/home/homeHero";
import Projects from "./Projects";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    const handleMiddleClick = (event: MouseEvent) => {
      if (event.button === 1) {
        // Middle mouse button
        const element = document.getElementById("projects");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    window.addEventListener("mousedown", handleMiddleClick);

    return () => {
      window.removeEventListener("mousedown", handleMiddleClick);
    };
  }, []);

  useEffect(() => {
    if (window.location.hash === "#projects") {
      const element = document.getElementById("projects");
      if (element) {
        element.scrollIntoView({ behavior: "auto" });
      }
    }
  }, []);

  return (
    <>
      <main
        id="main-container"
        className="bg-ozp-background min-h-screen overflow-x-hidden"
      >
        <HomeHero />
        <Projects />
      </main>
    </>
  );
}

export default Home;

// import HomeHero from "../components/home/homeHero";
// import Projects from "./Projects";
// import { useEffect } from "react";

// function Home() {
//   useEffect(() => {
//     const handleMiddleClick = (event: MouseEvent) => {
//       if (event.button === 1) {
//         // Middle mouse button
//         const element = document.getElementById("projects");
//         if (element) {
//           element.scrollIntoView({ behavior: "smooth" });
//         }
//       }
//     };

//     window.addEventListener("mousedown", handleMiddleClick);

//     return () => {
//       window.removeEventListener("mousedown", handleMiddleClick);
//     };
//   }, []);

//   useEffect(() => {
//     if (window.location.hash === "#projects") {
//       const element = document.getElementById("projects");
//       if (element) {
//         element.scrollIntoView({ behavior: "auto" });
//       }
//     }
//   }, []);

//   return (
//     <>
//       <main
//         id="main-container"
//         className="bg-ozp-background min-h-screen max-w-screen min-w-screen w-screen"
//       >
//         <HomeHero />
//         <Projects />
//       </main>
//     </>
//   );
// }

// export default Home;
