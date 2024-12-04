import React from "react";
import img1 from "../../assets/services-details/web-development2.webp";
import img2 from "../../assets/services-details/web-development1.webp";

const WebDevelopment = () => {
  return (
    <div className="flex flex-col gap-10">
      <img
        data-aos="fade-up"
        src={img1}
        loading="lazy"
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt="web development"
      />
      <div className="flex flex-col gap-4 md:px-5">
        <h2 data-aos="fade-up" className="text-3xl font-semibold">
          Web Development
        </h2>
        <p data-aos="fade-up" className="description">
          In today's interconnected world, website applications have become an
          integral part of our daily lives. From e-commerce platforms to social
          media networks, from educational resources to government services,
          these digital tools have revolutionized the way we interact,
          communicate, and conduct business. The development of website
          applications is a complex process that involves a blend of creativity,
          technical expertise, and a deep understanding of user needs.
          <br />
          <br />
          At the core of website application development lies the interplay of
          front-end and back-end development. The front-end, or client-side, is
          what the user sees and interacts with.
        </p>
      </div>
      <div className="mt-3 flex flex-col gap-4 md:px-5">
        <h2 data-aos="fade-up" className="text-3xl font-semibold">
          What We Provide
        </h2>
        <p data-aos="fade-up" className="description">
          Your website often serves as the first interaction customers have with
          your brand, and we ensure that it leaves a lasting impression. Our web
          development services focus on creating dynamic, responsive, and
          visually captivating websites that enhance user experience while
          reflecting your brand identity.
        </p>
        <img
          data-aos="fade-up"
          src={img2}
          loading="lazy"
          className="h-[25rem] object-cover rounded-3xl object-center my-4"
          alt="web development"
        />
        <p data-aos="fade-up" className="description">
          From sleek landing pages to complex e-commerce platforms, we cover the
          full spectrum of web development services. Our expertise in full-stack
          development involves both back-end infrastructure and front-end user
          interfaces, ensuring your online presence is as robust as your
          business. We believe that a great website should not only look good
          but also function flawlessly, driving conversions and providing
          measurable results.
          <br />
          <br />
          On the other hand, the back-end, or server-side, handles the
          underlying logic and functionality of the application. It involves
          tasks such as data storage, retrieval, processing, and security.
          Back-end technologies often include programming languages like Python,
          Ruby, PHP, and Java, along with databases like MySQL, PostgreSQL, and
          MongoDB. These components work together to ensure that the website
          functions smoothly and efficiently.
        </p>
      </div>
    </div>
  );
};

export default WebDevelopment;
