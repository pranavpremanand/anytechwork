import React, { lazy } from "react";
import Header from "../components/Website/Header";
import Footer from "../components/Website/Footer";
import img1 from "../assets/aboutus-1.webp";
import img2 from "../assets/aboutus-2.webp";
import img3 from "../assets/aboutus-3.webp";
import { Link } from "react-router-dom";
import bannerImg from "../assets/about-us-banner.webp";
import bgImg from "../assets/1111.webp";

const PageBanner = lazy(() => import("../components/Website/PageBanner"));
const Testimonials = lazy(() => import("../components/Testimonials"));
const BrandLogos = lazy(() => import("../components/BrandLogos"));

const AboutUs = () => {
  return (
    <>
      <Header />
      <PageBanner
        position="left"
        title={
          "Your Trusted Partner in Digital Transformation and Next-Generation Technology Solutions"
        }
        banner={bannerImg}
      />
      <section className="py-[5rem] wrapper grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col">
          {/* <h1 data-aos="fade-right" className="heading">
            Your Trusted Partner in Digital Transformation and Next-Generation
            Technology Solutions
          </h1> */}
          <p data-aos="fade-right" className="description mt-4">
            At Anytechwork, we harness the power of technology to fuel your
            business growth. Based in the vibrant tech ecosystem of Bengaluru,
            we are at the forefront of delivering innovative, scalable, and
            results-driven solutions across a range of cutting-edge
            technologies. Our mission is simple: to empower businesses like
            yours to succeed in an ever-evolving digital landscape. <br />
            <br /> In today’s fast-paced, tech-driven world, staying ahead of
            the curve is not just a competitive advantage—it’s a necessity. We
            believe that embracing the right technologies can completely
            transform how businesses operate, engage customers, and achieve
            success. That’s why we work closely with our clients to create
            tailor-made digital strategies that leverage innovation to drive
            tangible results.we recognize that navigating the complexities of
            the digital landscape can be both challenging and exhilarating. As
            your trusted partner, we empower you to harness the transformative
            power of technology, turning challenges into opportunities and
            aspirations into realities. Based in the vibrant tech capital of
            Bengaluru, we stand at the intersection of innovation and strategy,
            committed to helping businesses like yours thrive in a fast-paced
            environment.
          </p>
        </div>
        <div
          data-aos="fade-left"
          className="relative w-full h-full rounded-lg overflow-hidden"
        >
          <img
            loading="lazy"
            src={img1}
            alt="about us"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </section>

      <section className="wrapper">
        <h1 data-aos="fade-right" className="heading">
          Who Are We?
        </h1>
        <p data-aos="fade-right" className="description mt-4">
          At Anytechwork, we believe technology transcends mere tools—it is the
          cornerstone of sustainable growth and long-lasting success. Nestled in
          Bengaluru, the tech capital of India, our team comprises passionate
          innovators and seasoned industry experts dedicated to delivering
          pioneering, future-ready solutions. Our mission is unequivocal: to
          empower businesses of every size to flourish in the digital age,
          leveraging innovation as a catalyst for transformation and
          advancement.
        </p>
        <img
          data-aos="fade-right"
          loading="lazy"
          src={img2}
          alt="about us"
          className="w-full rounded-lg h-[40vh] sm:h-[80vh] object-cover mt-7"
        />
      </section>

      <section className="wrapper my-[5rem]">
        <div
          data-aos="fade-up"
          className="py-[5rem] px-4 rounded-lg text-white relative overflow-hidden"
        >
          <img
            loading="lazy"
            src={bgImg}
            alt="about us"
            className="absolute w-full h-full object-cover inset-0"
          />
          <div className="absolute inset-0 bg-[#17012cb6]"></div>
          <div className="relative z-10 flex flex-col items-center gap-2 text-center">
            <h1 className="heading">Be the First With Us</h1>
            <p className="description max-w-2xl">
              There are many reasons to get down and start to get depressed
              about your situation.
            </p>
            <Link
              to="/contact-us"
              className="rounded-sm transition-all duration-300 hover:-translate-y-1 bg-[#734D88] hover:bg-[#734D88]/90 px-10 py-3 w-fit mt-5"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      <section className="pb-[5rem] wrapper text-center">
        <h1 data-aos="fade-up" className="heading">
          Innovative Alliances
        </h1>
        <div className="grid lg:grid-cols-2 gap-7 mt-7">
          <div data-aos="fade-right" className="">
            <h2 className="text-2xl font-semibold">
              "Brands We Collaborate With"
            </h2>
            <p className="description mt-4 text-start">
              At Anytechwork, we understand that collaboration is key to
              unlocking innovation and driving success. We are proud to partner
              with industry-leading brands that share our commitment to
              excellence and innovation. Together, we leverage our combined
              expertise to deliver cutting-edge solutions that empower
              businesses and enhance user experiences.
            </p>
            <ul className="flex flex-col gap-2 list-disc text-start mt-5 ml-5 description">
              <li>
                <strong>Strategic Partnerships:</strong> Aligning with leading
                brands to amplify our impact.
              </li>
              <li>
                <strong>Shared Vision:</strong> Collaborating on groundbreaking
                projects that push boundaries.
              </li>
              <li>
                <strong>Industry Expertise:</strong> Harnessing collective
                knowledge to solve complex challenges.
              </li>
              <li>
                <strong>Mutual Growth:</strong> Fostering relationships that
                benefit all parties involved.
              </li>
            </ul>
          </div>
          <img
            data-aos="fade-left"
            loading="lazy"
            src={img3}
            alt="about us"
            className="w-full rounded-lg h-[50vh] lg:h-full object-cover object-center mt-7"
          />
        </div>
      </section>
      <Testimonials />
      <BrandLogos />
      <Footer />
    </>
  );
};

export default AboutUs;
