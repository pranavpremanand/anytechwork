import React from "react";
import img1 from "../../assets/services-details/rpa1.jpeg";
import img2 from "../../assets/services-details/rpa2.jpeg";

const RPA = () => {
  return (
    <div className="flex flex-col gap-10">
      <img
        data-aos="fade-up"
        src={img1}
        loading="lazy"
        className="h-[25rem] object-contain rounded-3xl object-center"
        alt="rpa"
      />
      <div className="flex flex-col gap-4 md:px-5">
        <h2 data-aos="fade-up" className="text-3xl font-semibold">
          Robotic Process Automation (RPA)
        </h2>
        <p data-aos="fade-up" className="description">
          Robotic Process Automation (RPA) is a technology that uses software
          robots to automate repetitive, rule-based tasks. These software robots
          can mimic human actions, interacting with applications and systems to
          perform tasks that were previously done manually. RPA has emerged as a
          powerful tool for businesses looking to improve efficiency, reduce
          costs, and enhance accuracy.
          <br />
          <br />
          One of the key benefits of RPA is its ability to automate repetitive
          tasks that are prone to human error. By eliminating manual
          intervention, RPA can significantly reduce the risk of mistakes and
          ensure consistency in processes. This can lead to improved quality and
          compliance, as well as reduced operational costs.
        </p>
      </div>
      <div className="mt-3 flex flex-col gap-4 md:px-5">
        <h2 data-aos="fade-up" className="text-3xl font-semibold">
          What We Provide
        </h2>
        
        <img
          data-aos="fade-up"
          src={img2}
          loading="lazy"
          className="h-[25rem] object-cover rounded-3xl object-center my-4"
          alt="rpa"
        />
        <p data-aos="fade-up" className="description">
          Process Assessment and Analysis: We identify processes that are
          suitable for automation, evaluate their complexity, and assess the
          potential benefits of RPA implementation.
          <br />
          <br />
          RPA Solution Design: Our experts design and develop customized RPA
          solutions that align with your specific business requirements and
          objectives.
          <br />
          <br />
          RPA Implementation: We deploy and configure RPA software robots to
          automate the identified processes, ensuring seamless integration with
          your existing systems.
          <br />
          <br />
          Ongoing Management and Support: We provide ongoing maintenance,
          monitoring, and support for your RPA implementation, ensuring optimal
          performance and addressing any issues that may arise.
          <br />
          <br />
          Training and Knowledge Transfer: We offer training programs to equip
          your team with the skills and knowledge needed to effectively manage
          and utilize RPA technology.
        </p>
      </div>
    </div>
  );
};

export default RPA;
