import React from "react";

function ArtistCard({ image, name, link }) {
  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <div
      className="w-full sm:w-[45%] lg:w-[20%] cursor-pointer 
      "
      onClick={handleClick}
    >
      <div className="flex flex-col rounded-[0.5vw] overflow-hidden">
        <img src={image} alt={name} className="h-2/3 object-cover opacity-80 hover:opacity-100 transition-opacity" />
        <div className="bg-white/5 p-6 border-t border-black h-1/3">
          <h1 className="text-white font-helvetica font-semibold text-xl text-center">{name}</h1>
        </div>
      </div>
    </div>
  );
}

export default ArtistCard;
