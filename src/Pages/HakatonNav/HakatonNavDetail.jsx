import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const HakatonNavDetail = ({ hakaton }) => {
  const { title, image, description, start_time, end_time, _id } = hakaton;

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
            <img className="md:w-full w-80" src={image} alt="" />
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

          <Link to={`/hackathon/${_id}`}>
            <button className="btn btn-warning text-white">Start Now</button>
          </Link>
        </center>
      </div>
    </div>
  );
};

export default HakatonNavDetail;
