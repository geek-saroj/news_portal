"use client"
import { BaseUrl } from "../api/global";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { imageUrl } from "../utils/imageUrl";
import Link from "next/link";


function Midcontainer() {

    const [freshnews, setgreshnews] = useState<any>(null);
    const [polularnews, setpolularnews] = useState<any>(null);

    useEffect(() => {
        let getCategory = async () => {
            let response = await axios.get(`${BaseUrl}/fresh-news?populate=*`);
            let response1 = await axios.get(`${BaseUrl}/populars?populate=*`);

            setgreshnews(response?.data.data);
            setpolularnews(response1?.data.data);
        };
        getCategory();
    }, []);



console.log("polularnews is",polularnews)

console.log("freshnews is",freshnews)

    return (
        <div className="max-w-[1127px] 2xl:max-w-[1180px] mx-auto my-10 px-[15px] h-[550px] lg:h-[400px] md:px-0">
            <div className='flex flex-col md:flex-row item-center justify-center relative'>
                <div className="basis-[75%]">
                    <h1>
                        Hello
                    </h1>
                    <img>
                    </img>


                </div>
                <div className="basis-[25%]">
                    {polularnews && polularnews.map((item:any)=>
                    

                    <div key={item.id} className="flex gap-6 items-center">
                        <span className="ml-2">{item?.attributes?.number}</span>
                        <img src={imageUrl(item?.attributes?.images?.data?.id?.attributes?.url)} alt="Your Image" className="w-10 h-10" />
                        <h3 className="ml-2">{item?.attributes?.tittle}</h3>

                    </div>
                     )}
                </div>
               



            </div>




        </div>
    )
}

export default Midcontainer