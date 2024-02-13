"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Dramenu from "./Dramenu";
import { BaseUrl } from "../api/global";
import axios from "axios";
import Item from "antd/es/list/Item";
function Nav1({ home }: any) {
  const [about, SetAbout] = useState(false);
  const [sub, setSub] = useState(null);
  const [menu1, setMenu1] = useState(false);
  const [menu2, setMenu2] = useState(false);
  const [menu3, setMenu3] = useState(false);
  const [fix, setFixed] = useState(false);
  const [categories, setCategories] = useState<any>(null);
  const navss = "absolute";
  useEffect(() => {
    // alert("how r u?")
    let getCategory = async () => {
      let response = await axios.get(`${BaseUrl}/menus?populate=*`);

      setCategories(response?.data.data);
    };
    getCategory();
  }, []);

  //filtering main category
//   console.log("categories are",categories)

  let mainCategory = categories?.filter(
    (item: any, index: number) => item.attributes.menu.data === null
  );

//   console.log("mainCategory is ",mainCategory)

  // filtering sub category
  // let secondCategory: any[] = [];
  // if (mainCategory && mainCategory.length > 0) {
  //   secondCategory = mainCategory.map((main: any, index: number) => {
  //     let child = categories?.filter(
  //       (childData: any, index: number) =>
  //         main?.id === childData?.attributes?.menu?.data?.id
  //     );
  //     return { child };
  //   });
  // }

  const handleSubmenu = (index: any) => {
    setSub(index);
    setMenu1(false);
    setMenu2(false);
    setMenu3(false);
  };

  return (

      
    //   {/* <div>
    //         {/* Render your filtered categories here */}
    //         {categories.map((category:any, index:number) => (
    //           <div key={category.id}>
    //             {/* Render category attributes */}
    //             <p>Title: {category.attributes.title}</p>
    //             <p>Index: {index}</p>
    //           </div>
    //         ))}
    //       </div> */}
    <>
      {/* responsive navbar  */}
      <div className="container   mx-auto lg:hidden py-2">
        <div
          className={`${
            home ? "" : ""
          } flex flex-row justify-between items-center  px-4 md:px-0 `}
        >
          <div className="w-[153px] h-auto ">
            <Link href="/">
              <img
                src="/../assets/logo.png"
                alt="avatar"
                className="w-20 h-20 object-contain"
              />
            </Link>
          </div>
          <Dramenu categories={categories} />
        </div>
      </div>

      <div
        className={` ${home ? "fixed top-0" : ""}  bg-[#1e2250c0] z-50 w-full`}
      >
        <div className="   h-[80px]  max-w-[1180px] mx-auto lg:block hidden    ">
          <div
            className={`justify-between font-semibold  py-[10px] lg:flex lg:flex-row ${
              fix ? "" : "pt-8 "
            } `}
          >
            <div className="w-[150px] h-[60px]">
              <Link href="/">
                <img
                  src="/../assets/logo.png"
                  alt="avatar"
                  className={`${
                    fix ? "bottom-[14px]" : "bottom-[36px]"
                  } relative lg:left-[9px] xl:left-[-8px] 2xl:right-0 w-[108px] h-full object-contain`}
                />
              </Link>
            </div>
            <div className="">
              <ul
                className={`flex flex-row items-center font-[inter] gap-[32px] font-normal text-[18px] uppercase leading-[14.52px]  ${
                  fix ? "mt-6" : ""
                }`}
              >
                {mainCategory?.map((val: any, index: number) => {
                  let childMenu = categories?.filter(
                    (childData: any, index: number) =>
                      val?.id === childData?.attributes?.menu?.data?.id
                  );

                  return (
                    <li
                      onMouseEnter={() => handleSubmenu(index)}
                      onMouseLeave={() => setSub(null)}
                      className="relative "
                      key={index}
                    >
                      {/* main category  */}
                      <Link
                        href={`/${val?.attributes?.slug}`}
                        className={`font-semibold ${
                          fix ? "text-white" : "text-white"
                        }  hover:text-[#f5c116] transition-colors duration-150 ease-out relative`}
                      >
                        {val?.attributes?.title}
                      </Link>

                      {sub === index && (
                        <div className="absolute top-[12px] w-[199px] h-[126px] z-40 space-y-[10px]">
                          <div className="absolute top-[27px] h-[100%] w-full ">
                            {childMenu?.map(
                              (childItem: any, childIndex: number) => {
                                // let secondchild = categories?.filter(
                                //   (schild: any) =>
                                //     childItem.id ===
                                //     schild?.attributes?.menu?.data?.id
                                // );

                                return (
                                  <li
                                    className="text-[14px] border-b-[0.5px] border-b-[white]/[0.5] hover:text-[#1e2250] bg-[#f5c116] text-white py-[20px] px-[15px] transition-colors duration-300 ease-out font-semibold cursor-pointer group "
                                    key={childIndex}
                                  >
                                    {/* sub category */}
                                    <Link
                                      href={`/${val?.attributes?.slug}/${childItem?.attributes?.slug}`}
                                    >
                                      {childItem?.attributes?.title}
                                    </Link>
                                  </li>
                                );
                              }
                            )}
                          </div>
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav1;
