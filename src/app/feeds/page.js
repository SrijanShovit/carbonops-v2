import React from "react";
import Image from "next/image";
import { BsSortUp } from "react-icons/bs";
import { FaFilter } from "react-icons/fa";

const page = () => {
  const feeds = [
    {
      id: 1,
      title: "Good Will hunting",
      year: 1992,
      genre: "plot/love",
      imageUrl: "/images/homepage/documents.png",
      alt: "sample img",
      description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Dolores ipsum ut doloremque id ratione aut, eveniet,
      perspiciatis quo velit molestias similique totam distinctio
      minima impedit rerum, nisi esse? Totam voluptate in obcaecati
      est perspiciatis incidunt iure esse sit aut qui`,
      yellowStarImgUrl: "/images/products/yellowStar.png",
      grayStarImgUrl: "/images/products/grayStar.png",
      name: "Jhon Doe",
      date: "Oct 18,2017",
    },
    {
      id: 2,
      title: "Good Will hunting",
      year: 1992,
      genre: "plot/love",
      imageUrl: "/images/homepage/documents.png",
      alt: "sample img",
      description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Dolores ipsum ut doloremque id ratione aut, eveniet,
      perspiciatis quo velit molestias similique totam distinctio
      minima impedit rerum, nisi esse? Totam voluptate in obcaecati
      est perspiciatis incidunt iure esse sit aut qui`,
      yellowStarImgUrl: "/images/products/yellowStar.png",
      grayStarImgUrl: "/images/products/grayStar.png",
      name: "Jhon Doe",
      date: "Oct 18,2017",
    },
    {
      id: 3,
      title: "Good Will hunting",
      year: 1992,
      genre: "plot/love",
      imageUrl: "/images/homepage/documents.png",
      alt: "sample img",
      description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Dolores ipsum ut doloremque id ratione aut, eveniet,
      perspiciatis quo velit molestias similique totam distinctio
      minima impedit rerum, nisi esse? Totam voluptate in obcaecati
      est perspiciatis incidunt iure esse sit aut qui`,
      yellowStarImgUrl: "/images/products/yellowStar.png",
      grayStarImgUrl: "/images/products/grayStar.png",
      name: "Jhon Doe",
      date: "Oct 18,2017",
    },
    {
      id: 4,
      title: "Good Will hunting",
      year: 1992,
      genre: "plot/love",
      imageUrl: "/images/homepage/documents.png",
      alt: "sample img",
      description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Dolores ipsum ut doloremque id ratione aut, eveniet,
      perspiciatis quo velit molestias similique totam distinctio
      minima impedit rerum, nisi esse? Totam voluptate in obcaecati
      est perspiciatis incidunt iure esse sit aut qui`,
      yellowStarImgUrl: "/images/products/yellowStar.png",
      grayStarImgUrl: "/images/products/grayStar.png",
      name: "Jhon Doe",
      date: "Oct 18,2017",
    },
    {
      id: 5,
      title: "Good Will hunting",
      year: 1992,
      genre: "plot/love",
      imageUrl: "/images/homepage/documents.png",
      alt: "sample img",
      description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Dolores ipsum ut doloremque id ratione aut, eveniet,
      perspiciatis quo velit molestias similique totam distinctio
      minima impedit rerum, nisi esse? Totam voluptate in obcaecati
      est perspiciatis incidunt iure esse sit aut qui`,
      yellowStarImgUrl: "/images/products/yellowStar.png",
      grayStarImgUrl: "/images/products/grayStar.png",
      name: "Jhon Doe",
      date: "Oct 18,2017",
    },
    {
      id: 6,
      title: "Good Will hunting",
      year: 1992,
      genre: "plot/love",
      imageUrl: "/images/homepage/documents.png",
      alt: "sample img",
      description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Dolores ipsum ut doloremque id ratione aut, eveniet,
      perspiciatis quo velit molestias similique totam distinctio
      minima impedit rerum, nisi esse? Totam voluptate in obcaecati
      est perspiciatis incidunt iure esse sit aut qui`,
      yellowStarImgUrl: "/images/products/yellowStar.png",
      grayStarImgUrl: "/images/products/grayStar.png",
      name: "Jhon Doe",
      date: "Oct 18,2017",
    },
  ];
  return (
    <div className="md:m-12 md:mt-8 m-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="font-bold">DASHBOARD</h1>
        <div className="flex flex-row-reverse justify-center items-center gap-2">
          <h2 className="hidden sm:block">Sort</h2>
          <div className="text-2xl">
            <BsSortUp />
          </div>
        </div>
      </div>
      {/* Searchbar */}
      <div className="mt-4 w-full flex justify-center items-center">
        <div className=" bg-slate-50 flex justify-center items-center gap-2 px-2 rounded-sm">
          <input
            type="text"
            className="md:w-[40rem] w-[20rem] py-1 bg-transparent rounded-sm focus:outline-none outline-none text-black"
          />
          <div className="flex justify-center items-center gap-1">
            <div className="text-black">
              <FaFilter />
            </div>
            <h3 className="text-black">Filter</h3>
          </div>
        </div>
      </div>

      {/* Feeds */}
      <div className="md:mt-16 mt-12 flex flex-col md:gap-y-16 gap-12 sm:flex-row justify-evenly items-start flex-wrap">
        {feeds.map((feed) => {
          return (
            <section key={feed.id}>
              {/* Feed Card */}
              <div className="sm:w-[24rem] sm:max-w-[28rem]  flex flex-col justify-between items-start p-2 bg-[#183943] gap-2 rounded-sm">
                <div className="w-full flex justify-start items-center gap-2 bg-emerald-700 rounded-sm shadow-md">
                  <div>
                    <Image
                      src={feed.imageUrl}
                      height={75}
                      width={75}
                      alt="sample img"
                    />
                  </div>
                  <div className="flex flex-col justify-between text-gray-200">
                    <h2 className="text-xl font-bold ">{feed.title}</h2>
                    <h3>
                      <span>{feed.year}</span> <span>{feed.genre}</span>
                    </h3>
                  </div>
                </div>
                <div className="flex justify-start items-center gap-1">
                  <Image
                    src={feed.yellowStarImgUrl}
                    height={20}
                    width={20}
                    alt="star"
                  />
                  <Image
                    src={feed.yellowStarImgUrl}
                    height={20}
                    width={20}
                    alt="star"
                  />
                  <Image
                    src={feed.yellowStarImgUrl}
                    height={20}
                    width={20}
                    alt="star"
                  />
                  <Image
                    src={feed.yellowStarImgUrl}
                    height={20}
                    width={20}
                    alt="star"
                  />
                  <Image
                    src={feed.grayStarImgUrl}
                    height={20}
                    width={20}
                    alt="star"
                  />
                </div>
                <div className="text-gray-200 ">
                  <p>{feed.description}</p>
                </div>
                <div className="w-full flex justify-between items-center text-gray-200 text-sm">
                  <h3>{feed.name}</h3>
                  <h3>{feed.date}</h3>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};
export default page;
