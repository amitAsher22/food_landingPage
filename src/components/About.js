import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

function About() {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="imgj" />
      </div>

      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="imgbg" />
      </div>

      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Food Is An Important Part oF A Balances Diet
        </h1>
        <p className="primary-text">
          t is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy.
        </p>
        <p className="primary-text">
          t is a long established fact that a reader will be distracted by the
          readable content .
        </p>

        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill />
            Watch Video
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
