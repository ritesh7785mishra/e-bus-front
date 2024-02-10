import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import "./App.css";
import Login from "./screens/Login/Login";
import Welcome from "./screens/Welcome/Welcome";

import ConductorLogin from "./screens/ConductorLogin/Conductor";
import AdminPanel from "./screens/AdminPanel/AdminPanel";
import AddConductor from "./screens/AddConductor/AddConductor";
import ConductorHome from "./screens/ConductorHome/ConductorHome";
import Home from "./screens/Home/Home";
import Signup from "./screens/Signup/Signup";
import Loader from "./components/Loader";
import { Context } from "./Context";
import AddAdmin from "./screens/AdminPanel/AddAdmin";
import ConductorTable from "./screens/ConductorTable/ConductorTable";
import AdminTable from "./screens/AdminTable/AdminTable";
// import Navbar from "./components/navbar";
// import ProfileUpload from "./components/uploadComponent";

function App() {
  const { loader } = useContext(Context);

  return (
    <RecoilRoot>

      <div className="app-container">
        <Loader isLoading={loader} />
        <Router>
          <Routes>
            <Route exact path="/" element={<Welcome />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/user-panel" element={<Home />} />
            <Route exact path="/conductor-login" element={<ConductorLogin />} />
            <Route exact path="/admin-panel" element={<AdminPanel />} />
            <Route exact path="/admin-table" element={<AdminTable />} />
            <Route exact path="/conductor-table" element={<ConductorTable />} />
            <Route exact path="/add-admin" element={<AddAdmin />} />
            <Route exact path="/add-conductor" element={<AddConductor />} />
            <Route exact path="/conductor-panel" element={<ConductorHome />} />

          </Routes>
        </Router>
      </div>
    </RecoilRoot>
  );
}

export default App;
