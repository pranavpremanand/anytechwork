import React from "react";
import icon1 from "../assets/icons/successful-projects.png";
import icon2 from "../assets/icons/happy-customer.png";
import icon3 from "../assets/icons/tech-expert.png";
import icon4 from "../assets/icons/industries.png";
import CountUp from "react-countup";

const TrustWorthySection = () => {
  return (
    <section className="py-[6rem]">
      <div className="wrapper text-center">
        <h2 data-aos="fade-up" className="heading max-w-6xl mx-auto">
          Trusted by Forward-Thinking Businesses Across Industries
        </h2>
        <p data-aos="fade-up" className="description max-w-6xl mx-auto mt-2">
          With a dedicated team and a results-driven approach, Anytech Work is
          committed to delivering impactful, high-quality tech solutions that
          drive business growth and innovation.
        </p>

        <div
          data-aos="fade-up"
          className="grid sm:grid-cols-2 xl:grid-cols-4 gap-3 md:gap-10 mt-14 mb-5"
        >
          <div className="relative flex flex-col items-start px-4 lg:px-7 py-2 gap-2 border-l-2 xl:border-l-0 border-gray-400">
            <div className="flex w-full items-center gap-3 justify-between">
              <h1 className="text-[3rem] md:text-[4rem] font-semibold text-primary">
                <CountUp enableScrollSpy duration={5} end={50} suffix="+" />
              </h1>
              <div className="w-[5rem] h-[5rem] lg:w-[6rem] lg:h-[6rem] rounded-full bg-green-500 bg-opacity-25 p-4 flex justify-center items-center">
                {/* <FiCheckSquare className="text-[3rem] lg:text-6xl text-white" /> */}
                <img
                  src={icon1}
                  className="w-[4rem] lg:w-[5rem] object-contain"
                  alt=""
                  loading="lazy"
                  width='100'
                  height='100'
                />
              </div>
            </div>
            <p className="text-gray-600 text-lg   leading-tight text-start">
              Successful Projects Completed
            </p>
          </div>
          <div className="relative flex flex-col items-start px-4 lg:px-7 py-2 gap-2 border-l-2 border-gray-400">
            <div className="flex w-full items-center gap-3 justify-between">
              <h1 className="text-[3rem] md:text-[4rem] font-semibold text-primary">
                <CountUp enableScrollSpy duration={5} end={98} suffix="%" />
              </h1>
              <div className="w-[5rem] h-[5rem] lg:w-[6rem] lg:h-[6rem] rounded-full bg-yellow-400 bg-opacity-20 p-4 flex justify-center items-center">
                <img
                  src={icon2}
                  className="w-[4rem] lg:w-[5rem] object-contain"
                  alt=""
                />
              </div>
            </div>
            <p className="text-gray-600 text-lg   leading-tight text-start">
              Customer Satisfaction
            </p>
          </div>
          <div className="relative flex flex-col items-start px-4 lg:px-7 py-2 gap-2 border-l-2 border-gray-400">
            <div className="flex w-full items-center gap-3 justify-between">
              <h1 className="text-[3rem] md:text-[4rem] font-semibold text-primary">
                <CountUp enableScrollSpy duration={5} end={20} suffix="+" />
              </h1>
              <div className="w-[5rem] h-[5rem] lg:w-[6rem] lg:h-[6rem] rounded-full bg-red-400 bg-opacity-20 p-4 flex justify-center items-center">
                <img
                  src={icon3}
                  className="w-[4rem] lg:w-[5rem] object-contain"
                  alt=""
                />
              </div>
            </div>
            <p className="text-gray-600 text-lg   leading-tight text-start">
              Tech Experts
            </p>
          </div>
          <div className="relative flex flex-col items-start px-4 lg:px-7 py-2 gap-2 border-l-2 border-gray-400">
            <div className="flex w-full items-center gap-3 justify-between">
              <h1 className="text-[3rem] md:text-[4rem] font-semibold text-primary">
                <CountUp enableScrollSpy duration={5} end={10} suffix="+" />
              </h1>
              <div className="w-[5rem] h-[5rem] lg:w-[6rem] lg:h-[6rem] rounded-full bg-blue-500 bg-opacity-25 p-4 flex justify-center items-center">
                <img
                  src={icon4}
                  className="w-[4rem] lg:w-[5rem] object-contain"
                  alt=""
                />
              </div>
            </div>
            <p className="text-gray-600 text-lg   leading-tight text-start">
              Serving Diverse Industries
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustWorthySection;
