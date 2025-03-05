import { useState, useEffect, useRef } from "react";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navbarRef = useRef(null);

  // Function to close the menu when an option is clicked
  const handleMenuClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Close the menu when clicking outside the navbar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    // Attach the event listener to document
    document.addEventListener("click", handleClickOutside);

    // Cleanup event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <nav
        ref={navbarRef}
        className="bg-gradient-to-r from-[#121212] to-[#101725] py-3 px-8 fixed w-full top-0 shadow-2xl z-20"
      >
        <div className="flex justify-between items-center">
          <a href="#home">
            <h1 className="text-2xl md:text-3xl text-[#00FF66] font-bold tracking-wide hover:text-[#8A2BE2] transition-all duration-300 transform hover:scale-110">
              Abhiraj Dixit
            </h1>
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            {["Home", "Statistics", "Skills", "Projects", "Achievements", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-[#00FF66] transition-all duration-500 transform hover:scale-110 hover:font-semibold tracking-wide relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#00FF66] scale-x-0 transition-all duration-300 group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-[#00FF66] transition-all duration-300"
            >
              {isMobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <ul className="mt-4 space-y-6 md:hidden">
            {["Home", "Statistics", "Skills", "Projects", "Achievements", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={handleMenuClick} // Close the menu on click
                  className="block text-gray-300 hover:text-[#00FF66] transition-all duration-300 transform hover:scale-110 hover:font-semibold relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#00FF66] scale-x-0 transition-all duration-300 group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>

      {/* Smooth scrolling on anchor link click */}
      <style>
        {`
          html {
            scroll-behavior: smooth;
          }
        `}
      </style>
    </div>
  );
};
