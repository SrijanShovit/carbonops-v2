import Image from 'next/image';
import React from 'react'
import visitorinfo from "../../../public/images/individual/visitorinfo.png";

const Chart = () => {    
    return (
    <div className=" h-[100%] md:mt-[40%] w-[100%] bg-[#222235]">
      <Image src={visitorinfo} alt='visitor information graph' width={900} height={400}/>
    </div>
)
}


export default Chart