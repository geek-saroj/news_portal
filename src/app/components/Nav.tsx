"use client"


import React, { useState, useEffect } from "react";
import Link from "next/link";
import Dramenu from "./Dramenu";
// import { BaseUrl } from "../api/global";
import axios from "axios";
function Nav1({ position, color }: any) {
  const [about, SetAbout] = useState(false);
  const [product, setProduct] = useState(false);
  const [sub, setSub] = useState(0);
  const [sub2, setSub2] = useState(0);
  const [menu2, setMenu2] = useState(false);
  const [menu3, setMenu3] = useState(false);
  const [menu4, setMenu4] = useState(false);

  const [list2, setList2] = useState(0);
  const [list4, setList4] = useState(3);
  const [fix, setFixed] = useState(false);

  const [categories, setCategories] = useState<any>(null);

  useEffect(() => {
    let getCategory = async () => {
      let response = await axios.get(
        "http://localhost:1337/api/menus?populate=*"
      );
      // let response2 = await axios.get(`${BaseUrl}/testimonial-section?populate=*`)
      setCategories(response.data.data);
    };
    getCategory();
  }, []);

  //filtering main category

  // console.log(categories, "category");

  let mainCategory = categories?.filter(
    (item: any, index: number) => item.attributes.salect_category === "main"
  );

  // console.log(mainCategory,"filtering main category")

  let subCategory = categories?.filter(
    (item: any, index: number) =>
      item.attributes.salect_category === "sub" &&
      item.attributes.position === "Diagnostic Equipments/ Reagent Kits"
  );

  // console.log(subCategory);

  subCategory?.sort((a: any, b: any) =>
    a.attributes.title.localeCompare(b.attributes.title)
  );

  let secondCategory = categories?.filter(
    (item: any, index: number) =>
      item.attributes.salect_category === "sub" &&
      item.attributes.position === "Disinfectant And House Keeping"
  );

  // console.log(secondCategory);

  let thirdCategory = categories?.filter(
    (item: any, index: number) =>
      item.attributes.salect_category === "sub" &&
      item.attributes.position === "Dermatology (Skin Care & Beauty) Products"
  );
  // console.log(thirdCategory);

  let fourthCategory = categories?.filter(
    (item: any, index: number) =>
      item.attributes.salect_category === "sub" &&
      item.attributes.position === "Medical And Critical Care Devices"
  );
  // console.log(fourthCategory, "filtering sub category");

  const handleDropDown = () => {
    SetAbout(!about);
  };
  const handleDropDownHide = () => {
    SetAbout(false);
  };
  const handleProduct = () => {
    setProduct(true);
  };
  const handleProductHide = () => {
    setProduct(false);
  };

  const handleList2 = (index: any) => {
    setList2(index);
  };

  const handlelist4 = (index: any) => {
    setList4(index);
  };

  const handleSubmenu2 = (index: any) => {
    // console.log(index);
    setSub2(index);
  };
  const handleSubmenuHide2 = () => {
    // setSub2(false);
  };

  const handleSubmenu = (index: any) => {
    // console.log(index);
    setSub(index);
    setMenu2(false);
    setMenu3(false);
    setMenu4(false);
  };
  const handleMenu2 = () => {
    // setSub(false);
    setMenu2(true);
    setMenu3(false);
    setMenu4(false);
    // alert(sub)
  };
  const handleMenu3 = () => {
    // setSub(false);
    setMenu2(false);
    setMenu3(true);
    setMenu4(false);
    // alert(sub)
  };
  const handleMenu4 = () => {
    // setSub(false);
    setMenu4(true);
    setMenu2(false);
    setMenu3(false);
    // alert(sub)
  };

  // for ther sticky header

  const stickyTop = () => {
    if (window.scrollY >= 50) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", stickyTop);
  }
  return (
    <>
      {/* responsive navbar  */}
      <div className="container   mx-auto lg:hidden ">
        <div className=" flex flex-row justify-between items-center  px-[15px] md:px-0 ">
          <div className="w-[115px] h-[63px]  ">
            <Link href="/">
              <img
                src="/../assets/logo.png"
                alt="logo"
                className="w-full h-full object-contain"
              />
            </Link>
          </div>
          <Dramenu categories={categories} />
        </div>
      </div>

      <div
        className={`${position} top-[37px]  z-10 w-full  ${
          fix ? "nav" : `${color}`
        }`}
      >

   
        <div className="bg-gradient-to-r from-[#0b0085]">
        <div className="max-w-[1127px] 2xl:max-w-[1180px] mx-auto justify-between font-nunito  font-medium items-center hidden  lg:flex lg:flex-row">
          <div className="w-[137px]    p-2 ">
            <Link href="/">
              {" "}
              <img
                src="/logo.png"
                alt="logo"
                className="w-full h-full object-contain"
              />
            </Link>
          </div>
          <div className="">
            <ul className="flex flex-row items-center  gap-[40px] font-normal text-sm uppercase leading-[14.52px] text-black">
              <li>
                <Link
                  href="/"
                  className="font-semibold text-[#ffffff] hover:text-[#942d2d] transition-colors duration-150 ease-out"
                >
                  Home
                </Link>
              </li>
              <li
                onMouseEnter={handleDropDown}
                onMouseLeave={handleDropDownHide}
                className="relative"
              >
                <Link
                  href="/about"
                  className=" font-semibold hover:text-[#942d2d] text-[#ffffff] transition-colors duration-300 ease-out"
                >
                  Company
                </Link>

                {about && (
                  <div className="absolute top-[18px] left-0    w-[199px] h-[126px] z-40 space-y-[10px]">
                    <div className="  border-t-[4px] border-t-[#f20003]   absolute top-[27px] h-[100%] w-full ">
                      <li className="text-[14px] border-b-[0.5px] border-b-[white]/[0.5] hover:text-[#F20002] bg-[#0167fc] text-white py-[20px] px-[15px] transition-colors duration-300 ease-out font-semibold cursor-pointer">
                        <Link href="/about">About Rishav Group</Link>
                      </li>
                      <li className="text-[14px]   border-b-[0.5px] border-b-[white]/[0.5]  bg-[#0167fc] text-white py-[20px] px-[15px] hover:text-[#F20002] transition-colors duration-300 ease-out font-semibold whitespace-pre cursor-pointer">
                        <Link href="/director">Meet our Director</Link>
                      </li>
                      <li className="text-[14px]  border-b-[0.5px] border-b-[white]/[0.5]  bg-[#0167fc] text-white py-[20px] px-[15px] hover:text-[#F20002] transition-colors duration-300 ease-out font-semibold whitespace-pre cursor-pointer">
                        <Link href="/team">Our Team</Link>
                      </li>
                      <li className="text-[14px] hidden   bg-[#0167fc] text-white py-[20px] px-[15px] hover:text-[#F20002] transition-colors duration-300 ease-out font-semibold whitespace-pre cursor-pointer">
                        <Link href="">Our Network</Link>
                      </li>
                    </div>
                  </div>
                )}
              </li>
              <li
                onMouseEnter={handleProduct}
                onMouseLeave={handleProductHide}
                className="relative"
              >
                <Link
                  href="#"
                  className="font-semibold hover:text-[#F20002] transition-colors duration-300 text-[#ffffff] ease-out"
                >
                  Products
                </Link>

                {product && (
                  <div className="absolute top-[18px] left-0    w-[250px] h-[126px] z-40 space-y-[10px]">
                    <div className="bg-white  border-t-[4px] border-t-[#f20003]   absolute top-[27px] h-[100%] w-full ">
                      <>
                        {mainCategory?.map((item: any, index: any) => (
                          <>
                            <li
                              onMouseEnter={() => handleSubmenu(index)}
                              className="text-[14px] relative border-b-[0.5px] capitalize border-b-[white]/[0.3] hover:text-[#F20002] bg-[#0167fc] text-black py-[20px] px-[15px] transition-colors duration-300 ease-out font-semibold cursor-pointer"
                            >
                              <Link href="/about">
                                {item?.attributes?.title}
                              </Link>
                            </li>

                            {sub === 0 && (
                              <div className="absolute top-[0px] left-[100%]    w-[91%] h-[126px] z-40 space-y-[10px]">
                                <div className="bg-black border-l-[0.5px] w-full border-l-[white]  border-t-[4px] border-t-[#f20003]   absolute top-[10px] h-[100%]  ">
                                  {subCategory?.map((item: any, index: any) => (
                                    <>
                                      {/* {console.log(item)} */}
                                      <li
                                        onMouseEnter={() =>
                                          handleSubmenu2(index)
                                        }
                                        onMouseLeave={handleSubmenuHide2}
                                        className="text-[15px] relative  capitalize border-b-[0.5px] border-b-[white]/[0.3] hover:text-[#F20002] bg-[#0167fc] text-black py-[20px] px-[15px] transition-colors duration-300 ease-out font-semibold cursor-pointer"
                                      >
                                        <Link href="/about">
                                          {item?.attributes?.title}
                                        </Link>
                                      </li>

                                      {sub2 === index && (
                                        <div className="absolute  left-[100%]    w-[54%] h-[126px] z-40 space-y-[10px]">
                                          <div className=" mt-[-60px]    absolute top-[0px] h-[100%] w-full ">
                                            {item.attributes.brand_name && (
                                              <>
                                                <li className="text-[15px] whitespace-pre w-full border-b-[0.5px] capitalize border-b-[white]/[0.3] hover:text-[#F20002] bg-[#0167fc] text-white py-[20px] px-[15px] transition-colors duration-300 ease-out font-semibold cursor-pointer">
                                                  <Link
                                                    href={`/brand-product/${item.attributes.brand_name}`}
                                                  >
                                                    {item.attributes.brand_name}
                                                  </Link>
                                                </li>
                                                {item?.attributes
                                                  ?.brand_name2 && (
                                                  <li className="text-[15px] border-b-[0.5px] capitalize border-b-[white]/[0.3] hover:text-[#F20002] bg-[#0167fc] text-black py-[20px] px-[15px] transition-colors duration-300 ease-out font-semibold cursor-pointer">
                                                    <Link
                                                      href={`/brand-product/${item?.attributes?.brand_name2}`}
                                                    >
                                                      {
                                                        item?.attributes
                                                          ?.brand_name2
                                                      }
                                                    </Link>
                                                  </li>
                                                )}
                                              </>
                                            )}

                                            {/* {item.attributes.Brand_name==="BioSystems" && (
                                        <li className="text-[15px] border-b-[0.5px] capitalize border-b-[white]/[0.3] hover:text-[#0000CC] bg-[#0167fc] text-white py-[20px] px-[15px] transition-colors duration-300 ease-out font-semibold cursor-pointer">
                                          {item.sub2}
                                        </li>
                                      )} */}
                                          </div>
                                        </div>
                                      )}
                                    </>
                                  ))}
                                </div>
                              </div>
                            )}

                            {sub === 1 && (
                              <div className="absolute top-[0px] left-[100%]    w-[91%] h-[126px] z-40 space-y-[10px]">
                                <div className=" border-l-[0.5px] border-l-[white]  border-t-[4px] border-t-[#f20003]   absolute top-[10px] h-[100%] w-full ">
                                  {secondCategory?.map(
                                    (item: any, index: number) => (
                                      <>
                                        <li
                                          onMouseEnter={() =>
                                            handleList2(index)
                                          }
                                          className="text-[15px] relative  capitalize border-b-[0.5px] border-b-[white]/[0.3] hover:text-[#F20002] bg-[#0167fc] text-black py-[20px] px-[15px] transition-colors duration-300 ease-out font-semibold cursor-pointer"
                                        >
                                          <Link href="/about">
                                            {item?.attributes?.title}
                                          </Link>
                                        </li>
                                        {list2 === index && (
                                          <div className="absolute  left-[100%]    w-[35%] h-[126px] z-40 space-y-[10px]">
                                            <div className=" mt-[-60px]    absolute top-[0px] h-[100%] w-full ">
                                              {item?.attributes?.brand_name && (
                                                <li className="text-[15px] border-b-[0.5px] capitalize border-b-[white]/[0.3] hover:text-[#F20002] bg-[#0167fc] text-black py-[20px] px-[15px] transition-colors duration-300 ease-out font-semibold cursor-pointer">
                                                  <Link
                                                    href={`/brand-product/${item?.attributes?.brand_name}`}
                                                  >
                                                    {
                                                      item?.attributes
                                                        ?.brand_name
                                                    }
                                                  </Link>
                                                </li>
                                              )}
                                            </div>
                                          </div>
                                        )}
                                      </>
                                    )
                                  )}
                                </div>
                              </div>
                            )}
                            {sub === 2 && (
                              <div className="absolute top-[95px] left-[100%]    w-[91%] h-[126px] z-40 space-y-[10px]">
                                <div
                                  onMouseEnter={handleSubmenu2}
                                  onMouseLeave={handleSubmenuHide2}
                                  className=" border-l-[0.5px] border-l-[white]  border-t-[4px] border-t-[#f20003]   absolute top-[10px] h-[100%] w-full "
                                >
                                  {thirdCategory?.map(
                                    (item: any, index: number) => (
                                      <>
                                        <li className="text-[15px] relative  capitalize border-b-[0.5px] border-b-[white]/[0.3] hover:text-[#F20002] bg-[#0167fc] text-white py-[20px] px-[15px] transition-colors duration-300 ease-out font-semibold cursor-pointer">
                                          <Link
                                            href={`/brand-product/${item?.attributes?.title}`}
                                          >
                                            {item?.attributes?.title}
                                          </Link>
                                        </li>
                                        {/* {sub2 && (
                                  <div className="absolute top-[5px] left-[100%]    w-[199px] h-[126px] z-40 space-y-[10px]">
                                    <div className="  border-t-[4px] border-t-[#f20003]   absolute top-[0px] h-[100%] w-full ">
                                      <li className="text-[15px] border-b-[0.5px] capitalize border-b-[white]/[0.3] hover:text-[#0000CC] bg-[#0167fc] text-white py-[20px] px-[15px] transition-colors duration-300 ease-out font-semibold cursor-pointer">
                                        <Link href="/about">BioSystems</Link>
                                      </li>
                                    </div>
                                  </div>
                                )} */}
                                      </>
                                    )
                                  )}
                                </div>
                              </div>
                            )}

                            {sub === 3 && (
                              <div className="absolute top-[100px] left-[100%]    w-[91%] h-[126px] z-40 space-y-[10px]">
                                <div className=" border-l-[0.5px]   border-t-[4px] border-t-[#f20003]   absolute top-[10px] h-[100%] w-full ">
                                  {fourthCategory?.map(
                                    (item: any, index: number) => (
                                      <>
                                        <li
                                          onMouseEnter={() =>
                                            handlelist4(index)
                                          }
                                          className="text-[15px] relative  capitalize border-b-[0.5px] border-b-[white]/[0.3] hover:text-[#F20002] bg-[#0167fc] text-white py-[20px] px-[15px] transition-colors duration-300 ease-out font-semibold cursor-pointer"
                                        >
                                          <Link href="/about">
                                            {item?.attributes?.title}
                                          </Link>
                                        </li>
                                        {list4 === index && (
                                          <div className="absolute  left-[100%]    w-[55%] h-[126px] z-40 space-y-[10px]">
                                            <div className=" mt-[-60px] border-t-[4px] border-t-[#f20003]   absolute top-[0px] h-[100%] w-full ">
                                              <li className="text-[15px] border-b-[0.5px] capitalize border-b-[white]/[0.3] hover:text-[#F20002] bg-[#0167fc] text-white py-[20px] px-[15px] transition-colors duration-300 ease-out font-semibold cursor-pointer">
                                                <Link
                                                  href={`/brand-product/${item?.attributes?.brand_name}`}
                                                >
                                                  {item?.attributes?.brand_name}
                                                </Link>
                                              </li>
                                            </div>
                                          </div>
                                        )}
                                      </>
                                    )
                                  )}
                                </div>
                              </div>
                            )}
                          </>
                        ))}
                      </>
                    </div>
                  </div>
                )}
              </li>

              <li>
                <Link
                  href="/news"
                  className=" font-semibold hover:text-[#] transition-colors text-[#ffffff] duration-300 ease-out"
                >
                  News & Events
                </Link>
              </li>

              <li>
                <Link
                  href="/careers"
                  className="font-semibold hover:text-[#942d2d] text-[#ffffff] transition-colors duration-300 ease-out"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className=" font-semibold hover:text-[#942d2d] text-[#ffffff] transition-colors duration-300 ease-out"
                >
                  Gallery
                </Link>
              </li>
              <li className="h-[42px] w-[128px] bg-[#31b5d8] rounded-[39px] flex items-center ml-[0px] justify-center">
                <Link
                  target="_#f20003"
                  href="/contact"
                  className=" text-white text-sm leading-[18.15px] font-semibold"
                  passHref
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        </div>
        </div>
    
    </>
  );
}

export default Nav1;
