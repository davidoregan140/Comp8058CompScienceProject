/***************************************************************************************
 *    Based on/Adapted from
 *    Title: Udemy Tutorials
 *    Author: Grider, S
 *    Date: 2018
 *    Code version: 1.0
 *    Availability: https://www.udemy.com/node-with-react-fullstack-web-development/learn/v4/content
 *
 ***************************************************************************************/

import React from "react";

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} style={{ marginBottom: "5px", color: "#F7E7CE" }} />
      <div className="red-text" style={{ marginBottom: "10px" }}>
        {touched && error}
      </div>
    </div>
  );
};
