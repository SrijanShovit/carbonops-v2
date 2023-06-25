import Link from "next/link";
import React from 'react'
import footprint from "../../public/images/individual/footprint.png";
import Image from "next/image";
import localFont from 'next/font/local'

const myFont = localFont ({ src: '../../public/fonts/IBMPlexMono-SemiBold.woff2' })

const Stats = () => {
  return (
    <div className="md:relative min-h-fit">
      <div className=" flex flex-col justify-center items-start w-[100%] ">
        <div className="flex justify-center items-end">
          <span className="text-4xl font-semibold">
            Your <span className="text-[#00BD57]"> Stats</span>
          </span>
          <Image src={footprint} alt="footprint" width={100} height={100} className="md:flex hidden" />
        </div>
        <Link href='/calculate' className="md:w-[100%]">
          <button
          className={`${myFont.className} py-3 px-10 flex justify-center items-center mt-5 rounded-lg bg-[#00BD57] text-xl min-w-fit w-[100%]`}>
            CALCULATE
          </button>
        </Link>
      </div>
    </div>
  )
}


export default Stats
