import React from "react";
import "./Welcome.css";
import Blobs from "../../components/blobs";
import BottomDesign from "../../components/BottomDesign";

const Welcome = () => {
  return (
    <div className="welcome-page">
      <div className="welcome-text absolute top-64 ml-12 p-4">
        <h1 className="welcome-heading text-white text-6xl mb-6">
          Ride
          <div className="welcome-heading-dot w-3 h-3 bg-green-500 rounded-full inline-block ml-2"></div>
        </h1>
        <p className="welcome-subtext text-white">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui,
          consequatur?
        </p>
      </div>
      <button className="get-started-btn text-white  absolute bottom-20 left-12 p-3 px-8 rounded-2xl cursor-pointer font-bold tracking-wider">
        Get Started
      </button>
      <BottomDesign />
    </div>
  );
};

export default Welcome;
