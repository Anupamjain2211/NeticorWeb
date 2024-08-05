import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" />
      </div>
      <div className="about-right">
        <h3>ABOUT NETICOR</h3>
        <h2>Boost Your Competitive Edge with Neticor
        </h2>
        <p>
          Our sophisticated AI algorithms analyze vast datasets to identify the
          perfect influencers for your brand. We consider factors like audience
          demographics, engagement rates, and content alignment to ensure
          optimal matches that resonate with your target market.
        </p>
        <p>
          Neticor provides deep analytics and real-time insights, enabling you
          to track the performance of your influencer campaigns. Our AI tools
          assess key metrics such as reach, engagement, and ROI, helping you
          make data-driven decisions.
        </p>
        <p>
          Every brand is unique, and so are our solutions. Neticor’s AI tailors
          strategies to your specific goals, whether you aim to increase brand
          awareness, drive sales, or boost engagement. Join the future of
          influencer marketing with Neticor, where AI meets creativity to
          deliver unparalleled results. Empower your brand with the intelligence
          and efficiency of Neticor’s AI-based influencer marketing solutions.
        </p>
       
      </div>
    </div>
  );
};

export default About;
