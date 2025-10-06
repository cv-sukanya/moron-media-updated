import React from "react";

function InnerCard({ image, name, link }) {
  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <div
      className="w-full sm:w-[45%] lg:w-[28%] cursor-pointer hover:opacity-90 transition-opacity"
      onClick={handleClick}
    >
      <div className="flex flex-col rounded-[2vw] overflow-hidden aspect-square">
        <img src={image} alt={name} className="w-full h-2/3 object-cover" />
        <div className="bg-white px-6 border-t border-black h-16 flex items-center">
          <h1 className="text-black font-manrope font-bold text-2xl">{name}</h1>
        </div>
      </div>
    </div>
  );
}

export default InnerCard;
