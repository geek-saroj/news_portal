"use client";
import { BaseUrl } from "../api/global";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { imageUrl } from "../utils/imageUrl";
import Lokpriya from "../components/Lokpriya";
import { useRouter } from "next/navigation";
import RelativeTime from "../components/Convertdate";
import Pagination from "../components/Pagination";
interface Photo {
  url: string;
}

function page() {
  const router = useRouter();
  // const [politics,setPolitics ] = useState<any>(null);
  const [data, setData] = useState<Photo[]>([]);
  const [activePage, setActivePage] = useState<number>(1);
  const itemsPerPage: number = 4;

  useEffect(() => {
    let getCategory = async () => {
      let response = await axios.get(
        `${BaseUrl}/news?populate=*&filters[isPolitics][$eq]=true&sort[0]=id:desc`
      );

      setData(response?.data.data);
    };
    getCategory();
  }, []);
  const handleClick = (item: any) => {
    router.push(`/rajnetic/${item.id}`);
  };
  const lastPageIndex: number = activePage * itemsPerPage;
  const firstPageIndex: number = lastPageIndex - itemsPerPage;
  const currentPage: Photo[] = data.slice(firstPageIndex, lastPageIndex);
  const handlePageChange = (page: number): void => {
    setActivePage(page);
  };

  // console.log("politics is",politics)
  return (
    <section className="bg-gradient-to-b from-blue-100 to-white py-12">
      <div className="max-w-[1127px] 2xl:max-w-[1180px] mx-auto my-10 px-[30px] lg:px-[20px] md:px-0">
        <div className="flex flex-col lg:flex-row">
          <div className="basis-[70%]">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-1 gap-8">
              {currentPage &&
                currentPage.map((item: any) => (
                  <div key={item.id} onClick={() => handleClick(item)}>
                    <div className="flex gap-6 items-center">
                      <div className="w-full lg:w-1/2 lg:ml-auto">
                        <div className="w-full h-full overflow-hidden">
                          <img
                            src={imageUrl(
                              `${item?.attributes?.coverimage?.data?.attributes?.url}`
                            )}
                            alt="img"
                            className="object-cover w-full h-full rounded-3xl transition-transform duration-300 transform-gpu hover:scale-105"
                          />
                        </div>
                      </div>
                      <div className="w-full lg:w-1/2">
                        <div>
                          <div className="mb-8">
                            <h2 className="text-base font-poppin lg:text-3xl font-bold text-black mb-1">
                              {item?.attributes?.title}
                            </h2>
                            <h5 className="text-lg text-black">
                              <RelativeTime
                                date={item?.attributes?.createdAt}
                              />
                            </h5>
                          </div>
                          <div>
                            <p className="font-poppin text-sm lg:text-lg font-medium text-black  line-clamp-2">
                              {
                                item?.attributes?.description?.[0].children[0]
                                  .text
                              }
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <Pagination
              totalItems={data.length}
              itemsPerPage={itemsPerPage}
              activePage={activePage}
              onPageChange={handlePageChange}
            />
          </div>
          <div className="basis-[30%]">
            <Lokpriya />
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
