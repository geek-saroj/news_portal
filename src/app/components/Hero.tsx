"use client";
import { BaseUrl } from "../api/global";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { imageUrl } from "../utils/imageUrl";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import NepaliDate from "nepali-date-converter";
import { GrChapterNext } from "react-icons/gr";
import { GrChapterPrevious } from "react-icons/gr";
import RelativeTime from "../components/Convertdate";

const Hero: React.FC = () => {
  const router = useRouter();
  const [breakingNews, setBreakingNews] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 2; // Number of items to display per page

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${BaseUrl}/news?populate=*&filters[isbreakingnews][$eq]=true&sort[0]=id:desc&pagination[start]=${
            (currentPage - 1) * itemsPerPage
          }&pagination[limit]=${itemsPerPage}`
        );
        setBreakingNews(response?.data.data);
      } catch (error) {
        console.error("Error fetching breaking news:", error);
      }
    };
    fetchData();
  }, [currentPage]);

  const handleClick = (item: any) => {
    router.push(`/brekingnews/${item.id}`);
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  // Function to convert Gregorian date to Nepali date
  // const convertToRelativeTime = (date: string) => {
  //     const createdDate = new Date(date);
  //     const currentDate = new Date();
  //     const differenceInSeconds = Math.floor((currentDate.getTime() - createdDate.getTime()) / 1000);

  //     const secondsInMinute = 60;
  //     const secondsInHour = 3600;
  //     const secondsInDay = 86400;

  //     if (differenceInSeconds < secondsInMinute) {
  //         return `${Math.floor(differenceInSeconds)} seconds ago`;
  //     } else if (differenceInSeconds < secondsInHour) {
  //         const minutesAgo = Math.floor(differenceInSeconds / secondsInMinute);
  //         const remainingSeconds = differenceInSeconds % secondsInMinute;
  //         return `${minutesAgo} ${minutesAgo === 1 ? 'minute' : 'minutes'} ${remainingSeconds} ${remainingSeconds === 1 ? 'second' : 'seconds'} ago`;
  //     } else if (differenceInSeconds < secondsInDay) {
  //         const hoursAgo = Math.floor(differenceInSeconds / secondsInHour);
  //         const remainingMinutes = Math.floor((differenceInSeconds % secondsInHour) / secondsInMinute);
  //         return `${hoursAgo} ${hoursAgo === 1 ? 'hour' : 'hours'} ${remainingMinutes} ${remainingMinutes === 1 ? 'minute' : 'minutes'} ago`;
  //     } else {
  //         const daysAgo = Math.floor(differenceInSeconds / secondsInDay);
  //         return `${daysAgo} ${daysAgo === 1 ? 'day' : 'days'} ago`;
  //     }
  // };
  // console.log("breakingNews", breakingNews);

  return (
    <div className="max-w-[1127px] 2xl:max-w-[1180px] mx-auto my-10 px-[15px]  md:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-[50px] ">
        {breakingNews.map((item: any) => (
          <div key={item.id} onClick={() => handleClick(item)}>
            <h2 className="text-3xl lg:text-7xl font-semibold  text-center">
              {item?.attributes?.title}
            </h2>
            <div className="flex items-center justify-center pt-6 mb-[20px] gap-2">
              <img
                src={(
                  `${item?.attributes?.ReporterImage?.data?.[0].attributes?.url}`
                )}
                alt=""
                className="w-[40px] h-[40px] rounded-full"
              />
              <h1>{item?.attributes?.Reportername}</h1>
            </div>
            <h2 className="text-sm lg:text-sm   pb-4 text-center">
              <span className="text-2xl px-2">⏲</span>

              <RelativeTime date={item?.attributes?.createdAt} />
            </h2>

            <img
              src={(
                `${item?.attributes?.coverimage?.data?.attributes?.url}`
              )}
              alt="img"
              className="w-full h-auto mb-4 md:w-350 md:mr-4"
            />
            <div className="md:w-350">
              <p className="text-sm lg:text-lg mb-2 overflow-hidden line-clamp-2">
                {item?.attributes?.description?.[0].children[0].text}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center gap-2 mt-4">
        <button
          className={` text-black p-2 ${
            currentPage === 1 && "opacity-[1/0.1]"
          }`}
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          <GrChapterPrevious size={30} />
        </button>
        <button
          className=" text-black p-2 "
          onClick={nextPage}
          disabled={currentPage === 2}
        >
          <GrChapterNext size={30} />
        </button>
      </div>
    </div>
  );
};

export default Hero;
