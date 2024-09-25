import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [autoHideActive, setAutoHideActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (window.scrollY === 0) {
        setVisible(true);
        setAutoHideActive(false);
      } else {
        setAutoHideActive(true);
      }

      if (currentScrollY > lastScrollY) {
        setVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    const handleMouseMove = (e) => {
      if (autoHideActive) {
        setVisible(e.clientY <= 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [autoHideActive, lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 hidden md:block
      bg-secondaryVariant bg-opacity-85 
      transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <a href="#hero" className="font-headerVariant text-accent text-2xl">
              Meltdown
            </a>
          </div>
          <div className="flex space-x-4">
            <a
              href="#about"
              className="font-headerVariant text-primary hover:text-accent px-3 py-2 rounded-md text-lg font-medium"
            >
              About
            </a>
            <a
              href="#highlights"
              className="font-headerVariant text-primary hover:text-accent px-3 py-2 rounded-md text-lg font-medium"
            >
              Highlights
            </a>
            <a
              href="#team"
              className="font-headerVariant text-primary hover:text-accent px-3 py-2 rounded-md text-lg font-medium"
            >
              Team
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
