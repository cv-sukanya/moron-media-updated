import React from "react";

function WorkCard({ name, image, onClick }) {
  return (
    <div
      onClick={onClick}
      className="w-full sm:w-[40%] lg:w-[28%] flex flex-col items-left gap-3 cursor-pointer"
    >
      
      <div
        className="w-full aspect-square rounded-[1vw] flex items-end justify-center overflow-hidden 
        bg-white/10 backdrop-blur-md 
        transition-all duration-500"
      >
        <img src={image} className="w-full h-full object-cover transition-all duration-500" alt={name} />
      </div>
      <h1 className="text-white font-helvetica font-semibold text-lg sm:text-xl lg:text-xl text-center">
        {name}
      </h1>
    </div>
  );
}

export default WorkCard;
