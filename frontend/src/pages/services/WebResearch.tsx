import { Link } from 'react-router-dom';
import webresearch from "../../assets/images/services/websearch.webp";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Navbar from './Navbar';

const WebResearch = () => {

  return (
    <>
      <Navbar />
      <div className="phone:mt-[10vh] lg:mt-[7vw]">
        <div className='phone:gap-5 lg:gap-10 w-11/12 mx-auto grid lg:grid-cols-[3fr_2fr]'>
          <img
            src={webresearch}
            alt=""
            className="phone:border-2 rounded-sm w-full h-full object-cover phone:mb-5 lg:mb-0 border-2 border-orange-300 my-auto"
          />
          <div className="flex flex-col gap-5">
            <div className="flex justify-between ml-auto">
              <div className="w-full">
                <h1 className="phone:text-[4rem] lg:text-[7rem] lg:-tracking-[0.35rem] text-right leading-none">
                  02
                </h1>
                <h1 className="phone:text-3xl lg:text-5xl font-medium phone:-tracking-[0.05rem] lg:-tracking-[0.15rem] text-right">
                  Web Research
                </h1>
              </div>
            </div>
            <p className="lg:text-lg text-neutral-900 leading-relaxed text-justify m-auto  tracking-tight">
              In today's information age, data is power, and at Dataverse, we are the architects of insight. Our web research services transcend the boundaries of data collection; we are explorers navigating the boundless digital expanse. With unwavering expertise, we adeptly unearth, scrutinize, and curate pertinent data, transforming it into a strategic asset that guides your journey forward. Our meticulous approach sets us apart. We decipher the intricate tapestry of the web to extract valuable insights that illuminate pathways and reveal hidden opportunities. Our research empowers you not only with knowledge but also with the tools to decipher trends, anticipate shifts, and outpace the competition. Dataverse's expertly presented findings empower you to make decisions that resonate with foresight and precision. We secure not just an edge but a vantage point poised for success in the dynamic digital landscape. With Dataverse, you're not just informed; you're strategically equipped for the challenges and opportunities ahead.
            </p>
          </div>
        </div>
        <div className="flex mx-auto justify-center items-center phone:py-4 lg:py-7 phone:mt-auto gap-5">
          <Link to="/webdev" className="cursor-pointer">
            <ChevronLeftIcon className='phone:w-7 phone:h-7 lg:w-10 lg:h-10 text-neutral-800 hover:text-neutral-900'/>
          </Link>
          <Link to="/graphicdesign" className="cursor-pointer">
            <ChevronRightIcon className='phone:w-7 phone:h-7 lg:w-10 lg:h-10 text-neutral-800 hover:text-neutral-900'/>
          </Link>
        </div>
      </div>
    </>
  );
};

export default WebResearch;
