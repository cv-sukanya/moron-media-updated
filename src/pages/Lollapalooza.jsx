import React from "react";
import BackstageLollapalooza from "../assets/images/reel covers/Lollapalooza.webp";
import LollaReelCover1 from "../assets/images/reel covers/LollaReelCover1.webp";
import LollaReelCover2 from "../assets/images/reel covers/LollaReelCover2.webp";
import LollaReelCover3 from "../assets/images/reel covers/LollaReelCover3.webp";

const Lollapalooza = () => {
  return (
    <div className="w-full min-h-screen bg-black">
      <h1 className="font-manrope text-left text-white font-bold text-4xl sm:text-6xl pt-28 px-4 sm:px-28">
        Backstage @Lollapalooza India
      </h1>
      <p className="font-manrope text-left text-white font-semibold text-base sm:text-lg mt-3 px-4 sm:px-28">
        Produced all artist interviews for BookMyShow at Lollapalooza India'25{" "}
      </p>
      <div className="flex flex-row justify-center flex-wrap border-b-2 border-white gap-8 px-8 pt-14 pb-56">
        <div
          onClick={() =>
            window.open("https://www.instagram.com/reel/DIBX04aMjO-/", "_blank")
          }
          className="w-full sm:w-[40%] lg:w-[28%] flex flex-col items-left gap-3 cursor-pointer"
        >
          <h1 className="text-white font-manrope font-bold text-lg sm:text-xl lg:text-2xl">
            Backstage @Lollapalooza India
          </h1>
          <div
            className="w-full rounded-2xl flex items-end justify-center overflow-hidden 
        bg-white/10 backdrop-blur-md shadow-[0_6px_16px_rgba(255,255,255,0.25)] 
        hover:shadow-[0_10px_24px_rgba(255,255,255,0.25)] transition-shadow duration-300"
          >
            <img
              src={BackstageLollapalooza}
              className="w-full h-full object-cover"
              alt="BackstageLollapalooza"
            />
          </div>
        </div>

        <div
          onClick={() =>
            window.open("https://www.instagram.com/reel/DIJo4LJMLjz/", "_blank")
          }
          className="w-full sm:w-[40%] lg:w-[28%] flex flex-col items-left gap-3 cursor-pointer"
        >
          <h1 className="text-white font-manrope font-bold text-lg sm:text-xl lg:text-2xl">
            Aurora X Backstage @ Lollapalooza India
          </h1>
          <div
            className="w-full rounded-2xl flex items-end justify-center overflow-hidden 
        bg-white/10 backdrop-blur-md shadow-[0_6px_16px_rgba(255,255,255,0.25)] 
        hover:shadow-[0_10px_24px_rgba(255,255,255,0.25)] transition-shadow duration-300"
          >
            <img
              src={LollaReelCover1}
              className="w-full h-full object-cover"
              alt="LollaReelCover1"
            />
          </div>
        </div>
        <div
          onClick={() =>
            window.open("https://www.instagram.com/reel/DITcBscMCHD/", "_blank")
          }
          className="w-full sm:w-[40%] lg:w-[28%] flex flex-col items-left gap-3 cursor-pointer"
        >
          <h1 className="text-white font-manrope font-bold text-lg sm:text-xl lg:text-2xl">
            Cory Wang X Backstage @ Lollapalooza India
          </h1>
          <div
            className="w-full rounded-2xl flex items-end justify-center overflow-hidden 
        bg-white/10 backdrop-blur-md shadow-[0_6px_16px_rgba(255,255,255,0.25)] 
        hover:shadow-[0_10px_24px_rgba(255,255,255,0.25)] transition-shadow duration-300"
          >
            <img
              src={LollaReelCover2}
              className="w-full h-full object-cover"
              alt="LollaReelCover2"
            />
          </div>
        </div>
        <div
          onClick={() =>
            window.open("https://www.instagram.com/reel/DIdhuHZs5fn/", "_blank")
          }
          className="w-full sm:w-[40%] lg:w-[28%] flex flex-col items-left gap-3 cursor-pointer"
        >
          <h1 className="text-white font-manrope font-bold text-lg sm:text-xl lg:text-2xl">
            John Summit X Backstage @ Lollapalooza India
          </h1>
          <div
            className="w-full rounded-2xl flex items-end justify-center overflow-hidden 
        bg-white/10 backdrop-blur-md shadow-[0_6px_16px_rgba(255,255,255,0.25)] 
        hover:shadow-[0_10px_24px_rgba(255,255,255,0.25)] transition-shadow duration-300"
          >
            <img
              src={LollaReelCover3}
              className="w-full h-full object-cover"
              alt="LollaReelCover3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lollapalooza;
