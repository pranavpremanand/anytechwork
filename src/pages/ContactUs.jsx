import React, { lazy } from "react";
import Header from "../components/Website/Header";
import Footer from "../components/Website/Footer";
import map from "../assets/map.webp";
import { clientDetails } from "../constants";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import banner from "../assets/contact-us-banner.webp";
import { InquiryForm } from "../components/GetInTouch";

const PageBanner = lazy(() => import("../components/Website/PageBanner"));

const ContactUs = () => {
  return (
    <>
      <Header />
      <PageBanner
        title={"Ready to Lead with Innovation?\nLet’s Start Your Project"}
        banner={banner}
        position={"left"}
        description="Reach out to discover how our tech solutions can propel your business forward."
      />
      <div className="wrapper">
        <div className="grid lg:grid-cols-2 gap-10 py-[5rem]">
          <div data-aos="fade-right" className="flex flex-col gap-5 pt-[2rem]">
            <h1 className="heading text-center lg:text-start">
              Innovate. Transform. Succeed.
            </h1>
            <p className="description text-center lg:text-start">
              At AnyTechWork, we specialize in turning ideas into groundbreaking
              realities. From cutting-edge mobile apps and stunning websites to
              next-gen technologies like Blockchain and Virtual Reality, we
              craft solutions that redefine what’s possible. Whether you’re
              building the future of finance, creating immersive VR experiences,
              or simply upgrading your digital presence, we’re here to bring
              your vision to life. Let’s shape the future together—your success
              starts here.
            </p>
          </div>
          <div className="flex justify-center">
            <InquiryForm />
          </div>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${map})` }}
        className="bg-primary/5 relative min-h-[50vh] bg-center bg-cover"
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
