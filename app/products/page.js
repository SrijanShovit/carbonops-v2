import React from "react";
import Navbar from "@/components/products/Navbar";
import Image from "next/image";
import sampleImg from "../../public/images/homepage/documents.png";
import yellowStar from "../../public/images/products/yellowStar.png";
import grayStar from "../../public/images/products/grayStar.png";

const page = () => {
  const products = [
    {
      image: sampleImg,
      productName: "Product Name 1",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quis qui accusamus odit similique, expedita velit at cupiditate dolor iure? Laboriosam repudiandae quod pariatur necessitatibus expedita repellendus quidem cum repellat?",
      price: "₹100",
    },
    {
      image: sampleImg,
      productName: "Product Name 2",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quis qui accusamus odit similique, expedita velit at cupiditate dolor iure? Laboriosam repudiandae quod pariatur necessitatibus expedita repellendus quidem cum repellat?",
      price: "₹150",
    },
    {
      image: sampleImg,
      productName: "Product Name 3",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quis qui accusamus odit similique, expedita velit at cupiditate dolor iure? Laboriosam repudiandae quod pariatur necessitatibus expedita repellendus quidem cum repellat?",
      price: "₹1200",
    },
  ];

  return (
    <div className="w-[95%] mx-auto mt-4">
      <Navbar />
      {/* Organization name */}
      <div className="w-[95%] mx-auto flex justify-center items-center mt-4 mb-8">
        <h2 className="text-3xl sm:text-4xl text-[#53c6f2]">
          Organization Name
        </h2>
      </div>
      <div>
        {products.map((product) => {
          return (
            <div className="mt-4">
              <div className="w-[85%] mx-auto bg-[#12323f] flex flex-col sm:flex-row justify-between  sm:justify-between items-center gap-2 sm:px-4 py-2">
                <div className="sm:flex-1">
                  <Image
                    src={sampleImg}
                    height={300}
                    width={300}
                    alt="sample img"
                  />
                </div>
                {/* products card component */}
                <div className="sm:flex-1 flex flex-col items-start justify-between text-center sm:text-left px-6 sm:px-0 gap-6">
                  <div>
                    <h3 className="w-[22rem] sm:w-auto text-[#53c6f2] text-center text-2xl sm:text-3xl">
                      {product.productName}
                    </h3>
                  </div>
                  <div>
                    <div className="hidden sm:flex justify-between items-center gap-12">
                      <div className="flex flex-row justify-between items-center">
                        <Image
                          src={yellowStar}
                          height={25}
                          width={25}
                          alt="star"
                        />
                        <Image
                          src={yellowStar}
                          height={25}
                          width={25}
                          alt="star"
                        />
                        <Image
                          src={yellowStar}
                          height={25}
                          width={25}
                          alt="star"
                        />
                        <Image
                          src={yellowStar}
                          height={25}
                          width={25}
                          alt="star"
                        />
                        <Image
                          src={grayStar}
                          height={25}
                          width={25}
                          alt="star"
                        />
                      </div>
                      <div className="text-orange-400">{product.price}</div>
                    </div>
                  </div>
                  <div className="hidden sm:block">
                    <button className="text-lg md:text-xl bg-[#00BD57] px-2 md:px-auto rounded-tl-xl rounded-br-xl rounded-tr-sm rounded-bl-sm hover:shadow-md hover:shadow-green-300 duration-200 ease-out">
                      <div className="p-2 flex justify-between items-center gap-2 md:gap-2">
                        <p>Book Now</p>
                      </div>
                    </button>
                  </div>
                  {/* For mobile screen */}
                  <div className="sm:hidden mt-[-2rem]">
                    {product.description}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="hidden sm:block">
                    <h2 className="sm:text-[#00BD57] text-xl py-2 font-bold">
                      DESCRIPTION
                    </h2>
                    <p>{product.description}</p>
                  </div>
                </div>
                {/* For mobile screen */}
                <div className="sm:hidden">
                  <div className="w-[20rem] flex justify-between items-center">
                    <div className="flex flex-row justify-between items-center">
                      <Image
                        src={yellowStar}
                        height={25}
                        width={25}
                        alt="star"
                      />
                      <Image
                        src={yellowStar}
                        height={25}
                        width={25}
                        alt="star"
                      />
                      <Image
                        src={yellowStar}
                        height={25}
                        width={25}
                        alt="star"
                      />
                      <Image
                        src={yellowStar}
                        height={25}
                        width={25}
                        alt="star"
                      />
                      <Image src={grayStar} height={25} width={25} alt="star" />
                    </div>
                    <div className="text-orange-400">{product.price}</div>
                  </div>
                  <div className="text-center py-2">
                    <button className="text-lg md:text-xl bg-[#00BD57] -py-1 px-2 md:px-auto rounded-tl-xl rounded-br-xl rounded-tr-sm rounded-bl-sm hover:shadow-md hover:shadow-green-300 duration-200 ease-out">
                      <div className="p-2 flex justify-between items-center gap-2 md:gap-2">
                        <p>Book Now</p>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
