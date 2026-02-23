import React, { useState } from "react";
import diluminati from "../assets/images/new-projects/about-us/dilu-minati.webp";
import lakme from "../assets/images/new-projects/lakme-fashion-week.webp";
// import g20 from "../assets/images/new-projects/about-us/g20-summit-2025.webp";
import lolla from "../assets/images/new-projects/about-us/lollapalooza.webp";
// import musicVideos from "../assets/images/new-projects/about-us/phirse-mil.webp";
// import bonkers from "../assets/images/new-projects/about-us/bonkers.webp";
import AliaBhatt from "../assets/images/new-projects/alia-bhatt.webp";
import AngelOne from "../assets/images/angelone.webp";
import RedBull from "../assets/images/redbull.webp";
import TumHoToh from "../assets/images/tum-ho-toh.webp";
import Savera from "../assets/images/savera-about.webp";
import FilmFare from "../assets/images/filmfare.webp";
import ComicCon from "../assets/images/comic-con.webp";
import RollingLoud from "../assets/images/rolling-loud.webp"

function About() {
  // const [currentIndex, setCurrentIndex] = useState(0);

  // const projects = [
  //   { image: diluminati, title: "Diluminati Tour 2024", desc: "India's biggest concert tour, where we helmed all creative for billboards and digital, in partnership with Saregama India." },
  //   { image: lakme, title: "Lakmé Fashion Week", desc: "Crafting sleek, high-energy visuals for India’s most prestigious runway." },
  //   { image: g20, title: "G20 Summit x Assam Tourism", desc: "Producing visually rich campaigns spotlighting India on the global stage." },
  //   { image: lolla, title: "Lollapalooza India", desc: "Capturing the raw, genre-defying energy of one of the world’s most iconic music festivals." },
  //   { image: musicVideos, title: "Music Videos", desc: "Chart-topping music videos for Shaan, Iqlipse Nova, and Prakriti Kakkar – each crossing over a crore views and counting." },
  //   { image: bonkers, title: "Bonkers Corner Films", desc: "Distinctive fashion films for Bonkers Corner, blending streetwear swagger with cinematic edge." },
  // ];

  const [activeTab, setActiveTab] = useState("media");
  const [currentIndex, setCurrentIndex] = useState(0);

  const mediaProjects = [
    { image:AliaBhatt, title: "Alia Bhatt x Fujifilm", desc: "Crafting compelling visual narratives around one of India’s most celebrated icons blending authenticity with cinematic finesse" },
    { image:AngelOne, title: "Angel One", desc: "Driving high-impact financial storytelling through sharp, strategy-led brand films and digital campaigns." }, 
    { image: RedBull, title: "Red Bull Solo Legends", desc: "Fueling adrenaline-packed e-sports event that captures grit, speed, and the spirit of performance." },
    { image: TumHoToh, title: "Tum Ho Toh", desc: "A visually rich musical journey brought alive through emotion-driven storytelling and immersive frames." },
    { image: Savera, title: "Savera", desc: "Translating melody into mood, a soulful visual experience rooted in aesthetics and atmosphere." },
  ];
  const liveProjects = [
    { image: FilmFare, title: "Filmfare Awards 2025", desc: "Documenting the glamour, scale, and spectacle of India’s most iconic night in entertainment." },
    { image: lolla, title: "Lollapalooza India", desc: "Capturing the raw, genre-defying energy of one of the world’s most iconic music festivals." },
    { image: diluminati, title: "Diluminati India Tour", desc: "Bringing stadium-scale euphoria to screen with dynamic, high-octane concert storytelling." },
    { image: lakme, title: "Lakmé Fashion Week", desc: "Framing fashion’s biggest runway moments with elegance, precision, and visual drama." },
    { image: RollingLoud, title: "Rolling Loud", desc: "Immersing audiences in bass-heavy culture, crowd frenzy, and global hip-hop energy." },
    { image: ComicCon, title: "Comic Con", desc: "Celebrating pop culture fandom through vibrant, high-energy coverage that matches the madness." },
  ];
  const projects = activeTab === "media" ? mediaProjects : liveProjects;

  const switchTab = (tab) => {
    setActiveTab(tab);
    setCurrentIndex(0);
  };

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


      <h1 className="font-montserrat font-bold text-3xl md:text-5xl mb-5 mt-20">
        About Moron Media
      </h1>

      <div className="space-y-3 text-sm sm:text-base lg:text-xl leading-relaxed 
                      sm:leading-loose font-helvetica text-justify 
                      [&_p]:font-[200]
                      [&_p]:text-gray-400
                      [&_h1]:font-bold 
                      [&_h2]:font-medium
                      [&_h2]: tracking-wide
                      [&_h2]: mb-2"
      >
        <p>Moron Media is a full-service creative production agency. We create high-quality visual
            content for brands, artists, and experiences — from commercials and branded films to
            large-scale Live Division.
        </p>
        <br />
        
        <h1>Over time, our work has grown into two focused verticals:
        </h1>
        <h2>Moron Media (Film Division)</h2>
        <p>
            This is our core division where we produce TVCs, DVCs, branded films, corporate films, and
            music videos. We handle everything end-to-end — concept, scripting, shoot production, and
            post-production.
        </p>
        <br />
        <h2>Moron Media Live (Live Division)</h2>
        <p>
            Moron Media Live is our Live Division vertical focused on concerts, festivals, award shows,
            and on-ground experiences. We create high-energy live content designed for digital
            platforms — including aftermovies, show highlights, sponsor deliverables, and social-first
            reels.
        </p>
      </div>


      <h2 className="font-montserrat font-bold text-xl md:text-4xl mb-10 mt-20">
        Our Standout Projects
      </h2>

      <div className="flex justify-center gap-4 mb-12">

        <button
          onClick={() => switchTab("media")}
          className={`px-6 py-2 border transition ${
            activeTab === "media"
              ? "bg-white text-black"
              : "border-white text-white"
          }`}
        >
          Moron Media Standout Projects
        </button>

        <button
          onClick={() => switchTab("live")}
          className={`px-6 py-2 border transition ${
            activeTab === "live"
              ? "bg-white text-black"
              : "border-white text-white"
          }`}
        >
          Moron Media Live Standout Projects
        </button>

      </div>


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
