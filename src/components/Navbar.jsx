import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Importing styles, constants, and assets
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";


const Navbar = () => {
  // State for active navigation link
  const [active, setActive] = useState("");
  // State for mobile menu toggle
  const [toggle, setToggle] = useState(false);
  // State to track if the user has scrolled down
  const [scrolled, setScrolled] = useState(false);

  // useEffect hook to add an event listener for scroll events
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      // Check if user has scrolled more than 100 pixels from the top
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Adding scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      // Applying styles based on whether the user has scrolled or not
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo and title link */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-14 h-14 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            Said Said &nbsp;
            <span className="sm:block hidden"> | Full-Stack Developer</span>
          </p>
        </Link>

        {/* Navigation links for larger screens */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile menu toggle and dropdown */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

