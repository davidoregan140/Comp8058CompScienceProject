import React from "react";
import "./Landing.css";
import banner from "./images/banner.png";

//could turn this into a carousel with an array of images from cloudinary
const homePage = {
  mainImage:
    "http://res.cloudinary.com/wedmgmgt/image/upload/w6izj97ukusghbmzlpt3.jpg"
};

const Landing = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 className="title">Wedding Management Tool</h1>
      <p className="subtitle">
        Plan your wedding like you would a Professional Project
      </p>
      <img className="materialboxed" width="100%" src={banner} alt="" />
    </div>
  );
};

export default Landing;
