import React, { useState } from 'react';
import axios from 'axios';
import './Styles/Admin.css';

function Admin() {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");
  const [imageName, setImageName] = useState("");
  const [progress, setProgress] = useState(0);
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  const resizeImageIfNeeded = (inputFile) => new Promise((resolve, reject) => {
    try {
      const image = new Image();
      const fileReader = new FileReader();

      fileReader.onload = (e) => {
        image.onload = () => {
          const maxDimension = 1600; // keep client upload small for faster network transfer
          let { width, height } = image;

          if (width <= maxDimension && height <= maxDimension) {
            resolve(inputFile); // no resize needed
            return;
          }

          const scale = Math.min(maxDimension / width, maxDimension / height);
          const targetWidth = Math.round(width * scale);
          const targetHeight = Math.round(height * scale);

          const canvas = document.createElement('canvas');
          canvas.width = targetWidth;
          canvas.height = targetHeight;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(image, 0, 0, targetWidth, targetHeight);
          canvas.toBlob((blob) => {
            if (!blob) {
              resolve(inputFile);
              return;
            }
            const resizedFile = new File([blob], inputFile.name.replace(/\.[^.]+$/, '.jpg'), { type: 'image/jpeg' });
            resolve(resizedFile);
          }, 'image/jpeg', 0.85);
        };
        image.src = e.target.result;
      };
      fileReader.onerror = reject;
      fileReader.readAsDataURL(inputFile);
    } catch (err) {
      reject(err);
    }
  });

  const handleUpload = async () => {
    if (!file) {
      alert("Please select an image to upload");
      return;
    }

    setProgress(0);

    try {
      const uploadFile = await resizeImageIfNeeded(file);
      const formData = new FormData();
      formData.append('image', uploadFile);

      const res = await axios.post(`${API_URL}/upload`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
        onUploadProgress: (event) => {
          if (event.total) {
            const percent = Math.round((event.loaded * 100) / event.total);
            setProgress(percent);
          }
        }
      });

      if (!res.data || !res.data.url) {
        throw new Error("Upload failed");
      }

      setUrl(res.data.url);
      setImageName(uploadFile.name);
      setProgress(100);
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
      {progress > 0 && progress < 100 && (
        <p>{`Uploading: ${progress}%`}</p>
      )}


      {imageName && <p><strong>Image Name:</strong> {imageName}</p>}
      {url && <img src={url} alt={imageName} style={{ width: "300px" }} />}
    </div>
  );
}

export default Admin;
