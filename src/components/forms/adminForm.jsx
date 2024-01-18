import React, { useState } from 'react';
import UploadProfile from '../uploadProfile';
import { addAdmin } from '../../controllers/adminController';
import { useNavigate } from 'react-router-dom';

const AdminForm = () => {
    const navigate = useNavigate();
    const [adminData, setAdminData] = useState({
        profile_img: "/img/defaultProfile.jpg",
        email: "",
        name: "",
        contact_no: "",
        aadhar_no: "",
        created_by: "me",
        password: "",
        role: ["admin"],
    });

    const [superAdmin, setSuperAdmin] = useState(false)

    const { email, name, contact_no, aadhar_no, password, role } = adminData
    const handleChange = (e) => {
        const { name, value } = e.target;
        setAdminData({
            ...adminData,
            [name]: value,
        });
    };

    const handleAdminChange = () => {
        setSuperAdmin(!superAdmin)
    }
    console.log(superAdmin);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission logic (e.g., send data to the server)
        console.log("Admin Data Submitted:", adminData);
        if (superAdmin) {
            adminData.role.push("superAdmin")
        } else {
            adminData.role.push("admin")
        }
        await addAdmin(adminData)
        adminData.role = ["admin"]
        navigate('/login')
    };

    return (
        <section className='flex flex-col form-box'>
            <div className='mx-auto mb-10'>
                <UploadProfile></UploadProfile>
            </div>

            <form className="flex flex-col ">
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
                    <div className=" flex flex-col text-blue-500">
                        <div>

                            <input type="radio" name="superAdmin" checked={superAdmin} id="super-admin" onClick={handleAdminChange} />
                            <label id="super-admin" className='ml-4'>Mark Super Admin</label>
                        </div>

                    </div>

                </div>


                <div className="flex justify-evenly items-center ">
                    <button
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded "
                        onClick={handleSubmit}
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
            <div className='flex justify-center items-center mt-10'>
                <button className='btn btn-success'>Add Admin</button>
            </div>
        </section>


    );
};

export default AdminForm;
