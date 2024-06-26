"use client"
import { useParams, useRouter } from 'next/navigation';
import { BaseUrl } from "../../api/global";
import React, { useState, useEffect,FC } from "react";
import axios from "axios";
import { imageUrl } from "../../utils/imageUrl";
import Lokpriya from '@/app/components/Lokpriya';

// interface pageProps{
//   params : {game:string}
// }

const page=()=> {
    const [brekingnews, setbrekingnews] = useState<any>(null);
    const {id} = useParams()
    const router = useRouter()
    // const  id  = router.query.id;
        useEffect(() => {
            let getCategory = async () => {
                let response = await axios.get(`${BaseUrl}/news/${id}?populate=*&filters[isbreakingnews][$eq]=true`);
    
                setbrekingnews(response?.data.data);
            };
            getCategory();
        }, [id]);
        // console.log("brekingnews is for",brekingnews)
  
  return (
    <div className="max-w-[1127px] 2xl:max-w-[1180px] mx-auto my-10 px-[15px] md:px-0">
      <div className="flex flex-col lg:flex-row gap-8  ">
        <div className="basis-[70%]">
          <div className="flex flex-col">
            <img className="w-full h-auto" src={(`${brekingnews?.attributes?.coverimage?.data?.attributes?.url}`)} alt="" />
            <h2 className='text-3xl text-black font-bold py-5'>
              {brekingnews?.attributes?.title}
            </h2>
            <h5>
            {brekingnews?.attributes?.description?.[0].children[0].text} 

            </h5>
            <img src={brekingnews?.attributes?.description?.[0].image?.url} alt="" />
          </div>
        </div>
        <div className="basis-[30%]">
      <Lokpriya/>
        </div>


      </div>


    </div>

   
  )
}

export default page
