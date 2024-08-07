import React, { useState } from "react";
import toast from "react-hot-toast";
import { BsSearch } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import { LuSettings } from "react-icons/lu";

const DashNav = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(searchTerm);
    toast.success("Searching for " + searchTerm);
    setSearchTerm("");
  };

  return (
    <div className="flex justify-between px-2  md:h-20 items-center md:px-4 lg:px-6  md:py-4 flex-col-reverse py-2 gap-2  mb-2  bg-darkBg md:flex-row md:mb-0">
      <div className="">
        <form
          onSubmit={handleSubmit}
          className="flex items-center h-min bg-lightHeader rounded-lg border  border-gray-600 "
        >
          <input
            type="text"
            placeholder="Search"
            // autoFocus
            required
            className=" px-8 py-2 bg-lightHeader   outline-none    bg-transparent rounded-lg   "
            value={searchTerm}
            onChange={handleChange}
          />
          <button type="submit" className="px-4">
            <BsSearch className="w-5 h-5" />
          </button>{" "}
          {/* <button className="flex items-center justify-center h-12 text-white bg-teal-500 w-11 rounded-r-md">
                <BsSearch className="w-5 h-5" />
              </button> */}
        </form>
      </div>
      <div className="flex gap-2 md:gap-3 lg:gap-3">
        <a
          href="mailto:salmanansari02120@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="h-10 w-10 bg-lightHeader flex justify-center items-center rounded-full"
        >
          <CiMail className="text-xl" />
        </a>
        <div className="h-10 w-10 bg-lightHeader flex justify-center items-center rounded-full">
          <LuSettings className="text-xl" />
        </div>
        <div className="h-10 w-10 bg-lightHeader flex justify-center items-center rounded-full relative">
          <IoNotificationsOutline className="text-xl" />
          <div className="h-2 w-2 bg-primaryBlue rounded-full absolute right-3 top-2 md:h-2.5 md:w-2.5 animate-ping"></div>
          <div className="h-2 w-2 bg-primaryBlue rounded-full absolute right-3 top-2 md:h-2.5 md:w-2.5 "></div>
        </div>
        <div className="h-10 w-10 bg-lightHeader flex justify-center items-center rounded-full ml-4">
          <img
            src="https://lh3.googleusercontent.com/a/ACg8ocKTI9Q7QPn2kxvFxz5RQ48qmr36qzzMh-VBV1izI_ZVAQFi1yk=s288-c-no"
            alt=""
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default DashNav;
