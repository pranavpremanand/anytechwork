import React from "react";
import Header from "./Header";
import ServiceDetailsBanner from "./ServiceDetailsBanner";
import { Link, Outlet, useLocation } from "react-router-dom";
import { allServices, clientDetails } from "../../constants";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import Footer from "./Footer";
import { BsClock } from "react-icons/bs";
import GetInTouch from "../GetInTouch";

const ServicePageLayout = () => {
  const { pathname } = useLocation();
  return (
    <>
      <Header />
      <ServiceDetailsBanner />
      <div className="wrapper">
        <div className="py-[5rem] grid md:grid-cols-[30%_65%] gap-10">
          <div className="w-full flex flex-col gap-10">
            <div
              data-aos="fade-up"
              className="bg-[#ECF8FF] p-4 lg:p-6 rounded-lg"
            >
              <h4 className="text-2xl font-medium">All Services</h4>
              <div className="mt-5 flex flex-wrap md:flex-col gap-3">
                {allServices.map((item) => (
                  <Link
                    className={`${
                      item.link === pathname
                        ? "bg-primary text-white"
                        : "bg-white text-[#17012C]"
                    } flex items-center gap-2 justify-between p-3 rounded-md`}
                    to={item.link}
                  >
                    {item.title} <IoIosArrowRoundForward className="text-xl" />
                  </Link>
                ))}
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="text-center bg-gradient-to-b hidden md:flex flex-col items-center gap-3 text-white from-[#635AD9] to-[#618cefb1] px-4 lg:px-6 py-10 rounded-lg"
            >
              <div className="w-[3.5rem] h-[3.5rem] bg-white text-primary rounded-full p-3 flex justify-center items-center">
                <FaPhoneAlt className="text-3xl" />
              </div>
              <h4 className="text-2xl font-medium">Need Help? Call Here</h4>
              <Link to={`tel:${clientDetails.phone}`} className="font-semibold">
                {clientDetails.phone}
              </Link>
            </div>
            <div
              data-aos="fade-up"
              className="text-center bg-[#ECF8FF] hidden md:flex flex-col items-start gap-3 px-4 lg:px-6 py-10 rounded-lg"
            >
              <h4 className="text-xl font-semibold">Working Days</h4>
              <div className="flex flex-col gap-3 w-full">
                <Link className="bg-white text-[#17012C] flex items-center gap-2 p-3 rounded-md">
                  <BsClock className="text-xl text-primary" />
                  Mon - Sat: 9:00 AM - 8:00 PM
                </Link>
                <Link className="bg-white text-[#17012C] flex items-center gap-2 p-3 rounded-md">
                  <BsClock className="text-xl text-primary" />
                  Sunday: Closed
                </Link>
                <Link
                  to="/contact-us"
                  className="purple-btn flex justify-center items-center gap-2 rounded-md"
                >
                  Appointment Now{" "}
                  <IoIosArrowRoundForward className="text-3xl" />
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full">
            <Outlet />
          </div>
          <div
            data-aos="fade-up"
            className="text-center bg-[#ECF8FF] flex md:hidden flex-col items-start gap-3 px-4 lg:px-6 py-10 rounded-lg"
          >
            <h4 className="text-xl font-semibold">Working Days</h4>
            <div className="flex flex-col gap-3 w-full">
              <Link className="bg-white text-[#17012C] flex items-center gap-2 p-3 rounded-md">
                <BsClock className="text-xl text-primary" />
                Mon - Sat: 9:00 AM - 8:00 PM
              </Link>
              <Link className="bg-white text-[#17012C] flex items-center gap-2 p-3 rounded-md">
                <BsClock className="text-xl text-primary" />
                Sunday: Closed
              </Link>
              <Link
                to="/contact-us"
                className="purple-btn flex justify-center items-center gap-2 rounded-md"
              >
                Appointment Now <IoIosArrowRoundForward className="text-3xl" />
              </Link>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="text-center bg-gradient-to-b flex md:hidden flex-col items-center gap-3 text-white from-[#635AD9] to-[#618cefb1] px-4 lg:px-6 py-10 rounded-lg"
          >
            <div className="w-[3.5rem] h-[3.5rem] bg-white text-primary rounded-full p-3 flex justify-center items-center">
              <FaPhoneAlt className="text-3xl" />
            </div>
            <h4 className="text-xl font-semibold">Need Help? Call Here</h4>
            <Link to={`tel:${clientDetails.phone}`} className="font-semibold">
              {clientDetails.phone}
            </Link>
          </div>
        </div>
      </div>
      <GetInTouch />
      <Footer />
    </>
  );
};

export default ServicePageLayout;