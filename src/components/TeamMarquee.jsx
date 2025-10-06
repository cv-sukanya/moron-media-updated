import React from "react";

const TeamMarqueeContent = [
  "✧  The Team",
  "✧  The Team",
  "✧  The Team",
  "✧  The Team",
  "✧  The Team",
  "✧  The Team",
  "✧  The Team",
  "✧  The Team",
  "✧  The Team",
  "✧  The Team",
  "✧  The Team",
  "✧  The Team",
  "✧  The Team",
];

function TeamMarquee() {
  return (
    <div className="flex overflow-x-hidden border-b-2 border-white">
      {[0, 1].map((_, i) => (
        <div
          key={i}
          className="py-4 animate-marquee whitespace-nowrap"
          {...(i === 1 ? { "aria-hidden": "true" } : {})}
        >
          {TeamMarqueeContent.map((text, index) => (
            <span
              key={index}
              className="text-white text-lg lg:text-xl font-manrope font-semibold uppercase mx-4"
            >
              {text}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default TeamMarquee;
