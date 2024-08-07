import React, { useRef, useState, useEffect } from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";
import hero from "../../assets/Hero01.mp4";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user1 from "../../assets/bears-with-benefits.png";
import user2 from "../../assets/vodafone.png";
import user3 from "../../assets/realchemistry.png";
import user4 from "../../assets/groupm.png";
import user5 from "../../assets/audi.png";

const Hero = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 5; // Update this to match the number of slides
  const slider1 = useRef(null);

  const togglePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const slideForward = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const slideBackward = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      slideForward();
    }, 3000); // Adjust the interval as needed (3000ms = 3 seconds)
    return () => clearInterval(interval);
  }, []);

  return (
    <>
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
          <button className="btn1">
            Explore More <img src={dark_arrow} alt="" />
          </button>
        </div>
        <div className="video-container">
          <video
            ref={videoRef}
            className="gallery-video"
            width="700"
            height="600"
            autoPlay
            muted={isMuted}
            loop
          >
            <source src={hero} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="slider1">
        <ul
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          ref={slider1}
        >
          <li>
            <div className="user-info1">
              <img src={user1} alt="User 1" />
            </div>
          </li>
          <li>
            <div className="user-info1">
              <img src={user2} alt="User 2" />
            </div>
          </li>
          <li>
            <div className="user-info1">
              <img src={user3} alt="User 3" />
            </div>
          </li>
          <li>
            <div className="user-info1">
              <img src={user4} alt="User 4" />
            </div>
          </li>
          <li>
            <div className="user-info1">
              <img src={user5} alt="User 5" />
            </div>
          </li>
        </ul>
        <div className="custom-controls">
          <button onClick={slideBackward}>
            <img src={back_icon} alt="Back" />
          </button>
          <button onClick={slideForward}>
            <img src={next_icon} alt="Next" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
