import React from "react";
import "./Hero.css";
import dark_arrow from '../../assets/dark-arrow.png';

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Revolutionizing Influencer Marketing with AI</h1>
        <p>
          Welcome to Neticor, the forefront of innovation in influencer
          marketing. Our AI-based platform transforms how brands connect with
          influencers and engage with their target audience. At Neticor, we
          believe in harnessing the power of artificial intelligence to create
          seamless, efficient, and impactful marketing solutions. Here’s what
          sets us apart:
        </p>
        <button className="btn">Explore More <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  );
};

export default Hero;
