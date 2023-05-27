import Image from "next/image";
const Organizations = () => {
  return (
    <>
      <div className="my-36">
        <div className="md:w-[80%] mx-auto">
          <h3 className="md:px-32 text-3xl text-center font-semibold">
            These are the best two top{" "}
            <span className="text-[#00BD57]">Organizations</span> which
            performed the best in the last contest
          </h3>
        </div>

        {/* Organizations */}
        <div className="md:w-[85%] mx-auto mt-16 flex flex-col md:flex-row gap-12 md:gap-8 justify-center items-center">
          {/* left */}
          <div className="flex-1 flex flex-col items-center justify-between">
            <div>
              <Image
                src="/../public/images/homepage/documents.png"
                width={330}
                height={330}
                alt="Mt Documens"
              />
            </div>
            <div className="w-[80%] mx-auto text-center text-lg">
              <h3>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took
              </h3>
              <div className="mt-4">
                <p>-Albus Dumbledore</p>
                <p>The Green Builders</p>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="flex-1 flex flex-col items-center justify-between">
            <div>
              <Image
                src="/../public/images/homepage/profile.png"
                width={280}
                height={280}
                alt="Profile"
              />
            </div>
            <div className="w-[80%] mx-auto text-center text-lg mt-8">
              <h3>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took
              </h3>
              <div className="mt-4">
                <p>-Albus Dumbledore</p>
                <p>The Green Builders</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Organizations;
