import React from "react";
import "./Vision.css";
import visionImage from "./assests/vision.jpg";

const Vision = () => {
  return (
    <div className="vision-container">
      <img src={visionImage} alt="Vision Image" className="vision-image" />
      <div className="vision-text">
        <h1 className="vision-titl  e">VISION</h1>
        <hr style={{ width: "30%", margin: "auto" }}></hr> <br></br>
        <p className="vision-content">
          Medhkara's vision with values encompasses the company's aspirations to
          provide information and guidance for further stepping up of our
          customer's businesses and to become a globally admired company.
        </p>
      </div>
    </div>
  );
};

export default Vision;
