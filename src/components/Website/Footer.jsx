import React from "react";
import logo from "../../assets/logo/logo.png";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="bg-[#17012C] py-[3rem] text-white">
      <div className="px-5 sm:px-10 flex flex-col gap-3 sm:flex-row justify-between">
        <div className="flex flex-col gap-3 items-start">
          <img
            fetchPriority="high"
            src={logo}
            width="150"
            height="100"
            alt="logo"
            className="h-[4rem] object-contain"
          />
          {/* <p className="max-w-[25rem]">
            Follow us on our social media handles to keep up to date with our
            latest work and announcements.
          </p> */}

          {/* <p className="max-w-[25rem] mt-3">Address: {clientDetails.address}</p> */}
        </div>
        {/* <div className="flex flex-col mt-6 sm:mt-0 sm:flex-row gap-7 md:gap-14">
          <div className="flex flex-col gap-3">
            <p className="text-lg font-semibold">Our Services</p>
            {allServices.map((item) => (
              <Link key={item.id} to={item.link} className="cursor-pointer">
                {item.title}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-lg font-semibold">Quick Links</p>
            <Link to="/about-us" className="cursor-pointer">
              About Us
            </Link>
            <Link to="/services" className="cursor-pointer">
              Services
            </Link>
            <Link to="/contact-us" className="cursor-pointer">
              Contact Us
            </Link>
          </div>
        </div> */}
        <div className="flex mt-3 gap-5 items-center">
          <Link>
            <FaLinkedinIn className="text-2xl" />
          </Link>
          <Link>
            <AiFillInstagram className="text-2xl" />
          </Link>
          <Link>
            <GrFacebookOption className="text-2xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
