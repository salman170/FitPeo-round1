import React, { useState } from "react";
import toast from "react-hot-toast";
import { BsSearch } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import { LuSettings } from "react-icons/lu";

const DashNav = ({ open, setOpen }) => {
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
    <div className="flex items-center justify-between gap-2 px-2 py-2 mb-2 group md:h-20 md:px-4 lg:px-6 md:py-4 bg-darkBg md:flex-row md:mb-0">
      <div className="flex items-center gap-1">
        <div
          onClick={() => setOpen(!open)}
          className="flex items-center justify-center w-full p-2 mt-2 duration-500 cursor-pointer hover:scale-105 group md:hidden"
        >
          <div className="grid grid-cols-2 gap-0.5 cursor-pointer hover:gap-1 duration-500  group-hover:rotate-90">
            <div className="w-4 h-4 rounded-r-full rounded-tl-full bg-primaryBlue "></div>
            <div className="w-4 h-4 rounded-r-full rounded-bl-full bg-primaryBlue "></div>
            <div className="w-4 h-4 rounded-l-full rounded-tr-full bg-primaryBlue "></div>
            <div className="w-4 h-4 rounded-l-full rounded-br-full bg-primaryBlue "></div>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex items-center border border-gray-600 rounded-lg h-min bg-lightHeader md:w-full "
        >
          <input
            type="text"
            placeholder="Search"
            // autoFocus
            required
            className="w-20 px-2 py-2 duration-500 bg-transparent rounded-lg outline-none md:px-8 bg-lightHeader md:w-auto "
            value={searchTerm}
            onChange={handleChange}
          />
          <button type="submit" className="px-2 md:px-4">
            <BsSearch className="w-5 h-5" />
          </button>{" "}
          {/* <button className="flex items-center justify-center h-12 text-white bg-teal-500 w-11 rounded-r-md">
                <BsSearch className="w-5 h-5" />
              </button> */}
        </form>
      </div>
      <div className="flex gap-2 md:gap-3 lg:gap-3 ">
        <a
          href="mailto:salmanansari02120@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-lightHeader"
        >
          <CiMail className="text-xl" />
        </a>
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-lightHeader">
          <LuSettings className="text-xl" />
        </div>
        <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-lightHeader">
          <IoNotificationsOutline className="text-xl" />
          <div className="h-2 w-2 bg-primaryBlue rounded-full absolute right-3 top-2 md:h-2.5 md:w-2.5 animate-ping"></div>
          <div className="h-2 w-2 bg-primaryBlue rounded-full absolute right-3 top-2 md:h-2.5 md:w-2.5 "></div>
        </div>
        <div className="flex items-center justify-center w-10 h-10 ml-4 rounded-full bg-lightHeader">
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
