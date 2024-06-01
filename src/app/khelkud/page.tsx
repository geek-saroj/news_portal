"use client";
import { BaseUrl } from "../api/global";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { imageUrl } from "../utils/imageUrl";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Card: React.FC = () => {
  const router = useRouter();
  const [khelkud, setkhelkud] = useState<any>(null);

  useEffect(() => {
    let getCategory = async () => {
      let response1 = await axios.get(
        `${BaseUrl}/news?populate=*&filters[idKhelkud][$eq]=true&sort[0]=id:desc`
      );

      setkhelkud(response1?.data.data);
    };
    getCategory();
  }, []);
  const handleClick = (item: any) => {
    router.push(`/khelkud/${item.id}`);
  };

  return (
    <div className="max-w-[1127px] 2xl:max-w-[1180px] mx-auto my-10 px-[15px] md:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
        {khelkud &&
          khelkud.map((item: any) => (
            <div
              key={item.id}
              onClick={() => handleClick(item)}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow "
            >
              <img
                className="rounded-t-lg transition-transform duration-300 transform-gpu hover:scale-105"
                src={(
                  `${item?.attributes?.coverimage?.data?.attributes?.url}`
                )}
                alt=""
              />

              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">
                  {item?.attributes?.title}
                </h5>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <a className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Card;
