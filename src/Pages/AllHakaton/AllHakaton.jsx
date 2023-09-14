import React, { useEffect } from 'react';
import './AllHakaton.css';

import Aos from 'aos';
import 'aos/dist/aos.css';



const AllHakaton = ({ place }) => {

    const { title, banner, description, start_time, end_time } = place;

    useEffect(() => {
        Aos.init({
            offset: 200,
            easing: 'ease-in-sine',
            duration: 600
        });
    }, []);


    return (
        <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="2000" className='p-4 mb-10 text-white shadow-2xl'>
            <div className='image'>
                <div id="zoom-In">
                    <figure>
                        <img className='md:w-full w-80' src={banner} alt="" />
                    </figure>
                </div>
            </div>

            <div className='text-center my-3'>
                <p>H A C K A T O O N</p>

                <p>{title}</p>

                <center>
                    <p title='users perticipating' className='my-3'>{description}</p>

                    <p className='my-3'>{start_time}</p>

                    <p className='my-3'>{end_time}</p>

                    <button className='btn btn-warning text-white'>Start Now</button>

                </center>

            </div>
        </div>
    );
};

export default AllHakaton;