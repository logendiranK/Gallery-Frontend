import React, { useState } from "react";
import './artwork.css';

const images = import.meta.glob('/public/artworks/*.{png,jpg,jpeg}', { eager: true });

const artworks = Object.keys(images).map((path) => {
  const url = path.replace('/public', '');
  const filename = path.split('/').pop().split('.')[0].replace(/[-_]/g, ' ');
  return { title: filename, url };
});

const ArtworkGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openFullscreen = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeFullscreen = () => {
    setSelectedImage(null);
  };

  return (
    <section className="gallery-section">
      <h1 className="gallery-heading">🎨 Artworks</h1>
      <div className="artwork-grid">
        {artworks.map((art, index) => (
          <div key={index} className="artwork-card">
            <img
              src={art.url}
              alt={art.title}
              className="artwork-image"
              onClick={() => openFullscreen(art.url)}
            />
            <div className="artwork-title">{art.title}</div>
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

export default ArtworkGallery;
