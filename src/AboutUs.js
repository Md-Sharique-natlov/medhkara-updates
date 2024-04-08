// AboutUs.js

import React from "react";
import "./AboutUs.css"; // Ensure you create this CSS file to style your components
import about from "./assests/about.jpeg";

const AboutUs = () => {
  return (
    <div className="about-container">
      <img src={about} alt="About Us" className="about-image" />
      <div className="about-text">
        <h1 className="about-title">ABOUT US</h1>
        <hr style={{ width: "30%", margin: "auto" }}></hr> <br></br>
        <p className="about-content">
          Medhkara Consultancy LLP is a registered company based out of New
          Delhi. It’s a joint venture of AirMshlSanjeevKapoor and MrsAnjuKapoor,
          who are both seasoned professionals in their respective domains and
          bring a wealth of experience and expertise to the organization. In the
          dynamic landscape of business, where adaptability and strategic
          thinking are paramount, Medhkara emerges as a beacon of experience and
          leadership. A proven track record and commitment to excellence make us
          an invaluable addition to any organization seeking to elevate its
          operations, enhance its work culture, and navigate the complexities of
          today's competitive landscape. Medhkara Consultancy LLP is honored to
          have Air Marshal SanjeevKapoor as a distinguished partner, and we are
          confident that his wealth of experience will contribute significantly
          to our shared journey of success and growth.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
