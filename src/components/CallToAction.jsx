import React from "react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <div className="flex flex-col wrapper gap-3 items-center pt-[4rem] pb-[3rem]">
      <h1 className="heading-1 text-center max-w-7xl mx-auto">
        “Ready to bring your ideas to life? <br /> Let’s build something amazing
        together.”
      </h1>
      <Link to="/contact-us" className="purple-btn rounded-full w-fit mt-6">
        Get Your Free Consultation Today.
      </Link>
    </div>
  );
};

export default CallToAction;
