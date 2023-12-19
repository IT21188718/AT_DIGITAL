import React from "react";
import BannerImage from "../Assets/Banner1.jpeg";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
  <div>
      <Navbar />
      <img src={BannerImage} alt="" />
     
        
          <h1 className="primary-heading">
          We crush your competitors, goals, and sales records - without the B.S.
          </h1>
          
          <button className="secondary-button">
          Get free consultation <FiArrowRight />{" "}
          </button>
      
    </div>
  );
};

export default Home;
