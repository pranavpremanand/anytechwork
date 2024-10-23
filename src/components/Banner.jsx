import React from "react";
import vid from "../assets/vids/banner.mp4";
import ReactPlayer from "react-player";
import img from "../assets/landing-banner-img.png";
import { IoMdArrowRoundUp } from "react-icons/io";
import { Link as ScrollLink } from "react-scroll";
import { Link, useLocation } from "react-router-dom";

const Banner = () => {
  const { pathname } = useLocation();
  return (
    <div id="banner" className="h-screen banner relative">
      <ReactPlayer url={vid} playing loop muted width="100%" height="100%" />
      <div className="absolute top-0 left-0 w-full h-full bg-black/20"></div>
      <div className="w-full absolute left-0 top-0 h-full">
        <div className="wrapper pt-[9rem] md:pt-[15rem] grid md:grid-cols-[2fr_1fr] gap-10">
          {pathname === "/" ? (
            <h1 data-aos="fade-right" className="heading text-white">
              Welcome to ANYTECHWORK: <br />
              Innovating Tomorrow, Empowering Businesses Today
            </h1>
          ) : (
            <h1 data-aos="fade-right" className="heading text-white">
              Welcome to ANYTECHWORK: <br />
              Crafting {pathname.includes("/web-development") && "Websites"}
              {pathname.includes("/app-development") && "Mobile Apps"} That
              Speak Your Brand's Language
            </h1>
          )}
          <div
            data-aos="fade-left"
            className="h-[15rem] sm:h-[22rem] w-[15rem] sm:w-[22rem] flex items-center justify-center p-5 bg-gradient-to-b from-[#6D4C8A] to-transparent rounded-full"
          >
            <img
              src={img}
              alt="banner-img"
              className="h-[13rem] object-contain sm:h-[20rem]"
            />
          </div>
        </div>
        <div
          data-aos="fade-right"
          className="wrapper pt-[1rem] sm:pt-[3rem] flex gap-5 items-center"
        >
          <Link
            to="/"
            className="primary-btn flex items-center gap-1"
          >
            Get Started <IoMdArrowRoundUp className="-mt-1 text-xl rotate-45" />
          </Link>
          <Link
            to="/contact-us"
            className="secondary-btn cursor-pointer"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
