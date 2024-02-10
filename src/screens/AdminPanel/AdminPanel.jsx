import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AdminPanel.css"

import { LeftSection } from "../../components/leftSection/leftSection";
import { RightSection } from "../../components/rightSection/rightSection";

import { getAdmin } from "../../controllers/adminController";
import { useRecoilState } from "recoil";
import { currentAdmin } from "../../store/admin/atom";


const AdminPanel = () => {
  const navigate = useNavigate();


  const [superAdmin, setSuperAdmin] = useState(false)
  const [adminC, setAdminC] = useRecoilState(currentAdmin)




  // const conductors = [
  //   {
  //     id: 1,
  //     name: "John Doe",
  //     mobile: "123-456-7890",
  //   },
  //   {
  //     id: 2,
  //     name: "Jane Smith",
  //     mobile: "987-654-3210",
  //   },
  // ];

  useEffect(() => {
    if (localStorage.getItem("token") == 'undefined') {
      navigate("/login")
    } else {
      async function preSet() {
        const admin = await getAdmin();

        if (admin) {
          setAdminC(admin)

          if (admin.role.includes("superAdmin")) {
            localStorage.setItem("role", "superAdmin")
            setSuperAdmin(true)
          } else {
            localStorage.setItem("role", "admin")
            setSuperAdmin(false)
          }

        } else {
          navigate('/login')
        }
      }
      preSet()
    }
  }, [])



  function handleLogout(e) {
    localStorage.clear();
    setSuperAdmin(false)
    setAdminC({})
    navigate("/login")
  }



  return (
    <main className="flex">

      <LeftSection>
        <div className="justify-center items-center flex mb-10">
          <h1 className="text-white text-3xl">Admin Panel</h1>
        </div>

        <div className="mb-10">


          <div className="btn-container flex flex-col ">
            {superAdmin && <div className="flex justify-evenly mb-10">
              <Link to={"/admin-table"}>
                <button className="btn btn-primary">View Admin Table</button>
              </Link>

              <Link to={"/add-admin"}>
                <button className="btn btn-primary">Add Admin</button>
              </Link>

            </div>}
            <div className="flex justify-evenly mb-10">
              <Link to={"/conductor-table"}>
                <button className="btn btn-primary">View Conductor Table</button>
              </Link>
              <Link to={"/add-conductor"}>
                <button className="btn btn-primary">Add Conductor</button>
              </Link>
            </div>

            <button onClick={handleLogout} className="btn btn-primary">logout</button>
          </div>

        </div>


      </LeftSection>
      <RightSection>

      </RightSection>
    </main>

  );
};

export default AdminPanel;
