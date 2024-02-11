"use client"
import { BaseUrl } from "../api/global";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { imageUrl } from "../utils/imageUrl";
import Link from "next/link";



const ImageComponent: React.FC = () => {
    const [brekingnews, setbrekingnews] = useState<any>(null);

    useEffect(() => {
        let getCategory = async () => {
            let response = await axios.get(`${BaseUrl}/breking-news?populate=*`);

            setbrekingnews(response?.data.data);
        };
        getCategory();
    }, []);




    return (
        <div className="max-w-[1127px] 2xl:max-w-[1180px] mx-auto my-10 px-[15px]  md:px-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4  ">

               
                    {brekingnews && brekingnews.map((item: any) => (
                        <Link href="/Brekingnews">
                        <div key={item.id} >
                            <img
                                // src={imageUrl(
                                //     item?.attributes?.images?.data?.attributes?.url
                                // )}
                                src="http://localhost:1337/uploads/gold_4370b55579.jpg"

                                alt="img"
                                className="w-full h-auto mb-4 md:w-350 md:mr-4"
                            />
                            <div className="md:w-350">
                                <h2 className="text-lg font-semibold mb-2">{item?.attributes?.title}</h2>
                                <p className="text-sm mb-2 line-clamp-4">{item?.attributes?.discription}</p>
                                {/* <p className="text-sm line-clamp-3">{item?.attributes?.discription}</p> Repeat description for two lines */}
                            </div>
                        </div>
                        </Link>
                    ))}
                </div>
          
         </div>
    );
};

export default ImageComponent;
