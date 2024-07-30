
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
    <div className="relative w-[]" >
      <div className="absolute pointer-events-none z-10 h-full justify-center items-center flex inset-[0%] m-auto w-[80%] h-24">

        {hoveredItem && <img
        src={hoveredItem ? `/img/more/${hoveredItem}.png` : ''}
        className="rounded-[4%]"
        />}
      </div>


      {/* carousels */}
      <div className="z-[20] group">

          <h3 className="text-xl font-normal text-white font-ozpPrimary">.GAMES</h3>
          <div className="morebody overflow-hidden " >
            <div className="scroll imgBox">
              <div className="group-hover:blur">
                <img src="\img\more\raccoon.png" className="scrollImg" onMouseEnter={() => handleMouseEnter('raccoon')} onMouseLeave={handleMouseLeave}  />
                <img src="\img\more\corpsebound.png" className="scrollImg" onMouseEnter={() => handleMouseEnter('corpsebound')} onMouseLeave={handleMouseLeave}/>
                <img src="\img\more\cave.png" className="scrollImg" onMouseEnter={() => handleMouseEnter('cave')} onMouseLeave={handleMouseLeave}/>
                <img src="\img\more\raccoon.png" className="scrollImg" onMouseEnter={() => handleMouseEnter('raccoon')} onMouseLeave={handleMouseLeave}/>
                <img src="\img\more\corpsebound.png" className="scrollImg" onMouseEnter={() => handleMouseEnter('corpsebound')} onMouseLeave={handleMouseLeave}/>
                <img src="\img\more\cave.png" className="scrollImg" onMouseEnter={() => handleMouseEnter('cave')} onMouseLeave={handleMouseLeave}/>
              </div>
              <div className="group-hover:blur">
              <img src="\img\more\raccoon.png" className="scrollImg" onMouseEnter={() => handleMouseEnter('raccoon')} onMouseLeave={handleMouseLeave}/>
                <img src="\img\more\corpsebound.png" className="scrollImg" onMouseEnter={() => handleMouseEnter('corpsebound')} onMouseLeave={handleMouseLeave}/>
                <img src="\img\more\cave.png" className="scrollImg" onMouseEnter={() => handleMouseEnter('cave')} onMouseLeave={handleMouseLeave}/>
                <img src="\img\more\raccoon.png" className="scrollImg" onMouseEnter={() => handleMouseEnter('raccoon')} onMouseLeave={handleMouseLeave}/>
                <img src="\img\more\corpsebound.png" className="scrollImg" onMouseEnter={() => handleMouseEnter('corpsebound')} onMouseLeave={handleMouseLeave}/>
                <img src="\img\more\cave.png" className="scrollImg" onMouseEnter={() => handleMouseEnter('cave')} onMouseLeave={handleMouseLeave}/>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-normal text-white font-ozpPrimary">.CONSULTING</h3>
          <div className="morebody overflow-hidden group" >
            <div className="scroll2 imgBox">
              <div className="group-hover:blur">
                <img src="\img\more\uwkc.png" className="scrollImg" onMouseEnter={() => handleMouseEnter('uwkc')} onMouseLeave={handleMouseLeave}/>
                <img src="\img\more\solbere.png" className="scrollImg" onMouseEnter={() => handleMouseEnter('solbere')} onMouseLeave={handleMouseLeave}/>
                <img src="\img\more\crowdmed.png" className="scrollImg" onMouseEnter={() => handleMouseEnter('crowdmed')} onMouseLeave={handleMouseLeave}/>
                <img src="\img\more\arena_sports.png" className="scrollImg" onMouseEnter={() => handleMouseEnter('arena_sports')} onMouseLeave={handleMouseLeave}/>
                <img src="\img\more\uwkc.png" className="scrollImg " onMouseEnter={() => handleMouseEnter('uwkc')} onMouseLeave={handleMouseLeave}/>
                <img src="\img\more\solbere.png" className="scrollImg" onMouseEnter={() => handleMouseEnter('solbere')} onMouseLeave={handleMouseLeave}/>
                <img src="\img\more\crowdmed.png" className="scrollImg" onMouseEnter={() => handleMouseEnter('crowdmed')} onMouseLeave={handleMouseLeave}/>
                <img src="\img\more\arena_sports.png" className="scrollImg" onMouseEnter={() => handleMouseEnter('arena_sports')} onMouseLeave={handleMouseLeave}/>
              </div>
              <div className="group-hover:blur">
              <img src="\img\more\uwkc.png" className="scrollImg " onMouseEnter={() => handleMouseEnter('uwkc')} onMouseLeave={handleMouseLeave}/>
                <img src="\img\more\solbere.png" className="scrollImg" onMouseEnter={() => handleMouseEnter('solbere')} onMouseLeave={handleMouseLeave}/>
                <img src="\img\more\crowdmed.png" className="scrollImg" onMouseEnter={() => handleMouseEnter('crowdmed')} onMouseLeave={handleMouseLeave}/>
                <img src="\img\more\arena_sports.png" className="scrollImg" onMouseEnter={() => handleMouseEnter('arena_sports')} onMouseLeave={handleMouseLeave}/>
                <img src="\img\more\uwkc.png" className="scrollImg " onMouseEnter={() => handleMouseEnter('uwkc')} onMouseLeave={handleMouseLeave}/>
                <img src="\img\more\solbere.png" className="scrollImg" onMouseEnter={() => handleMouseEnter('solbere')} onMouseLeave={handleMouseLeave}/>
                <img src="\img\more\crowdmed.png" className="scrollImg" onMouseEnter={() => handleMouseEnter('crowdmed')} onMouseLeave={handleMouseLeave}/>
                <img src="\img\more\arena_sports.png" className="scrollImg" onMouseEnter={() => handleMouseEnter('arena_sports')} onMouseLeave={handleMouseLeave}/>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
  

}