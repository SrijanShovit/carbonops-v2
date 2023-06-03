import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import HeroImage from "../../public/images/homepage/Hero.png";
const Hero = () => {
  return (
    <>
      <div className="mt-20 md:mt-[12rem] w-[90%] mx-auto flex flex-col-reverse md:flex-row justify-center items-center gap-4">
        <div className="md:w-[40%] animate__animated animate__swing animation-duration: 3s; animate__delay-1s animate_slower">
          <div className="flex flex-col justify-center md:items-start items-center gap-2">
            <h2 className="text-center md:text-start text-4xl">
              A place to <span className="text-[#54ccfa]">calculate</span> and
              <span className="text-[#54ccfa]"> maintain</span> your
            </h2>
            <h1 className="text-4xl md:text-5xl font-semibold text-[#00BD57]  mb-8">
              Carbon Footprints
            </h1>
            <button className="text-lg md:text-xl bg-[#00BD57] py-0 md:py-1 px-4 md:px-auto rounded-tl-xl rounded-br-xl rounded-tr-sm rounded-bl-sm hover:shadow-md hover:shadow-green-300 duration-200 ease-out">
              {/* Desktop Image */}
              <div className="p-2 flex justify-between items-center gap-2 md:gap-2">
                <p>Calculate Now</p>
                <div className="text-lg">
                  <BsArrowRight />
                </div>
              </div>
            </button>
          </div>
        </div>
        <div>
          <Image className="animate__animated animate__zoomIn  animation-duration: 3s; animate__slow"
            src={HeroImage}
            width={600}
            height={600}
            alt="Carbonops hero image"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
