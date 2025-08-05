import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../src/paint.json';
import { Link } from 'react-router-dom';
import './Styles/Home.css';

function Home() {
  return (
    <div className="welcome-container">
      <div className="welcome-animation">
        <Lottie animationData={animationData} loop={true} />
      </div>
      <div className="welcome-content">
        <h1 className="fade-in-title">Welcome to Logendiran's Art Gallery</h1>
        <p className="fade-in-subtitle">Where creativity meets the canvas</p>
        <Link to="/artwork" className="explore-button">
          Explore the Gallery
        </Link>
      </div>
    </div>
  );
}

export default Home;
