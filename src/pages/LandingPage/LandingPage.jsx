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
import icon1 from "../../assets/icons/successful-projects.png";
import icon2 from "../../assets/icons/happy-customer.png";
import icon3 from "../../assets/icons/industries.png";
import HomePageServicesList from "../../components/Website/HomePageServicesList";

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

      <section className="py-[6rem]">
        <div className="wrapper text-center">
          <h2 data-aos="fade-up" className="heading max-w-6xl mx-auto">
            Trusted by Forward-Thinking Businesses Across Industries
          </h2>
          <p data-aos="fade-up" className="description max-w-6xl mx-auto mt-2">
            With a dedicated team and a results-driven approach, Anytech Work is
            committed to delivering impactful, high-quality tech solutions that
            drive business growth and innovation.
          </p>

          <div data-aos="fade-up" className="grid sm:grid-cols-3 gap-3 md:gap-10 mt-8 mb-5">
            <div className="relative flex flex-col items-start px-4 lg:px-7 py-2 gap-2 border-l-2 border-gray-400">
              <div className="flex w-full items-center gap-3 justify-between">
                <h1 className="text-[3rem] md:text-[4rem] font-semibold text-primary">
                  50+
                </h1>
                <div className="w-[5rem] h-[5rem] lg:w-[6rem] lg:h-[6rem] rounded-full bg-green-500 bg-opacity-25 p-4 flex justify-center items-center">
                  {/* <FiCheckSquare className="text-[3rem] lg:text-6xl text-white" /> */}
                  <img
                    src={icon1}
                    className="w-[4rem] lg:w-[5rem] object-contain"
                    alt=""
                  />
                </div>
              </div>
              <p className="text-gray-600 text-lg font-light leading-tight text-start">
                Successful Projects Completed
              </p>
            </div>
            <div className="relative flex flex-col items-start px-4 lg:px-7 py-2 gap-2 border-l-2 border-gray-400">
              <div className="flex w-full items-center gap-3 justify-between">
                <h1 className="text-[3rem] md:text-[4rem] font-semibold text-primary">
                  98%
                </h1>
                <div className="w-[5rem] h-[5rem] lg:w-[6rem] lg:h-[6rem] rounded-full bg-yellow-400 bg-opacity-20 p-4 flex justify-center items-center">
                  <img
                    src={icon2}
                    className="w-[4rem] lg:w-[5rem] object-contain"
                    alt=""
                  />
                </div>
              </div>
              <p className="text-gray-600 text-lg font-light leading-tight text-start">
                Customer Satisfaction
              </p>
            </div>
            <div className="relative flex flex-col items-start px-4 lg:px-7 py-2 gap-2 border-l-2 border-gray-400">
              <div className="flex w-full items-center gap-3 justify-between">
                <h1 className="text-[3rem] md:text-[4rem] font-semibold text-primary">
                  10+
                </h1>
                <div className="w-[5rem] h-[5rem] lg:w-[6rem] lg:h-[6rem] rounded-full bg-blue-500 bg-opacity-25 p-4 flex justify-center items-center">
                  <img
                    src={icon3}
                    className="w-[4rem] lg:w-[5rem] object-contain"
                    alt=""
                  />
                </div>
              </div>
              <p className="text-gray-600 text-lg font-light leading-tight text-start">
                Serving Diverse Industries
              </p>
            </div>
          </div>
        </div>
      </section>

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

      <HomePageServicesList/>

      <section className="wrapper py-[4rem]">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-3 text-center">
            <h2 data-aos="fade-up" className="heading">
              Industries We Serve
            </h2>
            <p data-aos="fade-up" className="mt-2 description mb-3">
              We cater to a wide range of industries, delivering tailored AI and
              tech solutions to meet specific needs:
            </p>
          </div>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-7 mb-7">
            {industriesCompanyServe.map((item) => (
              <div
                key={item.id}
                data-aos="fade-up"
                className="p-5 rounded-lg shadow-lg relative group overflow-hidden min-h-[13rem]"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover absolute top-0 left-0 rounded group-hover:scale-110 transition-all duration-300"
                />
                <div className="w-full h-full absolute top-0 left-0 bg-[#1e1b42a0] group-hover:bg-black/60 transition-all duration-300"></div>
                <div className="group-hover:translate-y-0 transition-all duration-300">
                  <p className="group-hover:translate-y-0 translate-y-[4rem] text-center text-[1.7rem] font-bold tracking-wider relative z-10 text-white transition-all duration-300">
                    {item.title}
                  </p>
                  <p className="group-hover:translate-y-0 translate-y-[9rem] text-gray-800 text-md mt-2 relative z-10 group-hover:text-white transition-all duration-300">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
