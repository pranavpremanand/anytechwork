import React from "react";
import logo from "../../assets/logo/logo.png";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";
import { clientDetails } from "../../constants";

const Footer = () => {
  return (
    <div className="bg-[#17012C] py-[3rem] text-white">
      <div className="wrapper flex flex-col gap-3 sm:flex-row justify-between">
        <div className="flex flex-col gap-3 items-start">
          <img src={logo} alt="logo" className="h-[4rem] object-contain" />
          <p className="max-w-[25rem]">
            Follow us on our social media handles to keep up to date with our
            latest work and announcements.
          </p>
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
          <p className="max-w-[25rem] mt-3">Address: {clientDetails.address}</p>
        </div>
        <div className="flex flex-col mt-6 sm:mt-0 sm:flex-row gap-10 md:gap-20">
          <div className="flex flex-col gap-3">
            <p className="text-lg font-semibold">Quick Links</p>
            <ScrollLink
              to="about-us"
              spy
              smooth
              duration={500}
              offset={-90}
              className="cursor-pointer"
            >
              About Us
            </ScrollLink>
            <ScrollLink
              to="services"
              spy
              smooth
              duration={500}
              offset={-90}
              className="cursor-pointer"
            >
              Services
            </ScrollLink>
            <ScrollLink
              to="contact"
              spy
              smooth
              duration={500}
              offset={-90}
              className="cursor-pointer"
            >
              Contact Us
            </ScrollLink>
            <ScrollLink
              to="testimonials"
              spy
              smooth
              duration={500}
              offset={-90}
              className="cursor-pointer"
            >
              Testimonials
            </ScrollLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
