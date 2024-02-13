import Image from "next/image";
import Hero from "./components/Hero";
import Midcontainer from "./components/Midcontainer";
import Ministries from "./components/Politics";
import News from "./components/News";
import Request from "./components/Request"
export default function Home() {
  return (
    <>

   
   <Hero/>
   <Midcontainer/>
   <Ministries/>
   {/* <News/> */}
   {/* <Request/> */}
    </>
  );
}
