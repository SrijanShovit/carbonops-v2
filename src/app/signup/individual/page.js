"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { backendURL } from "@/app/URL";


const IndividualSignup = () => {
  const router = useRouter();

  const [passwordType, setPasswordType] = useState("password");
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");
  const [signup, setSignUp] = useState({
    email: "", contact: "", dob: "", password: "",confirmPassword: ""
  })

  const passwordToggle = () => {
    if (passwordType === "password") {
      setPasswordType("text");
    } else setPasswordType("password");
  };

  const confirmPasswordToggle = () => {
    if (confirmPasswordType === "password") {
      setConfirmPasswordType("text");
    } else setConfirmPasswordType("password");
  };

  const handleChange = (e)=>{
    const {name, value} = e.target;
    setSignUp((prev)=>{
      return {...prev, [name]: value}
    })
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    if(signup.email === "" || signup.contact === "" || signup.dob === "" || signup.password === "" || signup.confirmPassword === ""){
      alert("Please fill all fields.")
      return
    }
    delete signup.confirmPassword;
    signup.role = "individual"
    signup.dob = new Date(signup.dob);
    try{
      await fetch(`${backendURL}/ping/signup`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signup),
      })
      .then(async (response)=>{
        const data =  await response.json();
        return data.user;
    })
    .then((userData)=>{
      alert("User created successfully Please Login!!")
      router.push("/login")
    })
    }catch(err){
      console.log(err)
    }
  }

  return (
    <>
      <div className="text-lg w-full h-screen flex flex-col justify-center items-center my-16 lg:my-0 ">
        <div className="w-[90%] md:w-[70%] mx-auto bg-[#12323f]">
          <div className="flex flex-col-reverse lg:flex-row justify-between items-center p-4">
            <div className="w-full flex flex-col justify-between items-center gap-2 border-t-2 border-slate-400 lg:border-t-0 lg:border-r-2 pb-4 m-5 p-5">
              <div className="max-lg:hidden">
                <Image
                  src={"/images/signup/welcome_img.png"}
                  height={500}
                  width={500}
                  alt="Welcome to Carbonops"
                />
              </div>
              <button>
                Already registered?{" "}
                <Link
                  href="/login"
                  className="text-[#00bd57] duration-300 ease-in-out hover:underline cursor-pointer"
                >
                  Login Now!
                </Link>
              </button>
            </div>
            <div className="mx-5 mt-8 md:mt-0 w-full flex flex-col justify-between items-center gap-2">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-[#53c6f2]">
                  SIGNUP
                </h1>
              </div>
              <div>
                <h2>
                  Join us in our{" "}
                  <span className="text-[#00bd57]">Green Journey!</span>
                </h2>
              </div>
              {/* Input fields Container*/}
              <div className="flex flex-col justify-between items-center md:items-start gap-6 mt-4">
                <div>
                  <div className="flex flex-row border-b-2 border-slate-400 items-center">
                    <div>
                      <input
                        type="text"
                        placeholder="Email"
                        className="w-[22rem] bg-transparent focus:outline-none text-[#00bd57]"
                        name="email"
                        value={signup.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <Image
                        src={"/icons/email.png"}
                        width={30}
                        height={30}
                        alt="Email"
                      />
                    </div>
                  </div>
                </div>
                {/* 2 */}
                <div>
                  <div className="flex flex-row border-b-2 border-slate-400 items-center">
                    <div>
                      <input
                        type="text"
                        placeholder="Contact"
                        className="w-[22rem] bg-transparent focus:outline-none text-[#00bd57]"
                        name="contact"
                        value={signup.contact}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <Image
                        src={"/icons/phone.png"}
                        width={30}
                        height={30}
                        alt="Contact"
                      />
                    </div>
                  </div>
                </div>
                {/* 3 */}
                <div>
                  <div className="flex flex-row border-b-2 border-slate-400 items-center">
                    <div>
                      <input
                        type="date"
                        placeholder="Date of Birth"
                        className="w-[22rem] bg-transparent focus:outline-none text-[#00bd57]"
                        value={signup.dob}
                        name="dob"
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <Image
                        src={"/icons/cake.png"}
                        width={30}
                        height={30}
                        alt="Date of Birth"
                      />
                    </div>
                  </div>
                </div>
                {/* 4 */}
                <div>
                  <div className="flex flex-row border-b-2 border-slate-400 items-center">
                    <div>
                      <input
                        type={passwordType}
                        placeholder="Password"
                        className="w-[22rem] bg-transparent focus:outline-none text-[#00bd57] pr-2"
                        value={signup.password}
                        name="password"
                        onChange={handleChange}
                      />
                    </div>
                    {/* <div>
                      <Image
                      src={lockIcon}
                      width={30}
                      height={30}
                      alt="Password"
                      />
                    </div> */}
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
                {/* 5 */}
                <div>
                  <div className="flex flex-row border-b-2 border-slate-400 items-center">
                    <div>
                      <input
                        type={confirmPasswordType}
                        placeholder="Confirm Password"
                        className="w-[22rem] bg-transparent focus:outline-none text-[#00bd57] pr-2"
                        value={signup.confirmPassword}
                        name="confirmPassword"
                        onChange={handleChange}
                      />
                    </div>
                    {/* <div>
                      <Image
                      src={lockIcon}
                      width={30}
                      height={30}
                      alt="Confirm Password"
                      />
                    </div> */}
                    <div
                      onClick={confirmPasswordToggle}
                      className="toggle-button"
                      style={{
                        paddingTop: 5,
                        width: 30,
                        height: 30,
                        color: "#6B717F",
                        marginLeft: 5,
                      }}
                    >
                      {confirmPasswordType === "password" ? (
                        <FiEyeOff />
                      ) : (
                        <FiEye />
                      )}
                    </div>
                  </div>
                </div>
                <div className="mx-auto">
                  <button
                   type="submit"
                    className="text-xl bg-[#00BD57] py-1 px-8 rounded-tl-xl rounded-br-xl rounded-tr-sm rounded-bl-sm hover:shadow-md hover:shadow-green-300 duration-200 ease-out"
                    onClick={handleSubmit}
                  >
                    Signup
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-52 h-52 md:w-96 md:h-96 bg-[#12323f] fixed -top-12 -left-16 -z-10 rounded-full opacity-25"></div>
    </>
  );
};

export default IndividualSignup;
