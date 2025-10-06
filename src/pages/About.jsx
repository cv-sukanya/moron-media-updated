import React, { useState } from "react";
import diluminati from "../assets/images/new-projects/about-us/dilu-minati.jpg";
import lakme from "../assets/images/new-projects/lakme-fashion-week.png";
import g20 from "../assets/images/new-projects/about-us/g20-summit-2025.jpg";
import lolla from "../assets/images/new-projects/about-us/lollapalooza.jpeg";
import musicVideos from "../assets/images/new-projects/about-us/phirse-mil.jpeg";
import bonkers from "../assets/images/new-projects/about-us/bonkers.jpeg";

function About() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    { image: diluminati, title: "Diluminati Tour 2024", desc: "India's biggest concert tour, where we helmed all creative for billboards and digital, in partnership with Saregama India." },
    { image: lakme, title: "Lakmé Fashion Week", desc: "Crafting sleek, high-energy visuals for India’s most prestigious runway." },
    { image: g20, title: "G20 Summit x Assam Tourism", desc: "Producing visually rich campaigns spotlighting India on the global stage." },
    { image: lolla, title: "Lollapalooza India", desc: "Capturing the raw, genre-defying energy of one of the world’s most iconic music festivals." },
    { image: musicVideos, title: "Music Videos", desc: "Chart-topping music videos for Shaan, Iqlipse Nova, and Prakriti Kakkar – each crossing over a crore views and counting." },
    { image: bonkers, title: "Bonkers Corner Films", desc: "Distinctive fashion films for Bonkers Corner, blending streetwear swagger with cinematic edge." },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const getVisibleProjects = () => {
    const lastIndex = projects.length - 1;
    const prevIndex = currentIndex === 0 ? lastIndex : currentIndex - 1;
    const nextIndex = currentIndex === lastIndex ? 0 : currentIndex + 1;
    return [projects[prevIndex], projects[currentIndex], projects[nextIndex]];
  };

  const visibleProjects = getVisibleProjects();

  return (
    <div className="bg-black text-white px-6 sm:px-14 pt-14 pb-32 border-b-2 border-white w-full">


      <h1 className="font-montserrat font-bold text-3xl md:text-5xl mb-10 mt-20">
        About Moron Media
      </h1>

      <div className="space-y-6 text-sm sm:text-base lg:text-xl leading-relaxed sm:leading-loose font-helvetica text-justify">
        <p>Welcome to Moron Media – where imagination meets execution at the highest level. We’re a leading creative agency 
            redefining the landscape of video production, campaign conceptualization, and post-production with work that’s 
            as bold as it is unforgettable.
        </p>
        <p>From stadium-filling concerts and global fashion spectacles to cinematic music videos and culture-shaping brand 
            campaigns, our portfolio spans the pulse of pop culture. Whether it’s capturing the electricity of live events 
            or crafting nuanced storytelling for high fashion and global tourism, we bring visions to life with precision 
            and flair.
        </p>
        <p>Our collaborators include global giants like META, Redbull, Samsung, Maruti Suzuki, AMD, Gigabyte, 
            and Saregama India, as well as trailblazing Indian brands like Bonkers Corner, Upthrust Esports, 
            and Brut India.
        </p>
      </div>


      <h2 className="font-montserrat font-bold text-xl md:text-4xl mb-10 mt-20">
        Our Standout Projects
      </h2>

      <div className="relative w-full flex items-center justify-center">
        <button
          onClick={handlePrev}
          className="absolute left-0 sm:-left-10 z-10 p-2 rounded-full bg-white/20 hover:bg-white/30 transition"
        >
          ❮
        </button>

        <div className="flex overflow-hidden max-w-5xl w-full px-4 sm:px-12">
          <div className="flex transition-transform duration-500 ease-in-out w-full justify-center gap-4 sm:gap-10">
            {visibleProjects.map((project, i) => {
              const isCenter = i === 1;
              return (
                <div
                  key={i}
                  className={`w-[250px] sm:w-[300px] lg:w-[350px] bg-white/10 border border-white/20 backdrop-blur rounded-[5px] shadow-lg flex-shrink-0 transition-all duration-500 ${
                    isCenter
                      ? "scale-100 opacity-100"
                      : "scale-90 opacity-50"
                  }`}
                >
                  <div className="w-full aspect-[16/9] overflow-hidden rounded-t-[5px]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>

                  <div className="h-[35%] w-full px-4 py-3 flex flex-col justify-start gap-1">
                    <h1 className="text-base font-bold font-montserrat leading-tight">
                      {project.title}
                    </h1>
                    <p className="text-sm font-helvetica leading-snug">
                      {project.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <button
          onClick={handleNext}
          className="absolute right-0 sm:-right-10 z-10 p-2 rounded-full bg-white/20 hover:bg-white/30 transition"
        >
          ❯
        </button>
      </div>
            
      <div className="mt-20 text-sm sm:text-base lg:text-xl leading-relaxed sm:leading-loose font-helvetica text-justify">
        <p>
          At Moron Media, we don’t just produce content—we build moments,
          memories, and movements. Whether it’s a 30-second reel or a nationwide
          campaign, we move fast, think big, and create loud.
        </p>
      </div>
    </div>
  );
}

export default About;
