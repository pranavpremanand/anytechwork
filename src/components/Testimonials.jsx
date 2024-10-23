import React from "react";
import bgImg from "../assets/testimonial-bg.png";
import { useKeenSlider } from "keen-slider/react";
import { RiDoubleQuotesR } from "react-icons/ri";

const animation = { duration: 25000, easing: (t) => t };

const Testimonials = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: true,
    slides: {
      perView: 4,
      spacing: 30,
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: {
          perView: 1,
          spacing: 30,
        },
      },
      "(min-width: 769px)": {
        slides: {
          perView: 2,
          spacing: 30,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 3,
          spacing: 30,
        },
      },
      "(min-width: 1200px)": {
        slides: {
          perView: 4,
          spacing: 30,
        },
      },
    },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });
  return (
    <div
      className="py-[5rem] relative bg-blue-50"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
        <div className="blue-bg-shape left-0 top-0 rotate-45"></div>
        <div className="blue-bg-shape right-0 bottom-0 rotate-45"></div>
      <div className="blurred-red-circle h-[25rem] w-[25rem] top-[-10rem] left-1/2 -z-10"></div>
      <div className="blurred-red-circle h-[25rem] w-[25rem] bottom-[-10rem] left-0 -z-10"></div>
      <div data-aos='fade-up' className="wrapper mb-[3rem]">
        <p className="uppercase z-10 relative mb-2 gradient-text">
          testimonials
        </p>
        <h1 className="heading z-10 relative text-center capitalize">people say about us</h1>
      </div>
      <div data-aos='fade-left' ref={sliderRef} className="keen-slider">
        {[0, 1, 2, 3, 4, 5].map((img, index) => (
          <div
            key={index}
            className="keen-slider__slide flex flex-col items-center bg-white p-5 rounded-lg"
          >
            {/* <img
                src={img}
                alt="featured in"
                className="h-[7rem] w-[12rem] object-contain"
              /> */}
            <div className="w-full flex items-center justify-between">
              <span className="text-primary text-3xl">★★★★★</span>{" "}
              <RiDoubleQuotesR className="text-7xl text-primary/20" />
            </div>
            <p className="text-lg font-light">
              Exceptional service and stunning designs! The entire process was
              smooth and collaborative. The team took the time to understand our
              needs and provided insightful suggestions that truly enhanced our
              project. The project was delivered on time, and the quality was
              impeccable.
            </p>
            <div className="w-full flex gap-3 items-center mt-4">
              <div className="w-[5rem] h-[5rem] rounded-full overflow-hidden bg-gray-300"></div>
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-medium">John Doe</h3>
                <p className="text-sm">CEO, ABC Company</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
