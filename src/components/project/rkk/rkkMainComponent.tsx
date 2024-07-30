import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";


export default function RKKMainComponent() {
  return (
    <>
      <div className="">
        <h3 className="text-xl font-normal text-white font-ozpPrimary pb-5">.OUR_PROJECTS</h3>
          <div className="justify-center items-center flex w-full">
            <Carousel className="w-full h-full items-center justify-center flex"
              opts={{
                align: "start",
                loop: true,
              }}>
              <CarouselContent >
                {/* item 1 */}
                <CarouselItem className="">
                  <div className="shadow-inner-lg border-2 border-slate-800 w-[80%] items-center justify-center flex">
                    <img
                      src="\img\rkk_carousel_1.png"
                      alt="Carousel1"
                      className="relative -z-50 justify-center items-center flex"
                    />
                  </div>
                  <div className="items-center justify-center flex w-[100%]">
                    <h2 className="text-sm font-ozpPrimary text-ozp-grey  text-center">
                   Dep Homes, winner of the 2016 BuiltGreen Award, sought a comprehensive website redesign better reflect their modern offerings and sophisticated brand image.
                    </h2>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="shadow-inner-lg border-2 w-[80%] border-slate-600">
                    <img
                      src="\img\rkk_carousel_2.png"
                      alt="Carousel1"
                      className="relative -z-50"
                    />
                  </div>
                  <div className="items-center justify-center flex ">
                    <h2 className="text-sm font-ozpPrimary text-ozp-grey leading-normal w-3/4 text-center">
                      Dep Homes is a ncoksmalclahiwefvnawoilfja kfahbefehlvan
                      wievlfjnFWIKBUEFHJNHLNjnweuhbj
                    </h2>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="shadow-inner-lg border-2 w-[80%] border-slate-800">
                    <img
                      src="\img\rkk_carousel_3.png"
                      alt="Carousel1"
                      className="relative -z-50"
                    />
                  </div>
                  <div className="items-center justify-center flex ">
                    <h2 className="text-sm font-ozpPrimary text-ozp-grey leading-normal w-3/4 text-center">
                      Dep Homes is a ncoksmalclahiwefvnawoilfja kfahbefehlvan
                      wievlfjnFWIKBUEFHJNHLNjnweuhbj
                    </h2>
                  </div>
                </CarouselItem>
              </CarouselContent>
              {/* <CarouselPrevious/>
              <CarouselNext/> */}
              <CarouselPrevious className="-translate-y-[150%] translate-x-[200%] bg-transparent text-white"/>
              <CarouselNext className="-translate-y-[150%] -translate-x-[200%] bg-transparent text-white"/>
            </Carousel>
          </div>
      </div>
    </>
  );
}

