import React from "react";
import NewsBlock from "./NewsBlock";

function News() {
  return (
    <div className="bg-[#f7f8f7]">
      <div className="max-w-[1127px] 2xl:max-w-[1180px] mx-auto px-[15px] md:px-0 lg:pt-10 font-bitter">
        {/* <h3 className=" font-bold text-[13px] leading-[15.25px] tracking-[0.085em] text-black text-center">
          BLOGS
        </h3> */}
        <h2 className=" font-poppin font-semibold text-xl md:text-4xl leading-[47px]  text-black  md:pb-4 text-center">
        हाम्रो खबर
        </h2>
        <h2 className=" font-poppin  text-base md:text-sm  text-black justify-center text-center">
       
        </h2>
        <NewsBlock />
      </div>
    </div>
  );
}

export default News;
