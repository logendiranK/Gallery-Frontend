import React from "react";
import "./Styles/About.css";
import profileImage from "./assets/profile.jpg";

const About = () => {
  return (
    <section className="about-container">
      <div className="header">
        <h1>About Me</h1>
      </div>
      <div className="about-pic">
        <img src={profileImage} alt="Profile" className="profile-image" />
        <div class="about-content">
          <h2>Hi, I'm Logendiran</h2>
          <p>
            I'm a pencil sketch artist with a deep passion for art. I began
            sketching during my school days and have been refining my skills
            ever since.
          </p>
          <p>
            Currently, I'm pursuing my education while continuing my artistic
            journey.
          </p>
          <p>
            I offer free pencil sketch drawings for online customers — feel free
            to reach out if you're interested!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
