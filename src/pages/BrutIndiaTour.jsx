import React from "react";
import ArtistCard from "../components/ArtistCard";
import BrutTour1 from "../assets/images/reel covers/BrutTour1.webp"
import BrutTour2 from "../assets/images/reel covers/BrutTour2.webp"
import BrutTour3 from "../assets/images/reel covers/BrutTour3.webp"
import BrutTour4 from "../assets/images/reel covers/BrutTour4.webp"

function BrutIndiaTour() {
  return (
    <div className="w-full min-h-screen bg-black">
      <div className="flex flex-row justify-center flex-wrap border-b-2 border-white gap-8 px-8 pt-28 pb-56">
        <ArtistCard
          image={BrutTour1}
          name="Brut India House Tour: Karishma Tanna"
          link="https://youtu.be/Kw6iNpNnx7U"
        />
        <ArtistCard
          image={BrutTour2}
          name="Brut India House Tour: Shweta Tripathi"
          link="https://youtu.be/jkyT42MTbX0"
        />
        <ArtistCard
          image={BrutTour3}
          name="Brut India House Tour: Avinash Tiwary"
          link="https://youtu.be/wuTZFAA9Q5Y"
        />
        <ArtistCard
          image={BrutTour4}
          name="Brut India House Tour: Rajeev Khandelwal"
          link="https://youtu.be/U3Q-9dxIC7Y"
        />
      </div>
    </div>
  );
}

export default BrutIndiaTour;
