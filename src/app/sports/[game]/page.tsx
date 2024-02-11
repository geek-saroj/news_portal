"use client"
import { useRouter } from "next/router";
import {FC} from "react"
import React from 'react'
interface pageProps{
  params : {game:string}
}

const page: FC<pageProps>  =({params})=> {
  
  return (
    <div>Your param is {params.game}</div>
  )
}

export default page