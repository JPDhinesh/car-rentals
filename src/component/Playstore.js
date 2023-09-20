import React from "react";
import car from "../Images/benz.png";
import { FaApple, FaGooglePlay } from "react-icons/fa6";

const Playstore = () => {
  return (
    <div className="bg-violet-200 flex justify-between lg:py-24 py-8 overflow-hidden">
      <div className="lg:px-20 lg:py-14 px-8 py-7">
        <h1 className="lg:text-7xl capitalize leading-snug text-2xl font-semibold lg:font-medium w-2/3 lg:w-auto">
          Find, book and <br></br>rent a car in easy steps
        </h1>
        <p className="lg:text-xl text-sm lg:mt-10 text-justify w-4/5 lg:w-auto">
          At any time your desire, you can safely acquire a car without
          experiencing any form of hassle
        </p>
        <div className="flex items-center lg:justify-start mt-16">
          <a
            href="https://apps.apple.com"
            className="p-1 mr-2 bg-black text-white rounded-md lg:w-56 w-36 flex justify-start items-center"
          >
            <FaApple className="lg:text-4xl lg:m-3 m-1 text-lg" />
            <span className="text-xs lg:text-lg ml-1">
              Download on the
              <br />
              <h1 className="lg:text-2xl text-sm font-bold mx-1">
                Apple Store
              </h1>
            </span>
          </a>
          <a
            href="https://play.google.com"
            className="p-1 bg-black text-white rounded-md lg:w-56 w-36 flex justify-start items-center"
          >
            <FaGooglePlay className="lg:text-4xl lg:m-3 m-1 text-lg" />
            <span className="text-xs lg:text-lg ml-1">
              Download on the <br />
              <h1 className="lg:text-2xl text-sm font-bold mx-1">
                Google Play
              </h1>
            </span>
          </a>
        </div>
      </div>
      <img src={car} className="w-3/5 hidden lg:block" />
    </div>
  );
};

export default Playstore;
