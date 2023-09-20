import React from "react";
import { FaStar } from "react-icons/fa6";
import { MdPeopleAlt, MdAcUnit } from "react-icons/md";
import { GiGearStickPattern, GiCarDoor } from "react-icons/gi";

function SearchResult(props) {
  const filteredResults = props.filteredResults;

  return (
    <div className="grid gap-4 grid-cols-1 lg:grid-cols-3 lg:gap-24 m-16">
      {filteredResults.map((vehicle) => {
        return (
          <div className="shadow-xl rounded-md" key={vehicle.id}>
            <div className="m-6">
              <img src={vehicle.img} alt={vehicle.title} />

              <div className="flex items-center">
                <FaStar className="text-yellow-400" />
                <p className="mx-2 opacity-75">
                  {vehicle.Rating} ({vehicle.ReviewCount}+ Reviews)
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
                  <span className="text-gray-600">{vehicle.airConditionn}</span>
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
  );
}

export default SearchResult;
