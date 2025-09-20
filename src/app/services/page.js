import React from "react";
import { CiFaceSmile, CiGift, CiClock2, CiStar } from "react-icons/ci";
import { IoGlassesOutline, IoDiamond } from "react-icons/io5";
import OurServices from "../components/OurServices";
import FeaturedServices from "../components/FeaturedServices";

const Services = () => {
  return (
    <div className="">
      <div className="bg-black">
        <h2 className="text-5xl text-white text-center py-16 my-8 w-full">
          What We Do
        </h2>
      </div>
      <div className="text-center my-4 max-w-7xl mx-auto">
        <h3 className="text-4xl font-semibold">
          The <span className="text-[#FE3E01]">Event Management</span>{" "}
          Specialists
        </h3>
        <p className="text-lg w-3/4 font-normal mx-auto my-6">
          From Wedding Functions to Birthday Parties or Corporate Events to
          Musical Functions, We offer full range of Events Management Services
          that scale to your needs & budget.
        </p>
      </div>
      <OurServices></OurServices>
      <FeaturedServices></FeaturedServices>
    </div>
  );
};

export default Services;
