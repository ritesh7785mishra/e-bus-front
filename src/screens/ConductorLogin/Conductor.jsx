import React from "react";

const ConductorLogin = () => {
  return (
    <section className=" w-3/5  mx-auto ">
      <div className="w-full  px-4 mx-auto pt-6">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6  rounded-lg  border-0">
          <div className="rounded-t mb-0 px-6 py-6">
            <div className="text-center mb-10">
              <h6 className="text-white text-4xl font-bold">Conductor Login</h6>
            </div>
            <div className="btn-wrapper text-center">
              <button
                className="bg-white active:bg-blueGray-50 text-blueGray-700  px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase  inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                type="button"
                disabled
              >
                <img
                  alt="..."
                  className="w-5 mr-1 bg-white"
                  src="https://demos.creative-tim.com/notus-js/assets/img/github.svg"
                />
                Github
              </button>
              <button
                className="bg-white active:bg-blueGray-50 text-blueGray-700  px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase  inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                type="button"
                disabled
              >
                <img
                  alt="..."
                  className="w-5 mr-1 bg-white"
                  src="https://demos.creative-tim.com/notus-js/assets/img/google.svg"
                />
                Google{" "}
              </button>
            </div>
            <hr className="mt-6 border-b-1 border-blueGray-300" />
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <div className="text-white text-center mb-3 font-bold">
              <small>Or sign in with credentials</small>
            </div>
            <form>
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-white text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Email"
                />
              </div>
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-white text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Password"
                />
              </div>
              <div>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    id="customCheckLogin"
                    type="checkbox"
                    className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                  />
                  <span className="ml-2 text-sm font-semibold text-white">
                    Remember me
                  </span>
                </label>
              </div>
              <div className="text-center mt-6">
                <button
                  className="bg-green-600 text-white text-sm font-bold uppercase px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 mx-auto "
                  type="button"
                >
                  Sign In
                </button>
              </div>

              <div className="flex items-center mt-10">
                <p className="text-white ml-auto">Back To User Login</p>
                <button className="bg-green-600 text-white text-sm font-bold uppercase px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ml-4 ">
                  User Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConductorLogin;
