import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../Context";
import { RightSection } from "../../components/rightSection/rightSection";
import { LeftSection } from "../../components/leftSection/leftSection";
import "./Login.css"
import MapComp from "../../components/MapComp";

const Login = () => {
  const navigate = useNavigate();
  const { userLogin, getUserProfile, setLoader } = useContext(Context);

  useEffect(() => {
    let authToken = localStorage.getItem("authToken");
    if (authToken) {
      getUserProfile();
      navigate("/user-panel");
    }
  }, []);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [showPass, setShowPass] = useState(false);
  const [warning, setWarning] = useState(false);
  const { email, password } = loginData;
  const handleChange = (e) => {
    setWarning(false);
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const validation = async () => {
    if (email == "" || password == "") {
      setWarning(true);
    } else if (
      email == "ritesh7785mishra@gmail.com" &&
      password == "@123Ritesh"
    ) {
      navigate("/admin-Panel");
    } else {
      await userLogin(loginData).then(() => {
        let authToken = localStorage.getItem("authToken");
        if (authToken) {
          navigate("/user-panel");
        } else {
          setLoader(false);
          navigate("/login");
          alert("Not a valid user");
        }
      });
    }
  };

  return (
    <main className="flex">

      <LeftSection>
        <MapComp></MapComp>
      </LeftSection>
      {/* <Blobs /> */}
      <RightSection>
        {/* <div className=" w-full sm:w-5/6 md:w-4/6 lg:w-3/6  mx-auto"> */}
        <div className="login-box  mx-auto mt-20">
          <h2>Login</h2>
          <form>
            <div className="user-box">
              <input type="text" name="" required="" />
              <label>Email</label>
            </div>
            <div className="user-box">
              <input type="password" name="" required="" />
              <label>Password</label>
            </div>
            <a href="/user-panel">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Login
            </a>
          </form>
        </div>
      </RightSection>

    </main>
  );
};

export default Login;
