import React, { useEffect, useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./AdminPanel.css"
import { Context } from "../../Context";
import { LeftSection } from "../../components/leftSection/leftSection";
import { RightSection } from "../../components/rightSection/rightSection";
import AdminTable from "../../components/tables/AdminTable";
import { adminApi } from "../../api/adminApi";
import { getAdmin, getAllAdmins } from "../../controllers/adminController";

const AdminPanel = () => {


  const navigate = useNavigate();
  const [adminArray, setAdminArray] = useState([])
  const {
    allConductors,
    fetchConductors,
    handleConductorDelete,
    setLoader,
    loader,
  } = useContext(Context);

  // useEffect(() => {
  //   fetchConductors();
  // }, []);

  if (allConductors) {
    setLoader(false);
  }

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
    async function getAdminData() {
      const admin = await getAdmin();
      if (admin) {
        const allAdmin = await getAllAdmins()
        setAdminArray(allAdmin)
      } else {
        navigate('/login')
      }
    }
    getAdminData()
  }, [])

  function handleLogout(e) {
    localStorage.clear();
    navigate("/login")
  }

  return (
    <main className="flex">

      <LeftSection>
        <div className="justify-center items-center flex mb-10">
          <h1 className="text-white text-3xl">Admin Panel</h1>
        </div>

        <div className="flex justify-around mb-10">
          <button className="btn btn-primary">View Admin Table</button>
          <button className="btn btn-primary">View Conductor Table</button>
          <button onClick={handleLogout} className="btn btn-primary">logout</button>
        </div>

        <AdminTable
          allAdmin={adminArray}
        />
        {/* <div className=" rounded-lg overflow-hidden shadow-lg p-6">
          <div>
            <h2 className="text-3xl font-bold mb-10 text-white text-center">
              Conductor Information
            </h2>

            <div className="flex  justify-between px-10 mb-10">
              <div className="flex items-center ">
                <button
                  className="py-2 px-4 bg-green-500 hover:bg-green-700 text-white rounded-lg ml-5"
                  onClick={() => {
                    navigate("/add-conductor");
                  }}
                >
                  Add Conductor
                </button>
              </div>

              <div className="flex items-center">
                <p className="text-white">Back To Login Page</p>
                <button
                  className="py-2 px-4 bg-green-500 hover:bg-green-700 text-white rounded-lg ml-5"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Login Page
                </button>
              </div>
            </div>
          </div>
          <table className="table-auto w-full text-center">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 text-white">Conductor ID</th>
                <th className="px-4 py-2 text-white">Conductor Name</th>
                <th className="px-4 py-2 text-white">Mobile Number</th>
                <th className="px-4 py-2 text-white">Actions</th>
              </tr>
            </thead>
            <tbody>
              {allConductors.length > 0 &&
                allConductors.map((conductor) => (
                  <tr key={conductor.id}>
                    <td className="border px-4 py-2 text-white">
                      {conductor.properties.email}
                    </td>
                    <td className="border px-4 py-2 text-white">
                      {conductor.name}
                    </td>
                    <td className="border px-4 py-2 text-white">
                      {conductor.properties.phoneNumber}
                    </td>
                    <td className="border px-4 py-2 flex text-white justify-evenly">
                      <button
                        className="bg-gray-400  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                        disabled
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-3"
                        onClick={() => {
                          handleConductorDelete(conductor.id);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div> */}


      </LeftSection>
      <RightSection>

      </RightSection>
    </main>

  );
};

export default AdminPanel;
