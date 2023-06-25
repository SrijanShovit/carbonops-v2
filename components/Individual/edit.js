"use client"
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { BsCamera } from 'react-icons/bs'
import localFont from 'next/font/local'
import profileimage from "../../public/images/individual/profileimage.png";

const myFont = localFont ({ src: '../../public/fonts/IBMPlexMono-SemiBold.woff2' })
const Edit = () => {
    const user={
        DOB:"",
        address:"",
        occupation:"",
        city:"",
        socials:{facebook:"", instagram:"", twitter:""}
    };
    const [DOB, setDOB]= useState("");
    const [address, setAddress] = useState("");
    const [occupation, setOccupation]= useState("");
    const [city, setCity] = useState("");
    const [socials, setSocials] = useState({facebook:"", instagram:"", twitter:""});
    //handle set social media on input
    const handleSocials = (event) => {
        const { name, value } = event.target;
        setSocials((prevSocials) => ({
          ...prevSocials,
          [name]: value
        }));
      };
    const selectImage = useRef(null)
    const onCameraClick = () => {
        // `current` points to the mounted file input element
        selectImage.current.click();
    };

    const handleSubmit= async(e)=>{}
    const uploadiImage=(e)=>{}
 
  return (
    <div className="px-5 py-1 ml-5 bg-[#141A1F]">
        <span className={`text-2xl text-white ${myFont.className}`}>Edit</span>
        <form className=" my-5" onSubmit={(e)=>{handleSubmit(e)}}>
            <div className={`${myFont.className}`}>
                <div className="flex items-center">
                    <Image
                    className="w-28 h-28 object-cover mr-5 rounded-full relative"
                    src= {user.image?user.image:profileimage}
                    width={500}
                    height={500}
                    alt="profile image"/>
                    <label htmlFor="file" className='mb-1 text-lg'>Profile Image</label>
                    <div onClick={onCameraClick}
                    className='bg-[#00BD57] text-md p-3 rounded-full absolute mr-4 left-32 top-44 cursor-pointer'>
                        <BsCamera />
                        <input type='file' ref={selectImage} style={{display: 'none'}} onChange={uploadiImage}/>
                    </div>
                </div>
                <div className="flex flex-col mt-2">
                    <label className='mb-1 text-sm text-[#00BD57]'>Address</label>
                    <input
                    type="text"
                    value={address}
                    onChange={(e)=>{setAddress(e.target.value)}}
                    placeholder={user.address? user.address:'123 viking st.'}
                    className="w-64 h-11 bg-[#202934]  pl-5 text-white text-start font-semibold rounded-lg"
                    />
                </div>
                <div className="flex flex-col mt-2">
                    <label className='mb-1 text-sm text-[#00BD57]'>Occupation</label>
                    <input
                    type="text"
                    value={occupation}
                    onChange={(e)=>{setOccupation(e.target.value)}}
                    placeholder={user.occupation? user.occupation:'lawyer'}
                    className="w-64 h-11 bg-[#202934]  pl-5 text-white text-start font-semibold rounded-lg"
                    />
                </div>
                <div className="flex flex-col mt-2">
                    <label className='mb-1 text-sm text-[#00BD57]'>Date of birth</label>
                    <input
                    type="text"
                    value={DOB}
                    onChange={(e)=>{setDOB(e.target.value)}}
                    placeholder={user.DOB? user.DOB:'15-05-1999'}
                    className="w-64 h-11 bg-[#202934] pl-5 text-white text-start font-semibold rounded-lg"
                    />
                </div>
                <div className="flex flex-col mt-2">
                    <label className='mb-1 text-sm text-[#00BD57]'>City</label>
                    <input
                    type="text"
                    value={city}
                    onChange={(e)=>{setCity(e.target.value)}}
                    placeholder={user.city?user.city:'London'}
                    className="w-64 h-11 bg-[#202934] pl-5 text-white text-start font-semibold rounded-lg"
                    />
                </div>
                <div className="flex flex-col mt-2 justify-around">
                    <label className='mb-1 text-sm text-[#00BD57]'>Social Media Links</label>
                    <input
                    type="text"
                    name='twitter'
                    value={socials.twitter}
                    onChange={handleSocials}
                    placeholder={user.socials.twitter?user.socials.twitter:"twitter"}
                    className="w-64 h-11 bg-[#202934] mb-4 pl-5 text-white text-start font-semibold rounded-lg"
                    />
                    <input
                    type="text"
                    name='instagram'
                    value={socials.instagram}
                    onChange={handleSocials}
                    placeholder={user.socials.instagram?user.socials.instagram:"instagram"}
                    className="w-64 h-11 bg-[#202934] mb-4  pl-5 text-white text-start font-semibold rounded-lg"
                    />
                    <input
                    type="text"
                    name='facebook'
                    value={socials.facebook}
                    onChange={handleSocials}
                    placeholder={user.socials.facebook?user.socials.facebook:"facebook"}
                    className="w-64 h-11 bg-[#202934] mb-4 pl-5 text-white text-start font-semibold rounded-lg"
                    />
                </div>
                <button className="p-2 my-4 cursor-pointer text-white font-semibold mt-5 rounded-lg bg-[#00BD57] w-64"
                type='submit'>
                    Save
                </button>
            </div>
        </form>
    </div>
    )
}


export default Edit