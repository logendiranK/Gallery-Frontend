import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Styles/Artwork.css";

const Artwork = () => {
  const [artworks, setArtworks] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axios.get("https://gallery-backend-1jic.onrender.com/images");
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
        {artworks.map((art, idx) => (
          <div key={idx} className="artwork-card">
            <img
              src={art.url}
              alt={art.title}
              className="artwork-image"
              onClick={() => openFullscreen(art.url)}
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
