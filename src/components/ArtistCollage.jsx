import React, { useEffect, useRef } from "react";
// import { useState } from "react";
import gsap from "gsap";
import AOS from "aos";
import "aos/dist/aos.css";


// Image imports
import Artist1 from "../assets/images/artist.png";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const bannerImage = [Artist1];

function ArtistCollage() {
  const count1 = useRef();
  const count2 = useRef();
  const count3 = useRef();
  const count4 = useRef();

  useEffect(() => {
  AOS.init();

  const counts = [
    { ref: count1, end: 120, suffix: "+" },
    { ref: count2, end: 100, suffix: "+" },
    { ref: count3, end: 30, suffix: "+" },
    { ref: count4, end: 200, suffix: "M+" }
  ];

  counts.forEach((item, i) => {
    let counterObj = { val: 0 };

    ScrollTrigger.create({
      trigger: item.ref.current,
      start: "top 80%",
      once: true, 
      onEnter: () => {
        gsap.to(counterObj, {
          val: item.end,
          duration: 2,
          ease: "power1.out",
          onUpdate: () => {
            if (item.ref.current) {
              const val = Math.floor(counterObj.val);
              item.ref.current.textContent = val + item.suffix;
            }
          },
        });
      },
    });
  });
}, []);



  return (
    <div className="flex flex-col lg:flex-row items-stretch w-full px-4 sm:px-10 gap-6 lg:gap-0">
      {/* Counter */}
      <div className="bg-black w-full lg:w-1/2 py-10 px-4 sm:px-16 flex justify-center items-center">
        <div className="relative grid grid-cols-2 grid-rows-2 gap-12 sm:gap-16 text-center text-white max-w-4xl w-full">
        {/* Vertical Line */}
        <div className="absolute inset-0 flex justify-center">
          <div className="w-px h-full bg-gradient-to-b from-[#8e2b10] via-[#e55428] to-[#8e2b10]"></div>
        </div>

        {/* Horizontal Line */}
        <div className="absolute inset-0 flex items-center">
          <div className="h-px w-full bg-gradient-to-r from-[#8e2b10] via-[#e55428] to-[#8e2b10]"></div>
        </div>

        {/* Top Left */}
        <div className="flex flex-col items-center">
          <h2
            ref={count1}
            className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#8e2b10] via-[#e55428] to-[#8e2b10]"
          >
            0
          </h2>
          <p className="text-sm sm:text-base mt-2 font-semibold text-center text-white">projects</p>
        </div>

        {/* Top Right */}
        <div className="flex flex-col items-center">
          <h2
            ref={count2}
            className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#8e2b10] via-[#e55428] to-[#8e2b10]"
          >
            0
          </h2>
          <p className="text-sm sm:text-base mt-2 font-semibold text-center text-white">concerts</p>
        </div>

        {/* Bottom Left */}
        <div className="flex flex-col items-center">
          <h2
            ref={count3}
            className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#8e2b10] via-[#e55428] to-[#8e2b10]"
          >
            0
          </h2>
          <p className="text-sm sm:text-base mt-2 font-semibold text-center text-white">brands</p>
        </div>

        {/* Bottom Right */}
        <div className="flex flex-col items-center">
          <h2
            ref={count4}
            className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#8e2b10] via-[#e55428] to-[#8e2b10]"
          >
            0
          </h2>
          <p className="text-sm sm:text-base mt-2 font-semibold text-center text-white">views touched</p>
        </div>
      </div>

    </div>


      {/* Collage */}
        <div className="w-full px-4 pt-2 pb-0 sm:pt-8 sm:pb-8">
          <img
            src={bannerImage}
            alt="Artist Banner"
            className="w-full h-auto object-cover mt-10 sm:mt-10"
          />
        </div>
    </div>
  );
}

export default ArtistCollage;
