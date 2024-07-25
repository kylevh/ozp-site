import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";

export default function Loader() {
  const [scope, animate] = useAnimate();

  const move = {
    hidden:(i:number[]) => ({
        y:"100%",
        x:i[0],
    }),
    moveUp:(i:number[]) => ({
        y:0,
        transition: {
            delay: i[1],
            duration: 1.6,
            ease: 'anticipate'
        }
    }),
  }

  return (
    <div className="bg-red-700 absolute inset-0 z-20 mix-blend-exclusion h-screen w-screen" ref={scope}>
      <section className="flex flex-col justify-center items-center w-full h-full">
        <motion.div className="overflow-y-clip h-52 mb-10 flex justify-center items-center">
          {/* <motion.h2 className="font-bold text-[11rem] font-ozpPrimary text-center" variants={move} initial="hidden" animate={"moveUp"} custom={[0, 0.1]}>OZP</motion.h2> */}
          <motion.img className="h-52" src="/img/hero_ozp.svg" alt="" variants={move} initial="hidden" animate={"moveUp"} custom={[0, 0.1]}/>
        </motion.div>
        <motion.div className="overflow-y-clip h-52 flex justify-center items-center">
          {/* <motion.h2 className="font-bold text-[11rem] font-ozpPrimary text-center" variants={move} initial="hidden" animate={"moveUp"} custom={[0, 0.3]}>STUDIOS</motion.h2> */}
          <motion.img className="h-72" src="/img/hero_studios.svg" alt="" variants={move} initial="hidden" animate={"moveUp"} custom={[0, 0.3]}/>
        </motion.div>
      </section>
    </div>
  );
}
