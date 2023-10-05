import axios from "axios";
import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Hackathon from "./Hackathon";
import Pagination from "../../HakatonNav/Pagination";
import { FaPlus } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import Title from "../../Share/Title/Title";
const Hackathons = () => {
  const [hackathons, setHackathons] = useState([]);
  const [axiosSecure] = useAxiosSecure();
  const [handleLocation, setHandleLocation] = useState(null);
  const [handleCategory, setHandleCategory] = useState(null);
  const [handleSearch, setHandleSearch] = useState(null);
  const [prize, setPrize] = useState(null);
  const [search, setSearch] = useState();
  const [isBtnOpen, setIsBtnOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);
  const lastPageIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPageIndex - postsPerPage;
  const currentPosts = hackathons.slice(firstPostIndex, lastPageIndex);
  const maxFirstPrize = Math.max(
    ...hackathons.map((hackathon) => hackathon.first_prize)
  );
  const minFirstPrize = Math.min(
    ...hackathons.map((hackathon) => hackathon.first_prize)
  );
  const manageSearch = () => {
    setSearch(handleSearch);
  };

  useEffect(() => {
    fetchHackathons();
  }, [search, handleLocation, handleCategory, prize]);

  const fetchHackathons = async () => {
    try {
      const response = await axiosSecure.get("/hackathons", {
        params: {
          title: search,
          location: handleLocation,
          category: handleCategory,
          minFirstPrize: prize,
          maxFirstPrize: prize,
        },
      });
      setHackathons(response.data);
    } catch (error) {
      console.error("Error fetching hackathons:", error);
    }
  };
  console.log("Get Hackathons", hackathons);
  return (
    <div className="py-20">
      <div className="containers">
        <div className="mb-16">
          <Title
            title="Hackathon Collection"
            subTitle=" Best Hackathons "
          ></Title>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          {currentPosts.map((hackathon, index) => (
            <Hackathon key={index} hackathon={hackathon} />
          ))}
        </div>

        {hackathons.length > postsPerPage && (
          <Pagination
            totalPosts={hackathons.length}
            postsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          ></Pagination>
        )}
      </div>
      {isBtnOpen && (
        <div className="fixed left-0 top-1/2 z-10">
          <button
            onClick={() => setIsBtnOpen(!isBtnOpen)}
            className="btn btn-warnings text-white text-center "
          >
            <FaPlus />
          </button>
        </div>
      )}
      {!isBtnOpen && (
        <div
          className={`fixed top-[80px] left-0 w-2/8 pt-8 p-4 h-screen bg-[#060E26] border-e border-[#6C5D12] z-10  ${
            !isBtnOpen ? "opened" : "closed"
          }`}
        >
          <div className="relative">
            <div>
              <div className="flex items-center">
                <input
                  type="text"
                  name="title"
                  placeholder="Search"
                  className="ps-3 py-3 outline-none border-none"
                  onChange={(e) => setHandleSearch(e.target.value)}
                />
                <button
                  onClick={manageSearch}
                  className="px-3 py-3 btn btn-warnings text-center text-white rounded-sm"
                >
                  Search
                </button>
              </div>

              <div className="w-full mx-auto  flex items-start mt-8">
                <div className="w-full">
                  <h1 className="text-gray-500 mb-2 text-sm">Prize Money</h1>
                  <input
                    type="range"
                    min={minFirstPrize}
                    max={maxFirstPrize}
                    value={prize}
                    onChange={(e) => setPrize(e.target.value)}
                    className="w-full"
                  />
                </div>
                <p className="text-gray-500 text-xs mt-2">{prize}</p>
              </div>

              <div className="mt-8">
                <h1 className="text-gray-500 text-sm mb-2">Prize Money</h1>
                <select
                  className="bg-white text-black border-none focus:outline-none py-1 w-full cursor-pointer"
                  onChange={(e) => setHandleLocation(e.target.value)}
                >
                  <option
                    className="bg-[#060E26] text-gray-500"
                    selected
                    disabled
                    value=""
                  >
                    Location
                  </option>
                  <option className="bg-[#060E26] text-gray-500" value="online">
                    Online
                  </option>
                  <option className="bg-[#060E26] text-gray-500" value="onsite">
                    Onsite
                  </option>
                </select>
              </div>

              <div className="mt-8">
                <h1 className="text-gray-500 text-sm mb-2">Category</h1>
                <select
                  className="bg-white text-black border-none focus:outline-none py-1 w-full cursor-pointer"
                  onChange={(e) => setHandleCategory(e.target.value)}
                >
                  <option
                    className="bg-[#060E26] text-gray-500"
                    selected
                    disabled
                    value=""
                  >
                    Category
                  </option>
                  <option
                    className="bg-[#060E26] text-gray-500"
                    value="upcoming"
                  >
                    Upcoming
                  </option>
                  <option
                    className="bg-[#060E26] text-gray-500"
                    value="running"
                  >
                    Running
                  </option>
                  <option className="bg-[#060E26] text-gray-500" value="new">
                    New
                  </option>
                </select>
              </div>
            </div>
            <div className="absolute right-[-5%] top-[-30px]">
              <button
                onClick={() => setIsBtnOpen(true)}
                className="text-red-700 text-[25px]"
              >
                <MdOutlineCancel />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hackathons;
