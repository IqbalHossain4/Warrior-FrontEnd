<<<<<<< HEAD

 import React, { useEffect } from 'react';
=======
import React, { useEffect } from 'react';
>>>>>>> edc1c29af950c9b3e41ed72a868789af9340414f
import './AllHakaton.css';

import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';



const AllHakaton = ({ place }) => {

    const { title, banner, description, start_time, end_time, _id } = place;

    useEffect(() => {
        Aos.init({
            offset: 200,
            easing: 'ease-in-sine',
            duration: 600
        });
    }, []);

<<<<<<< HEAD
    
    const maxDescriptionLength = 20;

  
=======
    // Define a maximum character limit for the description
    const maxDescriptionLength = 20;

    // Truncate the description if it exceeds the maximum length
>>>>>>> edc1c29af950c9b3e41ed72a868789af9340414f
    const truncatedDescription = description.length > maxDescriptionLength
        ? description.slice(0, maxDescriptionLength) + '...' // Add ellipsis
        : description;

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
                    

                    <p className='my-2 md:text-xl text-sm'>{truncatedDescription} <span className='text-blue-600'> <Link to={`/hakaton/${_id}`}> See More </Link> </span> </p>

                    <p className='my-3'>{start_time}</p>

                    <p className='my-3'>{end_time}</p>

                    <button className='btn btn-warning text-white'>Start Now</button>

                </center>

            </div>
        </div>
    );
};

<<<<<<< HEAD
export default AllHakaton; 
=======
export default AllHakaton;
>>>>>>> edc1c29af950c9b3e41ed72a868789af9340414f
