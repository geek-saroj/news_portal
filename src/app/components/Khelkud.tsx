"use client";
import { BaseUrl } from "../api/global";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { imageUrl } from "../utils/imageUrl";
import Link from "next/link";

function Pharming() {
  const [pharming, setpharming] = useState<any>(null);

  useEffect(() => {
    let getCategory = async () => {
      let response = await axios.get(
        `${BaseUrl}/news?populate=*&filters[idKhelkud][$eq]=true&sort[0]=id:desc&pagination[limit]=10 `
      );

      setpharming(response?.data.data);
    };
    getCategory();
  }, []);
  return (
    <div className="max-w-[1127px] 2xl:max-w-[1180px] mx-auto my-10 px-[15px]  md:px-0">
      <h1 className="text-[30px] font-bold">खेलकुद</h1>
      <div className="w-[150px] h-1 bg-blue-700  items-start"></div>
      <div className="flex flex-col lg:flex-row gap-6 pt-4">
        {/* First news item */}
        {pharming &&
          pharming.slice(0, 1).map((item: any, index: number) => (
            <div
              key={item.id}
              className="basis-1/3 justify-center items-center"
            >
              <div className="">
                <h1 className="text-[24px] font-bold">
                  {item?.attributes?.title}
                </h1>
                <img
                  src={(
                    item?.attributes?.coverimage?.data?.attributes?.url
                  )}
                  alt=""
                />

                {/* <div className="basis-[30%] pt-3">
                                    <div className="flex gap-4 items-center">
                                        <img src={imageUrl(item?.attributes?.coverimage?.data?.attributes?.url)} alt="" className='w-[80px] h-[60px]' />
                                        <h1>{item?.attributes?.title}</h1>
                                    </div>
                                </div> */}
              </div>
            </div>
          ))}

        {/* Five news items in the middle section */}
        <div className="basis-1/3">
          {pharming &&
            pharming.slice(1, 6).map((item: any, index: number) => (
              <div key={item.id} className="justify-center items-center">
                <div className="">
                  <div className="basis-[30%]">
                    <div className="flex gap-4 items-center pb-2">
                      <img
                        src={(
                          item?.attributes?.coverimage?.data?.attributes?.url
                        )}
                        alt=""
                        className="w-[80px] h-[60px]"
                      />
                      <h1>{item?.attributes?.title}</h1>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Five news items in the right section */}
        {pharming &&
          pharming.slice(6, 7).map((item: any, index: number) => (
            <div
              key={item.id}
              className="basis-1/3 justify-center items-center"
            >
              <div className="">
                <h1 className="text-[24px] font-bold">
                  {item?.attributes?.title}
                </h1>
                <img
                  src={(
                    item?.attributes?.coverimage?.data?.attributes?.url
                  )}
                  alt=""
                  className="w-full h-auto"
                />

                {/* <div className="basis-[30%] pt-3">
                                    <div className="flex gap-4 items-center">
                                        <img src={imageUrl(item?.attributes?.coverimage?.data?.attributes?.url)} alt="" className='w-[80px] h-[60px]' />
                                        <h1>{item?.attributes?.title}</h1>
                                    </div>
                                </div> */}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Pharming;
