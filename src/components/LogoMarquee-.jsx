import React from "react";
// import Bonkers from "../assets/images/logos/Bonkers.webp";
import BookMyShow from "../assets/images/logos/BookMyShow.svg";
import Brut from "../assets/images/logos/Brut.svg";
import ComicCon from "../assets/images/logos/ComicCon.webp";
import Gigabyte from "../assets/images/logos/Gigabyte.webp";
import Meta from "../assets/images/logos/Meta.webp";
import Saregama from "../assets/images/logos/Saregama.webp";
import Upthrust from "../assets/images/logos/Upthrust.webp";
import RedBull from "../assets/images/logos/RedBull.webp";
import Google from "../assets/images/logos/Google.png"
import Kingfisher from "../assets/images/logos/Kingfisher_beer_logo.png"
import Heineken from "../assets/images/logos/HeinekenLogo.png"


const LogoMarqueeContent = [
  // { src: Bonkers, alt: "Bonkers" },
  { src: BookMyShow, alt: "BookMyShow" },
  { src: Brut, alt: "Brut" },
  { src: ComicCon, alt: "ComicCon" },
  { src: Gigabyte, alt: "Gigabyte" },
  { src: Meta, alt: "Meta" },
  { src: Google, alt: "Google"},
  { src: Saregama, alt: "Saregama" },
  { src: Upthrust, alt: "Upthrust" },
  { src: RedBull, alt: "Redbull" },
  { src: Kingfisher, alt: "Kingfisher"},
  { src: Heineken, alt: "Heineken"}
];

function LogoMarquee({ direction = "horizontal", verticalDirection = "up" }) {
  const isVertical = direction === "vertical";

  return (
    <>
      {/* <h1 className="font-manrope text-white text-center font-bold uppercase font-2xl lg:text-4xl mx-4 lg:mx-10 mt-10 animate-fade-up animate-once animate-duration-700">
        Trusted By
      </h1> */}

      <h1 className="font-montserrat font-bold text-white text-center font-2xl lg:text-4xl mx-4 lg:mx-10 mt-10"
          data-aos="fade-up"
          data-aos-delay="200">
                Trusted By
      </h1>
      <div
        className={`${
          isVertical ? "flex-col h-full" : "flex"
        } overflow-hidden bg-black relative`}
      >
        {[0, 1].map((_, i) => (
          <div
            key={i}
            className={`
            ${
              isVertical
                ? verticalDirection === "up"
                  ? "animate-marqueeVertical"
                  : "animate-marqueeVerticalReverse"
                : "animate-marquee"
            } 
            py-8 whitespace-nowrap flex
            ${isVertical ? "flex-col" : "flex-row"}
            items-center justify-around
            ${isVertical ? "min-h-full" : "min-w-full"}
          `}
            {...(i === 1 ? { "aria-hidden": "true" } : {})}
          >
            {LogoMarqueeContent.map((logo, index) => (
              <div
  key={index}
  className={`
    flex items-center justify-center
    ${isVertical ? "py-14 w-full" : "px-4"}
  `}
>
  <img
    src={logo.src}
    alt={logo.alt}
    className="
      object-contain flex-shrink-0 
      h-10 w-24
      sm:h-14 sm:w-28 
      md:h-20 md:w-36 
      lg:h-28 lg:w-40 
      xl:h-32 xl:w-48
    "
  />
</div>

            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default LogoMarquee;
