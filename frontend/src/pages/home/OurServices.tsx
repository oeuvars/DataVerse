import React from 'react';
import { Link } from 'react-router-dom';
import graphic from "../../assets/images/services/graphicdesign.webp"
import data from "../../assets/images/services/dataentry.webp"
import marketing from "../../assets/images/services/digitalmarketing.webp"
import webresearch from "../../assets/images/services/websearch.webp"
import webdevdelopment from "../../assets/images/services/webdev.webp"
import dataanalytics from "../../assets/images/services/dataanalytics.webp"

const services = [
  {
    id: 'webdev',
    title: 'Web Development',
    imageSrc: webdevdelopment,
    description: 'Elevate Your Digital Presence with Dataverse\'s Expert Web Development Services',
  },
  {
    id: 'webresearch',
    title: 'Web Research',
    imageSrc: webresearch,
    description: 'Uncover Hidden Insights in the Vast Digital Landscape with Dataverse\'s Web Research Expertise',
  },
  {
    id: 'graphic',
    title: 'Graphic Design',
    imageSrc: graphic,
    description: 'Crafting Visual Narratives That Transcend with Dataverse\'s Graphic Design Expertise',
  },
  {
    id: 'digitalmarketing',
    title: 'Digital Marketing',
    imageSrc: marketing,
    description: 'Elevate Your Online Presence with Dataverse\'s Results-Driven Digital Marketing',
  },
  {
    id: 'dataentry',
    title: 'Data Entry',
    imageSrc: data,
    description: 'Efficiency and Precision Define Dataverse\'s Data Entry Excellence',
  },
  {
    id: 'dataanalytics',
    title: 'Data Analytics',
    imageSrc: dataanalytics,
    description: 'Transform Your Data into Strategic Insights with Dataverse\'s Data Analysis Service',
  },
];

const OurServices:React.FC = () => {
  return (
    <section className="bg-blue-50" id="services">
      <div className="w-11/12 mx-auto py-16 flex flex-col gap-11">
        <h1 className="text-4xl text-center">Our Services</h1>
        <div className="grid lg:grid-cols-3 phone:gap-5 lg:gap-7 z-10">
          {services.map((service) => (
            <div key={service.id}>
              <Link
                to={`/${service.id}`}
                className="bg-white flex flex-col gap-5 shadow-[0_1px_50px_0px_rgba(0,0,0,0.1)] px-5 phone:py-7 lg:py-10 hover:scale-[1.01] transition duration-500 ease-in-out cursor-pointer"
              >
                <h2 className="text-2xl text-center">{service.title}</h2>
                <img
                  src={service.imageSrc}
                  alt=""
                  height={1000}
                  width={1000}
                  className="w-full phone:h-48 lg:h-72 object-cover rounded-md"
                />
                <p className="phone:text-sm lg:text-base w-full text-justify">{service.description}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
