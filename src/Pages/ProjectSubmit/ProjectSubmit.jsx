import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const ProjectSubmit = () => {
  const [projectName, setProjectName] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [selectedTechnology, setSelectedTechnology] = useState("");
  const [file, setFile] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
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
  } = useLoaderData();

  const handleFileUpload = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    // You can access form data from the state variables: projectName, selectedOption, projectDescription, selectedTechnology, and file
    // Add your submission logic here
  };
  return (
    <div className="my-24">
      <div className="containers overflow-hidden mx-auto p-6 rounded-lg shadow-lg inset-shadow bg-[#060E26] ">
        <h2 className="text-2xl text-white font-bold text-center mb-16">
          Submit Your Project
        </h2>
        <div className="relative z-10 md:flex items-start justify-between gap-5 ">
          <form onSubmit={handleSubmit}>
            <div className="mb-8">
              <input
                type="text"
                id="projectName"
                className="w-full px-4 py-2 border border-x-0 border-t-0 outline-none rounded-lg  focus:border-blue-300 bg-black text-white"
                value={projectName}
                placeholder=" Project Name"
                onChange={(e) => setProjectName(e.target.value)}
                required
              />
            </div>
            <div className="my-8">
              <select
                id="selectOption"
                className="w-full px-4 py-2 border border-x-0 border-t-0 outline-none rounded-lg  focus:border-blue-300 bg-black text-gray-500"
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
                required
              >
                <option value=""> Select Theme</option>
                <option value={theme[0].title}>{theme[0].title}</option>
                <option value={theme[1].title}>{theme[1].title}</option>
                <option value={theme[2].title}>{theme[2].title}</option>
              </select>
            </div>
            <div className="mb-4">
              <textarea
                id="projectDescription"
                className="w-full px-4 py-2 border border-x-0 border-t-0 outline-none rounded-lg  focus:border-blue-300 bg-black text-white"
                value={projectDescription}
                placeholder="Project Description"
                onChange={(e) => setProjectDescription(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="my-8">
              <input
                type="text"
                id="selectedTechnology"
                className="w-full px-4 py-2 border border-x-0 border-t-0 outline-none rounded-lg  focus:border-blue-300 bg-black text-white"
                value={selectedTechnology}
                placeholder="Built in"
                onChange={(e) => setSelectedTechnology(e.target.value)}
                required
              />
            </div>

            <div className="mb-8">
              <input
                type="text"
                id="selectedTechnology"
                className="w-full px-4 py-2 border border-x-0 border-t-0 outline-none rounded-lg  focus:border-blue-300 bg-black text-white"
                value={selectedTechnology}
                placeholder="Repository Link"
                onChange={(e) => setSelectedTechnology(e.target.value)}
                required
              />
            </div>
            <div className="mb-8">
              <input
                type="text"
                id="selectedTechnology"
                className="w-full px-4 py-2 border border-x-0 border-t-0 outline-none rounded-lg  focus:border-blue-300 bg-black text-white"
                value={selectedTechnology}
                placeholder="Demo Link"
                onChange={(e) => setSelectedTechnology(e.target.value)}
                required
              />
            </div>

            <div className="mb-8 ">
              <label
                htmlFor="file"
                className="block text-gray-500 font-semibold"
              >
                Upload File
              </label>
              <input
                type="file"
                id="file"
                className="w-full "
                onChange={handleFileUpload}
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                required
              />
            </div>
            <div className="flex items-center gap-2  mb-8">
              <input
                type="checkbox"
                name=""
                id=""
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)} // Toggle the checkbox status
              />
              <p className="text-xs text-gray-500">
                I accept that no teammates (including the team leader) can be
                removed from this team after the submission has been made.
              </p>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className={`${
                  isChecked
                    ? "btn btn-warning "
                    : "bg-gray-300 cursor-not-allowed"
                } text-white font-semibold py-3 px-6 rounded-full focus:outline-none focus:ring focus:ring-blue-300`}
                disabled={!isChecked}
              >
                Submit
              </button>
            </div>
          </form>
          <div>
            <h3 className="text-xl font-bold text-white text-center mb-4">
              Mandatory information
            </h3>
            <ol>
              <li className="mb-2 text-md text-gray-500 font-[400]">
                Project title
              </li>
              <li className="mb-2 text-md text-gray-500 font-[400]">Theme</li>
              <li className="mb-2 text-md text-gray-500 font-[400]">
                Presentation
              </li>
              <li className="mb-2 text-md text-gray-500 font-[400]">
                Built in
              </li>
              <li className="mb-2 text-md text-gray-500 font-[400]">
                Repository link
              </li>
              <li className="mb-2 text-md text-gray-500 font-[400]">
                Demo link
              </li>
              <li className="mb-2 text-md text-gray-500 font-[400]">
                Upload File
              </li>
            </ol>
            <div className="absolute z-[-1] bottom-[-10%] rotate-[16deg] right-[-28%]">
              <div className="w-[750px] h-[860px] rounded-full bg-color"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSubmit;
