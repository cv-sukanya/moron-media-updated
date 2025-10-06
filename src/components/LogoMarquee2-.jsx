import React from "react";
import Acetech from "../assets/images/logos/Acetech.svg";
import MarutiSuzuki from "../assets/images/logos/MarutiSuzuki.webp";
import Spotify from "../assets/images/logos/Spotify.webp";
import Samsung from "../assets/images/logos/Samsung.webp";
import TribeVibe from "../assets/images/logos/TribeVibe.webp";
import AMD from "../assets/images/logos/AMD.webp";
import Lakme from "../assets/images/logos/Lakme.webp";
import Kapil from "../assets/images/logos/Kapil.webp";
// import SortMyScene from "../assets/images/logos/SortMyScene.webp";
import AngelOne from "../assets/images/logos/angel-one.png";
import G20 from "../assets/images/logos/g20-tourist.png"

const LogoMarqueeContent = [
  { src: Acetech, alt: "Ace" },
  { src: MarutiSuzuki, alt: "MarutiSuzuki" },
  { src: Spotify, alt: "Spotify" },
  { src: Samsung, alt: "Samsung" },
  { src: TribeVibe, alt: "TribeVibe" },
  { src: AMD, alt: "AMD" },
  { src: Lakme, alt: "Lakme" },
  { src: Kapil, alt: "Kapil Sharma Show" },
  { src: AngelOne, alt: "Angel One"},
  { src: G20, alt: "G20 Tourist"}
  // { src: SortMyScene, alt: "SortMyScene" },
];

function LogoMarquee2({ direction = "horizontal", verticalDirection = "up" }) {
  const isVertical = direction === "vertical";

  return (
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
                ${isVertical ? "py-14" : "px-1 sm:px-0 md:px-8"}
                ${isVertical ? "w-full" : "flex-1"}
                sm:w-1/2 md:w-1/4 lg:w-1/12
              `}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="object-contain flex-shrink-0 h-10 w-10 sm:h-16 sm:w-16 md:h-20 md:w-40 lg:h-24 lg:w-24"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default LogoMarquee2;
