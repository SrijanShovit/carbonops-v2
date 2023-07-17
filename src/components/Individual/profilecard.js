"use client"
import { Drawer, IconButton } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react'
import { BsChevronLeft, BsPencil } from 'react-icons/bs';
import Edit from './edit';
import localFont from 'next/font/local'
import profileimage from "../../../public/images/individual/profileimage.png";

const myFont = localFont ({ src: '../../../public/fonts/IBMPlexMono-SemiBold.woff2' })

const Profilecard = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    const user ={
        name: "Jane Doe",
        email: "Doe@example.com",
        phone: "000-000-000",
        location: "Roorkee",
        date: "28-06-23",
        score:8,
        image: profileimage,
    }  
    const handleDrawer=()=>{
        setOpenDrawer(!openDrawer)
    }
    const Infocard=(label, value)=>{
        return (
        <div className="flex flex-col items-start pt-3 md:pb-[20%] pb-[5%] md:px-2 px-8 mt-2 bg-[#202934] md:w-[97%] min-w-fit w-[100%] rounded-lg">
            <div className="mb-2 md:text-sm text-md text-[#00BD57] uppercase">{label}</div>
            <div className="text-lg">{value}</div>
        </div>
        )
    }

  return (
  <>
  <div className="flex md:justify-between justify-center md:ml-[4vw] md:bg-[#141A1F] pt-[20%] h-[100%] md:w-[85%] min-w-fit w-full rounded-lg">
    <div className={`${myFont.className}`}>
        <span className="text-2xl pl-4">Profile</span>
        <div className="flex flex-col relative items-center w-[100%] h-[30vh] mb-5 mt-5 md:mx-0 mx-2">
            <Image
            width={500}
            height={500}
            className=" w-full h-full object-cover"
            src= {user.image?user.image:profileimage}
            alt=""
            />
            <div className="flex flex-col items-start absolute bottom-0 left-0 pl-4 pb-8">
                <span className='text-2xl'>{user.name}</span>
                <span className='text-sm'>{user.email}</span>
            </div>
            <div
            aria-label="open drawer"
            onClick={handleDrawer}
            edge="start"
            className=' bg-[#00BD57] text-xl p-5 rounded-full absolute mr-4 -bottom-7 right-2 cursor-pointer'>
                <BsPencil />
            </div>
        </div>
        <div className='px-4'>
            <span className="text-sm font-semibold text-[#00BD57]">Info</span>
            <div className='md:grid grid-cols-2 flex flex-col md:gap-x-1 gap-x-5 gap-y-3 items-start'>
                { Infocard("Location", user.location ) }
                { Infocard("Your score", user.score ) }
                { Infocard("Phone", user.phone ) }
                { Infocard("Date of last report", user.date ) }
            </div>
        </div>
    </div>
</div>
<Drawer
sx={{
    width: 350,
    flexShrink: 0,
    background:'#141A1F',
    color:'white',
    '& .MuiDrawer-paper': {
        width: 350,
        height: '100%',
        boxSizing: 'border-box',
        background:'#141A1F',
        color:'white',
    },
}}
variant="persistent"
anchor="left"
open={openDrawer}
>
    <div className='flex items-center pl-11 pt-5 justify-start'>
        <IconButton onClick={handleDrawer} className='text-[#00BD57]'>
            <BsChevronLeft />
        </IconButton>
    </div>
    <Edit />
</Drawer>
</>
  )
}


export default Profilecard