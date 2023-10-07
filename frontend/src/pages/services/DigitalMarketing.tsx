import { Link } from 'react-router-dom';
import digitalmarketing from "../../assets/images/services/digitalmarketing.webp";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Navbar from './Navbar';

const DigitalMarketing = () => {

  return (
    <>
      <Navbar />
      <div className="phone:mt-[10vh] lg:mt-[7vw]">
        <div className='phone:gap-5 lg:gap-10 w-11/12 mx-auto grid lg:grid-cols-[3fr_2fr]'>
          <img
            src={digitalmarketing}
            alt=""
            className="phone:border-2 rounded-sm w-full h-full object-cover phone:mb-5 lg:mb-0 border-2 border-orange-300 my-auto"
          />
          <div className="flex flex-col gap-5">
            <div className="flex justify-between ml-auto">
              <div className="w-full">
                <h1 className="phone:text-[4rem] lg:text-[7rem] lg:-tracking-[0.35rem] text-right leading-none">
                  04
                </h1>
                <h1 className="phone:text-3xl lg:text-5xl font-medium phone:-tracking-[0.05rem] lg:-tracking-[0.15rem] text-right">
                  Digital Marketing
                </h1>
              </div>
            </div>
            <p className="lg:text-lg text-neutral-900 leading-relaxed text-justify m-auto  tracking-tight">
              In the dynamic realm of digital marketing, Dataverse is your strategic partner, crafting campaigns that transcend mere visibility. Our comprehensive and results-driven services are a synergy of innovation and strategy, meticulously designed to amplify your online resonance. We understand the intricacies of the digital landscape. Our experts navigate through algorithms and user behaviors to drive a steady stream of precisely targeted traffic to your virtual doorstep. From captivating social media maneuvers that foster engagement to data-driven SEO tactics that elevate your rankings, we engineer a holistic approach that resonates across channels. With Dataverse's strategic prowess, we don't just enhance your online presence; we catalyze business growth. We forge lasting connections that go beyond clicks and conversions. Welcome to a marketing journey where success is measured not just in metrics but in meaningful milestones of digital triumph.
            </p>
          </div>
        </div>
        <div className="flex mx-auto justify-center items-center phone:py-4 lg:py-7 phone:mt-auto gap-5">
          <Link to="/graphicdesign" className="cursor-pointer">
            <ChevronLeftIcon className='phone:w-7 phone:h-7 lg:w-10 lg:h-10 text-neutral-800 hover:text-neutral-900'/>
          </Link>
          <Link to="/dataentry" className="cursor-pointer">
            <ChevronRightIcon className='phone:w-7 phone:h-7 lg:w-10 lg:h-10 text-neutral-800 hover:text-neutral-900'/>
          </Link>
        </div>
      </div>
    </>
  );
};

export default DigitalMarketing;
