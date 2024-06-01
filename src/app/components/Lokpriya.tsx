
"use client"
import { BaseUrl } from "../api/global";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { imageUrl } from "../utils/imageUrl";
import Link from "next/link";
import { useRouter  } from 'next/navigation'

function Lokpriya() {
  const router = useRouter()
  const [polularnews, setpolularnews] = useState<any>(null);

  useEffect(() => {
    let getCategory = async () => {
      let response1 = await axios.get(`${BaseUrl}/news?populate=*&filters[isLokpriya][$eq]=true&sort[0]=id:desc`);


      setpolularnews(response1?.data.data);
    };
    getCategory();
  }, []);

  const handleClick = (item: any) => {
    router.push(`/lokpriya/${item.id}`);
  };


  return (
    <div>
      <div>
        <h1 className="text-[24px] text-start ">लोकप्रिय</h1>
        <div className="w-[50px] h-1 bg-blue-700 "></div>
        {polularnews && polularnews.map((item: any) =>


          <div key={item.id} onClick={() => handleClick(item)} className="flex items-center gap-2 py-1 cursor-pointer pt-5">
            {/* <span className="ml-2 text-[28px]">{item?.attributes?.number}</span> */}
          
              <div className="basis-[60%]">
                <h3 className="ml-2">{item?.attributes?.title}</h3>
              </div>
              <div className="basis-[40%]">        
                   <img src={(item?.attributes?.coverimage?.data?.attributes?.url)} alt="Your Image" className="w-[70px] h-[70px] rounded-lg" />
              </div>

            </div>
          
        )}
      </div>

    </div>
  )
}

export default Lokpriya
