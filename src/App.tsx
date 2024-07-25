import { useLocation, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import Navbar from "./components/kylecustom/Navbar";

import Loader from "./components/kylecustom/Loader";
import { GlobalStateProvider } from "./components/context/GlobalStateContext";

function App() {
  const location = useLocation();

  useEffect(() => {
    (async ()=> {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <>
      <GlobalStateProvider>
        <Navbar />
        {/* <Loader /> */}
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </AnimatePresence>
      </GlobalStateProvider>
    </>
  );
}

export default App;
