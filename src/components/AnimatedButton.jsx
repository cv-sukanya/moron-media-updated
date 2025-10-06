import React from 'react';

function AnimatedButton({ text, href }) {
  return (
    <a
      href={href}
      className="relative inline-flex items-center justify-center w-full sm:w-auto px-3 sm:px-5 py-2 sm:py-3 font-manrope font-bold rounded-full bg-white transform transition-transform duration-200 hover:scale-90"
    >
      <span className="relative w-full text-sm sm:text-base text-center sm:text-left text-black uppercase">
        {text}
      </span>
      <span className="absolute inset-0 border-2 border-black rounded-full"></span>
    </a>
  );
}

export default AnimatedButton;