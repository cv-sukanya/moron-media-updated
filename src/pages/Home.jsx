import React from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import LogoMarquee from "../components/LogoMarquee";
import LogoMarquee2 from "../components/LogoMarquee2";
import WorkSlider from "../components/WorkSlider";
import ArtistCollage from "../components/ArtistCollage";
import BrandName from "../components/BrandName";

function Home() {
  // const [isMuted, setIsMuted] = React.useState(true);

  return (
    <div data-scroll-section>

      <>
        <BrandName/>
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-bold text-xl text-md animate-bounce tracking-widest opacity-80 drop-shadow-lg font-light">
          ↓ 
        </div>

      </>

      <div className="min-h-screen bg-black">

        <div className="border-y-2 border-white py-10" data-scroll data-scroll-speed="1.2">
          <h1 className="font-montserrat font-bold text-center text-white text-xl md:text-4xl pb-5 px-4 sm:px-8 md:px-14"
              data-aos="fade-up"
              data-aos-delay="200">
            Our Biggest Projects
          </h1>
          <WorkSlider />
        </div>

        <div
          className=""
          data-scroll
          data-scroll-speed="1.2"
        >
          <LogoMarquee />
          <div className="mt-4 sm:mt-6 md:mt-8">
            <LogoMarquee2 />
          </div>
        </div>

        {/* <div
          className="border-y-2 border-white py-10 mt-10"
          data-scroll
          data-scroll-speed="1.2"
        >
          <div className="flex justify-center items-center">
            

            <h1 className="font-montserrat font-bold text-center text-white text-xl md:text-4xl pb-5 px-4 sm:px-8 md:px-14"
              data-aos="fade-up"
              data-aos-delay="200">
                Artists We've Worked With
            </h1>
          </div>
          <ArtistSLider />
        </div> */}


        <div
          className="border-y-2 border-white pt-10 pb-4 mt-4"
          data-scroll
          data-scroll-speed="1.2">
            <h1
              className="font-montserrat font-bold text-center text-white text-xl md:text-4xl pb-10"
              data-aos="fade-up"
            >
              Artists We've Worked With
            </h1>

            <ArtistCollage />
         
        </div>

        
      </div>
    </div>
  );
}

export default Home;
