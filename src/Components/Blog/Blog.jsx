import React from "react";
import "./Blog.css";
import blogVideo1 from "../../assets/blog-Vedio1.mp4";
import blogVideo2 from "../../assets/blog-Vedio2.mp4";
import blogVideo3 from "../../assets/blog-Vedio3.mp4";
import blogVideo4 from "../../assets/blog-Vedio4.mp4";
import white_arrow from "../../assets/white-arrow.png";

const Blog = () => {
  return (
    <div className="blog">
       <div className="gallery">
      <video className="gallery-video" width="400" height="400" controls autoPlay muted loop>
        <source src={blogVideo1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video className="gallery-video" width="400" height="400" controls autoPlay muted loop>
        <source src={blogVideo2} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video className="gallery-video" width="400" height="400" controls autoPlay muted loop>
        <source src={blogVideo3} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video className="gallery-video" width="400" height="400" controls autoPlay muted loop>
        <source src={blogVideo4} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
      <button className="btn dark-btn">
        See More Here <img src={white_arrow} alt="" />
      </button>
    </div>
  );
};

export default Blog;
