import React from "react";
import RedLorryReelCover1 from "../assets/images/reel covers/RedLorryReelCover1.webp";
import RedLorryReelCover2 from "../assets/images/reel covers/RedLorryReelCover2.webp";
import RedLorryReelCover3 from "../assets/images/reel covers/RedLorryReelCover3.webp";
import RedLorryReelCover4 from "../assets/images/reel covers/RedLorryReelCover4.webp";

function RedLorry() {
  return (
    <div className="w-full min-h-screen bg-black">
      <h1 className="font-manrope text-left text-white font-bold text-4xl sm:text-6xl pt-28 px-4 sm:px-28">
        Red Lorry Film Festival
      </h1>
      <p className="font-manrope text-left text-white font-semibold text-base sm:text-lg mt-3 px-4 sm:px-28">
        Red Lorry Film Festival - Moron Media was the official content agency
        for all the live edits in Mumbai and Hyderabad
      </p>
      <div className="flex flex-row justify-center flex-wrap border-b-2 border-white gap-8 px-8 pt-14 pb-56">
        <div
          onClick={() =>
            window.open("https://www.instagram.com/reel/DHeKn6-N7Jf/", "_blank")
          }
          className="w-full sm:w-[40%] lg:w-[28%] flex flex-col items-left gap-3 cursor-pointer"
        >
          <h1 className="text-white font-manrope font-bold text-lg sm:text-xl lg:text-2xl">
            Amir Khan X RLFF - Live Edit
          </h1>
          <div
            className="w-full rounded-2xl flex items-end justify-center overflow-hidden 
        bg-white/10 backdrop-blur-md shadow-[0_6px_16px_rgba(255,255,255,0.25)] 
        hover:shadow-[0_10px_24px_rgba(255,255,255,0.25)] transition-shadow duration-300"
          >
            <img
              src={RedLorryReelCover1}
              className="w-full h-full object-cover"
              alt="BackstageLollapalooza"
            />
          </div>
        </div>

        <div
          onClick={() =>
            window.open("https://www.instagram.com/reel/DIN1hjkyP5G/", "_blank")
          }
          className="w-full sm:w-[40%] lg:w-[28%] flex flex-col items-left gap-3 cursor-pointer"
        >
          <h1 className="text-white font-manrope font-bold text-lg sm:text-xl lg:text-2xl">
            RLFF Official Aftermovie'25
          </h1>
          <div
            className="w-full rounded-2xl flex items-end justify-center overflow-hidden 
        bg-white/10 backdrop-blur-md shadow-[0_6px_16px_rgba(255,255,255,0.25)] 
        hover:shadow-[0_10px_24px_rgba(255,255,255,0.25)] transition-shadow duration-300"
          >
            <img
              src={RedLorryReelCover2}
              className="w-full h-full object-cover"
              alt="BackstageLollapalooza"
            />
          </div>
        </div>

        <div
          onClick={() =>
            window.open("https://www.instagram.com/reel/DHiJR5YNB0w/", "_blank")
          }
          className="w-full sm:w-[40%] lg:w-[28%] flex flex-col items-left gap-3 cursor-pointer"
        >
          <h1 className="text-white font-manrope font-bold text-lg sm:text-xl lg:text-2xl">
            Concept Based - Live Edits
          </h1>
          <div
            className="w-full rounded-2xl flex items-end justify-center overflow-hidden 
        bg-white/10 backdrop-blur-md shadow-[0_6px_16px_rgba(255,255,255,0.25)] 
        hover:shadow-[0_10px_24px_rgba(255,255,255,0.25)] transition-shadow duration-300"
          >
            <img
              src={RedLorryReelCover3}
              className="w-full h-full object-cover"
              alt="BackstageLollapalooza"
            />
          </div>
        </div>

        <div
          onClick={() =>
            window.open("https://www.instagram.com/reel/DHiXf8lt7M4/", "_blank")
          }
          className="w-full sm:w-[40%] lg:w-[28%] flex flex-col items-left gap-3 cursor-pointer"
        >
          <h1 className="text-white font-manrope font-bold text-lg sm:text-xl lg:text-2xl">
            Masterclasses at RLFF - Live Edits
          </h1>
          <div
            className="w-full rounded-2xl flex items-end justify-center overflow-hidden 
        bg-white/10 backdrop-blur-md shadow-[0_6px_16px_rgba(255,255,255,0.25)] 
        hover:shadow-[0_10px_24px_rgba(255,255,255,0.25)] transition-shadow duration-300"
          >
            <img
              src={RedLorryReelCover4}
              className="w-full h-full object-cover"
              alt="BackstageLollapalooza"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RedLorry;
