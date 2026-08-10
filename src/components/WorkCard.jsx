import React, { useState } from "react";

function WorkCard({ name, image, link, links, onClick }) {
  // const [hover, setHover] = useState(false);

  const hasMultipleLinks = links?.length > 0;

  return (
    <div
      className="relative overflow-hidden rounded-2xl group cursor-pointer
      w-full sm:w-[45%] lg:w-[30%] aspect-[50/69]"
      // onMouseEnter={() => setHover(true)}
      // onMouseLeave={() => setHover(false)}
      onClick={!hasMultipleLinks ? onClick : undefined}
    >
      {/* Image */}
      <img
        src={image}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

      {/* Title */}
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4">
        <h3 className="text-white text-lg font-medium">{name}</h3>
      </div>

      {/* Labels Overlay */}
      <div
        className={`absolute inset-0 bg-black/70 flex flex-col justify-center items-center px-5 z-20 transition-all duration-300
  ${
    hasMultipleLinks
      ? "opacity-100 lg:opacity-0 lg:group-hover:opacity-100"
      : "opacity-0"
  }`}
      >
        <div className="flex flex-col gap-3 w-full">
          {hasMultipleLinks &&
            links.map((item, index) => (
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

      {/* Multi-link hover overlay */}
      {/* {hasMultipleLinks && (
        <div
          className={`absolute inset-0 bg-black/85 flex flex-col justify-center items-center px-5 z-20 transition-all duration-300 ${
            hover ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
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
      )} */}
    </div>
  );
}

export default WorkCard;
