import React from "react";
import {
  BsGeoAltFill,
  BsFillCalendar2DateFill,
  BsCarFrontFill,
} from "react-icons/bs";
import {
  PiArrowFatLinesRightFill,
  PiArrowFatLineDownBold,
} from "react-icons/pi";

const Guide = () => {
  return (
    <div className="m-16 lg:m-28" id="how-works">
      <h1 className="uppercase text-xl lg:text-3xl text-center font-bold text-blue-800">
        how it works
      </h1>
      <p className="text-center text-sm lg:text-xl m-4">
        Rent a car with the following 3 steps
      </p>
      <div className="flex flex-col lg:flex-row justify-center items-center borde lg:p-4 p-2 lg:my-12 my-6">
        <div className="flex flex-col items-center lg:mx-20 mx-10">
          <div className="lg:w-28 lg:h-28 w-12 h-12 shadow-lg flex justify-center items-center rounded-lg">
            <BsGeoAltFill className="lg:text-5xl text-2xl text-violet-800" />
          </div>
          <h1 className="lg:text-xl text-md font-semibold mt-2">
            Choose location
          </h1>
          <p className="text-center lg:text-sm text-xs">
            Select the location <br />
            for pick up
          </p>
        </div>
        <PiArrowFatLinesRightFill className="text-violet-600 text-3xl hidden lg:block" />
        <PiArrowFatLineDownBold className="text-violet-600 text-2xl my-4 lg:hidden" />
        <div className="flex flex-col items-center lg:mx-20 mx-10">
          <div className="lg:w-28 lg:h-28 w-12 h-12 shadow-lg flex justify-center items-center bg-violet-900 rounded-lg">
            <BsFillCalendar2DateFill className="lg:text-5xl text-2xl text-white" />
          </div>
          <h1 className="lg:text-xl text-md font-semibold mt-2">
            Pick up date
          </h1>
          <p className="text-center lg:text-sm text-xs">
            Select the date of <br />
            your booking
          </p>
        </div>
        <PiArrowFatLinesRightFill className="text-violet-600 text-3xl hidden lg:block" />
        <PiArrowFatLineDownBold className="text-violet-600 text-2xl my-4 lg:hidden" />
        <div className="flex flex-col items-center lg:mx-20 mx-10">
          <div className="lg:w-28 lg:h-28 w-12 h-12 shadow-lg flex justify-center items-center rounded-lg">
            <BsCarFrontFill className="lg:text-5xl text-2xl text-violet-800" />
          </div>
          <h1 className="lg:text-xl text-md text-md font-semibold mt-2">
            Book your car
          </h1>
          <p className="text-center lg:text-sm text-xs">
            Select the car you <br />
            to pick up
          </p>
        </div>
      </div>
    </div>
  );
};

export default Guide;
