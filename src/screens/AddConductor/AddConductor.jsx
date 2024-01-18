import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../Context";
import Blobs from "../../components/Blobs";
import { LeftSection } from "../../components/leftSection/leftSection";
import { RightSection } from "../../components/rightSection/rightSection";
import UploadProfile from "../../components/uploadProfile";


const AddConductor = () => {
  const { handleAddConductor, fetchConductors } = useContext(Context);
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  const [userProperties, setUserProperties] = useState({
    profile_img: "/assets/profile_img.jpg",
    name: "",
    govt_id: "",
    email: "",
    contact_no: "",
    aadhar_no: "",
    password: "",

  });

  const {
    profile_img,
    name,
    email,
    govt_id,
    password,
    contact_no,
    aadhar_no
  } = userProperties;

  function handleChange(e) {
    setUserProperties({
      ...userProperties,
      [e.target.name]: e.target.value,
    });
  }

  function handleNameChange(e) {
    setUserName(e.target.value);
  }

  async function handleSubmit() {
    let userObj = { name: userName, properties: { ...userProperties } };
    handleAddConductor(userObj)
      .then(() => fetchConductors())
      .then(() => {
        navigate("/admin-panel");
      });
  }

  return (
    <main className="flex">

      <LeftSection >
        <div className="form-box">
          <div className=" mx-auto max-w-xl">
            <div className="flex items-center mb-10">
              <h2 className="text-white text-4xl font-bold mb-6 text-center">
                Add Conductor
              </h2>
              <p
                className="text-green-400 font-bold cursor-pointer ml-auto"
                onClick={() => {
                  navigate("/admin-panel");
                }}
              >
                Back to Admin Panel
              </p>
            </div>
          </div>
          <form className=" mx-auto">
            <div className="mb-10 max-w-2xl mx-auto">
              <UploadProfile></UploadProfile>
            </div>

            <div className="flex justify-evenly gap-2">
              <div className="field-box">
                <input type="name" name="name" value={name} required="" onChange={handleChange} />
                <label>Name</label>
              </div>
              <div className="field-box">
                <input type="email" name="email" value={email} required="" onChange={handleChange} />
                <label>Email</label>
              </div>
            </div>
            <div className="flex justify-evenly">
              <div className="field-box">
                <input type="number" name="contact_no" value={contact_no} required="" onChange={handleChange} />
                <label>Contact Number</label>
              </div>
              <div className="field-box">
                <input type="password" name="password" value={password} required="" onChange={handleChange} />
                <label>Password</label>
              </div>
            </div>
            <div className="flex justify-evenly">
              <div className="field-box">
                <input type="number" name="aadhar_no" value={aadhar_no} required="" onChange={handleChange} />
                <label>Aadhar Number</label>
              </div>
              <div className="field-box">
                <input type="text" name="govt_id" value={govt_id} required="" onChange={handleChange} />
                <label>Government ID</label>
              </div>

            </div>

            <div className="flex justify-evenly items-center ">
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

      </LeftSection>

      <RightSection className="text-white">i am here</RightSection>

    </main>
  );
};

export default AddConductor;
