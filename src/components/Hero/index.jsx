import React from 'react';
import HeroBanner from '../../assets/images/hero-banner.png';

const Hero = () => {
  return (
    <div className="hero">
      <div className="canvas"></div>
      <img src={HeroBanner} alt="hero-banner" />
      <div className="hero-text">
        <h3>Wedding Reception Invitation</h3>
        <h1>Anindita {'&'} Kretawiweka</h1>
        <h5>Saturday, August 8 2020</h5>
      </div>
    </div>
  );
};

export default Hero;
