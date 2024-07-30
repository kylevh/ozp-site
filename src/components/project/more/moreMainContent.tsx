
import { useState } from "react"

export default function MoreMainContent() {
  const {hoveredItem, setHoveredItem} = useState<String | null>(null)

  
  return(
    <div className="relative">
      <div className="absolute z-10 h-full justify-center items-center flex inset-[0%] m-auto w-[80%] h-24">

        <img
        src="\img\more\cave.png"
        />
      </div>


      {/* carousels */}
      <div className="">

          <h3 className="text-xl font-normal text-white font-ozpPrimary pb-5 ">.GAMES</h3>
          <div className="morebody overflow-hidden" >
            <div className="scroll imgBox">
              <div>
                <img src="\img\more\raccoon.png" className="scrollImg" />
                <img src="\img\more\corpsebound.png" className="scrollImg"/>
                <img src="\img\more\cave.png" className="scrollImg"/>
                <img src="\img\more\raccoon.png" className="scrollImg"/>
                <img src="\img\more\corpsebound.png" className="scrollImg"/>
                <img src="\img\more\cave.png" className="scrollImg"/>
              </div>
              <div>
              <img src="\img\more\raccoon.png" className="scrollImg"/>
                <img src="\img\more\corpsebound.png" className="scrollImg"/>
                <img src="\img\more\cave.png" className="scrollImg"/>
                <img src="\img\more\raccoon.png" className="scrollImg"/>
                <img src="\img\more\corpsebound.png" className="scrollImg"/>
                <img src="\img\more\cave.png" className="scrollImg"/>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-normal text-white font-ozpPrimary pb-5">.CONSULTING</h3>
          <div className="morebody overflow-hidden" >
            <div className="scroll2 imgBox">
              <div>
                <img src="\img\more\uwkc.png" className="scrollImg "/>
                <img src="\img\more\solbere.png" className="scrollImg"/>
                <img src="\img\more\crowdmed.png" className="scrollImg"/>
                <img src="\img\more\arena_sports.png" className="scrollImg"/>
                <img src="\img\more\uwkc.png" className="scrollImg "/>
                <img src="\img\more\solbere.png" className="scrollImg"/>
                <img src="\img\more\crowdmed.png" className="scrollImg"/>
                <img src="\img\more\arena_sports.png" className="scrollImg"/>
              </div>
              <div>
              <img src="\img\more\uwkc.png" className="scrollImg "/>
                <img src="\img\more\solbere.png" className="scrollImg"/>
                <img src="\img\more\crowdmed.png" className="scrollImg"/>
                <img src="\img\more\arena_sports.png" className="scrollImg"/>
                <img src="\img\more\uwkc.png" className="scrollImg "/>
                <img src="\img\more\solbere.png" className="scrollImg"/>
                <img src="\img\more\crowdmed.png" className="scrollImg"/>
                <img src="\img\more\arena_sports.png" className="scrollImg"/>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
  

}