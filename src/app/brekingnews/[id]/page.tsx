"use client"
import { useParams, useRouter } from 'next/navigation';
import { BaseUrl } from "../../api/global";
import React, { useState, useEffect,FC } from "react";
import axios from "axios";

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
                let response = await axios.get(`${BaseUrl}/breking-news/${id}?populate=*`);
    
                setbrekingnews(response?.data.data);
            };
            getCategory();
        }, [id]);
        console.log("brekingnews is for",brekingnews)
  
  return (
    <div className="">
      {brekingnews?.attributes?.title}
      

    </div>
   
  )
}

export default page
