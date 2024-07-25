import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function RKKMainComponent() {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-start">
        <div className="justify-center items-center flex w-full">
          <Carousel className="w-3/4 h-full">
            <CarouselContent >
              {/* item 1 */}
              <CarouselItem>
                <div className="mb-[2rem] shadow-inner-lg border-2 border-slate-800">
                  <img
                    src="\img\rkk_carousel_1.png"
                    alt="Carousel1"
                    className="relative -z-50"
                  />
                </div>
                <div className="items-center justify-center flex ">
                  <h2 className="text-sm font-ozpPrimary text-ozp-grey  text-center">
                    Dep Homes is a ncoksmalclahiwefvnawoilfja kfahbefehlvan
                    wievlfjnFWIKBUEFHJNHLNjnweuhbj
                  </h2>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="mb-[2rem] shadow-inner-lg border-2 border-slate-600">
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
                <div className="mb-[2rem] shadow-inner-lg border-2 border-slate-800">
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
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </>
  );
}
