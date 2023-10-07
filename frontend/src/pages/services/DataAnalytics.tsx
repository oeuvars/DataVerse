import { Link } from 'react-router-dom';
import dataAnalytics from "../../assets/images/services/dataanalytics.webp";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Navbar from './Navbar';

const DataAnalytics = () => {

  return (
    <>
      <Navbar />
      <div className="phone:mt-[10vh] lg:mt-[7vw]">
        <div className='phone:gap-5 lg:gap-10 w-11/12 mx-auto grid lg:grid-cols-[3fr_2fr]'>
          <img
            src={dataAnalytics}
            alt=""
            className="phone:border-2 rounded-sm w-full h-full object-cover mb-0 border-2 border-orange-300 my-auto"
          />
          <div className="flex flex-col gap-5">
            <div className="flex justify-between ml-auto">
              <div className="w-full">
                <h1 className="phone:text-[4rem] lg:text-[7rem] lg:-tracking-[0.35rem] text-right leading-none">
                  06
                </h1>
                <h1 className="phone:text-3xl lg:text-5xl font-medium phone:-tracking-[0.05rem] lg:-tracking-[0.15rem] text-right">
                  Data Analytics
                </h1>
              </div>
            </div>
            <p className="lg:text-lg text-neutral-900 leading-relaxed text-justify m-auto  tracking-tight">
              In today's data-driven world, the true potential of your business
              lies within your data. Dataverse's Data Analysis service empowers
              you to harness the hidden insights that can transform your
              decision-making, drive innovation, and elevate your competitive
              edge. Our expert data analysts dive deep into your datasets,
              revealing valuable patterns and trends that might have otherwise
              remained hidden. This empowers you to make informed decisions with
              clarity and confidence. We believe that data should not just
              inform; it should transform. Our predictive analytics capabilities
              allow you to anticipate future trends and behaviors, giving you a
              competitive advantage in a fast-paced business environment. What
              sets us apart is our commitment to data quality. We treat your
              data as a valuable asset, ensuring that every insight is based on
              accurate and reliable information.
            </p>
          </div>
        </div>
        <div className="flex mx-auto justify-center items-center phone:py-4 lg:py-7 phone:mt-auto phone:gap-2 lg:gap-5">
          <Link to="/dataentry" className="cursor-pointer">
            <ChevronLeftIcon className='phone:w-7 phone:h-7 lg:w-10 lg:h-10 text-neutral-800 hover:text-neutral-900'/>
          </Link>
          <button disabled className="cursor-not-allowed">
            <ChevronRightIcon className='phone:w-7 phone:h-7 lg:w-10 lg:h-10 text-neutral-800 hover:text-neutral-900'/>
          </button>
        </div>
      </div>
    </>
  );
};

export default DataAnalytics;
