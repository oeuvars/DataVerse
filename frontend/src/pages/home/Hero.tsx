import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Link } from "react-router-dom";
import lowcost from "../../assets/images/landing/1.webp";
import datasecurity from "../../assets/images/landing/2.webp";
import allday from "../../assets/images/landing/3.webp";
import experience from "../../assets/images/landing/4.webp";

const slides = [
  {
    image: lowcost,
    title: "Low Cost",
  },
  {
    image: datasecurity,
    title: "Data Security",
  },
  {
    image: allday,
    title: "",
  },
  {
    image: experience,
    title: "Long Term Experience",
  },
];

export const Hero: React.FC = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <section id="home">
      <div className="embla phone:mt-[7vh] lg:mt-0" ref={emblaRef}>
      <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="relative embla__slide" key={index}>
              <img
                src={slide.image}
                alt=""
                className="lg:h-[100vh] w-full mx-auto object-cover"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-white opacity-5"></div>
              <p className="absolute z-20 top-[36vw] bottom-0 left-0 right-0 flex justify-center items-center px-2 text-white phone:text-4xl lg:text-[9vw] font-wix-semibold font-medium mx-auto">
                {slide.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="my-auto phone:mt-5 tablet:mt-5 mt-10">
        <h1 className="text-5xl tablet:text-4xl phone:text-2xl rounded-lg mb-3 h2-grad text-center">
          DataVerse a digital service based company.
        </h1>
        <p className="mb-5 text-center lg:w-5/6 mx-auto phone:text-base lg:text-lg phone:w-11/12">
          We are committed to delivering the highest quality services to our clients and take pride in being a reliable outsourcing partner.
        </p>
        <Link
          to="#contact"
          className="phone:text-lg lg:text-xl lg:w-[10%] phone:w-[30%] py-2 bg-black text-white shadow-xl mx-auto flex font-rajdhani-medium rounded-sm"
        >
          <p className="m-auto">Contact Us</p>
        </Link>
      </div>
    </section>
  );
};
