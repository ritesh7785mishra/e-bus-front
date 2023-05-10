import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./screens/Login/Login";
import Welcome from "./screens/Welcome/Welcome";
import Blobs from "./components/blobs";
import Signup from "./screens/Signup/Signup";
import ConductorLogin from "./screens/ConductorLogin/Conductor";
import AdminPanel from "./screens/AdminPanel/AdminPanel";
import AddConductor from "./screens/AddConductor/AddConductor";
import ConductorHome from "./screens/ConductorHome/ConductorHome";
import Home from "./screens/Home/Home";
import SignUp from "./screens/Signup/Signup";

function App() {
  return (
    <div className="app-container">
      <Blobs />
      <Router>
        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/user-panel" element={<Home />} />
          <Route exact path="/conductor-login" element={<ConductorLogin />} />
          <Route exact path="/admin-panel" element={<AdminPanel />} />
          <Route exact path="/add-conductor" element={<AddConductor />} />
          <Route exact path="/conductor-panel" element={<ConductorHome />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
