"use client"
import Logo from "../../public/images/Carbonops.png";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { useState } from "react";
import { Link as ScrollLink } from 'react-scroll';
// import Link from "next/link";
const Calculate = () => {
  const [open,setOpen]=useState(false)
  const [recscore,setRecscore]=useState(24);
  const [score, setScore] = useState(0);
  
  const [recycCat, setRecyclCat] = useState({
    glass: false,
    plastic: false,
    paper: false,
    aluminum: false,
    steel: false,
    foodWaste: false,
  });
  const handleCheckboxChange = (category) => {
    const updatedCategories = { ...recycCat, [category]: !recycCat[category] };
    setRecyclCat(updatedCategories);
    calculateScore(updatedCategories);
  };
  const calculateScore = (categories) => {
    let updatedScore = 24;

    Object.keys(categories).forEach((category) => {
      if (categories[category]) {
        updatedScore -= 4;
      }
    });

    setRecscore(updatedScore);
  };
  var total
  const handleOptionChange = (event) => {
    const optionValue = parseInt(event.target.value);
    setScore(score + optionValue);
  };
  if(recscore===24)
   total=score;
  if(recscore<24){
    total=score+recscore; }
      

  return (
    <>
      <div className="w-full h-screen relative">
        {/* Nav */}
        <div className="w-full flex justify-between items-center px-6 md:px-12 py-4">
          <div>
            <Image src={Logo} height={200} width={200} alt="Carbonops" />
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
            <div>
              {/* 1 */}
              <div className="flex items-center justify-start gap-8 my-0">
                <div className="w-[2px] h-12 border-2 border-white flex flex-col items-center justify-center">
                  <div className="w-3 h-3  rounded-full bg-red-500"></div>
                </div>
                <div>Members*</div>
              </div>

              {/* 2 */}
              <div className="flex items-center justify-start gap-8 my-0">
                <div className="w-[2px] h-12 border-2 border-white flex flex-col items-center justify-center">
                  <div className="w-3 h-3  rounded-full bg-red-500"></div>
                </div>
                <div>House-Size*</div>
              </div>
              {/* 3 */}
              <div className="flex items-center justify-start gap-8 my-0">
                <div className="w-[2px] h-12 border-2 border-white flex flex-col items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                </div>
                <div>Preferred diet</div>
              </div>
              {/* 4 */}
              <div className="flex items-center justify-start gap-8 my-0">
                <div className="w-[2px] h-12 border-2 border-white flex flex-col items-center justify-center">
                  <div className="w-3 h-3  rounded-full bg-red-500"></div>
                </div>
                <div>Package food</div>
              </div>
              {/* 5 */}
              <div className="flex items-center justify-start gap-8 my-0">
                <div className="w-[2px] h-12  border-2 border-white flex flex-col items-center justify-center">
                  <div className="w-3 h-3  rounded-full bg-red-500"></div>
                </div>
                <div>Dish Washer</div>
              </div>
              {/* 6 */}
              <div className="flex items-center justify-start gap-8 my-0">
                <div className="w-[2px] h-12  border-2 border-white flex flex-col items-center justify-center">
                  <div className="w-3 h-3  rounded-full bg-red-500"></div>
                </div>
                <div>Household Purchases</div>
              </div>
              {/* 7 */}
              <div className="flex items-center justify-start gap-8 my-0">
                <div className="w-[2px] h-12 border-2 border-white flex flex-col items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                </div>
                <div>Washing Machine</div>
              </div>
              {/* 8 */}
              <div className="flex items-center justify-start gap-8 my-0">
                <div className="w-[2px] h-12 border-2 border-white flex flex-col items-center justify-center">
                  <div className="w-3 h-3  rounded-full bg-red-500"></div>
                </div>
                <div>Garbage Cans</div>
              </div>
              {/* 9 */}
              <div className="flex items-center justify-start gap-8 my-0">
                <div className="w-[2px] h-12 border-2 border-white flex flex-col items-center justify-center">
                  <div className="w-3 h-3  rounded-full bg-red-500"></div>
                </div>
                <div>Flight*</div>
              </div>
              {/* 10*/}
              <div className="flex items-center justify-start gap-8 my-0">
                <div className="w-[2px] h-12 border-2 border-white flex flex-col items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                </div>
                <div>Personal Transport</div>
              </div>
              {/* 11*/}
              <div className="flex items-center justify-start gap-8 my-0">
                <div className="w-[2px] h-12 border-2 border-white flex flex-col items-center justify-center">
                  <div className="w-3 h-3  rounded-full bg-red-500"></div>
                </div>
                <div>Public Transport</div>
              </div>
            </div>
            {/* Right side */}
            <div>
              <div className="text-lg py-4">Your Score</div>
              <div className="w-24 h-24 rounded-full border-8 border-[#00bd57] flex justify-center items-center">
               {total}
              </div>
            </div>
          </div>
        </section>
        <div className="w-full flex items-center justify-center">
        <ScrollLink
            activeClass="active"
            to="calc"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
          <button className="text-lg md:text-xl bg-[#00BD57] py-0 md:py-1 px-4 md:px-auto rounded-tl-xl rounded-br-xl rounded-tr-sm rounded-bl-sm hover:shadow-md hover:shadow-green-300 duration-200 ease-out">
          {/* Desktop Image */}
          <div className="py-1 flex justify-between items-center gap-2 md:gap-2"
          onClick={
            ()=>{
              setOpen(!open)
              }}>
            <p>Calculate Now</p>
          </div>
        </button>          </ScrollLink>
        
        
        
        <div className="w-10 h-10 rounded-full bg-orange-400 absolute top-[18rem] left-[2.5rem]"></div>
        <div className="w-6 h-6 rounded-full bg-yellow-400 absolute top-[44rem] left-[5rem]"></div>
        <div className="w-6 h-6 rounded-full bg-yellow-400 absolute top-[5rem] left-[15rem] md:left-[32rem]"></div>
        </div>
        {
          open?(
            <div  className='mt-20' id="calc">
            <div className="w-full mx-auto text-center mb-16 mt-10">
                  <p className="text-3xl md:text-4xl font-semibold text-white">
                    Calculate  <span className='text-[#00BD57]'>Footprint</span> Now
                  </p>
                </div>
              <section className='text-lg md:text-xl mx-auto text-white w-[65%] font-semibold justify-center items-center  '>
              <div className='flex flex-col gap-6 '>
              <form action="">
              <div  className="flex flex-col gap-3 mb-6 bg-[#7CBA98] rounded-2xl p-5">Members*
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
              <input type="radio" name="option" value="4"onChange={handleOptionChange}/>
                <label >you share a house or apartment with 5 other person</label></li>
              <li>
              <input type="radio" name="option" value="2" onChange={handleOptionChange}/>
                <label >you share a house or apartment with more than 5 other people</label></li>
            </ul></div>
              </form>
              </div>
              <form action="">
              <div  className="flex flex-col gap-3 mb-6 bg-[#419e6b] rounded-2xl p-5">House Size
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
            </div>
            </form>
            <form action="">
            <div  className="flex flex-col gap-3 mb-6 bg-[#7CBA98] rounded-2xl p-5">Prefered Diet
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
            </div>
            </form>
            <form>
            <div className="flex flex-col gap-3 mb-6 bg-[#419e6b] rounded-2xl p-5">Package food
            <ul class="list-none">
            <li>
              <input type="radio" name="option" value="12" onChange={handleOptionChange}/>
                <label >most of the food you eat is prepackaged convenience food, such as frozen pizza, cereal, and potato chips</label></li>
              <li>
              <input type="radio" name="option" value="6" onChange={handleOptionChange}/>
                <label >you have a good balance of fresh and convenience food</label></li>
            </ul>
            </div>
            </form>
            <form>
            <div  className="flex flex-col gap-3 mb-6 bg-[#7CBA98] rounded-2xl p-5"> Dishwasher or washing machine
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
            </div>
            </form>
            <form>
            <div  className="flex flex-col gap-3 mb-6 bg-[#419e6b] rounded-2xl p-5"> Dishwasher and washing machine
              <ul class="list-none">
              <li>
              <input type="radio" name="option" value="6" onChange={handleOptionChange}/>
                <label >you run it more than 9 times per week</label></li>
              <li>
              <input type="radio" name="option" value="4" onChange={handleOptionChange}/>
                <label >you run it 4 to 9 times</label></li>
              <li>
              <input type="radio" name="option" value="2" onChange={handleOptionChange}/>
                <label >you run it 1 to 3 times</label></li>
            </ul>
            </div>
            </form>
            <form>
            <div  className="flex flex-col gap-3 mb-6 bg-[#7CBA98] rounded-2xl p-5"> Household purchases
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
            </div>
            </form>
            <form>
            <div  className="flex flex-col gap-3 mb-6 bg-[#419e6b] rounded-2xl p-5"> Garbage Cans
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
            </div></form>
            <form>
            <div  className="flex flex-col gap-3 mb-6 bg-[#7CBA98] rounded-2xl p-5"> Waste recycled
              <ul class="list-none">
              <li>
              <input type="radio" name="option" value="24" onChange={handleOptionChange}/>
                <label className='mb-3' >you do not recycle</label></li>
              <label>You do recycle</label>
              <li>
              <input type="checkbox"
              checked={recycCat.glass}
              onChange={() => handleCheckboxChange('glass')}/>
                <label >Glass</label></li>
              <li>
              <input 
              type="checkbox"
                    checked={recycCat.plastic}
                    onChange={() => handleCheckboxChange('plastic')}/>
                <label >Plastic</label></li>
              <li>
              <input type="checkbox"
              checked={recycCat.paper}
              onChange={() => handleCheckboxChange('paper')}/>
                <label >Paper</label></li>
              <li>
              <input type="checkbox"
              checked={recycCat.aluminum}
              onChange={() => handleCheckboxChange('aluminum')}/>
                <label >Aluminium</label></li>
              <li>
              <input type="checkbox"
              checked={recycCat.steel}
              onChange={() => handleCheckboxChange('steel')}/>
                <label >Steel</label></li>
              <li>
              <input type="checkbox"
              checked={recycCat.foodWaste}
              onChange={() => handleCheckboxChange('foodWaste')}/>
                <label >Food waste(Composting)</label></li>
            </ul>
            </div></form>
            <form>
            <div className="flex flex-col gap-3 mb-6 bg-[#419e6b] rounded-2xl p-5">Flight
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
            </div></form>
            <form action="">
            <div className="flex flex-col gap-3 mb-6 bg-[#7CBA98] rounded-2xl p-5">Personal Transport
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
            </div></form>
            <form action="">
            <div className="flex flex-col gap-3 mb-6 bg-[#419e6b] rounded-2xl p-5">Public Transport
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
            </div></form>
            <Link href="/calculate">
            <button className="text-lg md:text-xl bg-[#00BD57] py-0 md:py-1 px-4 md:px-auto rounded-tl-xl rounded-br-xl rounded-tr-sm rounded-bl-sm hover:shadow-md hover:shadow-green-300 duration-200 ease-out mx-auto mb-20"
            >
                      <div className="p-2 ">
                        <p>Know your value</p>
                      </div> 
                    </button>
            </Link>
            
              </section>
              
             
            </div> 
          ):
          (
            <div></div>
          )
        }
      </div>
      
    </>
  );
};

export default Calculate;
