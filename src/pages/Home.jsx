import React from "react";
import Banner from "../components/Banner";
import aboutImg from "../assets/landing-about.png";
import { clientDetails, workingProcess } from "../constants";
import whyChooseUs from "../assets/landing-whychooseus.png";
import whyChooseUsBg from "../assets/landing-whychooseus-bg.png";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Testimonials from "../components/Testimonials";
import GetInTouch from "../components/GetInTouch";
import Header from "../components/Website/Header";
import BestServicesSlider from "../components/Website/BestServicesSlider";
import Footer from "../components/Website/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <section id="about-us" className="relative py-[5rem]">
        <div className="blurred-red-circle h-[25rem] w-[25rem] top-[-10rem] left-[-10rem] -z-10"></div>
        <div className="wrapper">
          <h1
            data-aos="fade-down"
            className="heading text-center mb-5 md:mb-10"
          >
            About Us
          </h1>
          <div className="grid md:grid-cols-2 gap-5 md:gap-10">
            <p data-aos="fade-right" className="description">
              At Anytechwork, we believe that technology should be the driving
              force behind your business's growth and success. Headquartered in
              the tech capital of India, Bengaluru, we are a team of passionate
              innovators and technology enthusiasts committed to delivering
              cutting-edge, future-ready solutions. Our mission is to empower
              businesses to navigate the complexities of the digital era with
              confidence, ensuring they remain competitive and agile in a
              fast-evolving marketplace.
            </p>
            <img
              data-aos="fade-left"
              loading="lazy"
              src={aboutImg}
              alt="about"
              className="max-h-[25rem] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#f0effcbc] py-[5rem] relative">
        <div className="blurred-purple-circle h-[15rem] w-[15rem] -z-10 left-[2%] top-1/2 -translate-y-1/2"></div>
        <div className="blurred-red-circle h-[20rem] w-[20rem] -z-10 right-[1rem] top-[-5rem]"></div>
        <div className="wrapper">
          <h1 data-aos="fade-up" className="heading text-center mb-5 md:mb-10">
            Our Working Process
          </h1>
          <div className="grid md:grid-cols-4 gap-5 md:gap-2">
            {workingProcess.map((process) => (
              <div
                data-aos="fade-up"
                className={`flex items-center flex-col text-center gap-2 ${
                  process.id % 2 === 0 && "md:flex-col-reverse"
                }`}
                key={process.id}
              >
                <img
                  loading="lazy"
                  src={process.img}
                  alt={process.title}
                  className="h-[9rem] object-contain"
                />
                {process.id % 2 === 0 && (
                  <p className="md:block hidden text-lg font-light">
                    {process.description}
                  </p>
                )}
                <h6 className="font-semibold text-xl">{process.title}</h6>
                {process.id % 2 !== 0 && (
                  <p className="md:block hidden text-lg font-light">
                    {process.description}
                  </p>
                )}
                <p className="md:hidden text-lg font-light">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-[5rem] relative">
        <div className="blue-bg-shape -z-10 right-[-5%] rotate-[125deg] top-1/2 -translate-y-1/2"></div>
        <div className="wrapper mx-auto grid lg:grid-cols-2 gap-5 md:gap-10">
          <div data-aos="fade-right" className="flex flex-col gap-5">
            <h1 className="heading text-center lg:text-start">Why Choose Us</h1>
            <div className="lg:hidden h-full min-h-[25rem] relative">
              <img
                loading="lazy"
                src={whyChooseUsBg}
                className="h-full absolute left-1/2 -translate-x-1/2"
                alt=""
              />
              <img
                loading="lazy"
                src={whyChooseUs}
                className="h-full object-contain absolute left-1/2 -translate-x-1/2 bottom-0"
                alt="why choose us"
              />
            </div>
            <p className="description">
              In today's fast-paced, tech-driven world, staying ahead of the
              curve is not just a competitive advantage—it's a necessity. We
              believe that embracing the right technologies can completely
              transform how businesses operate, engage customers, and achieve
              success. That's why we work closely with our clients to create
              tailor-made digital strategies that leverage innovation to drive
              tangible results.
            </p>
            <div className="flex flex-col-reverse sm:flex-col gap-10 mt-6">
              <button className="primary-btn w-fit">To Know More</button>
              <div className="flex sm:flex-row flex-col sm:items-center gap-5 sm:gap-10">
                <div className="flex items-center gap-2">
                  <div className="bg-gray-400 w-[4.5rem] h-[4.5rem] rounded-full flex items-center justify-center">
                    <img
                      loading="lazy"
                      src={whyChooseUs}
                      alt=""
                      className="object-cover w-[4rem] h-[4rem]"
                    />
                  </div>
                  <div className="flex flex-col justify-center gap-2 h-full">
                    <p className="font-medium text-md">Ronald Richards</p>
                    <p className="text-sm text-gray-600">CEO</p>
                  </div>
                </div>
                <Link
                  to={`tel:${clientDetails.phone}`}
                  className="flex items-center gap-2"
                >
                  <div className="bg-primary w-[4.5rem] h-[4.5rem] rounded-full flex items-center justify-center">
                    <FaPhoneAlt className="text-white text-3xl" />
                  </div>
                  <div className="flex flex-col justify-center gap-2 h-full">
                    <p className="font-medium text-md">Call Us Now</p>
                    <p className="text-sm text-gray-600">
                      {clientDetails.phone}
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-left"
            className="lg:block hidden h-full min-h-[25rem] relative"
          >
            <img
              loading="lazy"
              src={whyChooseUsBg}
              className="h-full absolute left-1/2 -translate-x-1/2"
              alt=""
            />
            <img
              loading="lazy"
              src={whyChooseUs}
              className="h-full object-contain absolute left-1/2 -translate-x-1/2 bottom-0"
              alt="why choose us"
            />
          </div>
        </div>
      </section>
      <BestServicesSlider />
      <Testimonials />
      <GetInTouch />
      <Footer />
    </>
  );
};

export default Home;
