import instagram from "../../assets/icons/instagram.svg";
import facebook from "../../assets/icons/facebook.svg";
import { useEffect, useState } from "react";
import logo from "../../assets/logo/DataverseIndia.svg";
import useMediaQuery from "../../hooks/useMediaQuery";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { Bars3Icon, ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`flex justify-between mx-auto top-0 fixed w-full lg:px-20 phone:px-5 phone:py-4 lg:py-3 z-40 transition duration-500 ease-in-out ${isScrolled ? "bg-[#fffff8]/90" : ""}`}>
      <AnchorLink href="#home" className="my-auto flex gap-3">
        <img src={logo} alt="" className="phone:w-40 lg:w-52" />
      </AnchorLink>
      {isAboveSmallScreens ? (
        <div className={`flex tablet:gap-7 sm:gap-5 tablet:text-base lg:text-xl ${isScrolled ? "text-black" : "text-white"}`}>
          <AnchorLink href="#home" className="my-auto phone:text-base lg:text-lg hover-underline-animation">Home</AnchorLink>
          <Link to="/blogs" className="my-auto hover-underline-animation phone:text-base lg:text-lg">Blogs</Link>
          <div
            className={`relative group`}
            onMouseEnter={() => handleServicesHover(true)}
            onMouseLeave={() => handleServicesHover(false)}
          >
            <button className="flex items-center px-2 py-[0.4vw] border rounded-md transition duration-300">
              <span className="mr-2 phone:text-base lg:text-lg">Services</span>
              <motion.span
                initial={{ rotate: 0 }}
                animate={arrowControls}
                className="h-5 w-5 text-white my-auto"
              >
                <ChevronDownIcon className={`h-5 w- my-auto transition duration-500 ease-in-out ${isScrolled ? "text-black" : "text-white" }`} />
              </motion.span>
            </button>

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={controls}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className={`absolute grid px-5 gap-3 w-[13vw] py-5 -left-10 backdrop-blur-md rounded-lg shadow-xl phone:text-base lg:text-lg ${
                isServicesHovered ? "block" : "hidden"
              }`}
            >
              <Link to="/webdev" className="hover:text-indigo-500 animation phone:text-sm sm:text-base lg:text-lg">Web Development</Link>
              <Link to="/webresearch" className="hover:text-indigo-500 animation phone:text-sm sm:text-base lg:text-lg">Web Research</Link>
              <Link to="/digitalmarketing" className="hover:text-indigo-500 animation phone:text-sm sm:text-base lg:text-lg">Digital Marketing</Link>
              <Link to="/graphic" className="hover:text-indigo-500 animation phone:text-sm sm:text-base lg:text-lg">Graphic Design</Link>
              <Link to="/dataentry" className="hover:text-indigo-500 animation phone:text-sm sm:text-base lg:text-lg">Data Entry</Link>
            </motion.div>
          </div>
          <AnchorLink href="#whatsetsusapart" className="my-auto phone:text-base lg:text-lg hover-underline-animation">Features</AnchorLink>
          <AnchorLink href="#testimonials" className="my-auto phone:text-base lg:text-lg hover-underline-animation">Testimonials</AnchorLink>
          <AnchorLink href="#contact" className="my-auto phone:text-base lg:text-lg hover-underline-animation">Contact Us</AnchorLink>
        </div>
      ) : (
        <button onClick={toggleMenu}>
          <Bars3Icon className="h-7 w-7 text-neutral-800" />
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
              <XMarkIcon className="h-7 w-7 text-neutral-700" />
            </button>
            <div
              className="flex flex-col gap-5 mx-auto text-white p-8"
              onClick={toggleMenu}
            >
              <AnchorLink href="#home" className="my-auto text-black text-base">Home</AnchorLink>
              <Link to="/blogs" className="my-auto text-black text-base">Blogs</Link>
              <AnchorLink href="#whyus" className="my-auto text-black text-base">Why Us</AnchorLink>
              <AnchorLink href="#whatsetsusapart" className="my-auto text-black text-base">Features</AnchorLink>
              <AnchorLink href="#testimonials" className="my-auto text-black text-base">Testimonials</AnchorLink>
              <AnchorLink href="#contact" className="my-auto text-black text-base">Contact Us</AnchorLink>
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

