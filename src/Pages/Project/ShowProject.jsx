import React, { useState } from 'react';



const ShowProject = ({ project }) => {

    const { image, name, description, technology, teamMember } = project;


    return (
        <div>
            <p className='text-center text-xl font-bold text-white mb-5'>Project Name: <span>{name}</span> </p>


            <img className="w-full h-80" src={image} alt="" />


            <div className=' text-white mt-10'>


                <p> <span className='font-bold text-xl'>About Project:</span> <span>{description}</span>  </p> <br />

                <p> <span className='font-bold text-xl'>About Project Technology:</span> <span>{technology}</span>  </p> <br />

                <p> <span className='font-bold text-xl'>Project Member: </span> <span>{teamMember}</span>  </p>
            </div>

        </div>
    );
};

export default ShowProject;