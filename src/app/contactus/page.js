import Navbar from "@/components/Navbar";
import { AiOutlineMail } from "react-icons/ai";
import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
function Contact() {
  const emailColor = "#FF0000"; // Red
  const twitterColor = "#1DA1F2"; // Twitter Blue
  const instagramColor = "#E4405F"; // Instagram Pink
  const linkedinColor = "#0077B5";
  return (
    <div className="mt-14">
      <div>
      <div className="bg-[transparent] py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-white text-center text-2xl font-bold  md:mb-6 lg:text-3xl">Please share your feedback it is highly appreciated</h2>

            <p className="mx-auto max-w-screen-md text-center text-gray-100 md:text-lg">Welcome to our feedback page! We value your opinions and insights, as they help us improve and provide you with a better experience. Whether you have suggestions, questions, or comments about our products, services, or website, this is the place to share them.</p>
          </div>
          <form className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2">
            <div>
              <label for="first-name" className="mb-2 inline-block text-sm  sm:text-base">First name*</label>
              <input name="first-name" className="w-full rounded border bg-gray-50 px-3 py-2  outline-none ring-indigo-300 transition duration-100 focus:ring" />
            </div>

            <div>
              <label for="last-name" className="mb-2 inline-block text-sm text-white sm:text-base">Last name*</label>
              <input name="last-name" className="w-full rounded border bg-gray-50 px-3 py-2 text-white outline-none ring-indigo-300 transition duration-100 focus:ring" />
            </div>

           

            <div className="sm:col-span-2">
              <label for="email" className="mb-2 inline-block text-sm text-white sm:text-base">Email*</label>
              <input name="email" className="w-full rounded border bg-gray-50 px-3 py-2 text-white outline-none ring-indigo-300 transition duration-100 focus:ring" />
            </div>


            <div className="sm:col-span-2">
              <label for="message" className="mb-2 inline-block text-sm text-white sm:text-base">Feedback*</label>
              <textarea name="message" className="h-64 w-full rounded border bg-gray-50 px-3 py-2 text-white outline-none ring-indigo-300 transition duration-100 focus:ring"></textarea>
            </div>

            <div className="flex items-center justify-between sm:col-span-2">
              <button className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Submit Feedback</button>

            </div>

            
          </form>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Contact;