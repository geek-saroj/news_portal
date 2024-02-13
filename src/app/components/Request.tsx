"use client"

import React from "react";
import axios from "axios";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FiMail, FiPhone } from "react-icons/fi";
import Link from "next/link";
// import "react-toastify/dist/ReactToastify.css";
import { useRef, useState } from "react";

const ContactForm = ({ data }: any) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
    }
  };

  const handleFileDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    const files = event.dataTransfer.files;
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
    }
  };

  const openFileDialog = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

//   const formik = useFormik({
//     initialValues: {
//       full_name: "",
//       email: "",
//       message: "",
//     },
//     onSubmit: (values) => {
//       // alert(JSON.stringify(values, null, 2));
//       handleSubmit(values);
//     },
//   });

//   const handleSubmit = async (values: any) => {
//     let submit = await axios.post(`${BaseUrl}/contacts`, { data: values });
//     // console.log(submit);
//     if (submit) {
//       toast.success("Message sent Successfully!");
//     }
//   };

  return (
    <div className="py-4 lg:py-6 px-auto">
      <h1 className="text-xl md:text-4xl font-semibold leading-[42.19px]  text-center  pt-8 font-poppin">
      मलाई रिपोर्ट गर्नुहोस्
      </h1>
      <h4 className="text-sm font-poppin text-center  pt-4">
        
      </h4>

      <div className="max-w-[1180px] 2xl:max-w-[1180px]  mx-auto flex md:flex-row flex-col justify-between px-[30px] py-10">
        {/* <ToastContainer /> */}
        <div className="basis-[50%] flex items-center flex-col md:gap-[69px] gap-[50px] bg-[#29b4d8]  px-[30px]">
          <div className="px-[40px] py-10">
            <h3 className="mb-2  lg:text-6xl   pt-6 md:pt-12  font-poppin font-extrabold text-white justify-start  uppercase text-5xl text-start">
              WANT TO KNOW <br /> MORE?
            </h3>
            <div className="">
              <h3 className=" text-base md:text-xl font-base  font-poppin font-bold text-white pt-4  ">
                Give us a call at any of the below numbers
              </h3>
              <h3 className=" text-sm md:text-xl font-sm  text-start font-bold  font-poppin text-[#ffffff] pt-4  ">
                +977000000000
              </h3>
              <h3 className=" text-sm md:text-xl font-sm  text-start font-bold font-poppin text-white pt-4  ">
                +977000000000
              </h3>
              <h3 className=" text-sm md:text-xl font-sm  text-start font-bold font-poppin text-white pt-4 pb-4">
                +977000000000
              </h3>
              <hr className="pt-2" />
              <h3 className=" text-sm md:text-xl font-sm  text-start font-poppin font-bold text-white pt-8">
                Please leave your contact details in the given form, and we will
                be in touch within{" "}
                <span className="text-white text-2xl font-bold">24 hours.</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="basis-[50%]  bg-[#f4f4f3]">
          <div className="  md:p-6  px-[15px] mt-[30px] md:mt-0 ">
            <form
            //   onSubmit={formik.handleSubmit}
              className="w-full flex items-start justify-center flex-col gap-[24px]"
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="basis-[50%]">
                  <div className="py-2">
                    <div className="pb-1 font-poppin text-[13px] ">
                      FULL NAME
                      <sup className="text-red-900 inline-block  pl-1">*</sup>
                    </div>

                    <input
                      type="text"
                      name="text"
                    //   onChange={formik.handleChange}
                    //   value={formik.values.email}
                      placeholder="Enter Full Name"
                      className="bg-[#fff] text-[13px] h-[40px] w-[220px] border-[1px] border-[#4d4d4d] pl-2 "
                    />
                  </div>
                  <div className="py-2">
                    <div className="pb-2 font-poppin text-[13px] ">
                      ENTER EMAIL
                      <sup className="text-red-900 inline-block  pl-1">*</sup>
                    </div>

                    <input
                      type="email"
                      name="email"
                    //   onChange={formik.handleChange}
                    //   value={formik.values.email}
                      placeholder="Enter Email"
                      className="bg-[#fff] text-[13px] h-[40px] w-[220px] border-[1px] border-[#4d4d4d] pl-2 "
                    />
                  </div>
                  <div className="py-2">
                    <div className="pb-2 font-poppin text-[13px] ">COMPANY</div>

                    <input
                      type="text"
                      name="text"
                    //   onChange={formik.handleChange}
                    //   value={formik.values.email}
                      placeholder="Company Name "
                      className="bg-[#fff] text-[13px] h-[40px] w-[220px] border-[1px] border-[#4d4d4d] pl-2 "
                    />
                  </div>

                  <div className="py-2">
                    <div className="pb-2 font-poppin text-[13px] ">
                      PROJECT TYPE
                      <sup className="text-red-900 inline-block  pl-1">*</sup>
                    </div>
                    <select
                      name="project"
                      className="bg-[#fff] text-[13px] h-[40px] w-[220px] border-[1px] border-[#4d4d4d] pl-2"
                    >
                      <option
                        className="font-poppin text-[13px] bg-[#fff]"
                        value=""
                      >
                        Mobile Apps
                      </option>
                      <option
                        className="font-poppin text-[13px] bg-[#fff]"
                        value=""
                      >
                        Web Development
                      </option>
                      <option
                        className="font-poppin text-[13px] bg-[#fff]"
                        value=""
                      >
                        UI and UX Design
                      </option>
                      <option
                        className="font-poppin text-[13px] bg-[#fff]"
                        value=""
                      >
                        Emerging Tech
                      </option>
                      <option
                        className="font-poppin text-[13px] bg-[#fff]"
                        value=""
                      >
                        Others
                      </option>
                    </select>
                  </div>
                </div>

                <div className="basis-[50%]">
                  <div className="pt-1">
                    <div className="pb-2 font-poppin text-[13px] ">
                      PHONE NUMBER
                      <sup className="text-red-900 inline-block  pl-1">*</sup>
                    </div>

                    <input
                      type="text"
                      name="text"
                    //   onChange={formik.handleChange}
                    //   value={formik.values.email}
                      placeholder="+977"
                      className="bg-[#fff] text-[13px] h-[40px] w-[220px] border-[1px] border-[#4d4d4d] pl-2 "
                    />
                  </div>

                  <div className="pt-5">
                    <div className="pb-1 font-poppin text-[13px] ">
                      WHATSAPP\SKYPE ID
                      <sup className="text-red-900 inline-block  pl-1">*</sup>
                    </div>

                    <input
                      type="text"
                      name="text"
                    //   onChange={formik.handleChange}
                    //   value={formik.values.email}
                      placeholder="Skype\Whatsapp "
                      className="bg-[#fff] text-[13px] h-[40px] w-[220px] border-[1px] border-[#4d4d4d] pl-2 "
                    />
                  </div>
                  <div className="py-5">
                    <div className="pb-1 font-poppin text-[13px] ">
                      WEBSITE
                      <sup className="text-red-900 inline-block  pl-1">*</sup>
                    </div>

                    <input
                      type="text"
                      name="text"
                    //   onChange={formik.handleChange}
                    //   value={formik.values.email}
                      placeholder="Enter URL"
                      className="bg-[#fff] text-[13px] h-[40px] w-[220px] border-[1px] border-[#4d4d4d] pl-2 "
                    />
                  </div>
                  <div className="">
                    <div className="pb-1 font-poppin text-[13px] ">
                      ESTIMATED BUDGET
                      <sup className="text-red-900 inline-block  pl-1">*</sup>
                    </div>

                    <input
                      type="text"
                      name="text"
                    //   onChange={formik.handleChange}
                    //   value={formik.values.email}
                      placeholder="Budget "
                      className="bg-[#fff] text-[13px] h-[40px] w-full lg:w-[220px] border-[1px] border-[#4d4d4d] pl-2 "
                    />
                  </div>
                </div>
              </div>

              <textarea
                name="message"
                id=""
                // onChange={formik.handleChange}
                // value={formik.values.message}
                placeholder="Message"
                className="bg-[#fff] h-[160px] pt-[15px] w-full pl-[21px] outline-none"
              ></textarea>
              <div
                className="border-dashed border-2 border-gray-400 w-full p-1 text-center cursor-pointer"
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleFileDrop}
                onClick={openFileDialog}
              >
                {selectedFile ? (
                  <div>
                    <p>Selected File: {selectedFile.name}</p>
                    <p>File Size: {selectedFile.size} bytes</p>
                  </div>
                ) : (
                  <p>Drag and drop a file here, or click to select a file.</p>
                )}
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  onChange={handleFileChange}
                />
              </div>
        
           
              <div className="items-center justify-center  lg:px-[150px] ">
                <button
                  type="submit"
                  className="h-[45px] w-[198px] bg-[#31b5d8] hover:bg-[#033c5a] p-6 rounded-lg font-poppin flex items-center justify-center text-white text-[14px] leading-[17.57px] font-bold"
                >
                  CALL ME BACK
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
