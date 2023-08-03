"use client";
import { useState } from "react";
import Image from "next/image";
import { signIn } from 'next-auth/react'
import Link from "next/link";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useRouter} from 'next/navigation'
import { frontendURL } from "../URL";

const LoginPage = () => {
  const router = useRouter();
  const [passwordType, setPasswordType] = useState("password");
  const [loginForm, setLoginForm] = useState({email: "", password: "", category: ""});

  const passwordToggle = () => {
    if (passwordType === "password") {
      setPasswordType("text");
    } else setPasswordType("password");
  };

const handleChange = (e)=>{
  const {name, value} = e.target;
  setLoginForm((prev)=>{
    return {...prev, [name]: value};
  })
}

   const handleGoogleSignIn = async () => {
      await signIn('google')
    }

    const handleSubmit = async ()=>{
      if(loginForm.email === "" || loginForm.password === "" || loginForm.category === ""){
        alert("Please fill all fields");
        return;
      }
      const status = await signIn("credentials", {
        redirect: false,
        email: loginForm.email,
        password: loginForm.password,
        role: loginForm.category,
        callbackUrl: `${frontendURL}/`
      })
        
        console.log(status)

       if (status.error) {
         alert(status.error)
       }else{
        router.push(status.url)
       }
    }


  return (

      <> <div className='text-lg w-full min-h-screen flex flex-col justify-center items-center my-16 '>
        <div className='w-[90%] md:w-[70%] mx-auto bg-[#12323f] max-lg:my-20'>
          <div className='flex flex-col-reverse lg:flex-row justify-between items-center p-4 '>
            <div className='w-full flex flex-col justify-between items-center gap-2 border-t-2 border-slate-400 lg:border-t-0 lg:border-r-2 pb-4 m-5 p-5'>
              <div className="max-lg:hidden">
                <Image
                  src={"/images/login/Environment.png"}
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
              <div className='flex flex-col justify-between items-center md:items-start gap-6 text-[#dee2e6] mt-4 mx-5'>
       
                <div>
                  <div className="flex flex-row border-b-2 border-slate-400 items-center mb-5">
                  
                    <div>
                      <input
                        type="text"
                        placeholder="Email"
                        className="w-[22rem] bg-transparent focus:outline-none text-[#00bd57]"
                        name="email"
                        value={loginForm.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <Image
                        src={"/icons/email.png"}
                        width={27}
                        height={27}
                        alt="Email"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-row border-b-2 border-slate-400 items-center mb-8">
                      <div>
                        <input
                          type={passwordType}
                          placeholder="Password"
                          className="w-[22rem] bg-transparent focus:outline-none text-[#00bd57] pr-2"
                          name="password"
                        value={loginForm.password}
                        onChange={handleChange}
                        />
                      </div>
                      <div
                        onClick={passwordToggle}
                        className="toggle-button"
                        style={{
                          paddingTop: 5,
                          width: 30,
                          height: 30,
                          color: "#6B717F",
                          marginLeft: 5,
                        }}
                      >
                        {passwordType === "password" ? <FiEyeOff /> : <FiEye />}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col-reverse items-start">
                    <div>
                      <span className="mx-5">

                        <input
                          type='radio'
                          name='category'
                          value='individual'
                          id="individual"
                          className=" bg-gray-400 ring-slate-800 ring-offset-gray-800"
                          onChange={handleChange}
                          />
                      <label className='px-2' for='individual'>
                        Individual
                        </label>
                      </span>

                      <span>


                        <input
                          type='radio'
                          name='category'
                          value='organization'
                          id='organization'
                          onChange={handleChange}
                          />
                      <label className='px-2' for='organization'>
                        Organization
                        </label>
                      </span>
                    </div>
                    <label className='text-lg'>Choose Category</label>
                  </div>
                </div>
                <div className='w-[20rem] flex justify-between items-center text-md'>
                  <div className='flex flex-row justify-between items-center gap-2'>
                    <div>
                      <input type='checkbox' id="remember-me" className='accent-[#00bd57]' />
                    </div>
                    <label for="remember-me" >Remember me</label>
                  </div>
                  <div>
                    <button className='text-red-400 hover:underline duration-300 ease-out'>
                      Forgot Password?
                    </button>
                  </div>
                </div>
                <div className="flex justify-center w-full">
                <div className="flex flex-col items-center">
                  <div className="my-2">
                  <button
                    type="submit"
                    className='text-white font-semibold text-xl bg-[#00BD57] py-1 px-8 rounded-tl-xl rounded-br-xl rounded-tr-sm rounded-bl-sm hover:shadow-md hover:shadow-green-300 duration-200 ease-out'
                    onClick={handleSubmit}
                  >
                    Login
                  </button>
                </div>
                <div className='my-2'>
                  <button
                    onClick={handleGoogleSignIn}
                    className='text-white font-semibold text-xl bg-[#00BD57] py-1 px-8 rounded-tl-xl rounded-br-xl rounded-tr-sm rounded-bl-sm hover:shadow-md hover:shadow-green-300 duration-200 ease-out'
                  >
                    Login with Google
                  </button>
                </div>
                </div>
                </div>
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
