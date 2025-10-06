import { useEffect, useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
  };
  useEffect(() => {
    console.log("menu toggled", isMenuOpen);
    // alert("Menu toggled", isMenuOpen);
  }, [isMenuOpen]);
  return (
    <div className="font-menda bg-black z-50 pb-5 fixed w-full text-white border-b-2 border-white">
      <nav className="flex items-center justify-center w-[95%] mx-auto relative lg:p-0 p-5">
        <div className="lg:hidden absolute left-0 mt-4 w-full">
          <div className="flex justify-between items-center gap-1">
            <div className="">
              <span className="text-sm font-akira">MORON MEDIA</span>
            </div>
            <div className="lg:hidden">
              {/* open menu icon */}
              <IoMenu
                className="text-3xl  cursor-pointer z-50"
                onClick={onToggleMenu}
              />
              {/* {isMenuOpen ? (
                  <IoClose className="text-3xl  cursor-pointer z-50" onClick={onToggleMenu} />
                ) : (
                  <IoMenu className="text-3xl  cursor-pointer" onClick={onToggleMenu} />
                )} */}
            </div>
          </div>
        </div>
        <div
          className={`lg:static fixed ${
            !isMenuOpen ? "" : "bg-black"
          } lg:min-h-fit min-h-[100vh] 
            ${isMenuOpen ? "top-0" : "-top-[-200%]"}
            left-0 lg:w-full w-full items-center justify-center px-5
            transition-all duration-300 ease-in
            z-10`}
        >
          {/* close menu icon */}
          <div className=" lg:hidden flex justify-end mt-5">
            <IoClose
              className="text-3xl  cursor-pointer z-50"
              onClick={onToggleMenu}
            />
          </div>
          <ul
            className={`flex lg:flex-row flex-col lg:justify-evenly gap-16 lg:gap-0 lg:items-center items-center w-full lg:font-helvetica lg:font-bold font-helvetica ${
              isMenuOpen ? "text-xl" : "text-lg"
            } lg:text-xl lg:tracking-tighter mt-5`}
          >
            {/* Modified Home link with lg:hidden class */}
            <li className="relative group animate-fade-down animate-once animate-duration-500 lg:hidden">
              <NavLink to="/" onClick={handleNavLinkClick}>
                Home
              </NavLink>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative group animate-fade-down animate-once animate-duration-500 text-base lg:text-lg font-normal hover:font-bold transition-all">
              <NavLink to="/work" onClick={handleNavLinkClick}>
                Work
              </NavLink>
              {/* <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span> */}
            </li>
            <li className="relative group animate-fade-down animate-once animate-duration-500 text-base lg:text-lg font-normal hover:font-bold transition-all">
              <NavLink to="/artists" onClick={handleNavLinkClick}>
                Artists
              </NavLink>
              {/* <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span> */}
            </li>
            <div className={`lg:block ${isMenuOpen ? "hidden" : "hidden"}`}>
              <NavLink to="/" aria-label="Home">
                <div className="flex flex-col items-center justify-center hover:cursor-pointer hover:scale-90 transition-all duration-300">
                  <span className="font-akira text-lg lg:text-2xl font-light">
                    MORON MEDIA
                  </span>
                </div>
              </NavLink>
            </div>
            <li className="relative group animate-fade-down animate-once animate-duration-500 text-base lg:text-lg font-normal hover:font-bold transition-all">
              <NavLink to="/about" onClick={handleNavLinkClick}>
                About Us
              </NavLink>
              {/* <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span> */}
            </li>
            <li className="relative group animate-fade-down animate-once animate-duration-500 text-base lg:text-lg font-normal hover:font-bold transition-all">
              <a
                href="#footer"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavLinkClick();
                  window.scrollTo({
                    top: document.documentElement.scrollHeight,
                    behavior: "smooth",
                  });
                }}
                className="cursor-pointer"
              >
                Contact
              </a>
              {/* <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span> */}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
