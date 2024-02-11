import React from "react";
import Link from "next/link";
import { MdOutlineNavigateNext } from "react-icons/md";

const Ministries = () => {
  return (
    <div className="bg-slate-900">
     <div className="max-w-[1127px] 2xl:max-w-[1180px] mx-auto my-10 px-[15px] h-[550px] lg:h-[400px] md:px-0 containerindustries-work">
      <div className="flex items-center justify-center gap-1 md:gap-2  flex-col   ">
        <h1 className="text-[20px] md:text-[34px]  font-4xl font-extrabold leading-[42.19px] font-poppin text-center text-white pt-20 ">
        BOOK A FREE CONSULTATION WITH OUR <br /> EXPERT
        </h1>
        <h4 className="text-sm lg:text-base   text-center  py-3 pb-5 text-white ">
        Let’s discuss your project with our expert and let us know your project idea to turn it into amazing digital product.
        </h4>
       
        <div className="flex items-center md:justify-center mt-5 p-9 lg:p-8 ">
          <Link
            href=""
            className="flex gap-2 items-center border-[2px] lg:border-solid text-white bg -[#174CCF] px-4 lg:px-[80px] py-2 border-white group rounded-3xl hover:bg-[#00d07e]"
          >
            BOOK A FREE CONSULTATION NOW! <MdOutlineNavigateNext size={30} className="" />
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Ministries;
