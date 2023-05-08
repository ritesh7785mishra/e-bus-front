import React from "react";

const ConductorHome = () => {
  return (
    <div className="max-w-xl mx-auto m-4 p-4 ">
      <h1 className="text-4xl text-white text-center font-semibold mb-10">
        Welcome,
        <span className="text-4xl text-green-500 tracking-wider ml-4">
          Ritesh
        </span>
      </h1>

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

      <div className="flex flex-col mb-5">
        <button className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 self-center mb-7">
          Start Sharing Location
        </button>
        <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 self-center">
          Stop Sharing Location
        </button>
      </div>

      <div className="flex mb-5 justify-evenly">
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0">
            Full
          </span>
        </button>

        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0">
            Standing Space
          </span>
        </button>

        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0">
            Empty
          </span>
        </button>
      </div>

      <div className="mb-5 flex">
        <button className=" py-2 px-4 text-white bg-red-500 hover:bg-red-700 rounded-md font-mono font-bold tracking-wider ml-auto">
          Logout
        </button>
      </div>
    </div>
  );
};

export default ConductorHome;
