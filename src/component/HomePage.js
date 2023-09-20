import React, { Fragment } from "react";
import Playstore from "./Playstore";
import Searchbar from "./Searchbar";
import BrandLogo from "./BrandLogo";
import Guide from "./Guide";
import ChooseUs from "./ChooseUs";
import Vehicle from "./Vehicle";
import Subscribe from "./Subscribe";
import Footer from "./Footer";
import vehicleAPI from "./VehicleAPI";

const HomePage = () => {
  return (
    <>
      <Playstore />
      <Searchbar data={vehicleAPI} />
      <BrandLogo />
      <Guide />
      <ChooseUs />
      <Vehicle data={vehicleAPI} />
      <Subscribe />
      <Footer />
    </>
  );
};

export default HomePage;
