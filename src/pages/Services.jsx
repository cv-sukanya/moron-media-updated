import React, { useState } from "react";
import FilmDivision from "../assets/images/moron-media-film-division.png";
import LiveDivision from "../assets/images/moron-media-live-division.png";
import { Helmet } from "react-helmet-async";

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
];

const serviceOverviewData = [
  {
    title: "End-to-End Production",
    description: "Complete pre-production through post-production.",
    icon: "production",
  },
  {
    title: "Event Coverage",
    description: "Same-day live cuts and premium event visuals.",
    icon: "event",
  },
  {
    title: "Film Production",
    description: "TVCs, DVCs, and cinematic brand films.",
    icon: "film",
  },
  {
    title: "AI Filmmaking",
    description: "AI-produced content films, ad films, and creative campaigns.",
    icon: "ai",
  },
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

// Service Icon
const ServiceIcon = ({ type }) => {
  const commonProps = {
    width: 100,
    height: 100,
    viewBox: "0 0 100 100",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  };

  return (
    <svg {...commonProps}>
      <defs>
        <linearGradient
          id={`icon-gradient-${type}`}
          x1="0"
          y1="0"
          x2="100"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFB547" />
          <stop offset="0.5" stopColor="#F04438" />
          <stop offset="1" stopColor="#8B1CFB" />
        </linearGradient>

        <linearGradient
          id={`icon-glass-${type}`}
          x1="0"
          y1="0"
          x2="100"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF6B35" stopOpacity="0.65" />
          <stop offset="1" stopColor="#D71954" stopOpacity="0.45" />
        </linearGradient>
      </defs>

      {/* Colorful layered background */}
      <rect
        x="20"
        y="18"
        width="58"
        height="60"
        rx="12"
        fill={`url(#icon-gradient-${type})`}
        opacity="0.9"
      />

      <rect
        x="12"
        y="28"
        width="68"
        height="58"
        rx="13"
        fill={`url(#icon-glass-${type})`}
        stroke="#FFB18A"
        strokeOpacity="0.5"
        strokeWidth="2.5"
      />

      {/* End-to-End Production */}
      {type === "production" && (
        <>
          <rect
            x="25"
            y="43"
            width="42"
            height="28"
            rx="5"
            stroke="#FFD8C2"
            strokeWidth="2.5"
          />
          <path d="M40 50L53 57L40 64V50Z" fill="#FFD8C2" />
          <path
            d="M31 37H61"
            stroke="#FFD8C2"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </>
      )}

      {/* Event Coverage */}
      {type === "event" && (
        <>
          <rect
            x="27"
            y="38"
            width="38"
            height="32"
            rx="5"
            stroke="#FFD8C2"
            strokeWidth="2.5"
          />
          <path d="M27 47H65" stroke="#FFD8C2" strokeWidth="2" />
          <circle cx="35" cy="43" r="2" fill="#FFD8C2" />
          <circle cx="42" cy="43" r="2" fill="#FFD8C2" />
          <path d="M45 53L55 59L45 65V53Z" fill="#FFD8C2" />
        </>
      )}

      {/* Film Production */}
      {type === "film" && (
        <>
          <rect
            x="25"
            y="38"
            width="42"
            height="32"
            rx="5"
            stroke="#FFD8C2"
            strokeWidth="2.5"
          />
          <path d="M25 48H67" stroke="#FFD8C2" strokeWidth="2.5" />
          <path
            d="M34 38L40 48M47 38L53 48"
            stroke="#FFD8C2"
            strokeWidth="2.5"
          />
          <path d="M42 54L54 60L42 66V54Z" fill="#FFD8C2" />
        </>
      )}

      {/* AI Filmmaking */}
      {type === "ai" && (
        <>
          <rect
            x="26"
            y="39"
            width="40"
            height="30"
            rx="7"
            stroke="#FFD8C2"
            strokeWidth="2.5"
          />
          <text
            x="46"
            y="59"
            textAnchor="middle"
            fill="#FFD8C2"
            fontSize="15"
            fontWeight="bold"
          >
            AI
          </text>
          <path
            d="M46 27V33M46 75V81M17 54H23M69 54H75"
            stroke="#FFD8C2"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M73 30L76 36L82 39L76 42L73 48L70 42L64 39L70 36L73 30Z"
            fill="#FFD8C2"
          />
        </>
      )}
    </svg>
  );
};

const ServiceOverview = () => {
  return (
    <section className="service-overview">
      <div className="service-overview-grid">
        {serviceOverviewData.map((service, index) => (
          <div key={index} className="service-overview-card">
            <div className="service-overview-icon">
              <ServiceIcon type={service.icon} />
            </div>

            <div className="service-overview-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const OurServices = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <>
      <Helmet>
        <title>
          Our Services | Film, Video & Live Production - Moron Media
        </title>

        <meta
          name="description"
          content="Explore Moron Media's creative production services, from TVCs, brand films, corporate videos and music videos to CGI content, concerts, festivals and live experiences."
        />

        <meta name="robots" content="index, follow" />

        <link rel="canonical" href="https://moronmedia.com/services/" />

        {/* Open Graph */}

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Our Services | Film, Video & Live Production - Moron Media"
        />
        <meta
          property="og:description"
          content="Discover Moron Media's creative production services, including commercials, brand films, corporate videos, music videos, CGI advertising, concerts, festivals and live experiences."
        />
        <meta property="og:url" content="https://moronmedia.com/services" />
        <meta property="og:site_name" content="Moron Media" />
        
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Moron Media – Film, Video and Live Production Services"
        />
        <meta property="og:locale" content="en_IN" />
      </Helmet>
      <div className="bg-black text-white w-full py-20 px-6 border-b-2 border-white">
        <section className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-16 mt-10 font-montserrat">
            Our Services
          </h1>

          {/* Film and Live Division */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceData.map((service, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
                className="relative rounded-lg text-center border-2 border-[#c4c2c2] overflow-hidden group cursor-pointer h-[450px]"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div
                  className={`absolute inset-0 bg-black/90 transition-opacity duration-500 ${
                    hoverIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                />

                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent z-10">
                  <h2 className="text-xl sm:text-2xl font-semibold font-helvetica text-white">
                    {service.title}
                  </h2>
                </div>

                <div
                  className={`absolute inset-0 flex items-center justify-center z-20 px-8 transition-all duration-500 ${
                    hoverIndex === index
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6 pointer-events-none"
                  }`}
                >
                  <ul className="text-white text-center font-helvetica space-y-3">
                    {service.services.map((item, i) => (
                      <li
                        key={i}
                        className="text-base md:text-lg tracking-wide"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* NEW SERVICE OVERVIEW SECTION */}
          <ServiceOverview />

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
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default OurServices;
