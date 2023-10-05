import React from "react";
import CategorySlider from "../CategorySlider/CategorySlider";
import Banner from "../Banner/Banner";
import "./Home.css";
import Hackathons from "../Hackathons/Hackathons";
import Organizer from "../Organizer/Organizer";
import OurPrideService from "../OurPrideService/OurPrideService";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="gradient-background">
        <CategorySlider />
      </div>
      <Hackathons />
      <Organizer />
      <OurPrideService />
    </div>
  );
};

export default Home;
