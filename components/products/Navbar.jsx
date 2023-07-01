import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div>
      <div className='flex flex-row justify-between items-center'>
        <div>
          {/* Logo here */}
          <a href="#home">
              {/* <h1 className="text-2xl md:text-3xl z-10">CARBON-OPS</h1> */}
              <Image
                src="/../public/images/Carbonops.png"
                width={200}
                height={200}
                alt="CarbonOps"
              />
            </a>
        </div>
        <div>
        {/* Dashboard button here */}
        <button className="text-lg md:text-xl bg-[#00BD57] py-0 px-3 md:px-auto rounded-tl-xl rounded-br-xl rounded-tr-sm rounded-bl-sm hover:shadow-md hover:shadow-green-300 duration-200 ease-out">
              {/* Desktop Image */}
              <div className="p-2 flex justify-between items-center gap-2 md:gap-2">
                <p>Dashboard</p>
              </div>
        </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar