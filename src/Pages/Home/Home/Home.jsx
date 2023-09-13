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
};

export default Home;