import { Link } from 'react-router-dom';
import graphicdesign from "../../assets/images/services/graphicdesign.webp";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Navbar from './Navbar';

const GraphicDesign = () => {

  return (
    <>
      <Navbar />
      <div className="phone:mt-[10vh] lg:mt-[7vw]">
        <div className='phone:gap-5 lg:gap-10 w-11/12 mx-auto grid lg:grid-cols-[3fr_2fr]'>
          <img
            src={graphicdesign}
            alt=""
            className="phone:border-2 rounded-sm w-full h-full object-cover phone:mb-5 lg:mb-0 border-2 border-orange-300 my-auto"
          />
          <div className="flex flex-col gap-5">
            <div className="flex justify-between ml-auto">
              <div className="w-full">
                <h1 className="phone:text-[4rem] lg:text-[7rem] lg:-tracking-[0.35rem] text-right leading-none">
                  03
                </h1>
                <h1 className="phone:text-3xl lg:text-5xl font-medium phone:-tracking-[0.05rem] lg:-tracking-[0.15rem] text-right">
                  Graphic Design
                </h1>
              </div>
            </div>
            <p className="lg:text-lg text-neutral-900 leading-relaxed text-justify m-auto  tracking-tight">
              At the heart of our creative endeavor lies the art of graphic
              design, where innovation and professionalism converge to weave a
              compelling narrative for your brand. Dataverse's dedicated graphic
              design services breathe life into your ideas, meticulously
              crafting visuals that not only resonate but also speak volumes. We
              recognize the immense power of imagery. Our team expertly
              translates your message into a visual language that captivates and
              connects with your audience. From logos that embody your essence
              to designs that infuse life into your marketing campaigns, we
              sculpt your visual identity with precision. Dataverse is a realm
              where design transcends aesthetics, becoming a powerful tool for
              communication and a catalyst for meaningful interactions. Our
              commitment to excellence ensures that every design element aligns
              with your brand's essence, leaving a lasting impression that
              resonates with your audience.
            </p>
          </div>
        </div>
        <div className="flex mx-auto justify-center items-center phone:py-4 lg:py-7 phone:mt-auto gap-5">
          <Link to="/webresearch" className="cursor-pointer">
            <ChevronLeftIcon className='phone:w-7 phone:h-7 lg:w-10 lg:h-10 text-neutral-800 hover:text-neutral-900'/>
          </Link>
          <Link to="/digitalmarketing" className="cursor-pointer">
            <ChevronRightIcon className='phone:w-7 phone:h-7 lg:w-10 lg:h-10 text-neutral-800 hover:text-neutral-900'/>
          </Link>
        </div>
      </div>
    </>
  );
};

export default GraphicDesign;
