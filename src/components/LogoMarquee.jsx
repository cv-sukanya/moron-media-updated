import React from "react";
import BookMyShow from "../assets/images/logos/BookMyShow.webp";
import Brut from "../assets/images/logos/Brut.webp";
import ComicCon from "../assets/images/logos/ComicCon.webp";
import Gigabyte from "../assets/images/logos/Gigabyte.webp";
import Meta from "../assets/images/logos/Meta.webp";
import Saregama from "../assets/images/logos/Saregama.webp";
import Upthrust from "../assets/images/logos/Upthrust.webp";
import RedBull from "../assets/images/logos/RedBull.webp";
import Google from "../assets/images/logos/Google.webp";
import Kingfisher from "../assets/images/logos/Kingfisher_beer_logo.webp";
import Heineken from "../assets/images/logos/HeinekenLogo.webp";

const logos = [
  BookMyShow,
  Brut,
  ComicCon,
  Gigabyte,
  Meta,
  Google,
  Saregama,
  Upthrust,
  RedBull,
  Kingfisher,
  Heineken,
];

function LogoMarquee() {
  // Duplicate logos for seamless infinite scrolling
  const allLogos = [...logos, ...logos];

  return (
    <div className="bg-black py-10 overflow-hidden">
      <h1
        className="font-montserrat font-bold text-white text-center text-xl md:text-4xl mb-6"
        data-aos="fade-up"
      >
        Trusted By
      </h1>

      <div className="relative w-full overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {allLogos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center px-6"
              style={{ minWidth: "150px" }}
            >
              <img
                src={logo}
                alt={`logo-${index}`}
                className="h-6 sm:h-10 md:h-16 lg:h-20 xl:h-24 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LogoMarquee;
