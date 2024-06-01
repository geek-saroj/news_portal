import Image from "next/image";
import Hero from "./components/Hero";
import Midcontainer from "./components/Midcontainer";
import Ministries from "./components/Politics";
import News from "./components/News";
import Request from "./components/Request"
import Grid_helth_poli from "./components/Grid_helth_poli";
import Pharming from "./components/Pharming";
import Khelhud from "./components/Khelkud";
import Featured from "./components/FeatureImgae";

export default function Home() {
  return (
    <>

   
   <Hero/>
   <Midcontainer/>
   <Ministries/>
   <Featured/>
   <Khelhud/>
   <Pharming/>
   <Grid_helth_poli/>
   <Featured/>
   <Khelhud/>
   <Midcontainer/>
   <Ministries/>

   <Featured/>
   {/* <News/> */}
   {/* <Request/> */}
    </>
  );
}
