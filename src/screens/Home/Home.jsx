import React from "react";
import MapComp from "../../components/MapComp";

const Home = () => {
  return (
    <div className="absolute top-0 w-full h-full p-4 lg:flex lg:justify-between lg:flex-row-reverse">
      <div className="max-w-3xl mx-auto lg:mx-0 lg:w-4/12 lg:mr-8">
        <div className="flex items-center justify-between mb-10 mt-5">
          <h1 className="text-4xl text-white text-center font-semibold ">
            Welcome,
            <span className="text-3xl text-green-500 tracking-wider block text-left sm:inline-block sm:ml-4 ">
              Ritesh
            </span>
          </h1>

          <button className="text-white font-mono text-xl bg-red-600 hover:bg-red-700 active:bg-red-700 py-1 px-4 rounded ">
            Logout
          </button>
        </div>

        <div>
          <label
            htmlFor="routes"
            className="block mb-4  font-medium text-gray-900 dark:text-gray-400"
          >
            Select Route
          </label>
          <select
            id="routes"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-green-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5"
          >
            <option defaultValue>Choose Your Route</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>

        <div className="flex mb-10 justify-around text-white text-lg">
          <button className="rounded-xl bg-green-500 hover:bg-green-700 active:bg-green-700 border-green-800  px-4 py-1 border-2 ">
            Selected Buses
          </button>
          <button className="rounded-xl bg-green-500 hover:bg-green-700 active:bg-green-700 border-green-800  px-4 py-1 border-2 ">
            All Buses
          </button>
        </div>
      </div>

      <div className="map-component rounded-xl h-4/5 lg:h-[calc(100vh-30px)] lg:w-7/12  ">
        <MapComp />
      </div>
    </div>
  );
};

export default Home;
