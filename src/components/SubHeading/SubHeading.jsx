import React from "react";
import "./SubHeading.css";
import { images } from "../../constants";

const SubHeading = ({ title }) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <p className="p__cormorant">{title}</p>
      <img src={images.spoon} alt="spoon" className="spon_img" />
    </div>
  );
};

export default SubHeading;
