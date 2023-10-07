import { Link } from 'react-router-dom';
import webdev from "../../assets/images/services/webdev.webp";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Navbar from './Navbar';

const webDevdelopment = () => {

  return (
    <>
      <Navbar />
      <div className="phone:mt-[10vh] lg:mt-[7vw]">
        <div className='phone:gap-5 lg:gap-10 w-11/12 mx-auto grid lg:grid-cols-[3fr_2fr]'>
          <img
            src={webdev}
            alt=""
            className="phone:border-2 rounded-sm w-full h-full object-cover phone:mb-5 lg:mb-0 border-2 border-orange-300 my-auto"
          />
          <div className="flex flex-col gap-5">
            <div className="flex justify-between ml-auto">
              <div className="w-full">
                <h1 className="phone:text-[4rem] lg:text-[7rem] lg:-tracking-[0.35rem] text-right leading-none">
                  01
                </h1>
                <h1 className="phone:text-3xl lg:text-5xl font-medium phone:-tracking-[0.05rem] lg:-tracking-[0.15rem] text-right">
                  Web Development
                </h1>
              </div>
            </div>
            <p className="lg:text-lg text-neutral-900 leading-relaxed text-justify m-auto  tracking-tight">
              In the ever-evolving online landscape, having a remarkable web
              presence is non-negotiable. Dataverse, your trusted partner,
              offers expert web development services meticulously tailored to
              your unique needs. Our mission is to transform your online vision
              into reality by delivering stunning, responsive websites that not
              only capture attention but also enhance user experiences. Our
              approach combines creativity, innovation, and technical expertise.
              We understand that your website is often the first point of
              contact between your brand and potential customers. Therefore, we
              take great care in crafting websites that not only look visually
              appealing but also function seamlessly across devices and
              platforms. Whether you're seeking to create a dynamic e-commerce
              platform, an engaging blog, or an informative corporate site, we
              have the skills and dedication to bring your ideas to life. At
              Dataverse, we don't just build websites; we build your digital
              success story.
            </p>
          </div>
        </div>
        <div className="flex mx-auto justify-center items-center phone:py-4 lg:py-7 phone:mt-auto gap-5">
          <button disabled className="cursor-not-allowed">
            <ChevronLeftIcon className='phone:w-7 phone:h-7 lg:w-10 lg:h-10 text-neutral-800 hover:text-neutral-900'/>
          </button>
          <Link to="/webresearch" className="cursor-pointer">
            <ChevronRightIcon className='phone:w-7 phone:h-7 lg:w-10 lg:h-10 text-neutral-800 hover:text-neutral-900'/>
          </Link>
        </div>
      </div>
    </>
  );
};

export default webDevdelopment;
