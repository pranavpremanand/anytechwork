import React from "react";
import { appPortfolio, webPortfolio } from "../constants";

const Portfolio = ({ page }) => {
  const isWebDevelopment = Boolean(page === "web-development");
  let portfolio = isWebDevelopment ? webPortfolio : appPortfolio;
  return (
    <div id="portfolio" className="text-black py-[2rem] relative">
      <div className="blue-bg-shape rotate-[-45deg] top-[2rem] right-3 -z-10"></div>
      <div className="blurred-red-circle h-[25rem] w-[25rem] bottom-[-2rem] left-[-2rem] -z-10"></div>
      <div className="wrapper">
        <div className="flex flex-col items-center gap-5 text-black">
          <p className="gradient-text uppercase">Portfolio</p>
          <h2 className="heading text-center mb-5">Our Selected Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {portfolio.map((item) => (
              <div
                data-aos="fade-up"
                key={item.id}
                className="flex lg:last:col-span-4 lg:last:w-1/4 justify-self-center flex-col gap-3 rounded-md overflow-hidden relative group w-full shadow-2xl"
              >
                <img
                  src={item.img}
                  alt=""
                  width="300"
                  height="300"
                  loading="lazy"
                  className="w-fit h-fit object-contain group-hover:scale-110 transition-all duration-300"
                />
                <div className="absolute bottom-0 left-0 w-full p-4 bg-[#1e1b42bb] flex flex-col gap-2">
                  <h3 className="font-medium text-center text-white text-xl">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
