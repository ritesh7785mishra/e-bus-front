import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RightSection } from "../../components/rightSection/rightSection";
import { LeftSection } from "../../components/leftSection/leftSection";
import MapComp from "../../components/MapComp";
import { useRecoilState, useRecoilValue } from "recoil";
import { textState } from "../../store/admin/atom";
import { charCountState } from "../../store/admin/selector";
import "./Login.css"
import InputBox from "../../components/ui/InputBox";
import { adminLogin } from "../../controllers/adminController";

const Login = () => {
  const navigate = useNavigate();
  // const { userLogin, getUserProfile, setLoader } = useContext(Context);

  // useEffect(() => {
  //   // let authToken = localStorage.getItem("authToken");
  //   // if (authToken) {
  //   //   getUserProfile();
  //   //   navigate("/user-panel");
  //   // }
  // }, []);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",

  });

  let [selectedRole, setSelectedRole] = useState("user")

  // const [showPass, setShowPass] = useState(false);
  // const [warning, setWarning] = useState(false);
  const { email, password } = loginData;

  const handleLogin = async () => {
    if (selectedRole = "admin") {
      const token = await adminLogin(loginData)
      localStorage.setItem("token", token)
      localStorage.setItem("role", "admin")
      setSelectedRole("")
      debugger;
      navigate('/admin-panel')
    } else if (selectedRole = "conductor") {

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


  // const validation = async () => {
  //   if (email == "" || password == "") {
  //     setWarning(true);
  //   } else if (
  //     email == "ritesh7785mishra@gmail.com" &&
  //     password == "@123Ritesh"
  //   ) {
  //     navigate("/admin-Panel");
  //   } else {
  //     await userLogin(loginData).then(() => {
  //       let authToken = localStorage.getItem("authToken");
  //       if (authToken) {
  //         navigate("/user-panel");
  //       } else {
  //         setLoader(false);
  //         navigate("/login");
  //         alert("Not a valid user");
  //       }
  //     });
  //   }
  // };

  return (
    <main className="flex">

      <LeftSection>
        <MapComp></MapComp>
      </LeftSection>
      {/* <Blobs /> */}
      <RightSection>
        {/* <div className=" w-full sm:w-5/6 md:w-4/6 lg:w-3/6  mx-auto"> */}
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
            <button onClick={handleLogin}>
              <a href="#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Login
              </a>
            </button>


          </form>
        </div>
      </RightSection>

    </main>
  );
};

export default Login;
