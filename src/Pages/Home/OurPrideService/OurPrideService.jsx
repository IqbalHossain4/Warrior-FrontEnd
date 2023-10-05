import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import Aos from "aos";
import CountUp from "react-countup";
const OurPrideService = () => {
  return (
    <div
      className="my-24"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-duration="2000"
    >
      <div className="containers py-24 px-12 prideBoxBg relative overflow-hidden">
        <div className="md:flex items-center justify-between">
          <div className="md:w-1/2 w-full   z-10">
            <h3 className="text-[#F6EC4D] tracking-[10px] font-[500] mb-2">
              WHAT WE'VE ACCOMPLISED
            </h3>
            <h1 className="text-xl lg:text-4xl md:text-2xl font-[700] text-white md:pe-20">
              We pride ourselves on our excellent support and servic
            </h1>

            <button className="mt-24 btn btn-warning flex  items-center gap-4 text-white">
              <span>
                <HiArrowLongRight className="text-[20px]" />
              </span>
              <span className="text-[15px]">CONTUCT US</span>
            </button>
          </div>
          <div className="md:mt-0 mt-16 z-10">
            <div className="flex items-center  gap-4">
              <div className="shape shape-1 flex items-center justify-center p-4">
                <div className="flex-col text-center">
                  <h1 className="text-4xl font-[700] text-white">+4.9*</h1>
                  <p className="text-[14px] text-white">
                    Customer Satisfaction
                  </p>
                </div>
              </div>
              <div className="shape shape-2 flex items-center justify-center p-4">
                <div className="flex-col text-center">
                  <h1 className="text-4xl font-[700] text-white">
                    +
                    <CountUp start={0} end={4.5} delay={5}>
                      {({ countUpRef }) => (
                        <div>
                          <span ref={countUpRef} />
                        </div>
                      )}
                    </CountUp>
                    k
                  </h1>
                  <p className="text-[14px] text-white">Active our Members</p>
                </div>
              </div>
            </div>
            <div className="shape shape-3 mx-auto flex items-center justify-center p-4">
              <div className="flex-col text-center">
                <h1 className="text-4xl font-[700] text-white">+30%</h1>
                <p className="text-[14px] text-white">Same day resolution</p>
              </div>
            </div>
          </div>
        </div>

        <div className="box-1">
          <div className="childBox-1"></div>
        </div>
        <div className="box-2">
          <div className="childBox-2"></div>
        </div>
        <div className="hidden md:block">
          <div className="middleBox-1">
            <div></div>
          </div>
          <div className="middleBox-2"></div>
          <div className="middleBox-3">
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPrideService;
