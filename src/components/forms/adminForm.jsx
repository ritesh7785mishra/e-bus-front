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
        role: ["admin"]
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission logic (e.g., send data to the server)
        console.log("Admin Data Submitted:", adminData);

        // Update role array based on superAdmin checkbox
        const updatedRole = superAdmin ? [...role, "superAdmin"] : role;

        // Update adminData with the new role array
        const updatedAdminData = { ...adminData, role: updatedRole };

        // Send updated adminData to the server
        await addAdmin(updatedAdminData);

        // Reset role to ["admin"] for the next form submission
        setAdminData({ ...updatedAdminData, role: ["admin"] });

        // Navigate to admin-panel
        navigate('/admin-panel');
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
                            <input type="checkbox" name="superAdmin" checked={superAdmin} id="super-admin" onChange={handleAdminChange} />
                            <label htmlFor="super-admin" className='ml-4'>Mark Super Admin</label>
                        </div>
                    </div>
                </div>
                <div className="flex justify-evenly items-center ">
                    <button
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded "
                        onClick={handleSubmit}
                    >
                        Add Admin
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
        </section>
    );
};

export default AdminForm;
