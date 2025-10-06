import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../assets/css/BrandName.css";

const BrandName = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const letters = textRef.current.querySelectorAll("tspan");

    gsap.set(letters, { stroke: "#e55428", strokeWidth: 1, fill: "none" });

    gsap.fromTo(
      ".tagline-text",
      {
        x: -200,         // Start 200px to the left
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        delay: 2          // Delay after brand name animation
      }
    );




    letters.forEach((letter, i) => {
      const tl = gsap.timeline({ delay: i * 0.2 });

      tl.to(letter, {
        duration: 0.5,
        strokeDasharray: 300,
        strokeDashoffset: 300,
        stroke: "#e55428",
        fill: "none",
      })
        .to(
          letter,
          {
            duration: 0.5,
            strokeDashoffset: 0,
            ease: "power2.out",
          },
          "<"
        )
        .to(
          letter,
          {
            duration: 0.5,
            fill: "url(#text-gradient)", // 👈 Fill with gradient
            stroke: "none",
          },
          "+=0.3"
        );
    });
  }, []);

  return (
    <section className="brand-name-section">
      <svg
        viewBox="0 0 1200 250"
        className="brand-svg"
        xmlns="http://www.w3.org/2000/svg"
      >
        
        <defs>
          {/* Gradient definition */}
          <linearGradient id="text-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8e2b10" />
            <stop offset="30%" stopColor="#e55428" />
            <stop offset="60%" stopColor="#e55428" />
            <stop offset="100%" stopColor="#8e2b10" /> 
          </linearGradient>

          {/* Tagline gradient (left to right) */}
          <linearGradient id="tagline-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#b3b3b3ff" />
            <stop offset="30%" stopColor="#f4f4f4ff" />
            <stop offset="60%" stopColor="#f4f4f4ff" />
            <stop offset="100%" stopColor="#b3b3b3ff" />
          </linearGradient>
        </defs>


        {/* Brand Name */}
        <text
          ref={textRef}
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="Akira, sans-serif"
          fontSize="100"
          className="brand-text"
        >
          {Array.from("MORON MEDIA").map((letter, i) => (
            <tspan key={i}>{letter}</tspan>
          ))}
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
