import Link from "next/link";
import React from "react";
import { BsGlobeAmericas } from "react-icons/bs";
import Parse from "html-react-parser";
import { imageUrl } from "../utils/imageUrl";
interface footerbottomtype {
  linkname: string;
  hreflink: string;
}
const footerbottomlink = [
  {
    linkname: "news Home",
    hreflink: "/",
  },
  {
    linkname: "About ",
    hreflink: "/about",
  },
  {
    linkname: "Bollywood news",
    hreflink: "/",
  },
  {
    linkname: "Hollywood news",
    hreflink: "contact",
  },
  {
    linkname: "Tik Tok news",
    hreflink: "",
  },
];
function Footer({ footer }: any) {
  //bg-[#0000cc]
  return (
    <div className=" w-full  bg-[#22252a] pt-[48px] h-full md:h-[490px] 2xl:h-[542px] px-[15px] md:px-0 font-nunito fotter">
      {footer?.map((item: any, index: number) => (
        <div key={index} className="max-w-[1127px] 2xl:max-w-[1180px] mx-auto">
          <div className="flex gap-[68px] md:flex-row flex-col pb-6">
            <div className="basis-[20%] flex justify-center items-center flex-col">
            <img
                src="/../assets/sunrise-png-logo _w.png"
                alt="logo"
                className="w-full h-full object-contain"
              />
              {/* <p className="font-IBM font-normal text-[15px] leading-[24px] text-center md:text-left text-[#CFCFCF] pt-[12px] max-w-[375px]  pr-[12px] md:pr-[0px]">
                {Parse(`${item?.attributes?.description}`)}
                <Link href="/about">..Read More</Link>
              </p> */}
            </div>
            <div className="basis-[80%] grid md:grid-cols-4 grid-cols-1 gap-[25px] md:gap-0">
              <div className="Address ml-[22px] lg:ml-[0px]">
                <h3 className="font-IBM font-bold text-[15px] leading-[24px] text-white font-poppin">
                  Recent Post
                </h3>
                <a
                  href=""
                  className="font-poppin flex flex-row cursor-pointer hover:text-[#0066FD] transition-colors duration-300 ease-in-out items-center  font-normal text-[15px] leading-[24px] text-white pt-[14px]"
                >
                  Types of scissors
                </a>
                <a
                  href=""
                  className="font-poppin flex flex-row cursor-pointer hover:text-[#0066FD] transition-colors duration-300 ease-in-out  items-center font-IBM font-normal text-[15px] leading-[24px] text-white pt-[9px]"
                >
                  Hand Sanitizers
                </a>
                <a
                  href=""
                  className="font-poppin flex flex-row cursor-pointer hover:text-[#0066FD] transition-colors duration-300 ease-in-out  items-center font-IBM font-normal text-[15px] leading-[24px] text-white pt-[9px]"
                >
                  Sanitizing And Disinfecting
                </a>
                <a
                  href=""
                  className="font-poppin flex flex-row  cursor-pointer hover:text-[#0066FD] transition-colors duration-300 ease-in-out items-center font-IBM font-normal text-[15px] leading-[24px] text-[white] pt-[9px]"
                >
                  Kids N95 Mask
                </a>
              </div>
              <div className="Address ml-[22px] lg:ml-[0px]">
                <h3 className="font-IBM font-bold text-[15px] leading-[24px] text-white font-poppin">
                  Our Products
                </h3>
                <a
                  href=""
                  className="font-poppin flex flex-row cursor-pointer hover:text-[#0066FD] transition-colors duration-300 ease-in-out items-center font-IBM font-normal text-[15px] leading-[24px] text-white pt-[14px]"
                >
                  Pharmacy Suppliers
                </a>
                <a
                  href=""
                  className="font-poppin flex flex-row cursor-pointer hover:text-[#0066FD] transition-colors duration-300 ease-in-out  items-center font-IBM font-normal text-[15px] leading-[24px] text-white pt-[9px]"
                >
                  Wound Care
                </a>
                <a
                  href=""
                  className="font-poppin flex flex-row cursor-pointer hover:text-[#0066FD] transition-colors duration-300 ease-in-out  items-center font-IBM font-normal text-[15px] leading-[24px] text-white pt-[9px]"
                >
                  Diabetics Supplies
                </a>
                <a
                  href=""
                  className="font-poppin flex flex-row  cursor-pointer hover:text-[#0066FD] transition-colors duration-300 ease-in-out items-center font-IBM font-normal text-[15px] leading-[24px] text-white pt-[9px]"
                >
                  Patiennt Care / Supplies
                </a>
              </div>
              <div className="usefullink ml-[22px] lg:ml-[0px] md:pl-[40px]">
                <h3 className="font-IBM font-bold text-[15px] leading-[24px] text-white font-poppin">
                  Useful Links
                </h3>
                <Link
                  href="/about"
                  className="font-poppin flex flex-row cursor-pointer hover:text-[#0066FD] transition-colors duration-300 ease-in-out  items-center font-IBM font-normal text-[15px] leading-[24px] text-white pt-[13px]"
                >
                  About Us
                </Link>
                <Link
                  href="/"
                  className="font-poppin flex flex-row cursor-pointer hover:text-[#0066FD] transition-colors duration-300 ease-in-out  items-center font-IBM font-normal text-[15px] leading-[24px] text-white pt-[13px]"
                >
                  Products
                </Link>
                <Link
                  href=""
                  className="font-poppin flex flex-row cursor-pointer hover:text-[#0066FD] transition-colors duration-300 ease-in-out  items-center font-IBM font-normal text-[15px] leading-[24px] text-white pt-[13px]"
                >
                  Clients
                </Link>
                <a
                  href="/contact"
                  className="font-poppin flex flex-row cursor-pointer hover:text-[#0066FD] transition-colors duration-300 ease-in-out  items-center font-IBM font-normal text-[15px] leading-[24px] text-white pt-[13px]"
                >
                  Contact
                </a>
              </div>
              <div className="country ml-[22px] md:ml-[0px]">
                <h3 className="font-poppin font-IBM font-bold text-[15px] leading-[24px] text-white">
                  Address
                </h3>
                <div className="flex items-center gap-[10px]">
                  <img src="/../assets/location.png" alt="" />
                  <a
                    href=""
                    className="flex flex-row cursor-pointer hover:text-[#0066FD] transition-colors duration-300 ease-in-out  items-center font-IBM font-normal text-[15px] leading-[24px] text-white pt-[13px]"
                  >
                    {item?.attributes?.address}
                  </a>
                </div>
                <div className="flex items-center gap-[10px]">
                  <img src="/../assets/contact.svg" alt="" />
                  <a
                    href=""
                    className="flex flex-row  cursor-pointer hover:text-[#0066FD] transition-colors duration-300 ease-in-out items-center font-IBM font-normal text-[15px] leading-[24px] text-white pt-[13px]"
                  >
                    {item?.attributes?.contact_number}
                  </a>
                </div>
                <div className="flex items-center gap-[10px] pt-[10px]">
                  <img src="/../assets/mail.svg" alt="" />

                  <a
                    href=""
                    className="font-poppin flex flex-row  cursor-pointer hover:text-[#0066FD] transition-colors duration-300 ease-in-out items-center font-IBM font-normal text-[15px] leading-[24px] text-white "
                  >
                    {item?.attributes?.Email}
                  </a>
                </div>
                <div className="flex items-center gap-[10px] pt-[10px]">
                  <BsGlobeAmericas color="white" className="" fontSize={16} />

                  <a
                    href=""
                    className="font-poppin flex flex-row  cursor-pointer text-white hover:text-[#0066FD]  transition-colors duration-300 ease-in-out items-center font-IBM font-normal text-[15px] leading-[24px]  "
                  >
                    {item?.attributes?.Web}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="pt-10">
      <hr className="py-6"/>
      <div className="text-center py-3 container mx-auto px-8 md:px-0">
        <div className="flex gap-1 md:gap-3 justify-center  font-nunito  font-normal text-[15px] text-white ">
          {footerbottomlink.map((val: footerbottomtype, index: number) => {
            return (
              <Link
                href={val.hreflink}
                className={` hover:text-[#0066FD] px-1 md:px-4  ${
                  index === footerbottomlink.length - 1 ? "" : "border-r-2"
                }  border-solid border-white`}
                key={index}
              >
                {val.linkname}
              </Link>
            );
          })}
        </div>
      </div>
      </div>
    </div>
  );
}

export default Footer;
