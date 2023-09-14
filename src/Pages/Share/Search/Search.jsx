import { GoSearch, GoArrowRight,GoCodescan } from "react-icons/go";
import { CiLocationOn } from "react-icons/ci";
import { BsSliders2Vertical } from "react-icons/bs";

const Search = () => {
    return (
        <div className="w-full p-4">
      <div className="bg-[#fff] h-[100px] w-[80vw] mx-auto border border-gray-300 rounded-md flex items-center justify-center">
  
         <form className="h-[50px] w-[75vw] mx-auto  flex justify-between items-center px-2 gap-5">
         <div className="relative w-[220px] border">
            <input
              type="text"
              className="bg-white  border px-2 py-1 pl-10 focus:outline-none focus:ring-blue-300 focus:border-blue-300 focus:border-2 transition-colors duration-300 w-full"
              placeholder="Search Hackathon"
            />
            <GoSearch
              size={20}
              className="absolute top-2 left-1 text-rose-600"
            />
          </div>

          <div className="relative w-[220px]">
            <select className="bg-white text-black border-none focus:outline-none px-2 py-1 pl-10 w-full" name="" id="">
            <option  selected disabled value="">Location</option>
              <option  value="">New</option>
              <option  value="">Upcoming</option>
            </select>
            <CiLocationOn size={23} className="absolute top-2 left-1 text-rose-600" />
          </div>
          
          <div className="relative w-[220px]">
            <select className="bg-white text-black border-none focus:outline-none px-2 py-1 pl-10  w-full" name="" id="">
              <option  selected disabled value="">Category</option>
              <option  value="">New</option>
              <option  value="">Upcoming</option>
            </select>
            <GoCodescan size={20} className="absolute top-2 left-1 text-rose-600" />
          </div>
          <div className="flex items-center justify-center gap-1">
            <div className="bg-[#00c1c1] h-8 w-10 rounded-sm flex items-center justify-center cursor-pointer">
              <BsSliders2Vertical color="#fff" className="hover:text-rose-700" />
            </div>
          <button type="submit">
          <div className="bg-[#00c1c1] h-16 w-16 rounded-full flex items-center justify-center cursor-pointer">
              <GoArrowRight color="#fff" size={30} />
            </div>
          </button>
          </div>
         </form>
        </div>
      </div>
    );
};

export default Search;