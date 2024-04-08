import React, { useState, useEffect } from 'react';
import Slider1 from './assests/Slider1.avif';
import Slider2 from './assests/Slider7.avif';
import Slider3 from './assests/Slider3.jpg';
import Slider4 from './assests/Slider4.jpg';
import Slider5 from './assests/Slider5.jpg';
import sanjeev from './assests/Sanjeev.jpg';

import './Home.css';


const ServiceCards = () => {
  return (
    <div className="service-cards" >
      {/* You would map over your data to create these cards */}
      <div className="card">
        <h2>Message From Owner</h2>
        <img src={sanjeev} alt="sanjeev kapoor" height={370}/>
        <h3>Dr. Sanjeev Kapoor, PhD</h3>
        <p>As the owner of our consultancy, I am deeply committed to guiding and empowering our clients in the realms of Aviation, Defence, Human Resource Management, and Education. Our mission is to transform challenges into opportunities, offering unparalleled expertise and strategic insights to propel your success to new heights.</p>
      </div>
    </div>
  );
};

const Home = () => {

  const [currentBackground, setCurrentBackground] = useState(Slider1);

  const sliders = [Slider1, Slider3, Slider4, Slider5, Slider2 ];

  useEffect(() => {
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % sliders.length;
      setCurrentBackground(sliders[currentIndex]);
    }, 5000); // Change background every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='Home'>
    <div className="hero-section" style={{ backgroundImage: `url(${currentBackground})`}}>
      <div className="hero-overlay"> {/* Overlay to ensure text is readable on any background */}
        <div className="hero-text">
          <h1>Your success journey starts with us!</h1>
          <p className="eduplan">Medhkara Consultancy</p>
          <p>Elevate Your Success Skyward: Premier Consulting Services in Aviation, Defence, Human Resource Management, and Education. Unlock Strategic Excellence with Our Expert Advisors.</p>
          <div className="hero-buttons">
            <button className="apply-online-btn">Apply Later</button> {/* Changed button text */}
            <button className="discover-btn">Discover First</button> {/* Changed button text */}
          </div>
        </div>
        <div className="pagination">
          {sliders.map((_, index) => (
            <span key={index} className={`dot ${index === currentBackground ? "active" : ""}`}></span>
          ))}
        </div>
      </div>
    </div>
    <div className='hero-cards'>
      <ServiceCards />
    </div>
    </div>
  );
};


export default Home;
