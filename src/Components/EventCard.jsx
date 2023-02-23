import { Button } from "@mantine/core";
import { BsArrowRight } from "react-icons/bs";
import React from "react";
import category from '../assets/category.svg'

const EventCard = () => {
  return (
    <div className="py-20 flex flex-col lg:flex-row justify-center items-center gap-5">
      <div className="w-[90%] md:w-[570px] py-8 px-2 md:px-4 bg-[#f6f6f6] rounded-lg shadow-md shadow-primary-og ">
        <div className=" flex gap-3">
          <div className="">
            <header className="">
              <h1 className="w-16 h-[87px] font-bold text-3xl text-primary-og  text-center border-r-2 border-primary-100 pr-3">
                26 <span className=" font-semibold">Jun</span>
              </h1>
            </header>
          </div>
          <div className=" flex flex-col items-start md:items-end">
            <div className=" flex flex-col items-start">
              <header>
                <h1 className=" text-2xl font-md">
                  Supplementary Education of What You Need
                </h1>
              </header>
              <div className="w-full mt-1 mb-4 flex flex-col items-start md:flex-row md:justify-between md:items-center">
                <h5 className=" text-gray-700  text-sm md:tet-base">
                  <span className=" text-primary-og">Start Date-</span> 26 June
                  2023
                </h5>

                <h5 className=" text-gray-700 text-sm md:text-base">
                  <span className=" text-primary-og">End Date-</span> 26 June
                  2023
                </h5>
              </div>
              <div>
                <ul className=" flex flex-col gap-2 text-gray-700 text-sm md:text-base">
                  <li className=" flex gap-3">
                    <img src={category} alt="" />
                    <p>Event Category- Creative</p>
                  </li>
                  <li className=" flex gap-3">
                    <img src={category} alt="" />
                    <p>Event Status- Upcoming</p>
                  </li>
                  <li className=" flex gap-3">
                    <img src={category} alt="" />
                    <p>Instructor Name- Mg Mg</p>
                  </li>
                  <li className=" flex gap-3">
                    <img src={category} alt="" />
                    <p>Time- 8:00pm to 6:30pm (GMT 6:30)</p>
                  </li>
                  <li className=" flex gap-3">
                    <img src={category} alt="" />
                    <p>Event Ticket- Free</p>
                  </li>
                </ul>
              </div>
            </div>
            <Button
                size="lg"
                rightIcon={<BsArrowRight fontSize="24px" />}
                className=" bg-primary-og hover:bg-primary-800 mt-5 "
              >
                View Details
            </Button>
          </div>
          
        </div>
      </div>
      
    </div>
  );
};

export default EventCard;
