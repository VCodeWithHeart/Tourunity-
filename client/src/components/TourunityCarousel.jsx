import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const TourunityCarousel = ({ slides }) => {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: false }));

  return (
    <Carousel
      opts={{ loop: true }}
      plugins={[plugin?.current]}
      className="w-full relative"
      onMouseEnter={plugin?.current?.stop}
      onMouseLeave={plugin?.current?.reset}
    >
      <CarouselContent>
        {slides?.map((slide) => (
          <CarouselItem
            key={slide?.id}
            className={`${slide?.bgClass} py-8 md:py-16 xl:py-31`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column */}
              <div className="text-gray-900 space-y-6 lg:pr-12">
                <p className="text-xs uppercase font-semibold tracking-wider text-gray-700">
                  LONELY PLANET PRESENTS
                </p>
                <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
                  {slide?.mainTitle}
                </h1>
                <p className="text-base leading-relaxed text-gray-700">
                  {slide?.description}
                </p>
                <Button
                  asChild
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-base font-semibold rounded-md"
                >
                  <Link to={slide?.buttonLink}>{slide?.buttonText}</Link>
                </Button>
              </div>
              {/* Right Column */}
              {/* <div className="relative w-full aspect-[4/3] max-w-[550px] mx-auto lg:mx-0 lg:ml-auto"> */}
              <div className="relative w-full aspect-square sm:aspect-[4/3] max-w-[550px] mx-auto lg:mx-0 lg:ml-auto">
                <img
                  src={slide?.imageSrc}
                  alt={slide?.imageAlt}
                  className="w-full h-full object-cover rounded-xl shadow-lg"
                  style={slide?.imageFilterStyle}
                />
                {/* Overlays, etc. */}

                {/* Yellow Box "OUR GUIDES YOUR STORIES" */}
                {slide?.yellowBoxText && (
                  <div
                    className={`absolute bottom-1/4 right-0 transform translate-x-1/4 translate-y-1/2
                        ${slide?.yellowBoxBg} text-gray-900 px-6 py-4
                        font-extrabold text-lg text-center leading-tight
                        shadow-md z-10 min-w-[150px]`}
                    style={{ transform: "rotate(-5deg) translate(25%, 50%)" }}
                  >
                    {slide?.yellowBoxText?.map((line, i) => (
                      <span key={i} className="block">
                        {line}
                      </span>
                    ))}
                  </div>
                )}

                {/* Pink/Purple Square Overlay (static for now, but could be dynamic) */}
                {slide?.sticker && (
                  <div
                    className={`absolute top-0 right-1/4 w-32 h-32 ${slide?.stickerColor}
                          transform -translate-y-1/4 rotate-12
                          opacity-70 mix-blend-multiply rounded-lg`}
                  >
                    {/* Inner circle or sphere effect */}
                    <div className="absolute inset-4 rounded-full bg-black opacity-12 blur-sm"></div>
                  </div>
                )}

                {/* Coordinates (dynamic) */}
                {slide?.coordinates && (
                  <div
                    className="absolute bottom-4 left-1/2 md:left-full transform -translate-x-1/2 md:-translate-x-full
                          text-gray-900 text-sm font-medium tracking-wide"
                    style={{
                      transform:
                        "rotate(90deg) translateX(50%) translateY(100px)",
                      transformOrigin: "bottom right",
                    }}
                  >
                    <span className="whitespace-nowrap">
                      {slide?.coordinates}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="z-20 absolute left-8 bg-transparent text-gray-800 hover:opacity-100 disabled:opacity-50" />
      <CarouselNext className="z-20 absolute right-8 bg-transparent text-gray-800 hover:opacity-100 disabled:opacity-50" />
    </Carousel>
  );
};

export default TourunityCarousel;
