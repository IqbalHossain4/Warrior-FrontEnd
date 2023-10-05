import Title from "../../Share/Title/Title";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../../assets/categoryImage/cate-1 (1).png";
import img2 from "../../../assets/categoryImage/cate-1 (2).png";
import img3 from "../../../assets/categoryImage/cate-1 (3).png";
import img4 from "../../../assets/categoryImage/cate-1 (4).png";
import img5 from "../../../assets/categoryImage/cate-1 (5).png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const CategorySlider = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div className="py-24 relative">
      <div className="bg_header  w-screen overflow-hidden">
        <h1 className="xl:text-[300px] lg:text-[220px] md:text-[150px] text-[80px]">
          WARRIOR
        </h1>
      </div>
      <div className="containers ">
        <div className="mb-16">
          <Title title={"Category"} subTitle={"Browse by Category"} />
        </div>
        <div>
          <Swiper
            onSwiper={setSwiperRef}
            slidesPerView={5}
            centeredSlides={false}
            spaceBetween={20}
            pagination={{
              type: "fraction",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                className="transform hover:scale-110 transition-transform"
                src={img1}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="transform hover:scale-110 transition-transform"
                src={img2}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="transform hover:scale-110 transition-transform"
                src={img3}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="transform hover:scale-110 transition-transform"
                src={img4}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="transform hover:scale-110 transition-transform"
                src={img5}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="transform hover:scale-110 transition-transform"
                src={img1}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="transform hover:scale-110 transition-transform"
                src={img2}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="transform hover:scale-110 transition-transform"
                src={img3}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="transform hover:scale-110 transition-transform"
                src={img4}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="transform hover:scale-110 transition-transform"
                src={img5}
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default CategorySlider;
