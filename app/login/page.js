'use client'
import React,{useState,useEffect} from 'react'
import Image from 'next/image'
import { signIn } from 'next-auth/react'
import EnvironmentImage from '../../public/images/login/Environment.png'
import Link from 'next/link'
import { useRouter} from 'next/navigation'

const LoginPage = () => {

    const handleGoogleSignIn = async () => {
      await signIn('google')
    }
  return (

      <> <div className='text-lg w-full h-screen flex flex-col justify-center items-center my-16 md:my-0'>
        <div className='w-[90%] md:w-[70%] mx-auto bg-[#12323f]'>
          <div className='flex flex-col md:flex-row justify-between items-center p-4'>
            <div className='w-full flex flex-col justify-between items-center gap-2 border-b-2 border-slate-400 md:border-b-0 md:border-r-2 pb-4'>
              <div>
                <Image
                  src={EnvironmentImage}
                  height={500}
                  width={500}
                  alt='Welcome to Carbonops'
                />
              </div>
              <div>
                <Link href='/signup'>
                  <button>
                    New User?{' '}
                    <span className='text-[#00bd57] duration-300 ease-in-out hover:underline cursor-pointer'>
                      Register Now!
                    </span>
                  </button>
                </Link>
              </div>
            </div>
            <div className='mt-8 md:mt-0 w-full flex flex-col justify-between items-center gap-2'>
              <div>
                <h1 className='text-3xl md:text-4xl font-bold text-[#00bd57]'>
                  LOGIN TO OUR PLATFORM
                </h1>
              </div>
              
              {/* <div>
                <h2>
                  Join us in our{" "}
                  <span className="text-[#00bd57]">Green Journey!</span>
                </h2>
              </div> */}
              {/* Input fields Container*/}
              <div className='flex flex-col justify-between items-center md:items-start gap-6 text-[#dee2e6] mt-4'>
                <div>
                  <div className='flex flex-col-reverse items-start pb-4'>
                    <div>
                      <input
                        name='email'
                        type='text'
                        placeholder='email@example.com'
                        className='px-2 w-[20rem] bg-[#c7f9cc] focus:outline-none text-[#152023] rounded-sm'
                      />
                    </div>
                    <label className='text-lg'>Email</label>
                  </div>
                  <div className='flex flex-col-reverse items-start pb-4'>
                    <div>
                      <input
                        name='password'
                        type='password'
                        placeholder='Must have at least 8 characters'
                        className='px-2 w-[20rem] bg-[#c7f9cc] focus:outline-none text-[#152023] rounded-sm'
                      />
                    </div>
                    <label className='text-lg'>Password</label>
                  </div>
                  <div className='flex flex-col-reverse items-start'>
                    <div>
                      <label className=''>
                        <input
                          type='radio'
                          name='category'
                          value='individual'
                        />
                        Individual
                      </label>

                      <label className='px-2'>
                        <input
                          type='radio'
                          name='category'
                          value='organization'
                        />
                        Organization
                      </label>
                    </div>
                    <label className='text-lg'>Choose Category</label>
                  </div>
                </div>
                <div className='w-[20rem] flex justify-between items-center text-md'>
                  <div className='flex flex-row justify-between items-center gap-2'>
                    <div>
                      <input type='checkbox' className='accent-[#00bd57]' />
                    </div>
                    <label>Remember me</label>
                  </div>
                  <div>
                    <button className='text-red-400 hover:underline duration-300 ease-out'>
                      Forgot Password?
                    </button>
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <div >
                  <button
                    href='/signup'
                    className='text-white font-semibold text-xl bg-[#00BD57] py-1 px-8 rounded-tl-xl rounded-br-xl rounded-tr-sm rounded-bl-sm hover:shadow-md hover:shadow-green-300 duration-200 ease-out'
                  >
                    Login
                  </button>
                </div>
                <div className='mx-2'>
                  <button
                    onClick={handleGoogleSignIn}
                    className='text-white font-semibold text-xl bg-[#00BD57] py-1 px-8 rounded-tl-xl rounded-br-xl rounded-tr-sm rounded-bl-sm hover:shadow-md hover:shadow-green-300 duration-200 ease-out'
                  >
                    Login with Google
                  </button>
                </div></div>
                
                
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='w-52 h-52 md:w-96 md:h-96 bg-[#12323f] fixed -top-12 -left-16 -z-10 rounded-full opacity-25'></div>
    </>
  )
}

export default LoginPage
