import { Button } from "@mantine/core";
import { BsArrowRight } from "react-icons/bs";
import React from "react";
import eventCat from "../assets/eventCategory.svg";
import eventStatus from "../assets/eventStatus.svg";
import eventInstructor from "../assets/eventInstructor.svg";
import eventTime from "../assets/eventTime.svg";
import eventTicket from "../assets/eventTicket.svg";

const EventCard = () => {
  return (
    <div className=" w-full h-screen flex flex-col justify-center items-center gap-5">
      <div className="w-[570px] bg-[#f6f6f6] rounded-lg shadow-md shadow-primary-og py-8 px-4">
        <div className=" flex gap-3">
          <div className="">
            <header className="">
              <h1 className="w-16 h-[87px] font-bold text-3xl text-primary-og  text-center border-r-2 border-primary-100 pr-3">
                26 <span className=" font-semibold">Jun</span>
              </h1>
            </header>
          </div>
          <div>
            <div className=" flex flex-col items-start">
              <header>
                <h1 className=" text-2xl font-md">
                  Supplementary Education of What You Need
                </h1>
              </header>
              <div className=" flex justify-between items-center w-full mt-1 mb-4">
                <h5 className=" text-gray-700">
                  <span className=" text-primary-og">Start Date-</span> 26 June
                  2023
                </h5>

                <h5 className=" text-gray-700">
                  <span className=" text-primary-og">End Date-</span> 26 June
                  2023
                </h5>
              </div>
              <div>
                <ul className=" flex flex-col gap-2 text-gray-700">
                  <li className=" flex gap-3">
                    <img src={eventCat} alt="" />
                    <p>Event Category- Creative</p>
                  </li>
                  <li className=" flex gap-3">
                    <img src={eventStatus} alt="" />
                    <p>Event Status- Upcoming</p>
                  </li>
                  <li className=" flex gap-3">
                    <img src={eventInstructor} alt="" />
                    <p>Instructor Name- Mg Mg</p>
                  </li>
                  <li className=" flex gap-3">
                    <img src={eventTime} alt="" />
                    <p>Time- 8:00pm to 6:30pm (GMT 6:30)</p>
                  </li>
                  <li className=" flex gap-3">
                    <img src={eventTicket} alt="" />
                    <p>Event Ticket- Free</p>
                  </li>
                </ul>
              </div>
              <Button
                size="lg"
                rightIcon={<BsArrowRight fontSize="24px" />}
                className=" bg-primary-og self-end hover:bg-primary-800"
              >
                View Details
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[800px] bg-[#f6f6f6] rounded-lg shadow-md shadow-primary-og py-8 px-4">
        <div className=" flex justify-center gap-3">
          <div className="">
            <header className="">
              <h1 className="w-16 h-[87px] font-bold text-3xl text-primary-og  text-center border-r-2 border-primary-100 pr-3">
                26 <span className=" font-semibold">Jun</span>
              </h1>
            </header>
          </div>
          <div className=" w-[60%]">
            <div className=" flex flex-col items-start">
              <header>
                <h1 className=" text-2xl font-md">
                  Supplementary Education of What You Need
                </h1>
              </header>
              <div className=" flex justify-between items-center w-full mt-1 mb-4">
                <h5 className=" text-gray-700">
                  <span className=" text-primary-og">Start Date-</span> 26 June
                  2023
                </h5>

                <h5 className=" text-gray-700">
                  <span className=" text-primary-og">End Date-</span> 26 June
                  2023
                </h5>
              </div>
              <div>
                <ul className=" flex flex-col gap-2 text-gray-700">
                  <li className=" flex gap-3">
                    <img src={eventCat} alt="" />
                    <p>Event Category- Creative</p>
                  </li>
                  <li className=" flex gap-3">
                    <img src={eventStatus} alt="" />
                    <p>Event Status- Upcoming</p>
                  </li>
                  <li className=" flex gap-3">
                    <img src={eventInstructor} alt="" />
                    <p>Instructor Name- Mg Mg</p>
                  </li>
                  <li className=" flex gap-3">
                    <img src={eventTime} alt="" />
                    <p>Time- 8:00pm to 6:30pm (GMT 6:30)</p>
                  </li>
                  <li className=" flex gap-3">
                    <img src={eventTicket} alt="" />
                    <p>Event Ticket- Free</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Button
          size="lg"
          rightIcon={<BsArrowRight fontSize="24px" />}
          className=" bg-primary-og hover:bg-primary-800 block mx-auto mt-5"
        >
          Register Now
        </Button>
      </div>
    </div>
  );
};

export default EventCard;
