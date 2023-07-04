import React from 'react'

const Contact = () => {
  return (
    <div className='mb-[10vh] ' >
        <div className='h-fit  border-2 mt-10 mx-[8vw] rounded-lg bg-[#5DAC53]'>
            <h2 className='p-4 text-2xl font-semibold text-white'>Who we are?</h2>
            <hr className='mx-4 mb-4 '/>
            <p className='px-4 text-lg text-white'>We are CarbonOps, a dedicated team of environmental enthusiasts and technologists who have come together with a shared vision of combatting climate change. Our passion lies in empowering individuals and households to understand, reduce, and offset their carbon footprints through our user-friendly online platform. As advocates for sustainability, we firmly believe that every action, no matter how small, contributes to a larger collective impact. With that in mind, we have built CarbonOps to provide accessible tools, accurate calculations, and personalized recommendations, enabling our users to make informed choices and take meaningful action toward a sustainable future.</p>
            <button className='text-lg bg-white py-1 px-8 rounded-tl-xl rounded-br-xl rounded-tr-sm text-black rounded-bl-sm hover:shadow-md hover:shadow-green-300 duration-200 ease-out m-4'>Contact us</button>
        </div>
    </div>
  )
}

export default Contact
