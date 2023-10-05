import React, { useEffect, useState } from "react";
import Title from "../../Share/Title/Title";
import Aos from "aos";
const Organizer = () => {
  const [organizer, setOrganizer] = useState([]);
  useEffect(() => {
    fetch("Organizer.json")
      .then((res) => res.json())
      .then((data) => setOrganizer(data));
  }, []);
  console.log(organizer);
  return (
    <div
      className=" py-20 bg-[#00061A]"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-duration="2000"
    >
      <div className="containers">
        <div className="mb-16">
          <Title title="Organizers" subTitle="Featured Organizers"></Title>
        </div>
        <div className="w-full makeCenter">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-24">
            {organizer.map((organize, index) => (
              <div key={index}>
                <img src={organize.image} alt="Organizer" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Organizer;
