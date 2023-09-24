<<<<<<< HEAD
import React, { useEffect } from "react";
import "./AllHakaton.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";

const AllHakaton = ({ place }) => {
  const { title, banner, description, start_time, end_time, _id } = place;

  useEffect(() => {
    Aos.init({
      offset: 200,
      easing: "ease-in-sine",
      duration: 600,
    });
  }, []);

  const endTime = end_time.split("T")[1];
  
  return (
    <div
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-duration="2000"
      className="p-4 mb-10 text-white shadow-2xl"
    >
      <div className="image">
        <div id="zoom-In">
          <figure>
            <img className="md:w-full w-80" src={banner} alt="" />
          </figure>
        </div>
      </div>

      <div className="text-center my-3">
        <p>H A C K A T O O N</p>

        <h2 className="text-xl font-[600]">{title}</h2>

        <center>
          <div className="py-2 px-4 border rounded-md inline-block mt-4">
            <p className="flex items-center gap-2 ">
              <FaUserAlt />
              <span> 1250</span>
            </p>
          </div>
          <p className="text-xs text-gray-400 mt-3">ENDS IN</p>
          <p className="mb-3 text-md flex items-center justify-center">
            <span>
              {endTime ? endTime.split(":")[0] : ""} :
              <p className="text-xs text-gray-400 mt-1 mr-2">Hour</p>
            </span>

            <span>
              {endTime ? endTime.split(":")[1] : ""} :
              <p className="text-xs text-gray-400 mt-1 mr-2">Minute</p>
            </span>

            <span>
              {endTime ? endTime.split(":")[2] : ""}
              <p className="text-xs text-gray-400  mt-1">Seconds</p>
            </span>
          </p>

          <Link to={`/hakaton/${_id}`}>
            <button className="btn btn-warning text-white">Start Now</button>
          </Link>
        </center>
      </div>
    </div>
  );
};

export default AllHakaton;
=======
import React, { useEffect } from 'react';
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

    // Define a maximum character limit for the description
    const maxDescriptionLength = 20;

    // Truncate the description if it exceeds the maximum length
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

export default AllHakaton;
>>>>>>> 6cd301607b809c6d50a171374f6fe1565761bfeb
