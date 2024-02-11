import React, { useState } from "react";
import { Button, Drawer } from "antd";
import { FaBars } from "react-icons/fa";
import Link from "next/link";

function Dramenu({ categories }: any) {
  // filtering categories
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

  const [open, setOpen] = useState(false);
  const [about, setAbout] = useState(false);
  const [product, setProduct] = useState(false);
  const [sub, setSub] = useState(8);
  const [sub2, setSub2] = useState(5);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleSubmenu = (index: any) => {
    // console.log(index);
    setSub(index);
    // setMenu2(false);
    // setMenu3(false);
    // setMenu4(false);
  };
  const handleSubmenu2 = (index: any) => {
    // console.log(index);
    setSub2(index);
  };

  const handleClick = () => {
    setAbout(!about);
    setProduct(false);
  };
  const handleProduct = () => {
    setProduct(true);
    setAbout(false);
  };
  return (
    <>
      <FaBars fontSize={25} onClick={showDrawer} className="baricons" />
      <Drawer placement="right" onClose={onClose} open={open}>
        <ul className="flex flex-col items-start pl-[0px] justify-start gap-[25px] font-[inter] font-normal text-[16px] leading-[14.52px] text-[#000000]">
          <li className="text-start">
            <Link href="/">HOME</Link>
          </li>
          <li onClick={handleClick}>
            <Link href="/about">COMPANY</Link>
            {about && (
              <div className="    w-[199px] pt-[10px] z-40 border-t-[1px] mt-[8px]">
                <div className="     h-[100%] w-full space-y-[8px]">
                  <li className="text-[15px] border-b-[0.5px] border-b-[white]/[0.5] hover:text-[#0000CC]  transition-colors duration-300 ease-out font-semibold cursor-pointer">
                    <Link href="/about">About Us</Link>
                  </li>
                  <li className="text-[15px]   border-b-[0.5px] border-b-[white]/[0.5]   hover:text-[#0000CC] transition-colors duration-300 ease-out font-semibold whitespace-pre cursor-pointer">
                    <Link href="/director">Meet our Director</Link>
                  </li>
                  <li className="text-[15px]  border-b-[0.5px] border-b-[white]/[0.5]   hover:text-[#0000CC] transition-colors duration-300 ease-out font-semibold whitespace-pre cursor-pointer">
                    <Link href="/team">Our Team</Link>
                  </li>
                  <li className="text-[15px] hidden    hover:text-[#0000CC] transition-colors duration-300 ease-out font-semibold whitespace-pre cursor-pointer">
                    <Link href="">Our Network</Link>
                  </li>
                </div>
              </div>
            )}
          </li>
          <li>
            <Link href="/">NEWS & EVENT</Link>
          </li>
          <li onClick={handleProduct}>
            <Link href="/">PRODUCT CATEGORY</Link>
            {product && (
              <div className="   w-[250px] mt-[10px]  z-40 space-y-[10px]">
                <div className="bg-white  border-t-[1px] pt-[10px] space-y-[8px]    h-[100%] w-full ">
                  <>
                    {mainCategory?.map((item: any, index: number) => (
                      <>
                        <li
                          onMouseEnter={() => handleSubmenu(index)}
                          className="text-[15px] relative  hover:text-[#0000CC]  transition-colors duration-300 ease-out font-semibold cursor-pointer"
                        >
                          <Link href="#">{item?.attributes?.title}</Link>
                        </li>
                      </>
                    ))}
                    {sub === 0 && (
                      <div className="    w-[100%] pt-[10px] z-40 space-y-[10px]">
                        <div className=" border-l-[0.5px] w-full border-l-[white]  border-b pb-[10px] border-t-[3px] pt-[10px] border-t-[black]    h-[100%]  ">
                          {subCategory?.map((item: any, index: any) => (
                            <div className="border-b pb-[8px] pt-[8px]">
                              {/* {console.log(item)} */}
                              <li
                                onClick={() => handleSubmenu2(index)}
                                // onMouseLeave={handleSubmenuHide2}
                                className="text-[15px] relative  capitalize  hover:text-[#0000CC]  transition-colors duration-300 ease-out font-semibold cursor-pointer"
                              >
                                <Link href="#">{item?.attributes?.title}</Link>
                              </li>

                              {sub2 === index && (
                                <div className="    w-[50%]  z-40 space-y-[10px]">
                                  <div className="  py-[5px] pl-[5px] mb-[0px]   h-[100%] w-full ">
                                    {item.attributes.brand_name && (
                                      <div className="flex items-center pt-[8px]">
                                        <p className="mr-[4px]">➡️</p>
                                        <li className="text-[15px] whitespace-pre w-full  hover:text-[#0000CC]  transition-colors duration-300 ease-out font-semibold cursor-pointer">
                                          <Link
                                            href={`/brand-product/${item.attributes.brand_name}`}
                                          >
                                            {item.attributes.brand_name}
                                          </Link>
                                        </li>
                                        {item?.attributes?.brand_name2 && (
                                          <li className="text-[15px]  hover:text-[#0000CC]  transition-colors duration-300 ease-out font-semibold cursor-pointer">
                                            <Link
                                              href={`/brand-product/${item?.attributes?.brand_name2}`}
                                            >
                                              {item?.attributes?.brand_name2}
                                            </Link>
                                          </li>
                                        )}
                                      </div>
                                    )}
                                  </div>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    {sub === 1 && (
                      <div className="    w-[91%]  z-40 space-y-[10px]">
                        <div className="bg-white border-l-[0.5px] w-full border-l-[white] border-b pb-[10px] border-t-[1px] pt-[10px]    h-[100%]  ">
                          {secondCategory?.map((item: any, index: any) => (
                            <>
                              {/* {console.log(item)} */}
                              <li
                                onClick={() => handleSubmenu2(index)}
                                // onMouseLeave={handleSubmenuHide2}
                                className="text-[15px] relative mb-[4px] capitalize border-b-[0.5px] border-b-[white]/[0.3] hover:text-[#0000CC]  transition-colors duration-300 ease-out font-semibold cursor-pointer"
                              >
                                <Link href="#">{item?.attributes?.title}</Link>
                              </li>
                              {sub2 === index && (
                                <div className="    w-[50%]  z-40 space-y-[10px]">
                                  <div className="  py-[5px] pl-[5px] mb-[0px]   h-[100%] w-full ">
                                    {item.attributes.brand_name && (
                                      <div className="flex items-center pt-[8px]">
                                        <p className="mr-[4px]">➡️</p>
                                        <li className="text-[15px] whitespace-pre w-full  hover:text-[#0000CC]  transition-colors duration-300 ease-out font-semibold cursor-pointer">
                                          <Link
                                            href={`/brand-product/${item.attributes.brand_name}`}
                                          >
                                            {item.attributes.brand_name}
                                          </Link>
                                        </li>
                                        {item?.attributes?.brand_name2 && (
                                          <li className="text-[15px]  hover:text-[#0000CC]  transition-colors duration-300 ease-out font-semibold cursor-pointer">
                                            <Link
                                              href={`/brand-product/${item?.attributes?.brand_name2}`}
                                            >
                                              {item?.attributes?.brand_name2}
                                            </Link>
                                          </li>
                                        )}
                                      </div>
                                    )}
                                  </div>
                                </div>
                              )}
                            </>
                          ))}
                        </div>
                      </div>
                    )}
                    {sub === 2 && (
                      <div className="    w-[91%]  z-40 space-y-[10px]">
                        <div className="bg-white border-l-[0.5px] w-full border-l-[white] border-b pb-[10px] border-t-[1px] pt-[10px]    h-[100%]  ">
                          {thirdCategory?.map((item: any, index: any) => (
                            <>
                              {/* {console.log(item)} */}
                              <li
                                onClick={() => handleSubmenu2(index)}
                                // onMouseLeave={handleSubmenuHide2}
                                className="text-[15px] relative mb-[4px] capitalize border-b-[0.5px] border-b-[white]/[0.3] hover:text-[#0000CC]  transition-colors duration-300 ease-out font-semibold cursor-pointer"
                              >
                                <Link href="#">{item?.attributes?.title}</Link>
                              </li>

                              {sub2 === index && (
                                <div className="    w-[50%]  z-40 space-y-[10px]">
                                  <div className="  py-[3px] pl-[5px] mb-[0px]   h-[100%] w-full ">
                                    {item.attributes.brand_name && (
                                      <div className="flex items-center pt-[0px]">
                                        <p className="mr-[4px]">➡️</p>
                                        <li className="text-[15px] whitespace-pre w-full  hover:text-[#0000CC]  transition-colors duration-300 ease-out font-semibold cursor-pointer">
                                          <Link
                                            href={`/brand-product/${item.attributes.brand_name}`}
                                          >
                                            {item.attributes.brand_name}
                                          </Link>
                                        </li>
                                        {item?.attributes?.brand_name2 && (
                                          <li className="text-[15px]  hover:text-[#0000CC]  transition-colors duration-300 ease-out font-semibold cursor-pointer">
                                            <Link
                                              href={`/brand-product/${item?.attributes?.brand_name2}`}
                                            >
                                              {item?.attributes?.brand_name2}
                                            </Link>
                                          </li>
                                        )}
                                      </div>
                                    )}
                                  </div>
                                </div>
                              )}
                            </>
                          ))}
                        </div>
                      </div>
                    )}
                    {sub === 3 && (
                      <div className="    w-[91%]  z-40 space-y-[10px]">
                        <div className="bg-white border-l-[0.5px] w-full border-l-[white] border-b pb-[10px] border-t-[1px] pt-[10px]    h-[100%]  ">
                          {fourthCategory?.map((item: any, index: any) => (
                            <>
                              {/* {console.log(item)} */}
                              <li
                                onClick={() => handleSubmenu2(index)}
                                // onMouseLeave={handleSubmenuHide2}
                                className="text-[15px] relative mb-[4px] capitalize border-b-[0.5px] border-b-[white]/[0.3] hover:text-[#0000CC]  transition-colors duration-300 ease-out font-semibold cursor-pointer"
                              >
                                <Link href="#">{item?.attributes?.title}</Link>
                              </li>

                              {sub2 === index && (
                                <div className="    w-[50%]  z-40 space-y-[10px]">
                                  <div className="  py-[3px] pl-[5px] mb-[0px]   h-[100%] w-full ">
                                    {item.attributes.brand_name && (
                                      <div className="flex items-center pt-[0px]">
                                        <p className="mr-[4px]">➡️</p>
                                        <li className="text-[15px] whitespace-pre w-full  hover:text-[#0000CC]  transition-colors duration-300 ease-out font-semibold cursor-pointer">
                                          <Link
                                            href={`/brand-product/${item.attributes.brand_name}`}
                                          >
                                            {item.attributes.brand_name}
                                          </Link>
                                        </li>
                                        {item?.attributes?.brand_name2 && (
                                          <li className="text-[15px]  hover:text-[#0000CC]  transition-colors duration-300 ease-out font-semibold cursor-pointer">
                                            <Link
                                              href={`/brand-product/${item?.attributes?.brand_name2}`}
                                            >
                                              {item?.attributes?.brand_name2}
                                            </Link>
                                          </li>
                                        )}
                                      </div>
                                    )}
                                  </div>
                                </div>
                              )}
                            </>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                </div>
              </div>
            )}
          </li>
          <li>
            <Link href="">CAREER</Link>
          </li>
          <li>
            <Link href="">CHECK MAIL</Link>
          </li>
          <li>
            <Link href="/contact">CONTACT US</Link>
          </li>
        </ul>
      </Drawer>
    </>
  );
}

export default Dramenu;
