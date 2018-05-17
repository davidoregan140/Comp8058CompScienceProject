import React from "react";
import "./Landing.css";
import banner from "./images/banner.png";

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
