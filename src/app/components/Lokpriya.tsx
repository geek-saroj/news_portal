
"use client"
import { BaseUrl } from "../api/global";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { imageUrl } from "../utils/imageUrl";
import Link from "next/link";

function Lokpriya() {

    const [polularnews, setpolularnews] = useState<any>(null);

    useEffect(() => {
        let getCategory = async () => {
            let response1 = await axios.get(`${BaseUrl}/populars?populate=*`);

           
            setpolularnews(response1?.data.data);
        };
        getCategory();
    }, []);



  return (
    <div>
      <div>
                    <h1 className="text-[24px] text-center pb-3">लोकप्रिय</h1>
                    {polularnews && polularnews.map((item: any) =>


                        <div key={item.id} className="pl-3 flex gap-6 items-center">
                            <span className="ml-2 text-[28px]">{item?.attributes?.number}</span>
                            <h3 className="ml-2">{item?.attributes?.tittle}</h3>
                            <img src={imageUrl(item?.attributes?.images?.data?.[0].attributes?.url)} alt="Your Image" className="w-10 h-10" />

                        </div>
                    )}
                </div>
  
    </div>
  )
}

export default Lokpriya
