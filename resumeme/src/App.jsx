import React, { useEffect, useState } from 'react';
import './style.css';
import gsap from 'gsap';
import Navbar from './navbar';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // GSAP animation for loading page
    gsap.fromTo(
      ".loading-page",
      { opacity: 1 },
      {
        opacity: 0,
        duration: 1.5,
        delay: 3.5,
        onComplete: () => setIsLoading(false),
      }
    );

    // GSAP animation for logo-name
    gsap.fromTo(".logo-name",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        delay: 0.5,
      }
    );
  }, []);

  return (
    <>
     
      {/* Loading screen */}
      <div className="loading-page">
        {/* SVG Logo */}
        <svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
          <path fill="#f57600" d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z" />
        </svg>
        
        {/* Logo name */}
        <div className="name-container">
          <div className="logo-name">
            JR.WEB DEVELOP
          </div>
        </div>
      </div>
      {!isLoading && <Navbar />}
      <div>
        Hello
      </div>
    </>
  );
}

export default App;
