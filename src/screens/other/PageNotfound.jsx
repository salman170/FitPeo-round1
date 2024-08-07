import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <>
      <div className="flex flex-col items-center pb-12 text-center h-screen justify-center ">
        <p className="mt-4 mb-6 text-3xl text-primary">Not Found</p>
        <p className="mb-4 text-gray-500 lg:mb-6">
          The resource requested could not be found on this server!
        </p>
        <div className="flex items-center justify-center px-4 py-2.5 text-sm text-white  rounded-full md:px-8  lg:px-12 bg-primaryBlue  hover:shadow-lg duration-20 gap-4 ">
          <FaLongArrowAltRight />
          <Link to="/" className="">
            Go to Dashboard
          </Link>
        </div>
      </div>
    </>
  );
}

export default PageNotFound;
