import React from "react";
import "../assets/css/BrandName.css";

const BrandName = () => {
  return (
    <section className="brand-name-section">
      <svg
        viewBox="0 0 1200 250"
        className="brand-svg"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Brand gradient */}
          <linearGradient
            id="text-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#8e2b10" />
            <stop offset="30%" stopColor="#e55428" />
            <stop offset="60%" stopColor="#e55428" />
            <stop offset="100%" stopColor="#8e2b10" />
          </linearGradient>

          {/* Tagline gradient */}
          <linearGradient
            id="tagline-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#b3b3b3ff" />
            <stop offset="30%" stopColor="#f4f4f4ff" />
            <stop offset="60%" stopColor="#f4f4f4ff" />
            <stop offset="100%" stopColor="#b3b3b3ff" />
          </linearGradient>
        </defs>

        {/* Brand Name */}
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="Akira, sans-serif"
          fontSize="100"
          fill="url(#text-gradient)"
          className="brand-text"
        >
          MORON MEDIA
        </text>

        {/* Tagline */}
        <text
          x="50%"
          y="70%"
          textAnchor="middle"
          fontFamily="Helvetica, sans-serif"
          fontStyle="italic"
          fontSize="18"
          fill="url(#tagline-gradient)"
          className="tagline-text"
        >
          A Creative Production House
        </text>
      </svg>
    </section>
  );
};

export default BrandName;