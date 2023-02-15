import React from "react";
import { BiSearchAlt, BiBell } from "react-icons/bi";
import { BsCalendar4Week } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { IoPeopleOutline, IoChevronForward } from "react-icons/io5";

const App = () => {
  return (
    <div className=" flex">
      {/* Side bar start */}
      <aside className=" w-0 md:w-2/5 lg:w-[400px] h-screen bg-gray-900 flex flex-col">
        {/* dashboard logo */}
        <div className=" p-5">
          <img src="../../public/watermark.png" alt="" className=" w-28" />
        </div>

        {/* dashboard navigation start*/}
        {/* Active State Change bg-color --> bg-gray-800 */}
        <ul className=" flex flex-col items-center space-y-3 mt-5 mx-3 flex-1">
          <li className=" w-[95%] flex items-center gap-3 cursor-pointer rounded-md py-2 pl-5 text-white bg-primary hover:bg-gray-700">
            <AiOutlineHome className=" text-2xl " />
            <p className=" text-lg font-semibold tracking-wider">Dashboard</p>
          </li>
          <li className=" w-[95%] flex items-center gap-3 cursor-pointer rounded-md py-2 pl-5 text-white  hover:bg-gray-700">
            <IoPeopleOutline className=" text-2xl" />
            <p className="text-lg font-bold tracking-wider">Team</p>
          </li>
        </ul>
        {/* dashboard navigation end*/}

        <div className="py-3 px-5 m-5 bg-slate-700 rounded-lg">
          <div className=" flex items-center gap-3">
            <div className=" w-14 h-14 rounded-full bg-slate-300"></div>
            <div className="">
              <h1 className=" font-bold text-slate-100">User Name</h1>
              <p className=" text-slate-300 text-sm">View Profile</p>
            </div>
          </div>
        </div>
      </aside>
      {/* Side bar end*/}

      {/* Content */}
      <div className=" w-full h-screen bg-slate-200">
        {/* Content Header start*/}
        <div className="bg-slate-100 py-4 flex justify-between items-center shadow-md">
          <div className="py-4"></div>
          <div className="  w-96 px-3 flex items-center border border-gray-400 rounded shadow-md">
            <BiSearchAlt className=" text-2xl text-slate-700" />
            <input
              type="text"
              placeholder="Search..."
              className=" outline-none bg-transparent w-full py-2 ml-2 text-black font-semibold tracking-wide placeholder:text-gray-800 placeholder:font-medium"
            />
          </div>
          <div className="text-2xl flex items-center gap-5 mr-5">
            <BiBell className=" " />
            <BsCalendar4Week />
            <button className=" py-1 px-3 text-base font-semibold rounded border-2 border-primary transition hover:bg-primary hover:text-slate-100">
              Sign out
            </button>
          </div>
        </div>
        {/* Content Header end*/}

        {/* Breadcrumbs */}
        <div className=" flex items-center cursor-pointer p-2 m-2 rounded-md">
          <div className=" capitalize font-semibold text-slate-800 flex items-center hover:text-primary">
            <AiOutlineHome className=" text-lg mr-2" />
            dashboard
          </div>
          <IoChevronForward className=" text-2xl text-slate-800 inline mx-3" />
          <div className=" capitalize font-semibold text-gray-500 bg-slate-300 p-2 px-3 rounded-full">
            team
          </div>
        </div>
        {/* Breadcrumbs */}
      </div>
    </div>
  );
};

export default App;
