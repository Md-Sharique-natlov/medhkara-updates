// Assuming Vision.js
import React from "react";
import aviation from "./assests/aviation.jpeg";
import Armed_forces_logo from "./assests/Armed_forces_logo.png";
import human_resource from "./assests/human_resource.png";
import education from "./assests/education.webp";
import "./Service.css";

const Service = () => {
  return (
    <div className="service-container">
      <h1 className="service-title">Our Services <hr style={{ width: "20%", margin: "auto" }}></hr></h1>
      <p className="service-content">
        We work to provide services in the field of Aviation, Defence, Human
        Resource Management, and Education fields as consultants and advisors.
      </p>
      <div className="service-section">
        <div className="service-details">
          <h4>HR</h4>
          <hr></hr>
          <p>
            Air Marshal Kapoor has served for nearly 40 years in IAF and has
            vast experience in handling administration matters, which has led to
            improved operational efficiency, cost-cutting, improved supply chain
            management, and logistics planning.
          </p>
          <p>
            He has also handled HR management of the complete IAF, handling
            induction, career planning, and progression of Air warriors. He was
            instrumental in policy formation for improving work efficiency and
            productivity of all personnel.
          </p>
        </div>
        <div className="service-details">
          <h4>Defence</h4>
          <hr></hr>
          <p>
            In his role as DG, Inspection and Safety, Air Marshal Kapoor
            undertook the responsibility of overseeing the inspection, audit,
            and safety protocols across approximately 180 Air Force bases
            nationwide. This demanding position required a meticulous approach
            to ensure the highest standards of safety and compliance.
          </p>
        </div>
      </div>
      <div className="expert-image">
        <div class="gallery">
          <img src={aviation} alt="Aviation" />
          <div class="desc">
            We provide services to our clients as a consultant and advisor in
            the field of aviation i.e aim, growth, manpower management (pilots,
            engineers, technicians and other staffs) using the expertise of our
            designated partners, who have a vast experience of nearly about 40
            years in the field of aviation.
          </div>
        </div>
        <div class="gallery">
          <img src={Armed_forces_logo} alt="Armed Forces" />
          <div class="desc">
            By the huge experience of our designated partners in defence sector
            on top appointments, we provide consultancy and advisor services to
            our clients of defence forces in the field of human resource
            management, financial management, best utilisation of available
            resources and aviation sector.
          </div>
        </div>
        <div class="gallery">
          <img src={human_resource} alt="Human Resource" />
          <div class="desc">
            Human Resource By using the vast experience of our designated
            partners we provide services to our clients in the field of Human
            Resource Management in handling administration matters, which lead
            to improved operational efficiency, cost-cutting, improve supply
            chain management, and logistics planning. They provide expert advice
            on HR management of the complete organisation, handling of
            induction, career planning, and progression of manpower with policy
            formulation for improving work efficiency and productivity.
          </div>
        </div>
        <div class="gallery">
          <img src={education} alt="Education" />
          <div class="desc">
            Our team of qualified experts will provide a better platform for the
            aspirants in the field of education to achieve their goals or
            well-deserved career opportunities. As a consultant or advisor they
            will help the students to fill the gap between education and skills
            which leads to employability.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
