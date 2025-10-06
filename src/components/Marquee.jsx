import React from "react";

const MarqueeContent = [
  "✧  Strategy",
  "✧  Media Planning",
  "✧  Social Media",
  "✧  Advertising",
  "✧  Storytelling",
  "✧  Branding",
  "✧  Marketing",
  "✧  PR",
  "✧  Video Production",
  "✧  Event Coverage",
  "✧  Trends",
  "✧  Content",
  "✧  Engagement",
  "✧  Insights",
  "✧  Analytics",
];

function Marquee() {
  return (
    <div className="flex overflow-x-hidden border-b-2 border-white">
      {[0, 1].map((_, i) => (
        <div
          key={i}
          className="py-8 animate-marquee whitespace-nowrap"
          {...(i === 1 ? { "aria-hidden": "true" } : {})}
        >
          {MarqueeContent.map((text, index) => (
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

export default Marquee;
