import React from "react";
import FINK from "../assets/images/reel covers/FINK.webp";
import FINK2 from "../assets/images/reel covers/FINK2.webp";
import WorkCard from "../components/WorkCard";

const Fink = () => {
  return (
    <div className="w-full min-h-screen bg-black">
      <h1 className="font-manrope text-left text-white font-bold text-4xl sm:text-6xl pt-28 px-4 sm:px-28">
        FINK | India Tour: BookMyShow Live
      </h1>
      <div className="flex flex-row justify-center flex-wrap border-b-2 border-white gap-8 px-8 pt-14 pb-56">
        <WorkCard
          image={FINK}
          name="FINK | India Tour Mumbai | Delhi | Bangalore"
          onClick={() =>
            window.open("https://www.instagram.com/p/DKJ7h1lsDBp/", "_blank")
          }
        />
        <WorkCard
          image={FINK2}
          name="FINK | Mumbai"
          onClick={() =>
            window.open("https://www.instagram.com/p/DKJ8SqwsyIa/", "_blank")
          }
        />
      </div>
    </div>
  );
};

export default Fink;
