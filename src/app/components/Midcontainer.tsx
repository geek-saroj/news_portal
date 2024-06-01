"use client";
import { BaseUrl } from "../api/global";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { imageUrl } from "../utils/imageUrl";
import Link from "next/link";
import Lokpriya from "./Lokpriya";

function Midcontainer() {
  const [freshnews, setgreshnews] = useState<any>(null);
  const [polularnews, setpolularnews] = useState<any>(null);

  useEffect(() => {
    let getCategory = async () => {
      let response1 = await axios.get(
        `${BaseUrl}/news?populate=*&filters[ispopolarnews][$eq]=true&sort[0]=id:desc`
      );
      let response = await axios.get(
        `${BaseUrl}/news?populate=*&filters[isfreshnews][$eq]=true&sort[0]=id:desc&pagination[limit]=1`
      );

      setgreshnews(response?.data.data);
      setpolularnews(response1?.data.data);
    };
    getCategory();
  }, []);

  // console.log("polularnews is", polularnews)

  console.log("freshnews is", freshnews);

  return (
    <div className="max-w-[1127px] 2xl:max-w-[1180px] mx-auto my-10 px-[15px] md:px-0">
      <div className="flex flex-col lg:flex-row item-center justify-center relative">
        <div className="basis-[75%]  gap-6">
          <h1 className="text-[24px] text-start ">ताजा खबर</h1>
          <div className="w-[150px] h-1 bg-blue-700  items-start"></div>
          <div className="flex flex-col lg:flex-row gap-8 pt-6">
            <div className="basis-[75%]  items-center justify-center">
              {freshnews &&
                freshnews.map((item: any) => (
                  <div key={item.id} className="flex flex-col ">
                    {/* <span className="ml-2 text-[28px]">{item?.attributes?.number}</span> */}
                    <img
                      src={(
                        item?.attributes?.coverimage?.data?.attributes?.url
                      )}
                      alt="Your Image"
                      className="w-full h-auto"
                    />
                    <h3 className="ml-2 font-normal text-xl">
                      {item?.attributes?.title}
                    </h3>
                  </div>
                ))}
            </div>

            <div className="basis-[25%]">
              {polularnews &&
                polularnews.map((item: any) => (
                  <div key={item.id} className="flex gap-1 items-center">
                    {/* <span className="ml-2 text-[28px]">{item?.attributes?.number}</span> */}
                    <img
                      src={(
                        item?.attributes?.coverimage?.data?.attributes?.url
                      )}
                      alt="Your Image"
                      className="w-[60px] h-[60px] rounded-lg"
                    />
                    <h3 className="ml-2  ">{item?.attributes?.title}</h3>
                  </div>
                ))}
            </div>
          </div>
          <img></img>
        </div>

        <div className="basis-[25%]">
          <Lokpriya />
        </div>
      </div>
    </div>
  );
}

export default Midcontainer;
