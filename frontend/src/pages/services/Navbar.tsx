import menu from "../../assets/icons/hamburger.svg";
import x from "../../assets/icons/cross.svg";
import instagram from "../../assets/icons/instagram.svg";
import facebook from "../../assets/icons/facebook.svg";
import { useState } from "react";
import logo from "../../assets/logo/DataverseIndia.svg";
import useMediaQuery from "../../hooks/useMediaQuery";
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const controls = useAnimation();
  const arrowControls = useAnimation();
  const sidebarControls = useAnimation();

  const toggleMenu = () => {
    setIsMenuToggled(!isMenuToggled);
    sidebarControls.start(isMenuToggled ? { x: "100%" } : { x: 0 });
  };

  const handleServicesHover = (isHovered: boolean) => {
    setIsServicesHovered(isHovered);

    if (isHovered) {
      controls.start({ opacity: 1, y: 0 });
      arrowControls.start({ rotate: 180 });
    } else {
      controls.start({ opacity: 0, y: -10 });
      arrowControls.start({ rotate: 0 });
    }
  };

  return (
    <div className="flex justify-between mx-auto top-0 fixed w-full lg:px-20 phone:px-5 phone:py-4 lg:py-3 z-40 bg-white/80">
      <a href="/#home" className="my-auto flex gap-3">
        <img src={logo} alt="" className="phone:w-40 lg:w-52 mt-1" />
      </a>
      {isAboveSmallScreens ? (
        <div className="flex tablet:gap-7 lg:gap-10 tablet:text-base lg:text-xl text-black">
          <a href="/" className="my-auto hover:underline transition duration-500 ease-in-out underline-offset-4">Home</a>
          <Link to="/blogs" className="my-auto hover:underline transition duration-500 ease-in-out underline-offset-4">Blogs</Link>
          <div
            className={`relative group`}
            onMouseEnter={() => handleServicesHover(true)}
            onMouseLeave={() => handleServicesHover(false)}
          >
            <button className="flex items-center p-2 my-2 border rounded-md transition duration-300">
              <span className="mr-2">Services</span>
              <motion.span
                initial={{ rotate: 0 }} // Initial rotation
                animate={arrowControls}
                className="h-5 w-5 text-gray-700 my-auto"
              >
                <ChevronDownIcon className="h-5 w-5 text-gray-700 my-auto" />
              </motion.span>
            </button>

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={controls}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className={`absolute grid px-5 gap-3 w-[12rem] py-3 -left-10 backdrop-blur-md rounded-lg shadow-xl ${
                isServicesHovered ? "block" : "hidden"
              }`}
            >
              <Link to="/webdev">Web Development</Link>
              <Link to="/webresearch">Web Research</Link>
              <Link to="/digitalmarketing">Digital Marketing</Link>
              <Link to="/graphic">Graphic Design</Link>
              <Link to="/dataentry">Data Entry</Link>
            </motion.div>
          </div>
          <a href="/#whatsetsusapart" className="my-auto hover:underline transition duration-500 ease-in-out underline-offset-4">Features</a>
          <a href="/#testimonials" className="my-auto hover:underline transition duration-500 ease-in-out underline-offset-4">Testimonials</a>
          <a href="/#contact" className="my-auto hover:underline transition duration-500 ease-in-out underline-offset-4">Contact Us</a>
        </div>
      ) : (
        <button onClick={toggleMenu}>
          <img src={menu} alt="" width={20} />
        </button>
      )}
      <AnimatePresence>
        {!isAboveSmallScreens && isMenuToggled && (
          <motion.div
          initial={{ x: "100%" }}
          animate={isMenuToggled ? { x: 0 } : { x: "100%" }}
          exit={{ x: "100%", transition: { type: "spring", stiffness: 300, damping: 30 } }}
          className="fixed right-0 bottom-0 h-full bg-[#fffff8] w-[100%]">
            <button
              onClick={toggleMenu}
              className="flex justify-start ml-7 mt-7 transition duration-500 ease-in-out"
            >
              <img src={x} alt="" className="w-7 h-7" />
            </button>
            <div
              className="flex flex-col gap-5 mx-auto text-white p-8"
              onClick={toggleMenu}
            >
              <a href="/" className="my-auto text-black text-xl">Home</a>
              <Link to="/blogs" className="my-auto text-black text-xl">Blogs</Link>
              <a href="/#whyus" className="my-auto text-black text-xl">Why Us</a>
              <a href="/#whatsetsusapart" className="my-auto text-black text-xl">Features</a>
              <a href="/#testimonials" className="my-auto text-black text-xl">Testimonials</a>
              <a href="/#contact" className="my-auto text-black text-xl">Contact Us</a>
            </div>
            <div className="p-5 h-full mt-40 mx-auto justify-between">
              <h1 className="my-auto text-black/70 text-lg mb-3">
                © 2017 Copyright: DataVerse
              </h1>
              <div className="flex gap-3">
                <button>
                  <img src={instagram} alt="" className="w-7 h-7" />
                </button>
                <button>
                  <img src={facebook} alt="" className="w-8 h-8" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}