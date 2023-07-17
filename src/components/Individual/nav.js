"use client";
import Image from 'next/image'
import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import plus from "../../../public/icons/plus.png";
import Link from 'next/link';
import { FaUser } from 'react-icons/fa';
import Actions from './actions';

const Nav = () => {
    const [nav, setNav] = useState(true);
    const [actionsOpen, setActionsOpen]=useState(false)
   
    const handleNav = () => {
        setNav(!nav);
    };
    const handleOpen=()=>{
      setActionsOpen(!actionsOpen)
    }
    const onCloseNav=()=>{
      if (actionsOpen){
        setActionsOpen(false)
      }
    }
  return (
    <div className="text-white relative z-1" style={{zIndex:1}}>
      <div id="navwrapper"className="fixed top-0 md:right-0 right-4 px-4 md:px-12 md:py-11 py-8 md:bg-[#152023] bg-transparent">
        {actionsOpen &&
        <div className='absolute right-[15vw] top-[10vh]' style={{zIndex:100}}>
          <Actions/>
        </div>}
        {/* Navmenu */}
        <div className="w-[50%] flex items-end">
          {/* Desktop Navmenu */}
          <div className="hidden md:flex gap-8 md:absolute right-[12vw] ">
            <span className="cursor-pointer w-5 h-5 " onClick={handleOpen}>
              <Image src={plus} alt="+" height={50} width={50} />
            </span>
            <Link href="/" className="flex justify-center items-center  text-xl hover:text-[#00BD57] text-white-400 ease-out duration-20">
              <span className="text-lg mr-2"><FaUser /></span>
              <span>Logout</span>
            </Link>
          </div>
          {/* Hamburger button */}
          <button
          className="md:hidden text-4xl w-4 h-4 hover:text-[#00BD57] ease-out duration-150"
          onClick={()=>{handleNav(); onCloseNav()}}>
          {!nav ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
          {/* Mobile Navmenu */}
          <nav
          className={
            !nav
            ? "md:hidden fixed right-0 top-20 w-1/2 py-4 h-fit flex flex-col justify-start items-center gap-6 bg-[#12323f] duration-200 ease-in-out"
            : "hidden"
          }
          onClick={onCloseNav}
          >
            <span className="cursor-pointer w-6 h-6" onClick={handleOpen}>
              <Image src={plus} alt="+" height={50} width={50} />
            </span>
            <Link
            href="/"
            className="text-xl hover:text-[#00BD57] text-white-400  ease-out duration-200"
            >
              Logout
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}


export default Nav
