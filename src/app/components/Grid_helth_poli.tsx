"use client";
import { BaseUrl } from "../api/global";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { imageUrl } from "../utils/imageUrl";
import Link from "next/link";

function Grid_helth_poli() {
  const [edication, seteducation] = useState<any>(null);
  const [helth, selhelth] = useState<any>(null);
  const [crime, setcrime] = useState<any>(null);

  useEffect(() => {
    let getCategory = async () => {
      let response = await axios.get(
        `${BaseUrl}/news?populate=*&filters[isEducation][$eq]=true&sort[0]=id:desc&pagination[limit]=3 `
      );
      let response1 = await axios.get(
        `${BaseUrl}/news?populate=*&filters[IsHelth][$eq]=true&sort[0]=id:desc&pagination[limit]=3`
      );
      let response2 = await axios.get(
        `${BaseUrl}/news?populate=*&filters[isCrime][$eq]=true&sort[0]=id:desc&pagination[limit]=3`
      );

      seteducation(response?.data.data);
      selhelth(response1?.data.data);
      setcrime(response2?.data.data);
    };
    getCategory();
  }, []);
  return (
    <div className="max-w-[1127px] 2xl:max-w-[1180px] mx-auto my-10 px-[15px]  md:px-0">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="basis-1/3">
          <h1 className="text-[30px] font-bold">शिक्षा</h1>
          <div className="w-[150px] h-1 bg-blue-700  items-start"></div>
          <div className="pt-5">
            {edication &&
              edication.map((item: any, index: number) => (
                <div
                  key={item.id}
                  className={`justify-center items-center${
                    index === 0 ? "basis-2/3" : "basis-1/3 pt-3"
                  }`}
                >
                  <div className="">
                    {index === 0 ? (
                      <div>
                        <h1 className="text-[18px] w-full h-[40px] font-bold">
                          {item?.attributes?.title}
                        </h1>
                        <img
                          src={imageUrl(
                            item?.attributes?.coverimage?.data?.attributes?.url
                          )}
                          alt=""
                          className="w-full h-[250px]"
                        />
                      </div>
                    ) : (
                      <div>
                        <div className="flex gap-4 items-center pt-3">
                          <img
                            src={imageUrl(
                              item?.attributes?.coverimage?.data?.attributes
                                ?.url
                            )}
                            alt=""
                            className="w-[80px] h-[60px]"
                          />
                          <h1>{item?.attributes?.title}</h1>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="basis-1/3">
          <h1 className="text-[30px] font-bold">स्वास्थ्य</h1>
          <div className="w-[150px] h-1 bg-blue-700  items-start"></div>
          <div className="pt-5">
            {helth &&
              helth.map((item: any, index: number) => (
                <div
                  key={item.id}
                  className={`justify-center items-center${
                    index === 0 ? "basis-2/3" : "basis-1/3 pt-3"
                  }`}
                >
                  <div className="">
                    {index === 0 ? (
                      <div>
                        <h1 className="text-[18px] w-full h-[40px] font-bold">
                          {item?.attributes?.title}
                        </h1>
                        <img
                          src={imageUrl(
                            item?.attributes?.coverimage?.data?.attributes?.url
                          )}
                          alt=""
                          className="w-full h-[250px]"
                        />
                      </div>
                    ) : (
                      <div>
                        <div className="flex gap-4 items-center pt-3">
                          <img
                            src={imageUrl(
                              item?.attributes?.coverimage?.data?.attributes
                                ?.url
                            )}
                            alt=""
                            className="w-[80px] h-[60px]"
                          />
                          <h1>{item?.attributes?.title}</h1>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="basis-1/3">
          <h1 className="text-[30px] font-bold ">अपराध/सुरक्षा</h1>
          <div className="w-[150px] h-1 bg-blue-700  items-start"></div>
          <div className="pt-5">
            {crime &&
              crime.map((item: any, index: number) => (
                <div
                  key={item.id}
                  className={`justify-center items-center${
                    index === 0 ? "basis-2/3" : "basis-1/3 "
                  }`}
                >
                  <div className="">
                    {index === 0 ? (
                      <div>
                        <h1 className="text-[18px] w-full h-[40px] font-bold">
                          {item?.attributes?.title}
                        </h1>
                        <img
                          src={imageUrl(
                            item?.attributes?.coverimage?.data?.attributes?.url
                          )}
                          alt=""
                          className="w-full h-[250px]"
                        />
                      </div>
                    ) : (
                      <div>
                        <div className="flex gap-4 items-center pt-6">
                          <img
                            src={imageUrl(
                              item?.attributes?.coverimage?.data?.attributes
                                ?.url
                            )}
                            alt=""
                            className="w-[80px] h-[60px]"
                          />
                          <h1>{item?.attributes?.title}</h1>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Grid_helth_poli;
