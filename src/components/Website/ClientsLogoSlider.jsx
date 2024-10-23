import { useKeenSlider } from "keen-slider/react";
import React from "react";
import { clients } from "../../constants";

const animation = { duration: 10000, easing: (t) => t };

const ClientsLogoSlider = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: true,
    slides: {
      perView: 3,
      spacing: 30,
    },
    breakpoints: {
      "(min-width: 1024px)": {
        slides: {
          perView: 5,
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
    <div className="flex flex-col gap-2 py-[5rem]">
      <h1 data-aos="fade-up" className="heading text-center">
        Join Our <span className="text-blue-300">40+</span> Happy Customers
      </h1>
      <div data-aos="fade-up" ref={sliderRef} className="keen-slider mt-4">
        {clients.concat(clients).map(({ img }, index) => (
          <div key={index} className="keen-slider__slide flex justify-center">
            <img
              loading="lazy"
              src={img}
              alt="featured in"
              className="h-[7rem] w-[15rem] object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientsLogoSlider;
