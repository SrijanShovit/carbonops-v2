const Graph = () => {
  return (
    <>
      <div className="my-40">
        <div className="md:w-[80%] mx-auto flex flex-col-reverse md:flex-row justify-center items-start gap-12 md:gap-16">
          {/* left */}
          <div className=" w-full md:flex-1">
            <div className="bg-[#113643] h-60 text-center rounded-md">
              Add graph here
            </div>
          </div>
          {/* right */}
          <div className="flex-1">
            <div className="flex flex-col gap-8 items-center md:items-start">
              <h2 className="text-4xl">
                The Carbon <sapn className="text-[#00BD57]">Graph</sapn>
              </h2>
              <h3 className="tex-3xl text-center md:text-start">
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
