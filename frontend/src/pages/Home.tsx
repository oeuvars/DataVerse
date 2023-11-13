import WhyWorkWithUs from "./home/WhyWorkWithUs";
import WhatSetUsApart from "./home/WhatSetUsApart";
import Testimonials from "./home/Testimonials";
import Contact from "./home/Contact";
import Navbar from "./home/Navbar";
import OurServices from "./home/OurServices";
import { Hero } from "./home/Hero";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <WhyWorkWithUs />
      <OurServices />
      <WhatSetUsApart />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
