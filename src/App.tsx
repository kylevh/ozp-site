import { useLocation, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import Navbar from "./components/kylecustom/Navbar";
import Projects from "./pages/Projects";

import { GlobalStateProvider } from "./components/context/GlobalStateContext";

function App() {
  const location = useLocation();

  return (
    <>
      <GlobalStateProvider>
        <Navbar />
        {/* <Loader /> */}
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
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
