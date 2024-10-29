import React from "react";
import vid from "../assets/vids/banner.mp4";
import ReactPlayer from "react-player";
import img from "../assets/landing-banner-img.png";
import { IoMdArrowRoundUp } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";

const Banner = ({ page }) => {
  const { pathname } = useLocation();
  return (
    <div id="banner" className="h-screen banner relative">
      <ReactPlayer
        url={vid}
        playing
        loop
        muted
        width="100%"
        height="100%"
        playsinline
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>
      <div className="w-full absolute left-0 top-0 h-full">
        <div className="wrapper h-full flex flex-col items-start justify-center ml-0">
          {pathname === "/" ? (
            <h1
              data-aos="fade-right"
              className="heading text-white max-w-[50rem]"
            >
              Welcome to ANYTECHWORK: <br />
              Innovating Tomorrow, Empowering Businesses Today
            </h1>
          ) : (
            <>
              <h1
                data-aos="fade-right"
                className="heading text-white max-w-[50rem]"
              >
                Looking to Transform Your Ideas into Impactful Solutions?
              </h1>
              <p className="description text-white mt-2 max-w-[40rem]">
                From Concept to Completion, We Provide a Full Spectrum of
                Technology Services Tailored to Your Needs.
              </p>
            </>
            // <h1 data-aos="fade-right" className="heading text-white max-w-[50rem]">
            //   Welcome to ANYTECHWORK: <br />
            //   Crafting {page === "web-development" && "Websites"}
            //   {page === "app-development" && "Mobile Apps"} That Speak Your
            //   Brand's Language
            // </h1>
          )}
          {/* <div
            data-aos="fade-left"
            className="h-[15rem] sm:h-[22rem] w-[15rem] sm:w-[22rem] flex items-center justify-center p-5 bg-gradient-to-b from-[#6D4C8A] to-transparent rounded-full"
          >
            <img
              loading="lazy"
              src={img}
              alt="banner-img"
              className="h-[13rem] object-contain sm:h-[20rem]"
            />
          </div> */}
          <div
            data-aos="fade-right"
            className="pt-[1rem] sm:pt-[3rem] flex gap-5 justify-start w-full"
          >
            <Link
              to="/contact-us"
              className="primary-btn flex items-center gap-1"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
