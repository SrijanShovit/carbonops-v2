import React from 'react'
import Image from 'next/image';
import profile from "../../public/images/homepage/profile.png";

const TeamCard = ({item}) => {
  return (
    <div className='w-fit hover:scale-105 hover:opacity-70 cursor-pointer transition-transform'>
      <a href={item?.html_url} target= '_blank'>
        <Image src={(item?.avatar_url)?(item?.avatar_url):(profile)} alt="profile" height={200} width={200} className='rounded-full transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/10' />
        {(item?.login)?(<h2 className='text-center'>{item?.login}</h2>):(<h2 className='text-center'>Username</h2>)}
    </a>
    </div>
  )
}

export default TeamCard