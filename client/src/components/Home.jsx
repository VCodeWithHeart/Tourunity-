import carouselData from "@/data/carouselData";
import TourunityCarousel from "./TourunityCarousel";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Link } from "react-router-dom";
import { Earth } from "lucide-react";

const whereToNextPlaces = [
  {
    id: 1,
    imageSrc:
      "https://images.unsplash.com/photo-1620563092215-0fbc6b55cfc5?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Zurich, Switzerland",
    mainTitle: "Zurich",
    link: "/destinations/zurich",
  },
  {
    id: 2,
    imageSrc:
      "https://images.unsplash.com/photo-1578912996078-305d92249aa6?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Barcelona, Spain",
    mainTitle: "Barcelona",
    link: "/destinations/barcelona",
  },
  {
    id: 3,
    imageSrc:
      "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?q=80&w=1101&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Phuket, Thailand",
    mainTitle: "Phuket",
    link: "/destinations/phuket",
  },
];

const Home = () => {
  return (
    <>
      <section className="flex items-center overflow-hidden">
        <TourunityCarousel slides={carouselData} />
      </section>

      <section className="py-8">
        <div className="container">
          <p className="text-sm uppercase font-semibold tracking-wide text-black-400 block">
            Plan your trip
          </p>
          <h1 className="text-5xl leading-tight font-semibold">
            Where to next?
          </h1>

          <div className="grid gap-4 pt-3.5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {whereToNextPlaces?.map(
              ({ imageSrc, imageAlt, link, mainTitle, id }) => (
                <Link to={link} key={id} className="group">
                  <Card className="border-none rounded-sm p-3 gap-3 h-full">
                    <CardContent className="px-0">
                      <div className="w-full h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 overflow-hidden rounded-sm">
                        <img
                          src={imageSrc}
                          alt={imageAlt}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                    </CardContent>
                    <CardFooter className="px-1">
                      <p className="font-semibold tracking-wide text-black-400 block">
                        {mainTitle}
                      </p>
                    </CardFooter>
                  </Card>
                </Link>
              )
            )}
          </div>
        </div>
      </section>
      {/* <section className="w-full relative overflow-hidden">
        <div className="bg-transparent border-t-1 border-b-4 border-l-1 border-r-1 border-white h-[150%] w-[95%] top-[20%] left-[2.5%] rounded-[50%] absolute"></div>
        <div className="absolute top-[35%] left-[29%]">
          <Earth />
          <h1 className="font-serif font-semibold leading-[0.85] mb-4 w-full text-center text-[20px] lg:text-[90px] text-white">Best In Travel</h1>
        </div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          id="expert-video"
        >
          <source src="/videos/carInDesert.mp4" type="video/mp4" />
          <track kind="captions" />
          Your browser does not support the video tag.
        </video>
      </section> */}
      <section className="w-full relative overflow-hidden">
        <div className="bg-transparent border-t-1 border-b-4 border-l-1 border-r-1 border-white h-[150%] w-[95%] top-[20%] left-[2.5%] rounded-[50%] absolute"></div>

        {/* Centered Earth and Heading */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <Earth className="text-white mb-10 h-[50px] w-[50px]" />
          <h1 className="font-serif font-semibold leading-[0.85] mb-4 w-full text-center text-[50px] lg:text-[90px] text-white">
            Best In Travel
          </h1>
        </div>

        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          id="expert-video"
        >
          <source src="/videos/carInDesert.mp4" type="video/mp4" />
          <track kind="captions" />
          Your browser does not support the video tag.
        </video>
      </section>
    </>
  );
};

export default Home;
