import React from "react";
import Acetech from "../assets/images/logos/Acetech.webp";
import MarutiSuzuki from "../assets/images/logos/MarutiSuzuki.webp";
import Spotify from "../assets/images/logos/Spotify.webp";
import Samsung from "../assets/images/logos/Samsung.webp";
import TribeVibe from "../assets/images/logos/TribeVibe.webp";
import AMD from "../assets/images/logos/AMD.webp";
import Lakme from "../assets/images/logos/Lakme.webp";
import Kapil from "../assets/images/logos/Kapil.webp";
// import SortMyScene from "../assets/images/logos/SortMyScene.webp";
import AngelOne from "../assets/images/logos/angel-one.webp";
import G20 from "../assets/images/logos/g20-tourist.webp"

const logos = [
  Acetech,
  MarutiSuzuki,
  Spotify,
  Samsung,
  TribeVibe,
  AMD,
  Lakme,
  Kapil,
  AngelOne,
  G20,
];

function LogoMarquee2() {
  // Duplicate logos for seamless infinite scrolling
  const allLogos = [...logos, ...logos];

  return (
    <div className="bg-black py-10 overflow-hidden">
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

export default LogoMarquee2;
