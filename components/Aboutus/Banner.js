import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
const Banner = () => {
  return (
    <>
      <div className="mt-20 md:mt-[20vh] w-[100%] mx-auto flex flex-col-reverse md:flex-row justify-center items-center gap-10">
        <div>
          <Image
            src={"/images/signup/welcome_img.png"}
            width={400}
            height={400}
            alt="Carbonops hero image"
          />
        </div>
        <div className="md:w-[40%]">
          <div className="flex flex-col justify-center md:items-start items-center gap-2">
            <h2 className="text-4xl font-bold mx-4">Our Mission</h2>
            <p className="text-xl font-normal text-gray-200 mx-4 md:text-left text-center">At Carbonops&#44; our mission is to raise environmental awareness and drive action towards a greener planet. We are committed to providing individuals with the knowledge&#44; tools&#44; and resources they need to understand and reduce their carbon footprint. By creating a personalized accountancy platform&#44; we aim to empower individuals to track their environmental impact and take steps towards more sustainable choices in their everyday lives.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
