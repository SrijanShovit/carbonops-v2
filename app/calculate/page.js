import Logo from "../../public/images/Carbonops.png";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

// import Link from "next/link";
const Calculate = () => {
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
                294
              </div>
            </div>
          </div>
        </section>
        <div className="w-full flex items-center justify-center">
          <button className="text-lg md:text-xl bg-[#00BD57] py-0 md:py-1 px-4 md:px-auto rounded-tl-xl rounded-br-xl rounded-tr-sm rounded-bl-sm hover:shadow-md hover:shadow-green-300 duration-200 ease-out">
            {/* Desktop Image */}
            <div className="py-1 flex justify-between items-center gap-2 md:gap-2">
              <p>Calculate Now</p>
              <div className="text-lg">
                <BsArrowRight />
              </div>
            </div>
          </button>
        </div>
      </div>
      <div className="w-10 h-10 rounded-full bg-orange-400 absolute top-[18rem] left-[2.5rem]"></div>
      <div className="w-6 h-6 rounded-full bg-yellow-400 absolute top-[44rem] left-[5rem]"></div>
      <div className="w-6 h-6 rounded-full bg-yellow-400 absolute top-[10rem] left-[15rem] md:left-[32rem]"></div>
    </>
  );
};

export default Calculate;
