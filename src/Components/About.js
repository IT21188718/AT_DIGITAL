import React from "react";
import AboutBackgroundImage from "../Assets/image 2.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <h1 className="primary-heading">
         Web & Mobile App Development
        </h1>
        <p className="primary-text">
        Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.
        </p>
        
      
          <button className="secondary-button">LEARN MORE</button>
          
        
      </div>
    </div>
  );
};

export default About;
