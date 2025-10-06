import React from "react";
import AceTech1 from "../assets/images/reel covers/AceTech1.webp"
import AceTech2 from "../assets/images/reel covers/AceTech2.webp"
import AceTech3 from "../assets/images/reel covers/AceTech3.webp"
import WorkCard from "../components/WorkCard";



function AceTech() {
  return (
    <div className="w-full min-h-screen bg-black">
      <div className="flex flex-row justify-center flex-wrap border-b-2 border-white gap-8 px-8 pt-28 pb-56">
        <WorkCard
          image={AceTech1}
          name="Ace Tech Delhi Show Live Edit"
          onClick={() => {
            window.open("https://www.instagram.com/reel/DDmjt2FIIiP", "_blank");
          }}
        />
        <WorkCard
          image={AceTech2}
          name="Ace Tech Delhi Show Live Edit"
          onClick={() => {
            window.open("https://www.instagram.com/reel/DDm3LGeTFwW", "_blank");
          }}
        />
        <WorkCard
          image={AceTech3}
          name="Ace Tech Delhi Show Live Edit"
          onClick={() => {
            window.open("https://www.instagram.com/reel/DDuN9iTI_6E", "_blank");
          }}
        />
      </div>
    </div>
  );
}

export default AceTech;
