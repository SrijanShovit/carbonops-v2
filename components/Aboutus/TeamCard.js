import React from 'react'
import Image from 'next/image';

const TeamCard = ({item}) => {
  return (
    <div className="w-fit hover:scale-105 cursor-pointer transition-transform">
      <a href={item?.html_url} target="_blank">
        <Image
          src={ item?.avatar_url ? item?.avatar_url : "/images/homepage/profile.png" }
          alt="profile"
          height={200}
          width={200}
          className="rounded-full"
        />
        {item?.login ? (
          <h2 className="text-center">{item?.login}</h2>
        ) : (
          <h2 className="text-center">Username</h2>
        )}
      </a>
    </div>
  );
}

export default TeamCard