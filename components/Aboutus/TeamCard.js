import React from 'react'
import Image from 'next/image';
import profile from "../../public/images/homepage/profile.png";

const TeamCard = ({item}) => {
  return (
    <div className='w-fit hover:scale-105 cursor-pointer transition-transform'>
        <Image src={(item?.img)?(item?.img):(profile)} alt="profile" height={200} width={200} />
        {(item?.name)?(<h2 className='text-center'>{item?.name}</h2>):(<h2 className='text-center'>Username</h2>)}
    </div>
  )
}

export default TeamCard