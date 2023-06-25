"use client";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";

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
  if (typeof window !== "undefined")
    window.addEventListener("scroll", changeNavColor);

  return (
    <>
      <main className="text-white">
        {/* Fixed Nav */}
        <header
          className={
            navColor
              ? "mb-20 fixed top-0 left-0 right-0 px-8 md:px-12 py-4 bg-[#12323f] ease-in-out duration-200"
              : "fixed top-0 left-0 right-0 px-8 md:px-12 py-4 bg-[#12323f] md:bg-[#152023]"
          }
        >
          {/* Navmenu */}
          <div className="w-[95%] mx-auto flex justify-between items-center">
            <a href="#home">
              {/* <h1 className="text-2xl md:text-3xl z-10">CARBON-OPS</h1> */}
              <Image
                src="/images/Carbonops.png"
                width={200}
                height={200}
                alt="CarbonOps"
              />
            </a>
            {/* Desktop Navmenu */}
            <nav className="hidden md:flex  gap-8 md:absolute left-[45vw] ">
              <Link
                href="/"
                className="text-xl hover:text-[#00BD57] text-gray-400  ease-out duration-200"
              >
                Home
              </Link>
              <Link
                href="#"
                className="text-xl hover:text-[#00BD57] text-gray-400  ease-out duration-200"
              >
                Organisations
              </Link>
              <Link
                href="#"
                className="text-xl hover:text-[#00BD57] text-gray-400  ease-out duration-200"
              >
                Option
              </Link>
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
                  ? "md:hidden fixed right-0 top-16 w-1/2 pt-8 h-full flex flex-col justify-start items-center gap-6 bg-[#12323f] duration-200 ease-in-out"
                  : "hidden"
              }
            >
              <Link
                href="/"
                className="text-xl hover:text-[#00BD57] text-gray-400  ease-out duration-200"
              >
                Home
              </Link>
              <Link
                href="#"
                className="text-xl hover:text-[#00BD57] text-gray-400  ease-out duration-200"
              >
                Organisations
              </Link>
              <Link
                href="#"
                className="text-xl hover:text-[#00BD57] text-gray-400  ease-out duration-200"
              >
                Option
              </Link>
            </nav>
          </div>
          {/* <img src={Logo} /> */}
        </header>
      </main>
    </>
  );
};

export default Navbar;
