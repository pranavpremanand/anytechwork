import React from "react";
import ReactPlayer from "react-player";
import vid from "../../assets/vids/banner.mp4";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const PageBanner = ({ title }) => {
  return (
    <div className="h-[40vh] md:h-[70vh] w-full page-banner relative">
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
      <ReactPlayer url={vid} playing loop muted width="100%" height="100%" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-full flex flex-col items-center">
        <h1 data-aos="fade-up" className="heading text-white text-center">
          {title}
        </h1>
        <div
          data-aos="fade-up"
          className="mt-5 text-base sm:text-xl font-medium px-3 py-2 w-fit rounded-full border-2 border-primary flex justify-center text-white items-center gap-2"
        >
          <Link to="/">
            Home
          </Link>
          <IoIosArrowForward />
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
