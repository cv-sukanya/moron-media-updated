import React, { useState } from "react";
import FilmDivision from "../assets/images/moron-media-film-division.png";
import LiveDivision from "../assets/images/moron-media-live-division.png";
// import PostProduction from "../assets/images/new-projects/post-production.webp";

const serviceData = [
  {
    title: "Moron Media Film Division",
    image: FilmDivision,
    services: [
      "TVCs & Commercials",
      "DVCs & Digital Ad Films",
      "Branded Films & Brand Storytelling",
      "Corporate Films",
      "Music Videos",
      "Social Media Content",
      "End-to-End Post Production",
    ],
  },
  {
    title: "Moron Media Live Division",
    image: LiveDivision,
    services: [
      "Concert Aftermovies",
      "Festival Coverage",
      "Live Show Highlights",
      "Artist Performance Content",
      "Sponsor Deliverables (Reels + Brand integrations)",
      "Event Recaps & Social-First Edits",
      "Live Event Content Strategy",
    ],
  },
  // {
  //   title: "Post-Production & VFX",
  //   image: PostProduction,
  //   services: [
  //     "Offline & Online Editing",
  //     "Color Grading",
  //     "Motion Graphics",
  //     "VFX & Compositing",
  //     "Sound Design",
  //   ],
  // },
];

const uspData = [
  {
    title: "360° Video Production Management",
  },
  {
    title: "High-Impact Cinematic Storytelling",
  },
  {
    title: "One-Stop Solution for Live Entertainment & Brand Content",
  },
  {
    title: "Rapid Turnaround for Live Content",
  },
];

const OurServices = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <div className="bg-black text-white w-full py-20 px-6 border-b-2 border-white w-full">
      <section className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-16 mt-10 font-montserrat">
          Our Services
        </h1>

        {/* Responsive layout: 2 cards in a row on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {serviceData.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              className="relative rounded-lg text-center border-2 border-[#c4c2c2] overflow-hidden group cursor-pointer h-[450px]"
            >
              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Dark overlay */}
              <div
                className={`absolute inset-0 bg-black/90 transition-opacity duration-500 ${
                  hoverIndex === index ? "opacity-200" : "opacity-0"
                }`}
              />

              {/* Title */}
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent z-10">
                <h2 className="text-xl sm:text-2xl font-semibold font-helvetica text-white">
                  {service.title}
                </h2>
              </div>

              {/* Hover List Overlay */}
              <div
                className={`absolute inset-0 flex items-center justify-center z-20 px-8 transition-all duration-500 ${
                  hoverIndex === index
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6 pointer-events-none"
                }`}
              >
                <ul className="text-white text-center font-helvetica space-y-3">
                  {service.services.map((item, i) => (
                    <li key={i} className="text-base md:text-lg tracking-wide">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* USP Section */}
        <div className="mt-14 border-t border-white/10 pt-20">
          <h3 className="text-center text-gray-400 tracking-[0.3em] text-sm mb-4 font-montserrat">
            WHY MORON MEDIA
          </h3>

          <p className="text-center text-xl mb-12 font-helvetica">
            Built for brands that demand impact.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {uspData.map((usp, i) => (
              <div
                key={i}
                className="border border-white/15 rounded-lg p-6 transition-all duration-300 hover:border-white hover:-translate-y-1"
              >
                <h4 className="text-md text-center font-light font-helvetica">
                  {usp.title}
                </h4>

                {/* <p className="text-gray-400 text-sm leading-relaxed font-helvetica">
                  {usp.desc}
                </p> */}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurServices;
