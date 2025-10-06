import React from "react";
import BonkersCorner1 from "../assets/images/reel covers/BonkersCorner1.webp";
import BonkersCorner2 from "../assets/images/reel covers/BonkersCorner2.webp";
import BonkersCorner3 from "../assets/images/reel covers/BonkersCorner3.webp";
import BonkersCorner4 from "../assets/images/reel covers/BonkersCorner4.webp";
import WorkCard from "../components/WorkCard";

function BonkersCorner() {
  return (
    <div className="w-full min-h-screen bg-black">
      <div className="flex flex-row justify-center flex-wrap border-b-2 border-white gap-8 px-8 pt-28 pb-56">
        <WorkCard
          image={BonkersCorner1}
          name="Bonkers Corner - Smiley Edition"
          onClick={() => {
            window.open("https://www.instagram.com/p/DCCIHyjT3II", "_blank");
          }}
        />
        <WorkCard
          image={BonkersCorner2}
          name="Bonkers Corner - Playboy Edition"
          onClick={() => {
            window.open("https://www.instagram.com/reel/C97p3pPsrbu", "_blank");
          }}
        />
        <WorkCard
          image={BonkersCorner3}
          name="Bonkers Corner - Hello Kitty Edition"
          onClick={() => {
            window.open("https://www.instagram.com/reel/C97pqwwMuoN", "_blank");
          }}
        />
        <WorkCard
          image={BonkersCorner4}
          name="Bonkers Corner - Ace Edition"
          onClick={() => {
            window.open("https://www.instagram.com/reel/CyID4rWr9l1", "_blank");
          }}
        />
      </div>
    </div>
  );
}

export default BonkersCorner;
