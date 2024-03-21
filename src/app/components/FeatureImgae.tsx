"use client";
import { BaseUrl } from "../api/global";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { imageUrl } from "../utils/imageUrl";

const FeatureImgae: React.FC = () => {
  const [featured, setfeatured] = useState<any>([]);

  useEffect(() => {
    let getCategory = async () => {
      let response = await axios.get(
        `${BaseUrl}/feature-images/?populate=*`
      );
      setfeatured(response?.data.data);
    };

    getCategory();
  },[]);
//   console.log("featured is", featured);

  return (
    <div className="bg-[#1E60B7] ">
    <div className="max-w-[1127px] 2xl:max-w-[1180px] mx-auto my-10 px-[15px] md:px-0">
    <div className="flex justify-center items-center">
      {featured.map((item: any, index: any) => (
        <div key={index} className=" w-full md:w-1/2 lg:w-1/4  p-2 overflow-hidden transition-transform duration-300 transform hover:scale-105 ">
          <img
            src={imageUrl(item?.attributes?.image?.data?.[0].attributes?.url)}
            alt=""
            className="w-full h-[400px] object-cover "
          />
          <div className="absolute inset-0 flex justify-center items-center  bg-opacity-50 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
           {item?.attributes?.tittle}
          </div>
        </div>
      ))}
    </div>
    </div>
    </div>
  );
};

export default FeatureImgae;
