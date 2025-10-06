import { useEffect, useState, useRef } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const dropdownRef = useRef();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        // setShowServicesDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const [showDeckModal, setShowDeckModal] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/send-deck-request.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      const result = await response.text();
      setFormStatus(result === "success" ? "Request sent!" : "Failed to send.");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setFormStatus("Failed to send.");
    }
  };


  return (
    <div className="font-menda bg-black z-50 fixed w-full text-white border-b-2 border-white">
      <nav className="flex items-center justify-between w-[95%] mx-auto p-4">
        {/* Logo on left */}
        <NavLink to="/" onClick={closeMenu}>
          <span className="font-akira text-xl lg:text-2xl">MORON MEDIA</span>
        </NavLink>

        {/* Desktop Menu Center */}
        <ul className="hidden lg:flex gap-10 text-lg font-helvetica font-medium">
          <li>
            <NavLink to="/" onClick={closeMenu} className="flex items-center gap-1 hover:font-bold">
            Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={closeMenu} className="flex items-center gap-1 hover:font-bold">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/Services" onClick={closeMenu} className="flex items-center gap-1 hover:font-bold">
              Services
            </NavLink>
          </li>
          {/* Services Dropdown */}
          {/* <li className="relative group" ref={dropdownRef}>
            <div
              className="flex items-center gap-1 cursor-pointer"
              onMouseEnter={() => setShowServicesDropdown(true)}
              onMouseLeave={() => setShowServicesDropdown(false)}
            >
              <span>Services ▾</span>
            </div>
            <ul
              className={`absolute top-8 bg-black border border-white rounded-md text-sm min-w-[200px] z-20 transition-all duration-200 ${
                showServicesDropdown ? "block" : "hidden"
              }`}
              onMouseEnter={() => setShowServicesDropdown(true)}
              onMouseLeave={() => setShowServicesDropdown(false)}
            >
              <li>
                <NavLink to="/services" className="block px-4 py-2 hover:bg-white hover:text-black hover:font-bold" onClick={closeMenu}>
                  End to End Video Production
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="block px-4 py-2 hover:bg-white hover:text-black hover:font-bold" onClick={closeMenu}>
                  Post Production
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="block px-4 py-2 hover:bg-white hover:text-black hover:font-bold" onClick={closeMenu}>
                  Content Packaging
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="block px-4 py-2 hover:bg-white hover:text-black hover:font-bold" onClick={closeMenu}>
                  Branded Content + IPs Photography
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="block px-4 py-2 hover:bg-white hover:text-black hover:font-bold" onClick={closeMenu}>
                  Photography
                </NavLink>
              </li>
            </ul>
          </li> */}

          <li>
            <NavLink to="/work" onClick={closeMenu} className="flex items-center gap-1 hover:font-bold">
              Work
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/artists" onClick={closeMenu} className="flex items-center gap-1 hover:font-bold">
               Artists
            </NavLink>
          </li> */}
          <li>
            <a
              href="#footer"
              onClick={(e) => {
                e.preventDefault();
                closeMenu();
                window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
              }}
              className="flex items-center gap-1 hover:font-bold"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* <button
          onClick={() => setShowDeckModal(true)}
          className="px-2 py-1 hover:underline transition-all"
        >
          Request a Deck
        </button> */}


        {/* Schedule a Call button */}
        <div className="hidden lg:block">
          <NavLink to="https://docs.google.com/forms/d/e/1FAIpQLSfhTBetZWrA6G-97ihqoc_XsgdGwr2gHHmZwg9feB0CSySRCA/viewform?usp=sharing&ouid=102780773921089345298" className="px-4 py-2 border-2 border-white rounded-full hover:bg-white hover:text-black transition-all">
            Schedule a Call
          </NavLink>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          {isMenuOpen ? (
            <IoClose className="text-3xl cursor-pointer" onClick={toggleMenu} />
          ) : (
            <IoMenu className="text-3xl cursor-pointer" onClick={toggleMenu} />
          )}
        </div>
      </nav>

      {showDeckModal && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-[1000] px-4">
          <div className="bg-white text-black p-6 rounded-xl w-full max-w-md relative">
            <button
              onClick={() => setShowDeckModal(false)}
              className="absolute top-3 right-3 text-black text-2xl"
            >
              <IoClose />
            </button>
            <h2 className="text-xl font-semibold mb-4">Request a Deck</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full border px-3 py-2 rounded"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full border px-3 py-2 rounded"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={3}
                className="w-full border px-3 py-2 rounded"
              />
              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
              >
                Submit Request
              </button>
              {formStatus && <p className="text-center mt-2">{formStatus}</p>}
            </form>
          </div>
        </div>
)}


      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-black text-white px-6 py-6 space-y-4 border-t border-white text-base font-helvetica font-medium">
            <NavLink to="/" onClick={closeMenu} className="block">Home</NavLink>
            <NavLink to="/about" onClick={closeMenu} className="block">About Us</NavLink>
            <NavLink to="/services" onClick={closeMenu} className="block">Services</NavLink>
            {/* Mobile Services Dropdown */}
            {/* <div>
                <button
                    onClick={() => setShowServicesDropdown(!showServicesDropdown)}
                    className="w-full text-left"
                >
                    Services ▾
                </button>
                {showServicesDropdown && (
                    <ul className="pl-4 mt-2 space-y-2 text-sm bg-white text-black">
                        <li><NavLink to="/services" onClick={closeMenu}>End to End Video Production</NavLink></li>
                        <li><NavLink to="/services" onClick={closeMenu}>Post Production</NavLink></li>
                        <li><NavLink to="/services" onClick={closeMenu}>Content Packaging</NavLink></li>
                        <li><NavLink to="/services" onClick={closeMenu}>Branded Content + IPs</NavLink></li>
                        <li><NavLink to="/services" onClick={closeMenu}>Photography</NavLink></li>
                    </ul>
                )}
            </div> */}

            <NavLink to="/work" onClick={closeMenu} className="block">Work</NavLink>
            {/* <NavLink to="/artists" onClick={closeMenu} className="block">Artists</NavLink> */}
            <a
            href="#footer"
            onClick={(e) => {
                e.preventDefault();
                closeMenu();
                window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
            }}
            className="block"
            >
            Contact
            </a>
            {/* <button
              onClick={() => {
                setShowDeckModal(true);
                closeMenu();
              }}
              className="block mt-4 px-4 py-2 text-center underline hover:text-zinc-500"
            >
              Request a Deck
            </button> */}

            <NavLink
              to="https://docs.google.com/forms/d/e/1FAIpQLSfhTBetZWrA6G-97ihqoc_XsgdGwr2gHHmZwg9feB0CSySRCA/viewform?usp=sharing&ouid=102780773921089345298/schedule"
              className="block mt-4 px-4 py-2 border border-white rounded-full text-center hover:bg-white hover:text-black"
            >
              Schedule a Call
            </NavLink>

            {/* https://docs.google.com/forms/d/e/1FAIpQLSfhTBetZWrA6G-97ihqoc_XsgdGwr2gHHmZwg9feB0CSySRCA/viewform?usp=sharing&ouid=102780773921089345298 */}
        </div>
        )}

    </div>
  );
}

export default Navbar;
