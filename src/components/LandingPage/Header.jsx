import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import { Link as ScrollLink } from "react-scroll";
import Drawer from "react-modern-drawer";
import { Divide as Hamburger } from "hamburger-react";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
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
        <div className="flex justify-between items-center gap-5 py-3 px-5 sm:px-8">
          <ScrollLink
            to="banner"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <img
              fetchPriority="high"
              src={logo}
              alt="logo"
              width="150"
              height="100"
              className="h-[3rem] sm:h-[4rem]"
            />
          </ScrollLink>
          <div
            data-aos="fade-down"
            className="hidden lg:flex items-center gap-5"
          >
            {/* {landingPageHeaderLinks.map((link) => (
              <ScrollLink
                key={link.id}
                to={link.link}
                spy={true}
                smooth={true}
                duration={500}
                offset={-20}
                className="text-md cursor-pointer"
                activeClass="active-link"
              >
                {link.title}
              </ScrollLink>
            ))} */}
            <ScrollLink
              to="banner"
              spy={true}
              smooth={true}
              duration={500}
              offset={-20}
              className="text-md cursor-pointer"
              activeClass="active-link"
            >
              Home
            </ScrollLink>
            <Link to="/about-us" className="text-md cursor-pointer">
              About Us
            </Link>
            <ScrollLink
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              offset={-20}
              className="text-md cursor-pointer"
              activeClass="active-link"
            >
              Services
            </ScrollLink>
            <ScrollLink
              to="portfolio"
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              className="text-md cursor-pointer"
              activeClass="active-link"
            >
              Portfolio
            </ScrollLink>
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={-90}
              className="primary-btn"
            >
              Contact Us
            </ScrollLink>
          </div>
          <button
            title="Menu"
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
          </button>
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
            title="Close"
            onClick={() => setIsOpen(false)}
            className="text-black text-[2rem]"
          >
            <IoMdClose />
          </button>
        </div>
        <div className="py-4 px-7 flex flex-col gap-4">
          {/* {landingPageHeaderLinks.map(({ id, link, title }) => (
            <ScrollLink
              onClick={() => setIsOpen(false)}
              key={id}
              className="text-2xl font-medium duration-300 link"
              to={link}
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >
              {title}
            </ScrollLink>
          ))} */}
          <ScrollLink
            to="banner"
            onClick={() => setIsOpen(false)}
            spy={true}
            smooth={true}
            duration={500}
            offset={-20}
            className="text-2xl font-medium link"
          >
            Home
          </ScrollLink>
          <Link to="/about-us" className="text-2xl font-medium link">
            About Us
          </Link>
          <ScrollLink
            to="services"
            onClick={() => setIsOpen(false)}
            spy={true}
            smooth={true}
            duration={500}
            offset={-20}
            className="text-2xl font-medium link"
          >
            Services
          </ScrollLink>
          <ScrollLink
            to="contact"
            onClick={() => setIsOpen(false)}
            spy={true}
            smooth={true}
            duration={500}
            offset={-20}
            className="text-2xl font-medium link"
          >
            Contact Us
          </ScrollLink>
        </div>
      </Drawer>
    </div>
  );
};

export default Header;
