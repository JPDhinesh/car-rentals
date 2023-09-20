import React from "react";
import bmw from "../Images/bmw.png";
import { BsFillClockFill } from "react-icons/bs";

const ChooseUs = () => {
  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-2 border p-12 bg-violet-200"
      id="choose-us"
    >
      <img src={bmw} />
      <div className="my-6 lg:my-10 mx-10 lg:mx-40">
        <h1 className="lg:text-2xl font-semibold text-violet-800 uppercase py-4 text-xl text-center lg:text-left">
          why choose us
        </h1>
        <p className="text-xs lg:text-xl">
          Experience excellence with our rental deals
        </p>
        <div className="flex items-center lg:m-6 m-4">
          <div className="p-2 shadow-md bg-white rounded-lg mr-4">
            <BsFillClockFill className="text-blue-600 lg:text-2xl text-xl" />
          </div>
          <p className="text-sm lg:text-xl">Flexible Rental periods</p>
        </div>
        <div className="flex items-center lg:m-6 m-4">
          <div className="p-2 shadow-md bg-white rounded-lg mr-4">
            <BsFillClockFill className="text-blue-600 lg:text-2xl text-xl" />
          </div>
          <p className="text-sm lg:text-xl">Competitive Pricing</p>
        </div>
        <div className="flex items-center lg:m-6 m-4">
          <div className="p-2 shadow-md bg-white rounded-lg mr-4">
            <BsFillClockFill className="text-blue-600 lg:text-2xl text-xl" />
          </div>
          <p className="text-sm lg:text-xl">Driver Available</p>
        </div>
        <div className="flex items-center lg:m-6 m-4">
          <div className="p-2 shadow-md bg-white rounded-lg mr-4">
            <BsFillClockFill className="text-blue-600 lg:text-2xl text-xl" />
          </div>
          <p className="text-sm lg:text-xl">24/7 Customer Service</p>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
