
import { useState } from "react"

export default function MoreMainContent() {
  const [hoveredItem, setHoveredItem] = useState<String | null>(null)

  const handleMouseEnter = (item: String) => {
    setHoveredItem(item)
  }

  const handleMouseLeave = () => {
    setHoveredItem(null)
  }

  
  return(
    <div className="relative">
      <div className="absolute h-full justify-center items-center flex inset-[0%] m-auto w-[80%] h-24 z-[100]">

        <img
        alt="Item hover"
        src={hoveredItem ? `/img/more/${hoveredItem}.png` : ''}
        />
      </div>


      {/* carousels */}
      <div className="z-[20]">

          <h3 className="text-xl font-normal text-white font-ozpPrimary pb-5">.GAMES</h3>
          <div className="morebody overflow-hidden" >
            <div className="scroll imgBox">
              <div>
                <img src="\img\more\raccoon.png" className="scrollImg" onMouseEnter={() => handleMouseEnter('raccoon')} onMouseLeave={handleMouseLeave}  />
                <img src="\img\more\corpsebound.png" className="scrollImg" onMouseEnter={() => handleMouseEnter('corpsebound')} onMouseLeave={handleMouseLeave}/>
                <img src="\img\more\cave.png" className="scrollImg" onMouseEnter={() => handleMouseEnter('cave')} onMouseLeave={handleMouseLeave}/>
                <img src="\img\more\raccoon.png" className="scrollImg" onMouseEnter={() => handleMouseEnter('raccoon')} onMouseLeave={handleMouseLeave}/>
                <img src="\img\more\corpsebound.png" className="scrollImg" onMouseEnter={() => handleMouseEnter('corpsebound')} onMouseLeave={handleMouseLeave}/>
                <img src="\img\more\cave.png" className="scrollImg" onMouseEnter={() => handleMouseEnter('cave')} onMouseLeave={handleMouseLeave}/>
              </div>
              <div>
              <img src="\img\more\raccoon.png" className="scrollImg" onMouseEnter={() => handleMouseEnter('raccoon')} onMouseLeave={handleMouseLeave}/>
                <img src="\img\more\corpsebound.png" className="scrollImg" onMouseEnter={() => handleMouseEnter('corpsebound')} onMouseLeave={handleMouseLeave}/>
                <img src="\img\more\cave.png" className="scrollImg" onMouseEnter={() => handleMouseEnter('cave')} onMouseLeave={handleMouseLeave}/>
                <img src="\img\more\raccoon.png" className="scrollImg" onMouseEnter={() => handleMouseEnter('raccoon')} onMouseLeave={handleMouseLeave}/>
                <img src="\img\more\corpsebound.png" className="scrollImg" onMouseEnter={() => handleMouseEnter('corpsebound')} onMouseLeave={handleMouseLeave}/>
                <img src="\img\more\cave.png" className="scrollImg" onMouseEnter={() => handleMouseEnter('cave')} onMouseLeave={handleMouseLeave}/>
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