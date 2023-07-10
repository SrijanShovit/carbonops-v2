import Chart from '@/components/Individual/chart'
import Nav from '@/components/Individual/nav'
import Profilecard from '@/components/Individual/profilecard'
import Stats from '@/components/Individual/stats'
import React from 'react'

const Page = () => {
  return (
        <div className='box-border md:overflow-hidden relative flex md:flex-row flex-col md:justify-center md:items-center h-[100vh]'>
            <div className='md:w-[40vw] md:min-w-fit w-full h-[100%] md:ml-[10vw] mr-8 md:mb-0 mb-[5%]'>
                <Profilecard />
            </div>
            <div className='flex flex-col md:w-[100%] w-[100] md:mr-[10%]'>
                <Nav/>
                <div className='md:mt-0 mt-[15vh] mb-8 flex justify-center items-center md:absolute top-[10%]'>
                    <Stats />
                </div>
                <div className="lg:flex hidden w-[100%] h-[100%]">
                    <Chart />
                </div>
            </div>
        </div>
    )
}


export default Page