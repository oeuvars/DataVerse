import { Link } from 'react-router-dom';
import dataentry from "../../assets/images/services/dataentry.webp";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Navbar from './Navbar';

const DataEntry = () => {

  return (
    <>
      <Navbar />
      <div className="phone:mt-[10vh] lg:mt-[7vw]">
        <div className='phone:gap-5 lg:gap-10 w-11/12 mx-auto grid lg:grid-cols-[3fr_2fr]'>
          <img
            src={dataentry}
            alt=""
            className="phone:border-2 rounded-sm w-full h-full object-cover phone:mb-5 lg:mb-0 border-2 border-orange-300 my-auto"
          />
          <div className="flex flex-col gap-5">
            <div className="flex justify-between ml-auto">
              <div className="w-full">
                <h1 className="phone:text-[4rem] lg:text-[7rem] lg:-tracking-[0.35rem] text-right leading-none">
                  05
                </h1>
                <h1 className="phone:text-3xl lg:text-5xl font-medium phone:-tracking-[0.05rem] lg:-tracking-[0.15rem] text-right">
                  Data Entry
                </h1>
              </div>
            </div>
            <p className="phone:text-base lg:text-lg text-neutral-900 leading-relaxed text-justify m-auto tracking-tight">
              In the intricate landscape of data management, Dataverse's
              proficiency in data entry stands as a cornerstone of precision. We
              understand that data is the lifeblood of your business, and with
              meticulous attention to detail, we offer efficient and accurate data
              entry services that transcend mundane tasks to elevate your business
              operations. Your data is a valuable asset, and it finds safe harbor
              in our capable hands, where accuracy reigns supreme. Our commitment
              to reliability goes hand in hand with safeguarding the
              confidentiality of your information. As we seamlessly input,
              organize, and update your data, your business flows with increased
              efficiency. Trust in Dataverse's expertise to transform data into
              insights, paving the way for informed decisions and streamlined
              processes that define the essence of seamless success. With
              Dataverse, data entry becomes a strategic advantage, not just a
              routine task.
            </p>
          </div>
        </div>
        <div className="flex mx-auto justify-center items-center phone:py-4 lg:py-7 phone:mt-auto gap-5">
          <Link to="/digitalmarketing" className="cursor-pointer">
            <ChevronLeftIcon className='phone:w-7 phone:h-7 lg:w-10 lg:h-10 text-neutral-800 hover:text-neutral-900'/>
          </Link>
          <Link to="/dataanalytics" className="cursor-pointer">
            <ChevronRightIcon className='phone:w-7 phone:h-7 lg:w-10 lg:h-10 text-neutral-800 hover:text-neutral-900'/>
          </Link>
        </div>
      </div>
    </>
  );
};

export default DataEntry;
