import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { MdPeopleAlt, MdAcUnit } from "react-icons/md";
import { GiGearStickPattern, GiCarDoor } from "react-icons/gi";

const Vehicle = (props) => {
  const initialVisibleCount = 3; // Number of cards to initially display
  const vehicleAPI = props.data;
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);
  const [showAll, setShowAll] = useState(false); // State to track if "See All Vehicles" button is clicked

  const showAllVehicles = () => {
    setVisibleCount(vehicleAPI.length);
    setShowAll(true);
  };

  const showLessVehicles = () => {
    setVisibleCount(initialVisibleCount);
    setShowAll(false);
  };

  return (
    <div className="m-6 lg:mx-20 lg:my-16" id="rental-details">
      <h1 className="text-center lg:text-3xl text-xl uppercase font-semibold text-blue-800 mb-12">
        Vehicles Available
      </h1>
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-3 lg:gap-24">
        {vehicleAPI.slice(0, visibleCount).map((vehicle) => {
          return (
            <div key={vehicle.id} className="shadow-xl rounded-md">
              <div className="m-6">
                <img src={vehicle.img} alt={vehicle.title} />

                <div className="flex items-center">
                  <FaStar className="text-yellow-400" />
                  <p className="mx-2 opacity-75">
                    {vehicle.Rating} ({vehicle.ReviewCount} Reviews)
                  </p>
                </div>
                <h1 className="uppercase font-semibold text-xl my-2">
                  {vehicle.title}
                </h1>
                <div className="flex justify-between my-4">
                  <p className="flex items-center">
                    <MdPeopleAlt className="mx-2 text-xl" />
                    <span className="text-gray-600">
                      {vehicle.passengerCount}
                    </span>
                  </p>
                  <p className="flex items-center justify-start">
                    <GiGearStickPattern className="mx-2 text-xl" />
                    <span className="text-gray-600">{vehicle.gearBox}</span>
                  </p>
                </div>
                <div className="flex justify-between my-3">
                  <p className="flex items-center">
                    <MdAcUnit className="mx-2 text-xl" />
                    <span className="text-gray-600">
                      {vehicle.airConditionn}
                    </span>
                  </p>
                  <p className="flex items-center justify-start relative -left-5">
                    <GiCarDoor className="mx-2 text-xl" />
                    <span className="text-gray-600">{vehicle.doors}</span>
                  </p>
                </div>
                <hr></hr>
                <div className="flex justify-between items-center mt-3">
                  <p className="font-semibold">Rs. {vehicle.price} / hour</p>
                  <button className="px-2 py-1 bg-violet-600 text-white rounded-sm">
                    Rent Now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {showAll ? (
        <div className="flex justify-center m-10">
          <button
            onClick={showLessVehicles}
            className="font-semibold text-blue-900 py-2 px-3 border border-gray-300 rounded-md shadow-md"
          >
            See Less Vehicle
          </button>
        </div>
      ) : (
        <div className="flex justify-center m-10">
          <button
            onClick={showAllVehicles}
            className="font-semibold text-blue-900 py-2 px-3 border border-gray-300 rounded-md shadow-md"
          >
            See All Vehicles
          </button>
        </div>
      )}
    </div>
  );
};

export default Vehicle;
