import React, { useState, useEffect } from 'react';
import './App.css'; // Ensure you create this CSS file to style your components
import AboutUs from './AboutUs';
import image from './assests/logo.jpeg';
import logo from './assests/logo.jpeg';
import Footer from './footer';
import image2 from './assests/student.png';
import Services from './assests/Services.png';
import dr from './assests/dr.png';
import Vision from './Vision';
import Aim from './Aim';
import Service from './Service';
import Home from './Home';
import Clients from './Clients';
import OurTeams from './OurTeams';
import ContactUs from './ContactUs';
import { Col, Modal, ModalBody, ModalHeader, Row } from 'reactstrap';
import emailjs from 'emailjs-com'; // Import emailjs-com

// You can create separate component files for each of these and import them for a cleaner structure
const Navbar = ({ onAboutClick, onVisionClick, onAimClick, onOurTeamClick, onServiceClick, onHomeClick, onClientsClick, onContactUsClick }) => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [modal, setmodal] = useState(false);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      e.target.reset()
    setmodal(false);
  };

  return (
    <div className={`navbar ${isNavExpanded ? "active" : ""}`}>
      <div className="logo">
        <img src={logo} alt="Logo" onClick={() => onHomeClick(true)} />
      </div>
      <div className="hamburger-menu" onClick={() => setIsNavExpanded(!isNavExpanded)}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="nav-items">
        <a href="#home" onClick={() => { onHomeClick(true); setIsNavExpanded(false); }}>Home</a>
        <a href="#aboutus" onClick={() => { onAboutClick(true); setIsNavExpanded(false); }}>About Us</a>
        <a href="#ourteams" onClick={() => { onOurTeamClick(true); setIsNavExpanded(false); }}>Our Team</a>
        <a href="#services" onClick={() => { onServiceClick(true); setIsNavExpanded(false); }}>Services</a>
        <a href="#aim" onClick={() => { onAimClick(true); setIsNavExpanded(false); }}>Aim</a>
        <a href="#vision" onClick={() => { onVisionClick(true); setIsNavExpanded(false); }}>Vision</a>
        <a href="#clients" onClick={() => { onClientsClick(true); setIsNavExpanded(false); }}>Clients</a>
        <a href="#contact-us" onClick={() => { onContactUsClick(true); setIsNavExpanded(false); }}>Contact Us</a>
        <Modal
          size='lg'
          isOpen={modal}
          toggle={() => setmodal(!modal)}
        >
          <ModalHeader
            toggle={() => setmodal(!modal)}
          >
            Free Consultation
          </ModalHeader>
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col lg={12}>
                  <div>
                    <label htmlFor='name'>
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      className='form-control'
                      placeholder='Enter Name'></input>
                  </div>
                </Col>
                <Col lg={12}>
                  <div>
                    <label htmlFor='Email-Address'>
                      Email Address
                    </label>
                    <input
                      type="text"
                      name="email"
                      className='form-control'
                      placeholder='Enter Email Address'></input>
                  </div>
                </Col>
                <Col lg={12}>
                  <div>
                    <label htmlFor='Phone-number'>
                      Phone Number
                    </label>
                    <input
                      type="number"
                      name="phone"
                      className='form-control'
                      placeholder='Enter phone Number'></input>
                  </div>
                </Col>
                <Col lg={12}>
                  <div>
                    <label htmlFor='Questions'>
                      Questions
                    </label>
                    <input
                      type="text"
                      name="questions"
                      className='form-control'
                      placeholder='Enter Your question'></input>

                  </div>
                </Col>
              </Row>
              <br></br>
              <button className="free-consultation-btn" type="submit">
                Submit
              </button>
            </form>
          </ModalBody>
        </Modal>
        <button className="free-consultation-btn" onClick={() => setmodal(true)}>Free Consultation</button>
      </div>
    </div>
  );
};

const App = () => {

  const [showAboutUs, setShowAboutUs] = useState(false);
  const [showVision, setShowVision] = useState(false);
  const [showAim, setShowAim] = useState(false);
  const [showService, setShowServices] = useState(false);
  const [showHome, setShowHome] = useState(false);
  const [showClients, setShowClients] = useState(false);
  const [showOurTeams, setShowOurTeams] = useState(false);
  const [showContactUs, setShowContactUs] = useState(false);

  // Handler to toggle the AboutUs display state
  const handleAboutClick = () => {
    setShowAboutUs(true);
    setShowVision(false);
  };

  const handleVisionClick = () => {
    setShowVision(true);
    // Close other sections if needed
    setShowAboutUs(false);
    setShowAim(false);
  };

  const handleAimClick = () => {
    setShowAim(true);
    setShowAboutUs(false);
    setShowVision(false);
    // Close other sections if needed

  };

  const handleServiceClick = () => {
    setShowServices(true)
    setShowAim(false);
    setShowAboutUs(false);
    setShowVision(false);
    // Close other sections if needed

  };

  const handleHomeClick = () => {
    setShowHome(true);
    setShowServices(false);
    setShowAim(false);
    setShowAboutUs(false);
    setShowVision(false);
    // Close other sections if needed

  };

  const handleClientsClick = () => {
    setShowClients(true);
    setShowHome(false);
    setShowServices(false);
    setShowAim(false);
    setShowAboutUs(false);
    setShowVision(false);
    // Close other sections if needed

  };

  const handleOurTeamsClick = () => {
    setShowOurTeams(true);
    setShowClients(false);
    setShowHome(false);
    setShowServices(false);
    setShowAim(false);
    setShowAboutUs(false);
    setShowVision(false);
    // Close other sections if needed

  };

  const handleContactUsClick = () => {
    setShowContactUs(true);
    setShowOurTeams(false);
    setShowClients(false);
    setShowHome(false);
    setShowServices(false);
    setShowAim(false);
    setShowAboutUs(false);
    setShowVision(false);
  };


  return (
    <div className="app-container">
      <Navbar onAboutClick={handleAboutClick} onVisionClick={handleVisionClick} onAimClick={handleAimClick} onOurTeamClick={handleOurTeamsClick} onServiceClick={handleServiceClick} onHomeClick={handleHomeClick} onClientsClick={handleClientsClick} onContactUsClick={handleContactUsClick}/>
      {showAboutUs ? (
        <AboutUs />
      ) : showVision ? (
        <Vision />
      ) : showAim ? (
        <Aim />
      ) : showService ? (
        <Service />
      ) : showHome ? (
        <Home />
      ) : showClients ? (
        <Clients />
      ) : showOurTeams ? (
        <OurTeams />
      ) : showContactUs ? (
        <ContactUs />
      ) : (
        <>
          {/* <HeroSection />
          <ServiceCards /> */}
          <Home />
          {/* Add additional sections here as needed */}
        </>
      )}
      {/* <Home /> */}
      <Footer />
    </div>
  );
};

export default App;
