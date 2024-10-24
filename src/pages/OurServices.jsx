import React from "react";
import Header from "../components/Website/Header";
import PageBanner from "../components/Website/PageBanner";
import WorkingProcess from "../components/WorkingProcess";
import Testimonials from "../components/Testimonials";
import { allServices } from "../constants";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import Footer from "../components/Website/Footer";

const OurServices = () => {
  return (
    <>
      <Header />
      <PageBanner title={"Our Services"} />
      <section className="py-[5rem]">
        <div className="wrapper">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 md:grid-rows-2 gap-6 md:gap-10">
            {allServices.map((item) => (
              <Link
                to={item.link}
                data-aos="fade-up"
                className="pb-[2rem] relative h-full"
              >
                <div className="rounded-[3rem] h-full sm:rounded-[8rem] shadow-2xl bg-white flex flex-col gap-3 items-center text-center px-8 py-10 border-4 border-primary">
                  <img
                    loading="lazy"
                    src={item.img}
                    alt={item.title}
                    className="object-contain w-[70%] max-w-[15rem]"
                  />
                  <h6 className="text-xl font-semibold">{item.title}</h6>
                  <p className="text-md font-light max-w-[80%] text-gray-600">
                    {item.description}
                  </p>
                </div>
                <Link
                  to={item.link}
                  className="absolute left-1/2 hover:-translate-y-1 transition-all duration-300 -translate-x-1/2 bottom-[0.5rem] z-20 text-[2rem] bg-white text-primary h-[3rem] w-[3rem] rounded-full border-2 border-primary flex items-center justify-center"
                >
                  <FiArrowUpRight />
                </Link>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <WorkingProcess />
      <Testimonials />
      <Footer />
    </>
  );
};

export default OurServices;
