"use client"

import { useRouter } from "next/router";
import Parse from "html-react-parser";
import { BaseUrl } from "../api/global";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { imageUrl } from "../utils/imageUrl";

const NewsBlock = () => {
//   const router = useRouter();
  const [news, setNews] = useState<any>(null);

  useEffect(() => {
    let getNews = async () => {
      let response = await axios.get(`${BaseUrl}/breking-news?populate=*`);
      // let response2 = await axios.get(`${BaseUrl}/testimonial-section?populate=*`)
      setNews(response.data.data);
    };
    getNews();
  }, []);
  // console.log("news", news);
//   const handleClick = (item: any) => {
//     router.push(`/news/${item.id}`);
//   };
  return (
    <div className="container 2xl:max-w-[1180px] mx-auto py-3 md:py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
        {news?.map((item: any, index: number) => (
          <div
            className="kal overflow-hidden"
            key={index}
            // onClick={() => handleClick(item)}
          >
            <div className="w-[94%] md:w-full ml-[12px] md:ml-[0px] h-[150px] ">
              <img
                src={(
                  `${item?.attributes?.images?.data?.[0].attributes?.url}`
                )}
                alt="avatar"
                className="w-full h-full object-cover rounded-[10px] cursor-pointer hover:scale-[106%] transition duration-300 ease-out"
              />
            </div>
            <div className="hidden flex-row mt-[17px] ml-[20px] md:ml-[5px] ">
              {/* <p className="font-poppin font-normal text-xs leading-[16px] text-[ #000000]  border-r-[1px] border-solid border-[#000000]  text-[#848385]">
                {item?.date}
              </p> */}

              {/* <p className="font-poppin font-normal text-xs leading-[16px] text-[#aabbd8] pt-[4px] ">
                {item?.time}
              </p> */}
            </div>
            <h2 className="font-poppin  font-medium text-base md:text-xl leading-[36px] text-[#425066] pt-[11px] pl-[20px] md:pl-[5px] ">
              {/* {item?.title} */}
              एसीसी वुमन्स प्रिमियर कपमा नेपालको लगातार जित
सञ्चारमन्त्री शर्माका
            </h2>
            {/* <p className="font-poppin font-normal text-xs leading-[16px] text-black pl-[5px] pt-[4px] ">
              Gagadeep Sethi | October 12,2023
            </p> */}
            {/* <div className="h-[109px] overflow-hidden text-justify">
              <div className="text-[#000000] newspara font-poppin font-normal text-sm leading-[24px] pt-[11px] pl-[20px] pr-[11px] md:pl-[5px] md:pr-[0px] md:max-w-[378px] line-clamp-3">
                {Parse(`${item?.attributes?.description}`)}
              </div>
            </div> */}
            {/* <div className="flex items-center justify-end pr-[11px]">
              <div className="w-[109px] h-[38px] newsbtn rounded-sm  mt-[15px] group"> */}
                {/* <p className="font-IBM font-normal text-sm leading-[18px] text-[#000000] py-[10px] pl-[13px] flex flex-row cursor-pointer pb-[50px]"> */}
                  {/* Read More */}
                  {/* <img
                    src="/../assets/arrow.png"
                    alt="avatar"
                    className="w-[5px] h-[10px] ml-[10px] mt-[5px] group-hover:translate-x-[5px] transition duration-200 ease-out"
                  /> */}
               
              {/* </div>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsBlock;
