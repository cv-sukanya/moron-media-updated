import React from "react";
import ArtistCard from "../components/ArtistCard";
import PVRxKareena from "../assets/images/reel covers/PVRxKareena.webp"
import SaraAliKhan from "../assets/images/reel covers/SaraAliKhan.webp"
import UrfiJaved from "../assets/images/reel covers/UrfiJaved.webp"
import VijayVerma from "../assets/images/reel covers/VijayVerma.webp"

function Interviews() {
  return (
    <div className="w-full min-h-screen bg-black">
      <div className="flex flex-row justify-center flex-wrap border-b-2 border-white gap-8 px-8 pt-28 pb-56">
        <ArtistCard
          image={PVRxKareena}
          name="PVR X Kareena Kapoor Khan"
          link="https://youtu.be/KVOyMXdv8_E?"
        />
        <ArtistCard
          image={SaraAliKhan}
          name="Sara Ali Khan"
          link="https://youtu.be/0AFNhKNR__U"
        />
        <ArtistCard
          image={UrfiJaved}
          name="Uorfi Javed"
          link="https://youtu.be/QcqVcql13NQ"
        />
        <ArtistCard
          image={VijayVerma}
          name="Vijay Verma"
          link="https://youtu.be/_4xg6CFHZNo"
        />
      </div>
    </div>
  );
}

export default Interviews;
