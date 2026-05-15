import React, { useState } from "react";

function WorkCard({ name, image, link, links, onClick }) {
  const [hover, setHover] = useState(false);

  const hasMultipleLinks = links?.length > 0;

  return (
    <div
      className="relative overflow-hidden rounded-lg group cursor-pointer 
                w-full sm:w-[45%] lg:w-[30%] flex flex-col items-left gap-3 cursor-pointer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={!hasMultipleLinks ? onClick : undefined}
    >
      {/* Image */}
      {/* <img
        src={image}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      /> */}

      <div className="w-full h-[450px] overflow-hidden rounded-lg">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Title default */}
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4">
        <h3 className="text-white text-lg font-medium">{name}</h3>
      </div>

      {/* Multi-link hover overlay */}
      {hasMultipleLinks && (
        <div
          className={`absolute inset-0 bg-black/85 flex flex-col justify-center items-center px-5 transition-all duration-300 ${
            hover ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {/* <h3 className="text-white text-xl font-semibold mb-5 text-center">
            {name}
          </h3> */}

          <div className="flex flex-col gap-3 w-full">
            {links.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white text-white px-4 py-2 rounded-full text-center hover:bg-white hover:text-black transition-all"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default WorkCard;
