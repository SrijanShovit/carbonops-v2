import Link from 'next/link'
import React from 'react'

const Contact = () => {
  return (
    <div className='mb-[10vh] mx-24 max-md:mx-4' >
        <div className='h-fit  border-2 mt-10 mx-[8vw] rounded-lg bg-[#5DAC53]'>
            <h2 className='p-4 text-2xl font-semibold text-white'>Who we are?</h2>
            <hr className='mx-4 mb-4 '/>
            <p className='px-4 text-lg text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi maxime reprehenderit enim deserunt dicta, tempora iusto quae. Optio impedit labore autem reprehenderit quam, perspiciatis, at ad explicabo repellendus nesciunt minus?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe nemo odit consequuntur explicabo provident quidem esse optio nam iusto voluptate labore, tenetur deserunt sed! Quia doloribus nihil maiores harum vero.</p>
            <Link href={'/contactus'} >
              <button className='text-lg bg-white py-1 px-8 rounded-tl-xl rounded-br-xl rounded-tr-sm text-black rounded-bl-sm hover:shadow-md hover:shadow-green-300 duration-200 ease-out m-4'>Contact us</button>
            </Link>
        </div>
    </div>
  )
}

export default Contact