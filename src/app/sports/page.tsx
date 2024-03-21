"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { imageUrl } from "../utils/imageUrl";
import { BaseUrl } from "../api/global";
import Link from "next/link";
import Khelkud from "../components/Khelkud";

const Card: React.FC = () => {
  const [khelkud, setKhelkud] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${BaseUrl}/news?populate=*&filters[idKhelkud][$eq]=true&sort[0]=id:desc`
        );
        setKhelkud(response?.data?.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = khelkud.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="max-w-[1127px] 2xl:max-w-[1180px] mx-auto my-10 px-[15px] md:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
        {currentItems.map((item: any) => (
          <div
            key={item.id}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow"
          >
            <a href="#">
              <img
                className="rounded-t-lg transition-transform duration-300 transform-gpu hover:scale-105"
                src={imageUrl(
                  `${item?.attributes?.coverimage?.data?.attributes?.url}`
                )}
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">
                  {item?.attributes?.title}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
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
      {/* Pagination */}
      <ul className="flex justify-center mt-4">
        {Array.from({ length: Math.ceil(khelkud.length / itemsPerPage) }).map(
          (_, index) => (
            <li key={index} className="mx-1">
              <button
                className="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          )
        )}
      </ul>
      <Khelkud />
    </div>
  );
};

export default Card;
