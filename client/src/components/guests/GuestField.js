import React from "react";

export default ({ input, label, type, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        {...input}
        style={{ marginBottom: "5px", color: "#F7E7CE" }}
        type={type}
      />
      <div className="red-text" style={{ marginBottom: "10px" }} type={type}>
        {touched && error}
      </div>
    </div>
  );
};
