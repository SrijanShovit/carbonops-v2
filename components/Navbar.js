"use client";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  };

  const [navColor, setNavColor] = useState(false);
  const changeNavColor = () => {
    if (window.scrollY > 90) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  };
  window.addEventListener("scroll", changeNavColor);
  return (
    <>
      <main className="font-mono text-white">
        {/* Fixed Nav */}
        <header
          className={
            navColor
              ? "fixed top-0 left-0 right-0 px-8 md:px-12 py-4 bg-[#152023]"
              : "fixed top-0 left-0 right-0 px-8 md:px-12 py-4 bg-[#152023] md:bg-[#12323f]"
          }
        >
          {/* Navmenu */}
          <div className="w-[95%] mx-auto flex justify-between items-center">
            <a href="#home">
              <h1 className="text-2xl md:text-3xl z-10">CARBON-OPS</h1>
            </a>
            {/* Desktop Navmenu */}
            <nav className="hidden md:flex justify-center items-center gap-8">
              <button className="text-lg hover:text-[#00BD57] ease-out duration-200">
                Login
              </button>
              <button className="text-lg bg-[#00BD57] py-1 px-8 rounded-tl-xl rounded-br-xl rounded-tr-sm rounded-bl-sm hover:shadow-md hover:shadow-green-300 duration-200 ease-out">
                Signup
              </button>
            </nav>
            {/* Hamburger button */}
            <button
              className="md:hidden text-xl hover:text-[#00BD57] ease-out duration-150"
              onClick={handleNav}
            >
              {!nav ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>

            {/* Mobile Navmenu */}
            <nav
              className={
                !nav
                  ? "md:hidden fixed right-0 top-16 w-1/2 pt-8 h-full flex flex-col justify-start items-center gap-6 bg-[#152023] duration-200 ease-in-out"
                  : "hidden"
              }
            >
              <button className="text-lg hover:text-[#00BD57] ease-out duration-200">
                Login
              </button>
              <button className="text-lg bg-[#00BD57] py-1 px-8 rounded-tl-xl rounded-br-xl rounded-tr-sm rounded-bl-sm hover:shadow-md hover:shadow-green-300 duration-200 ease-out">
                Signup
              </button>
            </nav>
          </div>
        </header>
      </main>
    </>
  );
};

export default Navbar;
