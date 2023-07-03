"use client";
import { useState } from "react";
//import Logo from "../../public/images/Carbonops.png";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

// import Link from "next/link";
const Calculation = () => {
  const [member, setMember] = useState(false);
  const [score, setScore] = useState(0);
  const [house, setHouse] = useState(false);
  const [diet, setDiet] = useState(false);
   const [pack, setPack] = useState(false);
  const [dish,setdish]=useState(false);
   const [purchase,setPurchase]=useState(false);
   const [cans,setCans]=useState(false);
   const [machine,setMachine]=useState(false);
   const [flight,setFlight]=useState(false);
   const [publict,setPublic]=useState(false);
   const [personal,setPersonal]=useState(false);
 
   const handleOptionChange = (event) => {
    const optionValue = parseInt(event.target.value);
    setScore(score + optionValue);
  };

  
  return (
    <>
      <div className="w-full h-screen relative">
        {/* Nav */}
        <div className="w-full flex justify-between items-center px-6 md:px-12 py-4">
          <div>

          </div>
          <h2 className="text-xl font-semibold">Dashboard</h2>
        </div>
        <div className="w-full mx-auto text-center mb-4 mt-2">
          <h1 className="text-3xl md:text-4xl font-semibold text-[#54ccfa]">
            Carbon Footprint Calculator
          </h1>
        </div>
        
        <section className="w-[70%] md:h-[calc(100%-200px)] mx-auto">
          <div className="flex justify-between items-start flex-row text-lg md:text-xl">
            {/* Graph holder */}
            <div className="justify-start">
            <div>
              {/* 1 */}
              <div className="flex items-center justify-start gap-8 my-0">
                <div className="w-[2px] h-12 border-2 border-white flex flex-col items-center justify-center">
                  <div className="w-3 h-3  rounded-full bg-red-500"></div>
                </div>
                <div onClick={()=>{setMember(!member)}}
                className="cursor-pointer">
                Members*</div>
              </div>
              {
                member && (
                  <div className="w-full flex justify-center items-center bg-[#2d7d9f] mx-auto p-5 lg:p-7 -z-20 rounded-lg ml-3">
                  <ul class="list-none">
              <li>
              <input type="radio" name="option" value="14" onChange={handleOptionChange}/>
                <label >you live alone</label></li>
              <li>
              <input type="radio" name="option" value="12" onChange={handleOptionChange}/>
                <label >you share a house or apartment with 1 other person</label></li>
              <li>
              <input type="radio" name="option" value="10" onChange={handleOptionChange}/>
                <label >you share a house or apartment with 2 other person</label></li>
              <li>
              <input type="radio" name="option" value="8" onChange={handleOptionChange}/>
                <label >you share a house or apartment with 3 other person</label></li>
              <li>
              <input type="radio" name="option" value="6" onChange={handleOptionChange}/>
                <label >you share a house or apartment with 4 other person</label></li>
              <li>
              <input type="radio" name="option" value="4" onChange={handleOptionChange}/>
                <label >you share a house or apartment with 5 other person</label></li>
              <li>
              <input type="radio" name="option" value="2" onChange={handleOptionChange}/>
                <label >you share a house or apartment with more than 5 other people</label></li>
            </ul>
                  </div>
                )
              }
              {/* 2 */}
              <div className="flex items-center justify-start gap-8 my-0">
                <div className="w-[2px] h-12 border-2 border-white flex flex-col items-center justify-center">
                  <div className="w-3 h-3  rounded-full bg-red-500"></div>
                </div>
                <div onClick={()=>{setHouse(!house)}}
                className="cursor-pointer">House-Size*</div>
              </div>
              {
                house && (<div className="w-full flex justify-center items-center bg-[#2d7d9f]  p-5 lg:p-7 rounded-lg ml-3">
                <ul class="list-none">
                <li>
                <input type="radio" name="option" value="10" onChange={handleOptionChange}/>
                  <label >you have a large house</label></li>
                <li>
                <input type="radio" name="option" value="7" onChange={handleOptionChange}/>
                  <label >you have a medium-sized house</label></li>
                <li>
                <input type="radio" name="option" value="4" onChange={handleOptionChange}/>
                  <label >you have a small-sized house</label></li>
                <li>
                <input type="radio" name="option" value="2" onChange={handleOptionChange}/>
                  <label >you live in an apartment</label></li>
              </ul>
                  </div>)
                }
              {/* 3 */}
              <div className="flex items-center justify-start gap-8 my-0">
                <div className="w-[2px] h-12 border-2 border-white flex flex-col items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                </div>
                <div onClick={()=>{setDiet(!diet)}} className="cursor-pointer">Preferred diet</div>
              </div>
              {
                diet && (<div className="w-full flex justify-center items-center bg-[#2d7d9f] mx-auto p-5 lg:p-7 ml-3 -z-20 rounded-lg">
                <ul class="list-none">
              <li>
              <input type="radio" name="option" value="10" onChange={handleOptionChange}/>
                <label >you eat domestic meat on a daily basis</label></li>
              <li>
              <input type="radio" name="option" value="8" onChange={handleOptionChange}/>
                <label >you eat domestic meat a few times per week</label></li>
              <li>
              <input type="radio" name="option" value="4" onChange={handleOptionChange}/>
                <label >you are a vegetarian</label></li>
              <li>
              <input type="radio" name="option" value="2" onChange={handleOptionChange}/>
                <label >you are a vegan or only eat wild meat</label></li>
              
              <li>
              <input type="radio" name="option" value="2" onChange={handleOptionChange}/>
                <label >you only eat fresh, locally grown or hunted food</label></li>
            </ul>
                </div>)
                }
              {/* 4 */}
              <div className="flex items-center justify-start gap-8 my-0">
                <div className="w-[2px] h-12 border-2 border-white flex flex-col items-center justify-center">
                  <div className="w-3 h-3  rounded-full bg-red-500"></div>
                </div>
                <div onClick={()=>{setPack(!pack)}} className="cursor-pointer">Package food</div>
              </div>
              {
                pack && (<div className="w-full flex justify-start items-center bg-[#2d7d9f] mx-auto p-5 lg:p-7 ml-3 -z-20 rounded-lg">
                <ul class="list-none">
                <li>
                  <input type="radio" name="option" value="12" onChange={handleOptionChange}/>
                    <label >most of the food you eat is prepackaged convenience food, such as frozen pizza, cereal, and potato chips</label></li>
                  <li>
                  <input type="radio" name="option" value="6" onChange={handleOptionChange}/>
                    <label >you have a good balance of fresh and convenience food</label></li>
                </ul>
                </div>)
                }
              {/* 5 */}
              <div className="flex items-center justify-start gap-8 my-0">
                <div className="w-[2px] h-12  border-2 border-white flex flex-col items-center justify-center ">
                  <div className="w-3 h-3  rounded-full bg-red-500"></div>
                </div>
                <div onClick={()=>{setdish(!dish)}} className="cursor-pointer">Dish Washer</div>
              </div>
              { dish && <div className="w-full flex justify-start items-center bg-[#2d7d9f] mx-auto p-5 lg:p-7 ml-3 -z-20 rounded-lg">
              <ul class="list-none">
          <li>
          <input type="radio" name="option" value="3" onChange={handleOptionChange}/>
            <label >you run it more than 9 times per week</label></li>
          <li>
          <input type="radio" name="option" value="2" onChange={handleOptionChange}/>
            <label >you run it 4 to 9 times</label></li>
          <li>
          <input type="radio" name="option" value="1" onChange={handleOptionChange}/>
            <label >you run it 1 to 3 times</label></li>
        </ul>
            </div>}
              {/* 6 */}
              <div className="flex items-center justify-start gap-8 my-0">
                <div className="w-[2px] h-12  border-2 border-white flex flex-col items-center justify-center">
                  <div className="w-3 h-3  rounded-full bg-red-500"></div>
                </div>
                <div onClick={()=>{setPurchase(!purchase)}} className="cursor-pointer">Household Purchases</div>
              </div>
              {
                purchase && (<div className="w-full flex justify-center items-center bg-[#2d7d9f] mx-auto p-5 lg:p-7 ml-3 -z-20 rounded-lg">
                <ul class="list-none">
                <li>
                <input type="radio" name="option" value="10" onChange={handleOptionChange}/>
                  <label >you buy more than 7 new pieces of furniture, electronics, or other household gadgets per year</label></li>
                <li>
                <input type="radio" name="option" value="8" onChange={handleOptionChange}/>
                  <label >you purchase between 5 and 7 items</label></li>
                <li>
                <input type="radio" name="option" value="6" onChange={handleOptionChange}/>
                  <label >you purchase between 3 and 5 items</label></li>
                <li>
                <input type="radio" name="option" value="4" onChange={handleOptionChange}/>
                  <label >you purchase less than 3 items</label></li>
                <li>
                <input type="radio" name="option" value="2" onChange={handleOptionChange}/>
                  <label >you purchase almost nothing or only secondhand items</label></li>
              </ul>
                </div>)
                }
              {/* 7 */}
              <div className="flex items-center justify-start gap-8 my-0">
                <div className="w-[2px] h-12 border-2 border-white flex flex-col items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                </div>
                <div onClick={()=>{setMachine(!machine)}} className="cursor-pointer">Washing Machine</div>
              </div>
              { machine && <div className="w-full flex justify-start items-center bg-[#2d7d9f] mx-auto p-5 lg:p-7 ml-3 -z-20 rounded-lg">
                  <ul class="list-none">
              <li>
              <input type="radio" name="option" value="3" onChange={handleOptionChange}/>
                <label >you run it more than 9 times per week</label></li>
              <li>
              <input type="radio" name="option" value="2" onChange={handleOptionChange}/>
                <label >you run it 4 to 9 times</label></li>
              <li>
              <input type="radio" name="option" value="1" onChange={handleOptionChange}/>
                <label >you run it 1 to 3 times</label></li>
            </ul>
                </div>}
              {/* 8 */}
              <div className="flex items-center justify-start gap-8 my-0">
                <div className="w-[2px] h-12 border-2 border-white flex flex-col items-center justify-center">
                  <div className="w-3 h-3  rounded-full bg-red-500"></div>
                </div>
                <div onClick={()=>{setCans(!cans)}} className="cursor-pointer">Garbage Cans</div>
              </div>
              {
                cans && (<div className="w-full flex justify-center items-center bg-[#2d7d9f] mx-auto p-5 lg:p-7 ml-3 -z-20 rounded-lg">
                <ul class="list-none">
            <li>
            <input type="radio" name="option" value="50" onChange={handleOptionChange}/>
              <label >you fill 4 garbage cans each week</label></li>
            <li>
            <input type="radio" name="option" value="40" onChange={handleOptionChange}/>
              <label >you fill 3 garbage cans each week</label></li>
            <li>
            <input type="radio" name="option" value="30" onChange={handleOptionChange}/>
              <label >you fill 2 garbage cans per week</label></li>
            <li>
            <input type="radio" name="option" value="20" onChange={handleOptionChange}/>
              <label >you fill 1 garbage can per week</label></li>
            <li>
            <input type="radio" name="option" value="5" onChange={handleOptionChange}/>
              <label >you fill half of a garbage can or less per week</label></li>
          </ul>
                </div>)
              }
              {/* 9 */}
              <div className="flex items-center justify-start gap-8 my-0">
                <div className="w-[2px] h-12 border-2 border-white flex flex-col items-center justify-center">
                  <div className="w-3 h-3  rounded-full bg-red-500"></div>
                </div>
                <div onClick={()=>{setFlight(!flight)}} className="cursor-pointer">Flight*</div>
              </div>
              {
                flight && (<div className="w-full flex justify-center items-center bg-[#2d7d9f] mx-auto p-5 lg:p-7 ml-3 -z-20 rounded-lg">
                <ul class="list-none">
                <li>
                <input type="radio" name="option" value="2" onChange={handleOptionChange}/>
                  <label >you only travel short distances in 1 year, such as within your state</label></li>
                <li>
                <input type="radio" name="option" value="6" onChange={handleOptionChange}/>
                  <label >you travel further distances, such as to a nearby state or country</label></li>
                <li>
                <input type="radio" name="option" value="20" onChange={handleOptionChange}/>
                  <label >you travel far, such as to another continent</label></li>
              </ul>
                </div>)
              }
              {/* 10*/}
              <div className="flex items-center justify-start gap-8 my-0">
                <div className="w-[2px] h-12 border-2 border-white flex flex-col items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                </div>
                <div onClick={()=>{setPersonal(!personal)}} className="cursor-pointer"  >Personal Transport</div>
              </div>
              {
                personal && (<div className="w-full flex justify-center items-center bg-[#2d7d9f] mx-auto p-5 lg:p-7 ml-3 -z-20 rounded-lg">
                <ul class="list-none">
          <li>
          <input type="radio" name="option" value="12" onChange={handleOptionChange}/>
            <label >you travel more than 15,000 miles per year</label></li>
          <li>
          <input type="radio" name="option" value="10" onChange={handleOptionChange}/>
            <label >you travel 10,000 to 15,000 miles per year</label></li>
          <li>
          <input type="radio" name="option" value="6" onChange={handleOptionChange}/>
            <label >you travel 1,000 to 10,000 miles per year</label></li>
          <li>
          <input type="radio" name="option" value="4" onChange={handleOptionChange}/>
            <label >you travel less than 1,000 miles per year</label></li>
          <li>
          <input type="radio" name="option" value="0" onChange={handleOptionChange}/>
            <label >you dont have a car</label></li>
        </ul>
                </div>)
              }
              {/* 11*/}
              <div className="flex items-center justify-start gap-8 my-0">
                <div className="w-[2px] h-12 border-2 border-white flex flex-col items-center justify-center">
                  <div className="w-3 h-3  rounded-full bg-red-500"></div>
                </div>
                <div onClick={()=>{setPublic(!publict)}} className="cursor-pointer">Public Transport</div>
              </div>
            </div>
            {
              publict && (
                <div className="w-full flex justify-center items-center bg-[#2d7d9f] mx-auto p-5 lg:p-7 -z-20 ml-3 rounded-lg">
                <form></form>
                <ul class="list-none">
                <li>
                <input type="radio" name="option" value="12" onChange={handleOptionChange}/>
                  <label >you travel more than 20,000 miles per year</label></li>
                <li>
                <input type="radio" name="option" value="10" onChange={handleOptionChange}/>
                  <label >you travel 15,000 to 20,000 miles per year</label></li>
                <li>
                <input type="radio" name="option" value="6" onChange={handleOptionChange}/>
                  <label >you travel 10,000 to 15,000 miles per year</label></li>
                <li>
                <input type="radio" name="option" value="4" onChange={handleOptionChange}/>
                  <label >you travel 1,000 to 10,000 miles per year</label></li>
                <li>
                <input type="radio" name="option" value="2" onChange={handleOptionChange}/>
                  <label >less than 1,000 miles per year</label></li>
                <li>
                <input type="radio" name="option" value="0" onChange={handleOptionChange}/>
                  <label >do not use public transportation</label></li>
              </ul>
              </div>)
            }
            </div>
            {/* Right side */}
            <div>
              <div className="text-lg py-4">Your Score</div>
              <div className="w-24 h-24 rounded-full border-8 border-[#00bd57] flex justify-center items-center">
                {score}
              </div>
            </div>
          </div>
        </section>
       {/* <div className="w-full flex items-center justify-center">
          <button className="text-lg md:text-xl bg-[#00BD57] py-0 md:py-1 px-4 md:px-auto rounded-tl-xl rounded-br-xl rounded-tr-sm rounded-bl-sm hover:shadow-md hover:shadow-green-300 duration-200 ease-out">
           
            <div className="py-1 flex justify-between items-center gap-2 md:gap-2">
              <p>Calculate Now</p>
              <div className="text-lg">
                <BsArrowRight />
              </div>
            </div>
          </button>
              </div>*/}
      </div>
      <div className="w-10 h-10 rounded-full bg-orange-400 absolute top-[18rem] left-[2.5rem]"></div>
      <div className="w-6 h-6 rounded-full bg-yellow-400 absolute top-[44rem] left-[5rem]"></div>
      <div className="w-6 h-6 rounded-full bg-yellow-400 absolute top-[10rem] left-[15rem] md:left-[32rem]"></div>
    </>
  );
};

export default Calculation;