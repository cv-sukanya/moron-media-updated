import React from "react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

function Footer() {
  return (
    <footer
      id="footer"
      className="w-full flex flex-col lg:flex-row lg:h-2/3 bg-black border-b-2 border-white"
    >
      <div className="w-full lg:w-1/2 p-8 lg:p-16 lg:ml-20 flex flex-col items-start justify-center font-montserrat font-bold text-white">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#8e2b10] via-[#e55428] to-[#8e2b10] text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          morons
        </h1>
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#8e2b10] via-[#e55428] to-[#8e2b10] text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          minting
        </h1>
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#8e2b10] via-[#e55428] to-[#8e2b10] text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          media
        </h1>

        <h1 className="mt-6 lg:mt-10 text-base sm:text-lg md:text-xl lg:text-2xl relative group hover:cursor-pointer">
          <a
            href="mailto:contact@moronmedia.in"
            className="transition-colors duration-300 hover:text-zinc-500"
          >
            Let's talk &gt;&gt;&gt;
          </a>
          {/* <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-zinc-500 transition-all duration-300 group-hover:w-full"></span> */}
        </h1>
      </div>
      <div className="w-full lg:w-1/2 p-8 lg:p-16 flex flex-col items-start justify-center font-helvetica font-bold text-white">
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl">
            Contact
          </h1>
          <h1 className="mt-2 font-normal text-sm sm:text-base md:text-lg lg:text-xl relative group hover:cursor-pointer">
            <a
              href="mailto:contact@moronmedia.in"
              className="transition-colors duration-300 hover:text-zinc-500"
            >
              contact@moronmedia.in
            </a>
            {/* <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-zinc-500 transition-all duration-300 group-hover:w-full"></span> */}
          </h1>
        </div>
        <div className="w-full flex gap-5 mt-10">
          <a
            href="https://www.instagram.com/moron.media/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-10 h-10 rounded-[0.5vw] border-2 border-white flex items-start justify-center hover:bg-white hover:text-black transition-all duration-300">
              <FaInstagram className="mt-2 text-xl" />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/company/moron-media/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-10 h-10 rounded-[0.5vw] border-2 border-white flex items-start justify-center hover:bg-white hover:text-black transition-all duration-300">
              <FaLinkedinIn className="mt-2 text-xl" />
            </div>
          </a>
          <a href="mailto:contact@moronmedia.in">
            <div className="w-10 h-10 rounded-[0.5vw] border-2 border-white flex items-start justify-center hover:bg-white hover:text-black transition-all duration-300">
              <IoMailOutline className="mt-2 text-xl" />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
