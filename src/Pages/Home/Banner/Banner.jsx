import { Parallax } from "react-parallax";
import React, { useEffect, useRef } from "react";

import img from "../../../assets/971.jpg";

const Banner = () => {
  return (
    <div>
      <div>
        <Parallax
          blur={{ min: -50, max: 50 }}
          bgImage={img}
          bgImageAlt="the dog"
          strength={-200}
        >
          <div className="hero md:h-[600px] h-[200px]">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="md:max-w-2xl max-w-md ">
                <h1
                  className="mb-5 text-xl lg:text-4xl md:text-2xl text-[#F6EC4D]"
                  style={{ fontFamily: "cursive" }}
                >
                  Welcome to our Hackathons World
                </h1>

                <h1 className="text-xl lg:text-4xl md:text-2xl font-bold">
                  events, meetups & conferences
                </h1>

                <p className="md:text-sm text-xs my-2 text-gray-400">
                  World's most influential media, entertainment & technology
                  show inspirational speakers including game changing ideas.
                </p>
              </div>
            </div>
          </div>
        </Parallax>
      </div>
    </div>
  );
};

export default Banner;
