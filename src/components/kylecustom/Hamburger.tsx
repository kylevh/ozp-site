import React, { useState } from "react";
import { motion, MotionConfig, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Hamburger = () => {
  const [active, setActive] = useState(false);
  const links = [
    { text: "Home", path: "/" },
    { text: "About", path: "/about" },
    { text: "Projects", path: "/projects" },
    { text: "Contact", path: "/contact" },
  ];

  return (
    <>
      <MotionConfig transition={{ duration: 0.25 }}>
        <motion.button
          onClick={() => setActive(!active)}
          className="relative w-16 h-16 z-30"
          animate={active ? "open" : "closed"}
        >
          <motion.span
            className="absolute bg-white w-8 h-[3px]"
            style={{ left: "50%", top: "35%", x: "-50%", y: "-50%" }}
            variants={{
              open: {
                rotate: ["0deg", "0deg", "45deg"],
                top: ["35%", "50%", "50%"],
              },
              closed: {
                rotate: ["45deg", "0deg", "0deg"],
                top: ["50%", "50%", "35%"],
              },
            }}
          />
          <motion.span
            className="absolute bg-white w-8 h-[3px]"
            style={{ left: "50%", top: "50%", x: "-50%", y: "-50%" }}
            variants={{
              open: {
                rotate: ["0deg", "0deg", "-45deg"],
              },
              closed: {
                rotate: ["-45deg", "0deg", "0deg"],
              },
            }}
          />
          <motion.span
            className="absolute bg-white w-8 h-[3px]"
            style={{ left: "50%", bottom: "35%", x: "-50%", y: "50%" }}
            variants={{
              open: {
                bottom: ["35%", "50%", "50%"],
                rotate: ["0deg", "0deg", "-45deg"],
              },
              closed: {
                bottom: ["50%", "50%", "35%"],
                rotate: ["-45deg", "0deg", "0deg"],
              },
            }}
          />
        </motion.button>
      </MotionConfig>
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 bg-[#B214FD] flex items-center justify-center z-20"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{
              y: "-100%",
              transition: { delay: 0.3, ease: [0.75, 0, 0.24, 1] },
            }}
            transition={{ duration: 0.4, ease: [0.75, 0, 0.24, 1] }}
          >
            <motion.div
              className="text-[white] min-w-screen flex flex-col items-center justify-center"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    delayChildren: 0.3,
                    staggerChildren: 0.2,
                  },
                },
              }}
            >
              {links.map((link, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <Link
                    to={link.path}
                    className="text-[1.6rem] font-ozpPrimary font-bold py-2 hover:text-[#000000] transition-all duration-300"
                    onClick={() => setActive(false)}
                  >
                    {link.text}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Hamburger;
