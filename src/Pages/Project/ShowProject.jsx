import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";

const ShowProject = ({ project }) => {
  const { image, name, description, technology, teamMember } = project;

  // Initialize a state variable to track whether to show more or less of the description
  const [showMore, setShowMore] = useState(false);

  // Function to toggle between showing more or less of the description
  const toggleDescription = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="shadow-2xl">
      <div className="h-[250px] w-full">
        <img className="w-full h-full" src={image} alt="" />
      </div>

      <div className="p-4 text-white mt-4">
        <p className="text-md font-semibold text-white mb-2">
          Name: <span className="text-md text-gray-200 ms-2">{name}</span>
        </p>
        <p>
          <span className="font-semibold text-md">About: </span>
          {showMore ? (
            <span className="text-sm text-gray-500">{description}</span>
          ) : (
            <span className="text-sm text-gray-500">
              {description.split(" ").slice(0, 5).join(" ")}{" "}
              {description.split(" ").length > 20 && (
                <button
                  className="text-blue-500  cursor-pointer"
                  onClick={toggleDescription}
                >
                  Show More
                </button>
              )}
            </span>
          )}
        </p>
        <br />
        <p>
          <span className="font-semibold text-md">Tech:</span>{" "}
          <span className="ms-2 text-sm text-gray-500">{technology}</span>{" "}
        </p>
        <br />
        <p className="flex items-start gap-1">
          <span className="font-semibold text-md">
            {" "}
            <FaUserAlt />{" "}
          </span>{" "}
          <span className="ms-2">{teamMember}</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default ShowProject;
