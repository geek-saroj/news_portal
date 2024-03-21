"use client"
import { useParams, useRouter } from 'next/navigation';
import { BaseUrl } from "../../api/global";
import React, { useState, useEffect,FC } from "react";
import axios from "axios";
import { imageUrl } from '@/app/utils/imageUrl';
import Paragraph from 'antd/es/skeleton/Paragraph';
import Lokpriya from '@/app/components/Lokpriya';
const page=()=> {
    const [pradesh, setpradesh] = useState<any>(null);
    const [pradeshnews, setpradeshnews] = useState<any>(null);
    const {id} = useParams()
    // const router = useRouter()
    // const  id  = router.query.id;
    console.log("id is",id)
        useEffect(() => {
            let getCategory = async () => {
                let response = await axios.get(`${BaseUrl}/pradesh-banners/${id}?populate=*`);
                // let response1 = await axios.get(`${BaseUrl}/pradesh-news?populate=*`);
    
                setpradesh(response?.data.data);
                // setpradeshnews(response1?.data.data);
            };
            getCategory();
        }, [id]);
        
  console.log("pradeshnews is",pradesh)
  return (
    <div>
         <h1 className="text-[#000000] font-bold text-3xl font-poppin lg:text-5xl text-center py-8">
            {pradesh?.attributes?.title}
              </h1>
    <div className="relative flex items-center px-8 py-8">
        
    <div className="w-full lg:w-1/2 h-auto overflow-hidden lg:pl-[90px]">
        {/* Use map function to iterate over pradesh array */}
        
            <div >
                <img
                    src={imageUrl(pradesh?.attributes?.image?.data?.[0].attributes?.url)} 
                    className="w-full h-auto"
                    alt="Image"
                />
                <div className="absolute top-1/4 left-[60%] w-100 h-150 hidden lg:block bg-[#F6F6F6] shadow-md transform -translate-x-1/2">
                    <p className="p-6">
                        {pradesh?.attributes?.description?.[0].children[0].text} {/* Assuming title is a field in your data */}
                    </p>
                </div>
            </div>
        
    </div>
</div>

<div className="flex flex-col lg:flex-row">
<div className="basis-[75%] items-center justify-center">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {pradeshnews && pradeshnews.map((item: any) => (
          
     
        <div className="p-4 bg-white shadow-lg ">
          <div className="relative">
            <img
              src={imageUrl(item?.attributes?.images?.data?.[0].attributes?.url)}
              alt=""
              className="w-100 h-64 object-cover rounded-lg mb-4 transition-transform duration-300 transform hover:scale-110"
            />
          </div>
          {/* <div className="text-gray-700">date</div> */}
          <h2 className="text-xl font-semibold">{item?.attributes?.title}</h2>
        </div>
        ))}
    </div>
 
    </div>
    <div className="basis-[25%]">
      <Lokpriya/>
    </div>
</div>



</div>

  )
}

export default page


