import React from "react";
import AnanyaPandey from "../assets/images/reel covers/AnanyaPandey.webp";
import KritiSanon from "../assets/images/reel covers/KritiSanon.webp";
import Orry from "../assets/images/reel covers/Orry.webp";
import RajkumarRao from "../assets/images/reel covers/RajkumarRao.webp";
import WorkCard from "../components/WorkCard";

function WeWomenAsia() {
  return (
    <div className="w-full min-h-screen bg-black">
      <h1 className="font-manrope text-left text-white font-bold text-4xl sm:text-6xl pt-28 px-4 sm:px-28">
        We the Women Asia
      </h1>
      <p className="font-manrope text-left text-white text-base sm:text-lg mt-3 px-4 sm:px-28">
        *More than 100 reels were given and 150+ creatives in 12 hrs of the
        event for Barkha Dutt*
      </p>
      <div className="flex flex-row justify-center flex-wrap border-b-2 border-white gap-8 px-8 pt-14 pb-56">
        <WorkCard
          image={Orry}
          name="We the women - Orry"
          onClick={() => {
            window.open("https://www.instagram.com/reel/DC_bbVPPTNv", "_blank");
          }}
        />
        <WorkCard
          image={KritiSanon}
          name="We the women - Kriti Sanon"
          onClick={() => {
            window.open("https://www.instagram.com/reel/DC_BmwaqPME", "_blank");
          }}
        />
        <WorkCard
          image={RajkumarRao}
          name="we the women - Rajkumar Rao"
          onClick={() => {
            window.open("https://www.instagram.com/reel/DC4S3O5P_YA", "_blank");
          }}
        />
        <WorkCard
          image={AnanyaPandey}
          name="We the women - Ananya Pandey"
          onClick={() => {
            window.open("https://www.instagram.com/reel/DC3aL4Gu6ne", "_blank`");
          }}
        />
      </div>
    </div>
  );
}

export default WeWomenAsia;
