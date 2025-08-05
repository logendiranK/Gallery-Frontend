import React, { useState } from 'react';
import axios from 'axios';
import './Styles/Admin.css';

function Admin() {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");
  const [imageName, setImageName] = useState("");

  const handleUpload = async () => {
    if (!file) {
      alert("Please select an image to upload");
      return;
    }

    const formData = new FormData();
    formData.append('image', file); 
    try {
      const res = await axios.post('http://localhost:5000/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      if (!res.data || !res.data.url) {
        throw new Error("Upload failed");
      }

      setUrl(res.data.url);
      setImageName(file.name);
      alert("Image uploaded!");
    } catch (error) {
      console.error("Axios Upload Error:", error.response?.data || error.message);
    }
  };

  return (
    <div className='admin-container'>
      <input
        type="file"
        onChange={(e) => {
          setFile(e.target.files[0]);
          setImageName(e.target.files[0]?.name || "");
        }}
      />
      <button onClick={handleUpload} className='admin-btn'>Upload</button>


      {imageName && <p><strong>Image Name:</strong> {imageName}</p>}
      {url && <img src={url} alt={imageName} style={{ width: "300px" }} />}
    </div>
  );
}

export default Admin;
