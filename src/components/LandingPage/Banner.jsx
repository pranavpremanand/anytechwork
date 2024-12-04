import React, { useEffect } from "react";
import vid from "../../assets/vids/banner.mp4";
import ReactPlayer from "react-player";
import robot from "../../assets/ai-robot.png";
import gsap from "gsap";

const Banner = ({ page }) => {
  const isWebDevelopment = Boolean(page === "web-development");

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
      <ReactPlayer
        url={vid}
        playing
        loop
        muted
        width="100%"
        height="100%"
        playsinline
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
      <div className="w-full absolute left-0 top-0 h-full">
        <div className="wrapper h-full grid md:grid-cols-[55%_auto] items-center md:gap-10">
          <div className="flex w-full flex-col items-start justify-center relative z-10">
            {isWebDevelopment ? (
              <>
                <h1 data-aos="fade-right" className="heading-1 text-white">
                  Is your business being held back by an outdated or ineffective
                  online presence?
                </h1>
                <p
                  data-aos="fade-right"
                  className="description text-white mt-2"
                >
                  In today’s digital era, a high-performing website is crucial
                  for success. At AnyTechWork, we design custom websites that
                  combine stunning visuals with seamless user experiences,
                  helping businesses of all sizes achieve their goals.
                </p>
              </>
            ) : (
              <>
                <h1 data-aos="fade-right" className="heading-1 text-white">
                  Struggling to keep your users engaged or expand your reach in
                  a mobile-first world?
                </h1>
                <p
                  data-aos="fade-right"
                  className="description text-white mt-2"
                >
                  In today’s competitive landscape, an effective mobile app is
                  crucial for growth. At AnyTechWork, we build intuitive,
                  high-performance apps tailored to your business needs,
                  ensuring seamless experiences and lasting engagement.
                </p>
              </>
            )}
          </div>
          <div data-aos="fade-left" className="md:flex hidden justify-center">
            <img
              src={robot}
              id="robot"
              className="w-[25rem] relative z-0"
              alt="robot"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
