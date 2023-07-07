import Navbar from "@/components/Navbar";
import { AiOutlineMail } from "react-icons/ai";
import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
function Contact() {
  const emailColor = "#FF0000"; // Red
  const twitterColor = "#1DA1F2"; // Twitter Blue
  const instagramColor = "#E4405F"; // Instagram Pink
  const linkedinColor = "#0077B5";
  return (
    <div className="">
      <Navbar />
      <div className="mt-[10rem] ml-[0rem] sm:ml-[3rem] mb-[4rem]">
        <div className="ml-[13%]">
          <button
            href="#"
            class="feedback-button font-extrabold bg-green-500 text-xl cursor-default hover:bg-green-600 text-white  py-2 px-4 rounded"
          >
            Feedback
          </button>
          <p className="text-white text-2xl mt-[2rem]">
            Please share your feedback. It is highly appreciated!
          </p>
        </div>

        <div className="flex flex-col items-center mt-4">
          <textarea
            className="w-[75%] feedback-textarea bg-lightgreen-200 resize-none border bg-green-200 border-gray-300 rounded-md p-2 h-[14rem] mb-2"
            placeholder="Enter your feedback"
          ></textarea>

          <button className="left-0 feedback-button sm:ml-[63%] bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            Submit Feedback
          </button>
        </div>
        <div className="ml-[12%] mt-12">
          <a
            href="#"
            className="contact-button bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          >
            Contact Us
          </a>
        </div>
        <div className="ml-[13%] mt-[2rem] flex sm:flex-col space-x-8 sm:space-x-0 sm:space-y-2 justify-center">
          <AiOutlineMail size={24} color={emailColor} />
          <FaTwitter size={24} color={twitterColor} />
          <FaInstagram size={24} color={instagramColor} />
          <FaLinkedinIn size={24} color={linkedinColor} />
        </div>
      </div>
    </div>
  );
}

export default Contact;
