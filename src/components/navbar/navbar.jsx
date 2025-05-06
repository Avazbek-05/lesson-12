import React from "react";
import NavbarBottom from "./navbarBottom/navbarBottom";
import NavbarTop from "./navbarTop/navbarTop";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#f0f0f0]">
      <NavbarTop />
      <NavbarBottom />
    </header>
  );
};

export default Navbar;
