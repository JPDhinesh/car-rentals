import React from "react";
import { MdCall, MdEmail, MdLocationOn } from "react-icons/md";
import { BsTwitter, BsFacebook, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="flex flex-col justify-between px-16 py-8 mt-28 bg-violet-200 lg:flex-row">
      <div className="lg:w-64">
        <h1 className="text-lg font-semibold py-1">About Us</h1>
        <p className="text-justify">
          We are leading car rental service commited to delivering exceptional
          experience on the road. Your journey convenient, comfortable and
          memorable.
        </p>
      </div>
      <div className="my-2">
        <h1 className="text-lg font-semibold py-1">Follow Us</h1>
        <div className="flex">
          <BsTwitter className="text-xl m-1" />
          <BsFacebook className="text-xl m-1" />
          <BsInstagram className="text-xl m-1" />
        </div>
      </div>
      <div className="my-2">
        <h1 className="text-lg font-semibold py-1">Quick Links</h1>
        <li>Rental Docks</li>
        <li>Why Choose Us</li>
        <li>Privacy Links</li>
        <li>FAQ's</li>
      </div>
      <div className="my-2">
        <h1 className="text-lg font-semibold py-1">Address</h1>
        <div className="flex items-center my-1">
          <MdLocationOn />
          <p className="mx-1">Marathahalli, Bengaluru</p>
        </div>
        <div className="flex items-center my-1">
          <MdCall />
          <p className="mx-1">+919629269599</p>
        </div>
        <div className="flex items-center my-1">
          <MdEmail />
          <p className="mx-1">rentalcars@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
