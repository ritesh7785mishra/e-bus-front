import React, { useState } from 'react';
import UploadProfile from '../uploadProfile';

const AdminForm = () => {
    const [adminData, setAdminData] = useState({
        profile_img: "/img/defaultProfile.jpg",
        email: "",
        name: "",
        contact_no: "",
        aadhar_no: "",
        created_by: "",
        role: ["admin"],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAdminData({
            ...adminData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic (e.g., send data to the server)
        console.log("Admin Data Submitted:", adminData);
    };

    return (
        <section className='flex flex-col items-center form-box gap-10 '>
            <UploadProfile></UploadProfile>
            <div className="form-row flex ">
                <div className="form-group col-md-6 ">
                    <label className="text-gray-100" htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Name" />
                </div>
                <div className="form-group col-md-6">
                    <label className="text-gray-100" htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Email" />
                </div>
                <div className="form-group col-md-6">
                    <label className="text-gray-100" htmlFor="contact_no">Contact Number</label>
                    <input type="number" className="form-control" id="contact_no" placeholder="123456789" />
                </div>


                <div className="form-group col-md-6">
                    <label className="text-gray-100" htmlFor="contact_no">Contact Number</label>
                    <input type="text" className="form-control" id="contact_no" placeholder="1234567890" />
                </div>
                <div className="form-group col-md-6">
                    <label className="text-gray-100" htmlFor="aadhar_no">Aadhar Number</label>
                    <input type="text" className="form-control" id="aadhar_no" placeholder="Aadhar Number" />
                </div>
                <div className="form-group col-md-6">
                    <label className="text-gray-100" htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="************" />
                </div>
                <div className="form-group col-md-6 ">
                    <div class="form-check ">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label text-white" for="flexCheckDefault">
                            Mark as superadmin
                        </label>
                    </div>
                </div>



            </div >
            <div className='flex'>
                <button className='btn btn-success'>Add Admin</button>
            </div>
        </section>


    );
};

export default AdminForm;
