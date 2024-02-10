import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LeftSection } from "../../components/leftSection/leftSection";
import { RightSection } from "../../components/rightSection/rightSection";
import UploadProfile from "../../components/uploadProfile";
import { userSignup } from "../../controllers/userController";


const Signup = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    contact_no: "",
  });
  const { name, email, password, contact_no } = userData;

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    const res = await userSignup(userData)
    if (res) {
      navigate('/login')
    }
  }


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
            <div>
              <div className="flex justify-between">
                <div className="field-box">
                  <input type="name" name="name" value={name} required="" onChange={handleChange} />
                  <label>Name</label>
                </div>
                <div className="field-box">
                  <input type="email" name="email" value={email} required="" onChange={handleChange} />
                  <label>Email</label>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="field-box">
                  <input type="number" name="contact_no" value={contact_no} required="" onChange={handleChange} />
                  <label>Contact Number</label>
                </div>
                <div className="field-box">
                  <input type="password" name="password" value={password} required="" onChange={handleChange} />
                  <label>Password</label>
                </div>
              </div>

              <div className="flex justify-between items-center ">
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded "
                  onClick={handleSubmit}
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
            </div>
          </div>

        </section>

      </LeftSection>
      <RightSection></RightSection>
    </main>

  );
};

export default Signup;
