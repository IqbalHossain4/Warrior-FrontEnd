import React, { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";

import Aos from "aos";
import "aos/dist/aos.css";
import { FaStar, FaUser } from "react-icons/fa";
import { AiOutlineDesktop } from "react-icons/ai";
const ShowHakaton = () => {
  // Assuming that useLoaderData returns an object with a 'title' property
  const {
    _id,
    title,
    banner,
    publisher,
    start_time,
    end_time,
    first_prize,
    second_prize,
    third_prize,
    overview,
    theme,
    category,
    location,
  } = useLoaderData();

  useEffect(() => {
    Aos.init({
      offset: 200,
      easing: "ease-in-sine",
      duration: 600,
    });
  }, []);
  const prizeImg =
    "https://static.vecteezy.com/system/resources/thumbnails/023/234/869/small_2x/transparent-golden-cup-trophy-for-victory-win-at-contest-as-an-award-and-prize-for-achievement-png.png";
  return (
    <div className="text-white">
      <div className="relative">
        <img
          className="mb-10 md:h-[420px] w-full box-content"
          src={banner}
          alt=""
        />

        <div>
          <div className="absolute left-[10%] bottom-[-12%] w-full">
            <div className="flex items-center gap-4">
              <div className="w-[120px] h-[120px] bg-white flex items-center justify-center p-5">
                <img src={publisher.logo} alt="" />
              </div>
              <h3 className="mb-8  text-xl lg:text-3xl md:text-2xl font-[600]">
                {title}
              </h3>
            </div>
            <div className="absolute left-[7%] bottom-2">
              <p className="flex items-center gap-6 text-[12px] text-gray-400">
                <span className="flex items-center">
                  <FaUser /> <span className="ms-2">1500 Registered</span>
                </span>
                <span>ALLOWED TEAM SIZE: 1 - 5 935</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#060E26] py-12 border border-[#84823A]  border-x-0 mt-24">
        <div className="containers">
          <div className="md:flex items-center justify-between text-center">
            <div className="md:mb-0 mb-6">
              <p className="text-xs text-gray-400  mt-1">START ON:</p>
              <h3 className=" text-xs mt-2 font-[400] tracking-[3px]">
                {start_time}
              </h3>
            </div>
            <div>
              <div className="md:flex items-center  gap-2 ">
                <AiOutlineDesktop className="hidden md:block" />
                <p className="text-xs text-gray-400">HACKATHON</p>
              </div>
              <p className="mt-2">{location}</p>
            </div>
            <div className="md:my-0 my-6">
              <p className="text-xs text-gray-400  mt-1">ENDS ON:</p>
              <h3 className=" text-xs mt-2 font-[400] tracking-[3px]">
                {end_time}
              </h3>
            </div>
            <div className="">
              <Link to={`/submitProject/${_id}`}>
                <button className="btn btn-warning text-white">
                  Submit Project
                </button>
              </Link>
              <br />
              <button className="mt-4 underline text-green-500">
                V i e w T e a m
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="containers">
        <div>
          <div className="mt-16 flex items-center gap-2">
            <p>OVERVIEW</p>
            <p className="w-full h-[2px] bg-white"></p>
          </div>
          <h1 className=" mt-4 text-md">{overview.title}</h1>
          <p className="text-sm text-gray-500 mt-4">{overview.description}</p>
        </div>

        <div className="my-16">
          <div className="flex items-center gap-2 mt-8">
            <p>Theme</p>
            <p className="w-full h-[2px] bg-white"></p>
          </div>
          <div>
            {theme.map((themes, index) => (
              <div key={index} className="mt-6 flex items-start gap-3">
                <img src={themes.image} className="me-2" alt="" />

                <div>
                  <h3 className="mb-4 text-md">{themes.title}</h3>
                  <p className="text-sm text-gray-500 mt-4">
                    {themes.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="2000">
          <div className="flex items-center  gap-2 mt-8 text-xs">
            <p>PRIZES</p>
            <p className="w-full h-[2px] bg-white"></p>
            <p className="flex items-center  gap-2">
              <FaStar /> <span>USD 10000 IN PRIZES</span>
            </p>
          </div>
          <h4 className="mt-4 text-xl font-[500]">Main Prize</h4>

          <div className="flex flex-col gap-5 mt-6">
            <div className="flex items-center gap-2">
              <img src={prizeImg} className="w-[40px] h-[40px]" alt="" />
              <div>
                <h3 className="mb-1">First Prize</h3>
                <p>USD {first_prize}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <img src={prizeImg} className="w-[40px] h-[40px]" alt="" />
              <div>
                <h3 className="mb-1">Second Prize</h3>
                <p>USD {second_prize}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <img src={prizeImg} className="w-[40px] h-[40px]" alt="" />
              <div>
                <h3 className="mb-1">Second Prize</h3>
                <p>USD {third_prize}</p>
              </div>
            </div>
          </div>
        </div>

        <Link to="/">
          <button className="btn btn-warnings my-10 text-white">Back</button>
        </Link>
      </div>
    </div>
  );
};

export default ShowHakaton;
