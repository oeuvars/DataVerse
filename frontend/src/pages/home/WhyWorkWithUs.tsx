import React from "react";
import { motion } from "framer-motion"

export interface CardData {
   id: number;
   title: string;
   content: string;
 }
 export const aboutData: CardData[] = [
   {
     id: 1,
     title: "About",
     content:
       "At DataVerse, our core objective is to alleviate our clients' concerns and difficulties regarding the entire data outsourcing services ecosystem. Our team of talented experts works tirelessly to enhance our customers' businesses by providing unparalleled, world-className, professional, and seamless services. We offer the best outsourcing services at the most competitive rates, ensuring that our clients receive optimal value for their investment.",
   },
   {
     id: 2,
     title: "Our Vision",
     content:
       "Our diverse range of services has enabled us to cater to a mix of big and small organizations that require our services to maintain their vast business data records. By providing accurate and time-bound work over an extended period, we have developed a bond of trust with our outsourcing clients.",
   },
   {
     id: 3,
     title: "History",
     content:
       "Since our establishment in 2017, we have been dedicated to assisting other companies in efficiently managing their businesses by outsourcing their non-essential competencies. From managing bulk data processing to providing professional web research services, we have helped hundreds of companies grow their businesses by providing assistance in their non-core divisions and back-office requirements, such as data processing and conversion.",
   },
 ];


const WhyWorkWithUs: React.FC = () => {
  return (
    <section id="whyus" className="phone:mb-12 lg:mb-20">
      <div className=" phone:text-2xl lg:text-3xl text-center phone:pt-[3.5rem] lg:pt-20">
        Why Work With US?
      </div>
      <div className="grid phone:grid-cols-1 lg:grid-cols-3 w-11/12 mx-auto mt-10 gap-5">
        {aboutData.map((card: CardData) => (
          <div className="relative">
            <div className="bg-white shadow-md px-6 py-3 transition-transform duration-500 relative z-10 lg:h-[26rem] tablet:h-[15rem] phone:h-[23.5rem]">
              <h1 className="text-lg font-rajdhani-medium">0{card.id}</h1>
              <hr className="w-1/3" />
              <h1 className="my-6  text-2xl">{card.title}</h1>
              <p className="text-justify mb-1 phone:text-sm lg:text-base text-lg font-rajdhani-medium">
                {card.content}
              </p>
              <a className="underline font-rajdhani-medium cursor-pointer">Learn More</a>
            </div>
            <div className="glow absolute top-0 left-0 w-full h-full bg-slate-300 rounded-lg opacity-70 blur-lg"></div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default WhyWorkWithUs;
