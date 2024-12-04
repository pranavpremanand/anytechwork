import React, { useEffect, useState } from "react";
import vid from "../../assets/vids/banner.mp4";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import robot from "../../assets/ai-robot.png";
import gsap from "gsap";
import bannerThumb from "../../assets/vids/banner-thumb.png";

const Banner = () => {
  const [isVideoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to("#robot", {
      translateY: -80,
      duration: 2,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

    return () => {
      tl.kill();
    };
  }, []);
  return (
    <div id="banner" className="h-screen banner relative">
      {!isVideoLoaded && (
        <img
          src={bannerThumb}
          alt=""
          fetchPriority="high"
          width="1920"
          height="1080"
          className="w-full h-full object-cover"
        />
      )}
      <ReactPlayer
        url={vid}
        playing
        loop
        muted
        width="100%"
        height="100%"
        playsinline
        onReady={() => setVideoLoaded(true)}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
      <div className="w-full absolute left-0 top-0 h-full">
        <div className="wrapper h-full grid md:grid-cols-[55%_auto] items-center md:gap-10">
          <div
            data-aos="fade-right"
            className="flex w-full flex-col items-start justify-center relative z-10"
          >
            <h1 className="heading text-white">
              Looking to Transform Your Ideas into Impactful Solutions?
            </h1>
            <p className="description text-white mt-2">
              From Concept to Completion, We Provide a Full Spectrum of
              Technology Services Tailored to Your Needs.
            </p>
            <Link to="/about-us" className="primary-btn mt-5">
              Know More About Us
            </Link>
          </div>
          <div data-aos="fade-left" className="md:flex hidden justify-center">
            <img
              src={robot}
              id="robot"
              className="w-[22rem] relative z-0"
              alt="robot"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
