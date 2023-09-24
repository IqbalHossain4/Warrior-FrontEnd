import React from 'react';
import CategorySlider from '../CategorySlider/CategorySlider';
import Banner from '../Banner/Banner';
import './Home.css'
import Hakaton from '../Hakaton/Hakaton';

const Home = () => {
    return (
        <div>
   



        <div className="gradient-background">
        <CategorySlider/>
        </div>
            <Banner></Banner>
            <Hakaton></Hakaton>
        </div>
    );
};

export default Home;