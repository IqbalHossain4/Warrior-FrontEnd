<<<<<<< HEAD
import React from "react";
import CategorySlider from "../CategorySlider/CategorySlider";
import Banner from "../Banner/Banner";
import Hakaton from "../Hakaton/Hakaton";

const Home = () => {
  return (
    <div className="gradient-background">
      <Banner></Banner>
      <CategorySlider />
      <Hakaton></Hakaton>
    </div>
  );
=======
import React from 'react';
import Banner from '../Banner/Banner';
import './Home.css'
import Hakaton from '../Hakaton/Hakaton';

const Home = () => {
    return (
        <div className="gradient-background">
            <Banner></Banner>
            <Hakaton></Hakaton>
        </div>
    );
>>>>>>> 6cd301607b809c6d50a171374f6fe1565761bfeb
};

export default Home;
