import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import { IoMailOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import { Link as ScrollLink } from "react-scroll";
import {
  clientDetails,
  landingPageHeaderLinks,
  websitePagesLinks,
} from "../../constants";
import Drawer from "react-modern-drawer";
import { Divide as Hamburger } from "hamburger-react";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { pathname } = useLocation();
  return (
    <div className="fixed z-40 top-0 left-0 w-full">
      <div className="bg-[#EDF6FFC2]">
        {/* <div className="wrapper w-[95%] hidden md:flex bg-[#17012C] py-3 px-8 rounded-b-[2rem]">
          <div className="flex w-full justify-between gap-5 items-center">
            <div className="flex items-center gap-5">
              <Link
                to={`tel:${clientDetails.phone}`}
                className="flex items-center gap-1"
              >
                <FaPhoneAlt className="text-primary text-lg" />
                <p className="text-white text-sm">{clientDetails.phone}</p>
              </Link>
              <Link className="flex items-center gap-1">
                <IoMailOutline className="text-primary text-2xl" />
                <p className="text-white text-sm">info@gmail.com</p>
              </Link>
            </div>
            <div className="flex gap-5 items-center">
              <Link>
                <FaLinkedinIn className="text-primary text-2xl" />
              </Link>
              <Link>
                <AiFillInstagram className="text-primary text-2xl" />
              </Link>
              <Link>
                <GrFacebookOption className="text-primary text-2xl" />
              </Link>
            </div>
          </div>
        </div> */}
        <div className="wrapper flex w-full justify-between items-center gap-5 py-3 px-5 sm:px-8">
          <Link to="/">
            <img
              loading="lazy"
              src={logo}
              alt="logo"
              className="h-[3rem] sm:h-[4rem]"
            />
          </Link>
          <div className="hidden lg:flex items-center gap-5">
            {websitePagesLinks.map((link) => (
              <Link
                key={link.id}
                to={link.link}
                className={`text-md cursor-pointer ${
                  pathname === link.link && "active-link"
                }`}
              >
                {link.title}
              </Link>
            ))}
            <Link to="/contact-us" className="primary-btn">
              Contact Us
            </Link>
          </div>
          <div
            className="block lg:hidden justify-self-end"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Hamburger
              color="#17012C"
              size="26"
              toggled={isOpen}
              rounded
              toggle={setIsOpen}
            />
          </div>
        </div>
      </div>
      <Drawer
        open={isOpen}
        onClose={() => setIsOpen(false)}
        direction="right"
        className="z-10 p-2"
      >
        <div className="mb-6 flex items-center justify-between pr-[.7rem] py-[.4rem]">
          <img
            loading="lazy"
            src={logo}
            alt="logo"
            className="h-[3rem] object-contain"
          />
          <button
            onClick={() => setIsOpen(false)}
            className="text-black text-[2rem]"
          >
            <IoMdClose />
          </button>
        </div>
        <div className="py-4 px-7 flex flex-col gap-4">
          {websitePagesLinks.map(({ id, link, title }) => (
            <Link
              onClick={() => setIsOpen(false)}
              key={id}
              className="text-2xl font-mediumduration-300 link"
              to={link}
            >
              {title}
            </Link>
          ))}
        </div>
      </Drawer>
    </div>
  );
};

export default Header;
