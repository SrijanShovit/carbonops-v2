import Card from "@/components/signup/Card";
import Image from "next/image";
import Link from "next/link";
const SignupAs = () => {
  return (
    <>
      <div className="w-full min-h-screen mt-36">
        <div className=" text-center ">
          <h1 className="text-4xl m-20  font-bold text-[#53c6f2]">
            SIGNUP AS
          </h1>
        </div>
        <div className="flex justify-center items-center gap-8 flex-col md:flex-row ">
          <Card>
            <div className="flex flex-col justify-between items-center py-4">
              <div className="py-0">
                <Image
                  src={"/images/signup/individual.png"}
                  height={350}
                  width={320}
                  alt="Individual image"
                  className="rounded-t-md"
                />
              </div>
              <div className="bg-[#12323f] w-[100%] rounded-b-md flex flex-col justify-center items-center">
                <div className="text-center py-6 text-lg text-[#00BD57]">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                    &apos;s standard
                  </p>
                </div>
                <div className="pb-4">
                  <Link
                    href="/signup/individual"
                    className="text-lg text-white bg-[#00BD57] py-2 px-8 rounded-tl-xl rounded-br-xl rounded-tr-sm rounded-bl-sm hover:shadow-md hover:shadow-green-300 duration-200 ease-out "
                  >
                    For individuals
                  </Link>
                </div>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex flex-col justify-between items-center py-4">
              <div className="py-0 ">
                <Image
                  src={"/images/signup/organizations.png"}
                  height={350}
                  width={320}
                  alt="Organization Image"
                  className="rounded-t-md"
                />
              </div>
              <div className="bg-[#12323f] w-[100%] rounded-b-md flex flex-col justify-center items-center">
                <div className="text-center py-6 text-lg text-[#00BD57]">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                    &apos;s standard
                  </p>
                </div>
                <div className="pb-4">
                  <Link
                    href="/signup/organization"
                    className="text-lg text-white bg-[#00BD57] py-2 px-8 rounded-tl-xl rounded-br-xl rounded-tr-sm rounded-bl-sm hover:shadow-md hover:shadow-green-300 duration-200 ease-out "
                  >
                    For Organizations
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <div className="w-36 h-36 md:w-60 md:h-60 bg-[#12323f] fixed -top-12 -left-16 -z-10 rounded-full"></div>
    </>
  );
};

export default SignupAs;
