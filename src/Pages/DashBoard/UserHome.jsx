import React from 'react';
import { FaGraduationCap, FaTeamspeak, FaStar, FaLine, FaHandPointUp, FaArrowAltCircleDown } from 'react-icons/fa';
import Chart from './Chart';

const UserHome = () => {
    return (
        <div> <br />

            <div className='shadow-2xl bg-white px-60 rounded-3xl py-20  grid md:grid-cols-4 gap-10'>
                <div className='flex justify-center items-center gap-3'>
                    <FaStar className='text-yellow-600 h-10 w-10'></FaStar>
                    <div>
                        <p>Post</p> <br />
                        <p>0</p>
                    </div>
                </div>

                <div className='flex justify-center items-center gap-3'>
                    <FaHandPointUp className='text-yellow-600 h-10 w-10'></FaHandPointUp>
                    <div>
                        <p>Contest Ratings</p><br />
                        <p>0</p> 
                    </div>
                </div>

                <div className='flex justify-center items-center gap-3'>
                    <FaArrowAltCircleDown className='text-yellow-600 h-10 w-10'></FaArrowAltCircleDown>
                    <div>
                        <p>Problem Solving</p><br />
                        <p>0</p> 
                    </div>
                </div>

                <div className='flex justify-center items-center gap-3'>
                    <FaStar className='text-yellow-600 h-10 w-10'></FaStar>
                    <div>
                        <p>Solution Submitted</p><br />
                        <p>0</p> 
                    </div>
                </div>
            </div>  <br />

            <div className='shadow-2xl bg-white px-60 rounded-3xl py-20'>
                <h1 className='text-2xl mb-10'>0 Submission Of The Last Year</h1>

                <Chart></Chart>

                <p className='mt-5'>No Data Available, <span className='text-blue-700 '>Update Now</span> </p>
            </div> <br />

            <div className='shadow-2xl bg-white px-60 rounded-3xl py-20'>
                <h1 className='text-2xl mb-10'>Education</h1>
                <FaGraduationCap className='w-20 h-20'></FaGraduationCap>

                <p className='mt-5'>No Data Available, <span className='text-blue-700 '>Update Now</span> </p>
            </div> <br />

            <div className='shadow-2xl bg-white px-60 rounded-3xl py-20'>
                <h1 className='text-2xl mb-10'>Work Experience</h1>
                <FaTeamspeak className='w-20 h-20'></FaTeamspeak>

                <p className='mt-5'>No Data Available, <span className='text-blue-700 '>Update Now</span> </p>
            </div>
        </div>
    );
};

export default UserHome;