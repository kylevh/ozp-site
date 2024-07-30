import { useState } from "react";


function About() {
  const [visibleImage, setVisibleImage] = useState('both'); // 'both', 'fukuda', or 'huynh'

  const handleClick = (image) => {
    setVisibleImage(image);
  };

  return (
    <>
      <main className="bg-ozp-background border border-transparent h-screen min-w-screen max-w-screen items-start px-6 lg:px-0 lg:pl-6 lg:pl-20">
        <div className="justify-center items-center">
          <div className=" w-full flex flex-col items-start mt-28 lg:mt-36 md:min-w-1/2 lg:min-w-1/2">
            {/* Title */}
            <div className="w-full flex flex-col items-start">
              <h1 className="text-xl lg:text-3xl font-normal font-ozpPrimary text-center text-white">
                <span>//</span>ABOUT
              </h1>
            </div>
          </div>
            
          <div className="justify-center items-center flex">
            <div className="py-[5%] text-center w-full">
              <h1 className="text-5xl lg:text-7xl text-white text-center">
                We Like To Make Things
              </h1>
              <div className="justify-center items-center flex">
                <div className="py-[5%] lg:py-[3%]  w-[80%]">
                  <p className="text-ozp-grey text-xl lg:text-2xl font-ozpPrimary">We are a Seattle-based tech studio started by two University of Washington alumni. We enjoy creating tech products and services. Check out more about us below.</p>
                </div>
              </div>
              <div className="justify-center items-center flex">
                <div className="border-t w-[50%]">
                </div>
              </div>
              <div className="pt-[15%] lg:pt-[1%] h-full">
                <div className="w-full justify-center items-center flex space-x-16 lg:space-x-64">
                  <img
                  src="\img\team\fukuda.png"
                  className="w-[40%] lg:w-[15%]"
                  />
                  <img
                  src="\img\team\huynh.png"
                  className="w-[40%] lg:w-[15%]"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </>
  )
}

export default About;