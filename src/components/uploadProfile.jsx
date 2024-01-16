// Sample React component for image upload
import React, { useState } from 'react';


const UploadProfile = () => {
    const { VITE_baseServerUrl } = import.meta.env;
    const [image, setImage] = useState(null);

    const handleFileChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('image', image);

        try {
            const response = await fetch(`${VITE_baseServerUrl}/api/upload`, {
                method: 'POST',
                body: formData,
            });

            // Handle the response from the server
            console.log("image uploaded successfully");

        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    return (
        <div className='form-box'>
            <input type="file" onChange={handleFileChange} className='text-white' />
            <button className="text-white border-blue-500 border-2 p-2 rounded-lg hover:bg-blue-500" onClick={handleUpload}>Upload Image</button>
        </div>
    );
};

export default UploadProfile;
