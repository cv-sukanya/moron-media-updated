import React, { useState } from "react";
import FilmDivision from "../assets/images/new-projects/alia-bhatt.webp";
import LiveDivision from "../assets/images/new-projects/creative-direction-and-concept-development.webp";
// import PostProduction from "../assets/images/new-projects/post-production.webp";

const serviceData = [
  {
    title: "Moron Media [Film Division]",
    image: FilmDivision,
    services: [
      "TVCs & Commercials",
      "DVCs & Digital Ad Films",
      "Branded Films & Brand Storytelling",
      "Corporate Films",
      "Music Videos",
      "Social Media Content (Campaign-based)",
      "Post Production (Editing, Color, Sound)",
    ],
  },
  {
    title: "Moron Media Live",
    image: LiveDivision,
    services: [
      "Concert Aftermovies",
      "Festival Coverage",
      "Live Show Highlights",
      "Artist Performance Content",
      "Sponsor Deliverables (Reels + Brand integrations)",
      "Event Recaps &amp; Social-First Edits",
      "On-ground Campaign Coverage",
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
    title: "End-to-End Execution [pre-production post]",
    
  },
  {
    title: "Strong storytelling + Cinematic output",
  },
  {
    title: "Live + Brand content under one roof",
  },
  {
    title: "Fast turnaround for live deliverables",
  },
  {
    title: "Fast turnaround for live deliverables"
  }
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
              className="relative rounded-lg shadow-xl overflow-hidden transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative w-full h-0 pb-[56.25%] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 transform hover:scale-105"
                />
                <div className="absolute inset-0  from-black/20 to-black/60 transition-opacity duration-300 pointer-events-none" />
              </div>

              {/* Title */}
              <div className="flex items-center justify-between px-6 py-4 bg-black text-white">
                <h2 className="text-lg sm:text-lg font-semibold font-helvetica">
                  {service.title}
                </h2>
                <span
                  className={`text-lg transition-transform duration-300 ${
                    hoverIndex === index ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </div>

              {/* Dropdown list (hover only one at a time) */}
              <ul
                className={`bg-black text-white px-6 py-4 font-helvetica overflow-hidden transition-all duration-500 text-base font-[Helvetica] space-y-2 ${
                  hoverIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                {service.services.map((item, i) => (
                  <li key={i} className="transition-colors font-helvetica">
                    • {item}
                  </li>
                ))}
              </ul>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {uspData.map((usp, i) => (
              <div
                key={i}
                className="border border-white/15 rounded-lg p-6 transition-all duration-300 hover:border-white hover:-translate-y-1"
              >
                <h4 className="text-md font-light font-helvetica">
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
