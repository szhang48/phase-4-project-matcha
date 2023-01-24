import React, { useState, useEffect } from 'react'

import Nav from './Nav'

function Homepage() {
    
      return (
        <>
          <div className="home">
            <div className="hero-content">
              <Nav />
            </div>
            <div className="landing-page-content">
              <div className="landing-page-text-content-container">
                <h3 className="landing-page-text-content-h3">Welcome To Matcha</h3>
                <p className="landing-page-text-content-p">Find people whose interest aligns with yours with a personalized social media feed that goes beyond social interaction!</p>
              </div>
              <div className="landing-page-second-content-container">
                <div className="landing-page-second-p-container">
                  <p className="landing-page-second-content-container-p">Build your social dating experience now!</p>
                  <p className="landing-page-second-content-container-p">Click here to get started</p>
                </div>
                <button className=" get-started btn">Get Started</button>
              </div>
            </div>
          </div>
        </>
      );
}

export default Homepage