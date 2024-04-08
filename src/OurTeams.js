import React from "react";
import Sanjeev from "./assests/Sanjeev.jpg";
import Anju from "./assests/Anju.jpg";
import "./OurTeams.css";

const OurTeams = () => {
  return (
    <div className="teamsBody">
      <div className="ourteams-container">
        <div className="header">
          <img className="profile" src={Sanjeev} alt="Profile Pic" />
          <h4 className="ourteams-title">
            Air Marshal (Dr.) Sanjeev Kapoor, Ati Vishisht Seva Medal, Vayu Sena
            Medal (Retd), M.Sc (Defence Studies), MMS, M. Phil and PhD
          </h4>
        </div>
        <h3 className="resume">RESUME</h3>
        <hr style={{ width: "25%", margin: "auto" }}></hr> <br></br>
        <p className="teamAbout">
          Air Marshal Sanjeev Kapoor has served for nearly four decades in IAF
          and has vast experience of handling administration matters which in
          turn has led to improved operational efficiency, cost cutting,
          improved supply chain management and logistics planning. He has also
          handled HR management of complete IAF wherein he handled induction,
          career planning and progression of Air warriors. He was instrumental
          in policy formation for improving the work efficiency and productivity
          of the all personnel. Air Marshal Kapoor's illustrious career within
          the Indian Air Force (IAF), a testament to his unwavering commitment
          and exceptional leadership. His significant impact is evident in his
          multifaceted roles, primarily focused on administration, where his
          strategic acumen has consistently fostered improved operational
          efficiency, cost-cutting initiatives, and streamlined supply chain
          management. A pivotal figure in HR management within the IAF, Air
          Marshal Kapoor spearheaded the induction, career planning, and
          progression of Air warriors. His astute leadership played a crucial
          role in shaping the trajectory of personnel development, reflecting a
          deep commitment to nurturing talent and fostering a culture of
          excellence. Instrumental in policy formulation, Air Marshal Kapoor's
          influence extended across the IAF, driving initiatives aimed at
          enhancing work efficiency and overall productivity. His visionary
          approach has left an indelible mark on organizational dynamics,
          setting a benchmark for excellence. In his role as DG, Inspection and
          Safety, Air Marshal Kapoor undertook the responsibility of overseeing
          the inspection, audit, and safety protocols across pan Air Force bases
          nationwide. This demanding position required a meticulous approach to
          ensure the highest standards of safety and compliance, a
          responsibility Air Marshal Kapoor fulfilled with distinction. The
          breadth and depth of Air Marshal Kapoor's experience uniquely position
          him as a valuable asset to any organization. His strategic insights,
          honed through decades of service, offer a rare blend of administrative
          prowess, HR management acumen, and a keen understanding of safety and
          inspection protocols. Beyond his professional achievements, Air
          Marshal Kapoor's dedication to excellence extends to the realm of
          organizational culture. His leadership style is characterized by a
          commitment to fostering a conducive work environment that encourages
          innovation, collaboration, and continuous improvement. These qualities
          make him not only a seasoned professional but also a transformative
          leader capable of steering companies towards sustained success. In the
          dynamic landscape of business, where adaptability and strategic
          thinking are paramount, Air Marshal Sanjeev Kapoor emerges as a beacon
          of experience and leadership. His proven track record and commitment
          to excellence make him an invaluable addition to any organization
          seeking to elevate its operations, enhance its work culture, and
          navigate the complexities of today's competitive landscape. Medhkara
          Consultancy LLP is honored to have Air Marshal Sanjeev Kapoor as a
          distinguished partner, and we are confident that his wealth of
          experience will contribute significantly to our shared journey of
          success and growth. Air Marshal Sanjeev Kapoor's extensive
          contributions also include his role in the Board of Governors for
          creating 100 new Sainik Schools across India, aligning with the Prime
          Minister's vision. Notably, he holds an Airline Pilot license issued
          by the Director General of Civil Aviation, showcasing his proficiency
          as a flying pilot and instructor with vast experience in aviation. In
          addition to his remarkable career, Air Marshal Kapoor holds a PhD and
          two master's degrees in academics, further highlighting his commitment
          to continuous learning and academic excellence. These diverse facets
          of his expertise make him a multifaceted and invaluable asset to
          Medhkara Consultancy LLP, enriching the team with a wealth of
          knowledge and skills across various domains.
        </p>
      </div>
      <div className="ourteams-container">
        <div className="header">
          <img className="profile" src={Anju} alt="Profile Pic" />
          <h4 className="ourteams-title" >Mrs Anju Kapoor, B.Tech, MBA</h4>
        </div>
        <h3 className="resume">RESUME</h3>
        <hr style={{ width: "25%", margin: "auto" }}></hr> <br></br>
        <p className="teamAbout">
          Mrs. Anju Kapoor brings a strong educational background with a B Tech,
          MBA, and a diploma in counseling, coupled with experience in both
          corporate and NGO settings. Together, Air Marshal Sanjeev Kapoor and
          Mrs. Anju Kapoor enrich Medhkara Consultancy LLP with a blend of
          strategic thinking, administrative prowess, and a commitment to
          organizational growth.
        </p>
      </div>
    </div>
  );
};

export default OurTeams;
