import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RightSection } from "../../components/rightSection/rightSection";
import { LeftSection } from "../../components/leftSection/leftSection";
import MapComp from "../../components/MapComp";
import "./Login.css"
import { adminLogin } from "../../controllers/adminController";
import { conductorLogin } from "../../controllers/conductorController";

const Login = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  let [selectedRole, setSelectedRole] = useState("user")

  console.log("selectedRole", selectedRole);

  const { email, password } = loginData;

  const handleLogin = async () => {
    if (selectedRole === "admin") {

      await adminLogin(loginData).then(() => {
        setSelectedRole("")
        navigate('/admin-panel')
      })

    } else if (selectedRole == "conductor") {
      debugger;
      await conductorLogin(loginData).then(() => {
        setSelectedRole("")
        navigate('/conductor-panel')
      })
    } else {

    }
  }

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value)
  }



  return (
    <main className="flex">

      <LeftSection>
        <MapComp></MapComp>
      </LeftSection>
      <RightSection>

        <div className="form-box  mx-auto mt-20">
          <h2>Login</h2>
          <form>
            <div className="field-box">
              <input type="text" name="email" value={email} required="" onChange={handleChange} />
              <label htmlFor="email">Email</label>
            </div>
            <div className="field-box">
              <input type="password" name="password" onChange={handleChange} value={password} required="" />
              <label>Password</label>
            </div>

            <div className=" flex justify-center">
              <select value={selectedRole}
                className="form-select" aria-label="Default select example"
                onChange={handleRoleChange}
              >

                <option value="user">User</option>
                <option value="admin">Admin</option>
                <option value="conductor">Conductor</option>
              </select>

            </div>
            <div className="flex justify-between">
              <button onClick={handleLogin}>
                <a href="#">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Login
                </a>
              </button>
              <button onClick={handleLogin}>
                <a href="/signup">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Signup
                </a>
              </button>
            </div>


          </form>
        </div>
      </RightSection>

    </main>
  );
};

export default Login;
