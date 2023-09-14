import React, { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './ShowHakaton.css'

import Aos from 'aos';
import 'aos/dist/aos.css';


const ShowHakaton = () => {
    // Assuming that useLoaderData returns an object with a 'title' property
    const { title, description, banner, publisher, first_prize, second_prize, third_prize, category } = useLoaderData();

    useEffect(() => {
        Aos.init({
            offset: 200,
            easing: 'ease-in-sine',
            duration: 600
        });
    }, []);

    return (
        <div>
            <center >
                <h1 className='text-center mt-10 text-4xl'>{title}</h1>

                <p className='text-center mt-5 text-2xl'>{category}</p>

                <img className='my-10 w-full' src={banner} alt="" />

                <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="2000" >
                    <p className='text-xl'>{description}</p>

                    <p className='text-2xl mt-3'>Publisher:{publisher.name}</p>

                    {/* <p className='text-2xl mt-3'>{publisher.logo}</p> */} <br />

                    <p className='text-2xl mt-3'> <span className='text-3xl font-bold'>First Price:</span> {first_prize} </p>

                    <p className='text-2xl mt-3'> <span className='text-3xl font-bold'></span> {second_prize}</p>

                    <p className='text-2xl mt-3'> <span className='text-3xl font-bold'></span> {third_prize}</p>
                </div>

                <Link to="/"><button className='btn btn-warnings my-10 text-white'>Back</button></Link>

            </center>
        </div>
    );
};

export default ShowHakaton;
