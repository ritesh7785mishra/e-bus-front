import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../Context";
import Blobs from "../../components/Blobs";
import { LeftSection } from "../../components/leftSection/leftSection";
import { RightSection } from "../../components/rightSection/rightSection";


const AddConductor = () => {
  const { handleAddConductor, fetchConductors } = useContext(Context);
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  const [userProperties, setUserProperties] = useState({
    phoneNumber: "",
    email: "",
    aadharNumber: "",
    conductorId: "",
    address: "",

    district: "",
    state: "",

    country: "India",
    password: "",
    confirmPassword: "",
    profileImage: "img/users/default.jpeg",
  });

  const {
    phoneNumber,
    email,
    aadharNumber,
    conductorId,
    address,

    district,
    state,

    country,
    password,
    confirmPassword,
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
        <div className="form-box mt-10 ">
          <div className=" mx-auto  p-6 max-w-xl">
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
          <form>
            {/* <ProfileUpload /> */}
            <div className="form-row">
              <div className="form-group col-md-4">
                <label className="text-gray-100" htmlFor="conductorId">Conductor ID</label>
                <input type="text" className="form-control" id="conductorId" placeholder="Conductor ID" />
              </div>
              <div className="form-group col-md-4">
                <label className="text-gray-100" htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Name" />
              </div>
              <div className="form-group col-md-4">
                <label className="text-gray-100" htmlFor="inputEmail4">Email</label>
                <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
              </div>
              <div className="form-group col-md-4">
                <label className="text-gray-100" htmlFor="inputPassword4">Password</label>
                <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
              </div>
              <div className="form-group col-md-4">
                <label className="text-gray-100" htmlFor="contact_no">Contact Number</label>
                <input type="text" className="form-control" id="contact_no" placeholder="1234567890" />
              </div>
              <div className="form-group col-md-4">
                <label className="text-gray-100" htmlFor="aadhar_no">Aadhar Number</label>
                <input type="text" className="form-control" id="aadhar_no" placeholder="Aadhar Number" />
              </div>
            </div>


            <div className="form-row">
              <div className="form-group col-md-4">
                <label className="text-gray-100" htmlFor="inputCity">City</label>
                <input type="text" className="form-control" id="inputCity" placeholder="City" />
              </div>
              <div className="form-group col-md-4">
                <label className="text-gray-100" htmlFor="inputState">State</label>
                <select id="inputState" className="form-control">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>

              <div className="form-group col-md-4">
                <label className="text-gray-100" htmlFor="inputZip">Pin Code</label>
                <input type="text" className="form-control" id="inputZip" placeholder="Pin Code" />
              </div>


            </div>

            <div className="flex justify-center items-center mt-6">
              <button type="submit" className="btn btn-primary ">Add Conductor</button>
            </div>


          </form>
        </div>

      </LeftSection>

      <RightSection className="text-white">i am here</RightSection>

    </main>
  );
};

export default AddConductor;
