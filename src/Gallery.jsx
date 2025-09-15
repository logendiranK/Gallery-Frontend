import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Styles/Artwork.css";

const Artwork = () => {
  const [artworks, setArtworks] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const API_URL = import.meta.env?.VITE_API_URL || 'https://gallery-backend-1jic.onrender.com';
  const handleImageError = (bad) => {
    setArtworks((prev) => prev.filter((a) => (a._id && bad._id) ? a._id !== bad._id : a.url !== bad.url));
    if (selectedImage === bad.url) setSelectedImage(null);
  };

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axios.get(`${API_URL}/images`);
        setArtworks(res.data);
      } catch (err) {
        console.error("Failed to fetch images", err);
      }
    };
    fetchImages();
  }, []);

  const openFullscreen = (url) => setSelectedImage(url);
  const closeFullscreen = () => setSelectedImage(null);

  return (
    <section className="gallery-section">
      <h1 className="gallery-heading">🎨 Artworks</h1>
      <div className="artwork-grid">
        {artworks.map((art) => (
          <div key={art._id || art.url} className="artwork-card">
            <img
              src={art.url}
              alt={art.title}
              className="artwork-image"
              onClick={() => openFullscreen(art.url)}
              onError={() => handleImageError(art)}
            />
            <div className="artwork-title">
              {(art.name && art.name.replace(/\.[^/.]+$/, "")) || "Untitled"}
            </div>
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className="fullscreen-overlay" onClick={closeFullscreen}>
          <img
            src={selectedImage}
            alt="Fullscreen Artwork"
            className="fullscreen-image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Artwork;
