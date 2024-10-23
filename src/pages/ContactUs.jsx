import React from "react";
import Header from "../components/Website/Header";
import PageBanner from "../components/Website/PageBanner";
import GetInTouch from "../components/GetInTouch";
import Footer from "../components/Website/Footer";
import map from "../assets/map.jpg";
import { clientDetails } from "../constants";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <>
      <Header />
      <PageBanner title={"Contact Us"} />
      <GetInTouch />
      <div
        className="bg-primary/5 relative min-h-[50vh] bg-center bg-cover"
        style={{ backgroundImage: `url(${map})` }}
      >
        <div className="wrapper py-[3rem] flex justify-center">
          <div className="bg-[#17012cb9] w-fit rounded-md text-white px-5 py-10">
            <h5 className="text-2xl font-semibold mb-2">Contact Info</h5>
            <hr />
            <Link
              to={`tel:${clientDetails.phone}`}
              className="flex items-center gap-3 my-7 w-fit"
            >
              <div className="w-[3.5rem] h-[3.5rem] bg-white/20 rounded-full p-3 flex justify-center items-center">
                <FaPhoneAlt className="text-3xl" />
              </div>
              <p className="sm:text-lg font-medium">{clientDetails.phone}</p>
            </Link>
            <div className="flex gap-3 mt-7 w-fit">
              <div className="w-[3.5rem] h-[3.5rem] bg-white/20 rounded-full p-3 flex justify-center items-center">
                <FaMapLocationDot className="text-3xl" />
              </div>
              <p className="sm:text-lg font-medium max-w-[35rem]">
                {clientDetails.address}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
