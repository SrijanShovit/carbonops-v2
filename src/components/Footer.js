import Image from "next/image";
const Footer = () => {
  return (
    <>
      <div className="w-[100%] bg-[#12323f] py-12">
        <div className="md:w-[85%] mx-auto flex justify-between flex-col md:flex-row md:gap-12">
          <div className="md:w-1/4 flex flex-col justify-between items-center gap-4 md:gap-[1.5rem]">
            <div>
              <Image
                src="/images/Carbonops.png"
                width={280}
                height={280}
                alt="Carbonops"
              />
            </div>
            <h3 className="text-lg">Terms and Conditions</h3>
          </div>
          <div className="md:w-1/4 flex flex-col justify-between items-center gap-4 mt-12 md:gap-[1.5rem]">
            <div>
              <h2 className="text-3xl font-semibold text-[#00BD57]">
                About Us
              </h2>
            </div>
            <h3 className="text-lg">Copyright © Carbonops</h3>
          </div>
          <div className="md:w-1/4 flex flex-col justify-between items-center gap-4 mt-12 md:gap-[1.5rem]">
            <div>
              <h2 className="text-3xl font-semibold text-[#00BD57]">
                Contact Us
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <a
                className="hover:cursor-pointer"
                href="https://google.com"
                target="_blank"
              >
                <Image
                  src="/images/footer/Google.png"
                  width={35}
                  height={35}
                  alt="Carbonops Google"
                  className="hover:w-10 hover:h-10 hover:bg-gray-200 hover:border hover:border-gray-200 hover:rounded-full"
                />
              </a>
              <a
                className="hover:cursor-pointer"
                href="https://facebook.com"
                target="_blank"
              >
                <Image
                  src="/images/footer/Facebook.png"
                  width={35}
                  height={35}
                  alt="Carbonops Facebook"
                  className="hover:w-10 hover:h-10 hover:bg-gray-200 hover:border hover:border-gray-200 hover:rounded-full"
                />
              </a>
              <a
                className="hover:cursor-pointer"
                href="https://twitter.com"
                target="_blank"
              >
                <Image
                  src="/images/footer/Twitter.png"
                  width={35}
                  height={35}
                  alt="Carbonops Twitter"
                  className="hover:w-10 hover:h-10 hover:bg-gray-200 hover:border hover:border-gray-200 hover:rounded-full"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
