import React, { useState } from "react";
import VideoProduction from "../assets/images/new-projects/alia-bhatt.jpg";
import CreativeDirection from "../assets/images/new-projects/creative-direction-and-concept-development.jpeg";
import PostProduction from "../assets/images/new-projects/post-production.jpg";

const serviceData = [
  {
    title: "Video Production",
    image: VideoProduction,
    services: [
      "Music Videos",
      "Brand Films",
      "Fashion Films",
      "Event Aftermovies",
      "Celebrity Shoots",
      "Commercials / Ad Films",
    ],
  },
  {
    title: "Creative Direction & Concept Development",
    image: CreativeDirection,
    services: [
      "Campaign Ideation",
      "Moodboarding & Storyboarding",
      "Scriptwriting",
      "Art Direction",
      "Talent Direction",
    ],
  },
  {
    title: "Post-Production & VFX",
    image: PostProduction,
    services: [
      "Offline & Online Editing",
      "Color Grading",
      "Motion Graphics",
      "VFX & Compositing",
      "Sound Design",
    ],
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

        {/* Responsive layout: 3 cards in a row on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
      </section>
    </div>
    
  );
};

export default OurServices;
