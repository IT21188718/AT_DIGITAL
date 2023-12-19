import React from "react";
import AboutBackgroundImage from "../Assets/image 1.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const Work = () => {
  return (
    <div className="about-section-container">
     
      <div className="about-section-text-container">
        <h1 className="primary-heading">
        Digital Strategy Consulting
        </h1>
        <p className="primary-text">
        Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.
        </p>
        
        <div className="about-buttons-container">
          <button className="secondary-button">LEARN MORE</button>
          
        </div>
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
    </div>
  );
};

export default Work;
