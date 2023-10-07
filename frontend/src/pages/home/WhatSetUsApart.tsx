import constSaving from "../../assets/images/features/cost-effective.webp";
import experience from "../../assets/images/features/experience.webp";
import outSourcing from "../../assets/images/features/all-in-one-outsourcing.webp";
import security from "../../assets/images/features/data-security.webp";
import time from "../../assets/images/features/24-7.webp";
import encompassing from "../../assets/images/features//encompassing.webp";
import useMediaQuery from "../../hooks/useMediaQuery";

const featuresData = [
  {
    title: "24/7 BUSINESS OPERATIONS",
    image: time,
    content:
      "At DataVerse, we understand the importance of your business. We empower you to run your business even while you sleep by leveraging globalization to our advantage. When you outsource your non-core tasks to us, we ensure that your work is distributed across different time zones, enabling your business to operate 24 hours a day, seven days a week. With teams located in various countries, working with us ensures that your business runs round the clock.",
  },
  {
    title: "LONG-TERM EXPERIENCE",
    image: experience,
    content:
      "DataVerse was founded in 2015, and since then, we have been committed to excellence. With over 8 years of experience, we have become one of the top companies in the market. Our extensive experience has enabled us to work with numerous clients, making our teams highly proficient in handling projects. This experience has helped clients reduce overall costs and complete projects in the shortest possible time with minimal errors.",
  },
  {
    title: "DATA SECURITY",
    image: security,
    content:
      "Upon onboarding a new client, we sign confidentiality and Non-Disclosure Agreements (NDA's). Before commencing any project, team members and employees involved in the project are required to sign an NDA. We understand that your data is crucial to your business. Our teams strictly adhere to data protection laws and ensure that client data is not shared with any third party without explicit permission. We prioritize user security and ensure that data is stored securely, with backups in place for contingency situations.",
  },
  {
    title: "ALL-IN-ONE OUTSOURCING",
    image: outSourcing,
    content:
      "We take care of nearly all your data-related needs, allowing you to focus solely on growing your business. As a business owner or decision maker, you need to assess if a company is worth partnering with. There are various factors to consider when hiring a company, and we highlight why you should choose us to make your decision easier.",
  },
  {
    title: "COST-EFFECTIVE",
    image: constSaving,
    content:
      "One of the primary benefits of working with DataVerse is our cost-effective solutions. With our robust infrastructure, skilled workforce, and global reach, we have acquired numerous clients from around the world. We focus on reducing overall costs for our clients, including small businesses, by offering competitive prices in the market. Our services are of high quality and affordable, and we are committed to delivering projects on time.",
  },
  {
    title: "ENCOMPASSING OUTSOURCING",
    image: encompassing,
    content:
      "DataVerse caters to diverse industries, including web designing, consulting, automotive, finance, insurance firms, medical institutes, freelancers, entrepreneurs, printer manufacturers, and more. Whatever your data-related needs may be, DataVerse has the expertise to handle them all.",
  },
];
const WhatSetUsApart = () => {
  const isAboveSmallScreens = useMediaQuery("(min-width: 914px)");

  return (
    <div id="whatsetsusapart">
      {isAboveSmallScreens ? (
        <section id="why us">
          <div className="mx-auto mb-20 pt-20">
            <h1 className="text-3xl  text-center mb-5">
              What Sets Us Apart!
            </h1>
            <p className="w-2/5 text-justify font-rajdhani-medium mx-auto">
              As a business owner or decision maker, you must carefully consider
              whether a company is worth partnering with. There are various
              factors to consider when hiring a company, and we aim to make your
              decision easier by highlighting why you should choose to work with
              us.
            </p>
          </div>

          <div className="flex flex-col justify-center gap-20">
            {featuresData.map((feature, index) => (
              <div
                className={`flex w-2/3 mx-auto ${
                  index % 2 === 0 ? "" : "flex-row-reverse"
                }`}
              >
                <img src={feature.image} width={500} alt="" className="object-cover rounded-md hover:saturate-150 transition duration-500"/>
                <div className="px-5 mx-auto my-auto">
                  <h1 className="text-3xl text-center mb-5 ">
                    {feature.title}
                  </h1>
                  <p className="font-rajdhani-medium text-justify">{feature.content}</p>
                </div>
              </div>
            ))}

            <button className="px-12 py-3 shadow-md bg-black text-white flex mx-auto mt-10 ">
              <a href="mailto:someone@example.com">Get Started</a>
            </button>
          </div>
        </section>
      ) : (
        <section id="why us">
          <div className="mx-auto phone:pt-16 tablet:pt-0">
            <h1 className="text-2xl  text-center mb-5">
              What Sets Us Apart!
            </h1>
            <p className="font-rajdhani-medium px-5 tablet:text-base phone:text-sm text-justify mx-auto tablet:w-5/6">
              As a business owner or decision maker, you must carefully consider
              whether a company is worth partnering with. There are various
              factors to consider when hiring a company, and we aim to make your
              decision easier by highlighting why you should choose to work with
              us.
            </p>
          </div>

          <div className="flex flex-col gap-7 mt-7">
            {featuresData.map((feature, index) => (
              <div className="mx-auto w-11/12 shadow-lg px-5 border grid" key={index}>
                <img src={feature.image} alt="" className="my-5 rounded-md"/>
                <div className="my-auto">
                  <h1 className="text-xl text-center mb-2 ">
                    {feature.title}
                  </h1>
                  <p className="text-justify tablet:text-base phone:text-sm font-rajdhani-medium pb-5">
                    {feature.content}
                  </p>
                </div>
              </div>
            ))}
            <button className="px-12 py-3 shadow-md bg-black text-white flex mx-auto mt-2 ">
              <a href="prembasu24@gmail.com">Get Started</a>
            </button>
          </div>
        </section>
      )}
    </div>
  );
};

export default WhatSetUsApart;
