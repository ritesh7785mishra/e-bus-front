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

function App() {
  return (
    <div className="app-container">
      <Blobs />
      {/* <Login /> */}
      {/* <Welcome />  */}
      {/* <Signup /> */}
      {/* <ConductorLogin /> */}
      {/* <AdminPanel /> */}
      {/* <AddConductor /> */}
      {/* <ConductorHome /> */}
      <Home />
    </div>
  );
}

export default App;
