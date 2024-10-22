import React from "react";
import vid from "../../assets/vids/Banner.mp4";
import ReactPlayer from "react-player";
import img from "../../assets/landing-banner-img.png";
import { IoMdArrowRoundUp } from "react-icons/io";

const Banner = () => {
  return (
    <div id="banner" className="h-[110vh] sm:h-screen banner relative">
      <ReactPlayer url={vid} playing loop muted width="100%" height="100%" />
      <div className="absolute top-0 left-0 w-full h-full bg-black/20"></div>
      <div className="w-full absolute left-0 top-0 h-full">
        <div className="wrapper pt-[9rem] md:pt-[15rem] grid md:grid-cols-[2fr_1fr] gap-10">
          <h1 className="heading text-white">
            Welcome to Anytechwork: <br />
            Crafting Websites That Speak Your Brand's Language
          </h1>
          <div className="h-[15rem] sm:h-[22rem] w-[15rem] sm:w-[22rem] flex items-center justify-center p-5 bg-gradient-to-b from-[#6D4C8A] to-transparent rounded-full">
            <img src={img} alt="banner-img" className="h-[13rem] object-contain sm:h-[20rem]" />
          </div>
        </div>
        <div className="wrapper pt-[1rem] sm:pt-[3rem] flex gap-5 items-center">
          <button className="primary-btn flex items-center gap-1">
            Get Started <IoMdArrowRoundUp className="-mt-1 text-xl rotate-45" />
          </button>
          <button className="secondary-btn">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
