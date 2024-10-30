import React from "react";
import Header from "../../components/LandingPage/Header";
import Banner from "../../components/Banner";
import {
  appDevelopmentServices,
  industriesCompanyServe,
  webDevelopmentServices,
} from "../../constants";
import Testimonials from "../../components/Testimonials";
import GetInTouch from "../../components/GetInTouch";
import Footer from "../../components/LandingPage/Footer";
import HomePageServicesList from "../../components/HomePageServicesList";
import TrustWorthySection from "../../components/TrustWorthySection";
import IndustriesWeServe from "../../components/IndustriesWeServe";

const LandingPage = ({ page }) => {
  return (
    <>
      <Header />
      <Banner page={page} />
      {/* <section id="about-us" className="relative py-[5rem]">
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
      </section> */}

      <TrustWorthySection />

      <section
        id="services"
        className="w-screen py-[5rem] min-h-[70vh] flex justify-center relative"
      >
        <div className="blue-bg-shape -z-10 left-[-5%] rotate-45 -translate-y-1/2"></div>
        <div className="blue-bg-shape -z-10 right-[-5%] rotate-45 top-1/2 -translate-y-1/2"></div>
        <div className="wrapper flex flex-col items-center gap-5 z-10">
          <h1
            data-aos="fade-up"
            className="heading text-center max-w-6xl whitespace-pre-line capitalize"
          >
            {/* We provide the Best IT solution services */}
            {page === "web-development" &&
              "Your website is your digital storefront;\n Make sure it reflects your brand’s essence."}
            {page === "app-development" &&
              "In the age of smartphones, a mobile app is the key to customer engagement."}
          </h1>
          <p
            data-aos="fade-up"
            className="text-center max-w-6xl text-md md:text-base font-light"
          >
            {page === "web-development" &&
              "We believe that a great website should not only look good but also function flawlessly, driving conversions and providing measurable results."}
            {page === "app-development" &&
              "Each app we develop is a powerful tool designed to improve productivity, fostering greater engagement and empowering your company to thrive in an increasingly mobile-focused landscape."}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-10 mx-auto max-w-7xl mt-4">
            {page === "web-development" &&
              webDevelopmentServices.map((item) => (
                <div
                  data-aos="fade-up"
                  className="flex flex-col gap-2 items-center shadow-xl transition-all duration-300 bg-gradient-to-tr from-white to-primary/20 rounded-lg p-5"
                >
                  <div className="mb-5 w-[12rem] h-[12rem] p-3 rounded-full bg-primary/20 flex items-center justify-center">
                    <img
                      loading="lazy"
                      src={item.icon}
                      alt="icon"
                      className="w-[7rem] grayscale object-contain"
                    />
                  </div>
                  <h6 className="font-medium text-2xl">{item.title}</h6>
                  <p className="text-gray-700 text-md md:text-base font-light">
                    {item.description}
                  </p>
                </div>
              ))}

            {page === "app-development" &&
              appDevelopmentServices.map((item) => (
                <div
                  data-aos="fade-up"
                  className="flex flex-col gap-2 items-center shadow-xl transition-all duration-300 bg-gradient-to-tr from-white to-primary/20 rounded-lg p-5"
                >
                  <div className="mb-5 w-[12rem] h-[12rem] p-3 rounded-full bg-primary/20 flex items-center justify-center">
                    <img
                      loading="lazy"
                      src={item.icon}
                      alt="icon"
                      className="w-[7rem] grayscale object-contain"
                    />
                  </div>
                  <h6 className="font-medium text-2xl">{item.title}</h6>
                  <p className="text-gray-700 text-md md:text-base font-light">
                    {item.description}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </section>

      <HomePageServicesList />
      <IndustriesWeServe />

      {/* <WorkingProcess /> */}
      {/* <section className="py-[5rem] relative">
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
      </section> */}
      {/* <Testimonials /> */}
      <GetInTouch />
      <Footer />
    </>
  );
};

export default LandingPage;
