import React from "react";
import AirIndiaXDiluminati from "../assets/images/reel covers/AirIndiaXDiluminati.webp";
import ChandigarhConcertGuides from "../assets/images/reel covers/ChandigarhConcertGuides.webp";
import DiljitReelCover1 from "../assets/images/reel covers/DiljitReelCover1.webp";
import DiljitReelCover2 from "../assets/images/reel covers/DiljitReelCover2.webp";
import DiljitReelCover3 from "../assets/images/reel covers/DiljitReelCover3.webp";
import DiljitReelCoverBengaluru from "../assets/images/reel covers/DiljitReelCoverBengaluru.webp";
import DiljitReelCoverChandigarh from "../assets/images/reel covers/DiljitReelCoverChandigarh.webp";
import DiljitReelCoverIndore from "../assets/images/reel covers/DIljitReelCoverIndore.webp";
import GuwahatiConcertGuides from "../assets/images/reel covers/GuwahatiConcertGuides.webp";
import IndoreShowAfterMovie from "../assets/images/reel covers/IndoreShowAfterMovie.webp";
import WorkCard from "../components/WorkCard";

function DiluminatiTour() {
  return (
    <div className="w-full min-h-screen bg-black">
      <h1 className="font-montserrat text-left text-white font-bold text-4xl sm:text-6xl pt-28 px-4 sm:px-28">
        Diluminati Tour
      </h1>
      <p className="font-helvetica text-left text-white text-base sm:text-lg mt-3 px-4 sm:px-28">
        Exclusively managed all the Creative Posts and Hype Reels for the
        Diluminati India Tour for Saregama India
      </p>
      <p className="font-helvetica text-left text-white text-base sm:text-lg mt-3 px-4 sm:px-28">
        Curated all the billboard, newspaper and other designs for Saregama India
      </p>
      <div className="flex flex-row justify-center flex-wrap border-b-2 border-white gap-8 px-8 pt-14 pb-56">
        <WorkCard
          image={DiljitReelCover1}
          name="Diljit Dosanjh Delhi Show 1"
          onClick={() =>
            window.open("https://www.instagram.com/reel/DCjqSEszJbL", "_blank")
          }
        />
        <WorkCard
          image={DiljitReelCover2}
          name="Diljit Dosanjh Delhi Show 2"
          onClick={() => {
            window.open("https://www.instagram.com/reel/DBly7Skxz4b", "_blank");
          }}
        />
        <WorkCard
          image={DiljitReelCover3}
          name="Diljit Dosanjh Delhi Show 3"
          onClick={() => {
            window.open("https://www.instagram.com/reel/DBoND_qy2bC", "_blank");
          }}
        />
        <WorkCard
          image={DiljitReelCoverBengaluru}
          name="Diljit Dosanjh Bengaluru Show"
          onClick={() => {
            window.open("https://www.instagram.com/reel/DDL1DHGsPUt", "_blank");
          }}
        />
        <WorkCard
          image={DiljitReelCoverIndore}
          name="Diljit Dosanjh Indore Show"
          onClick={() => {
            window.open("https://www.instagram.com/reel/DDRF7B7tP37", "_blank");
          }}
        />
        <WorkCard
          image={DiljitReelCoverChandigarh}
          name="Diljit Dosanjh Chandigarh Show"
          onClick={() => {
            window.open("https://www.instagram.com/reel/DDhAWBCPMhr", "_blank");
          }}
        />
        <WorkCard
          image={IndoreShowAfterMovie}
          name="Indore Show AfterMovie"
          onClick={() => {
            window.open("https://www.instagram.com/reel/DDzBraXI9mz", "_blank");
          }}
        />
        <WorkCard
          image={GuwahatiConcertGuides}
          name="Concert Guides Guwahati"
          onClick={() => {
            window.open("https://www.instagram.com/p/DEKEFT8veAW", "_blank");
          }}
        />
        <WorkCard
          image={ChandigarhConcertGuides}
          name="Concert Guides Chandigarh"
          onClick={() => {
            window.open("https://www.instagram.com/p/DDjbvoJvb2S", "_blank");
          }}
        />
        <WorkCard
          image={AirIndiaXDiluminati}
          name="Air India X Diluminati Creative"
          onClick={() => {
            window.open("https://www.instagram.com/p/DCHKSltt79g", "_blank");
          }}
        />
      </div>
    </div>
  );
}

export default DiluminatiTour;
