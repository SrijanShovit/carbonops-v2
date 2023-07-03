import Image from "next/image";
const Graph = () => {
  return (
    <>
      <div className="my-40">
        <div className="md:w-[80%] mx-auto flex flex-col-reverse md:flex-row justify-center items-start gap-12 md:gap-16">
          {/* left */}
          <div className=" w-full md:flex-1">
            <div className=" h-60 text-center rounded-md">
              <Image
                src={"/images/homepage/graph.png"}
                height={500}
                width={500}
                alt="The Carbon Graph"
              />
            </div>
          </div>
          {/* right */}
          <div className="flex-1">
            <div className="flex flex-col gap-8 items-center md:items-start">
              <h2 className="text-4xl">
                The Carbon <span className="text-[#00BD57]">Graph</span>
              </h2>
              <h3 className="text-2xl text-center md:text-start">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Graph;
