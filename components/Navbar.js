"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";
import { Style } from "@mui/icons-material";
import styled from "styled-components";

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


  // function for dark mode button
  useEffect(() => {
    const handleCheckboxChange = () => {
      document.body.classList.toggle('dark');
    };

    const checkbox = document.getElementById("checkbox");
    checkbox.addEventListener('change', handleCheckboxChange);

    return () => {
      checkbox.removeEventListener('change', handleCheckboxChange);
    };
  }, []);

  // styling ball of dark mode button
  const styles = {
    fontSize: '30px',
  };

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
                src="/../public/images/Carbonops.png"
                width={200}
                height={200}
                alt="CarbonOps"
              />
            </a>
            {/* Desktop Navmenu */}
            <nav className="hidden md:flex justify-center items-center gap-8">
              <Link
                href="/"
                className="text-lg mx-3 hover:text-[#00BD57] ease-out duration-200"
              >
                HOME
              </Link>
              <Link
                href="/aboutus"
                className="text-lg mx-3 hover:text-[#00BD57] ease-out duration-200"
              >
                ABOUT
              </Link>
              <Link
                href="/contactus"
                className="text-lg mx-3 hover:text-[#00BD57] ease-out duration-200"
              >
                CONTACT US
              </Link>
              <Link
                href="/login"
                className="text-lg hover:text-[#00BD57] ease-out duration-200"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="text-lg bg-[#00BD57] py-1 px-8 rounded-tl-xl rounded-br-xl rounded-tr-sm rounded-bl-sm hover:shadow-md hover:shadow-green-300 duration-200 ease-out"
              >
                Signup
              </Link>

              <div>
                <input type="checkbox" class="checkbox" id="checkbox" />

                <label htmlFor="checkbox" for="checkbox" class="label" >
                  <i class="material-symbols-outlined moon">dark_mode</i>
                  <i class="material-symbols-outlined sun"> clear_day</i>
                  <div class="material-symbols-outlined  ball" style={styles}>circle</div>
                </label>
              </div>
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
                className="text-lg mx-3 hover:text-[#00BD57] ease-out duration-200"
              >
                HOME
              </Link>
              <Link
                href="/aboutus"
                className="text-lg mx-3 hover:text-[#00BD57] ease-out duration-200"
              >
                ABOUT
              </Link>
              <Link
                href="/contactus"
                className="text-lg mx-3 hover:text-[#00BD57] ease-out duration-200"
              >
                CONTACT US
              </Link>
              <Link
                href="/login"
                className="text-lg hover:text-[#00BD57] ease-out duration-200"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="text-lg bg-[#00BD57] py-1 px-8 rounded-tl-xl rounded-br-xl rounded-tr-sm rounded-bl-sm hover:shadow-md hover:shadow-green-300 duration-200 ease-out"
              >
                Signup
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
