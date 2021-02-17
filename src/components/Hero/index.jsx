import React from 'react';
import HeroBanner from '../../assets/images/hero-banner.png';
import Typist from 'react-typist';

const Hero = () => {
  return (
    <div className="hero">
      <div className="canvas"></div>
      <img src={HeroBanner} alt="hero-banner" />
      <div className="hero-text">
        <Typist>
          <h1 className="beginning">The wedding of</h1>
          <h3 className="name"> Dita {'&'} Eka </h3>
          <h5 className="date">Saturday, February 16 2021</h5>
        </Typist>
      </div>
    </div>
  );
};

export default Hero;
