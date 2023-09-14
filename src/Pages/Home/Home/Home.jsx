import React from 'react';
<<<<<<< HEAD
import CategorySlider from '../CategorySlider/CategorySlider';

const Home = () => {
    return (
        <div>
        <CategorySlider/>
=======
import Banner from '../Banner/Banner';
import './Home.css'
import Hakaton from '../Hakaton/Hakaton';

const Home = () => {
    return (
        <div className="gradient-background">
            <Banner></Banner>
            <Hakaton></Hakaton>
>>>>>>> 7e09f4805a23eda164acc3e74fba669fe4055a30
        </div>
    );
};

export default Home;