import React, { useState, useContext } from "react";
import { Context } from "../../Context";
import { useNavigate } from "react-router-dom";
import { LeftSection } from "../../components/leftSection/leftSection";
import { RightSection } from "../../components/rightSection/rightSection";
import UploadProfile from "../../components/uploadProfile";


const Signup = () => {
  const navigate = useNavigate();
  const { postUser } = useContext(Context);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { name, email, password, confirmPassword } = userData;
  // console.log(userData, "This is user data ");
  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="flex">
      <LeftSection>
        <section className="form-box">
          <h2 className="text-white text-3xl font-bold mb-6 text-center">
            Sign Up
          </h2>



          <div className=" mx-auto  p-6 max-w-xl user-box">
            <div className="mb-5">
              <UploadProfile></UploadProfile>
            </div>


            <form>
              <div className="mb-4">
                <label className="block text-white font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline capitalize"
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-white font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  name="email"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-white font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  name="password"
                  onChange={handleChange}
                  required
                />
              </div>
              {/* <div className="mb-6">
                <label
                  className="block font-bold mb-2"
                  htmlFor="confirmPassword"
                >
                  Confirm Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  name="confirmPasword"
                  onChange={handleChange}
                  required
                />
              </div> */}
              <div className="flex justify-between items-center ">
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded "
                  onClick={() => {
                    postUser(userData);
                    navigate("/");
                  }}
                >
                  Sign Up
                </button>

                <p
                  className="text-green-400 font-bold cursor-pointer"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Back to login
                </p>
              </div>
            </form>
          </div>

        </section>

      </LeftSection>
      <RightSection></RightSection>
    </main>

  );
};

export default Signup;
