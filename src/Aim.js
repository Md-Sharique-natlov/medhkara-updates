import React from "react";
import "./Aim.css";
import aim from "./assests/aim.png";

const Aim = () => {
  return (
    <div className="aim-container">
      <img src={aim} alt="Aim Image" className="aim-image" />
      <div className="aim-text">
        <h1 className="aim-title">AIM</h1>
        <hr style={{ width: "30%", margin: "auto" }}></hr> <br></br>
        <p className="aim-content">
          The Medhkara Consultancy is an emerging firm with the aim to provide
          qualitative services in the fields of Aviation, Defence, Human
          Resource Management, and Education. We offer a platform where
          tailor-made solutions by a team of visionary people, acting as
          consultants and advisors, lead to unprecedented growth.
        </p>
      </div>
    </div>
  );
};

export default Aim;
