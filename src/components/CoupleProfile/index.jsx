import React from 'react';
import DitaProfile from '../../assets/images/dita-profil.JPG';
import EkaProfile from '../../assets/images/eka-profil.JPG';

const CoupleProfile = () => {
  return (
    <div className="couple-profile">
      <h1 className="title">We are Getting Married!</h1>
      <div className="content">
        <div className="item">
          <div className="circle">
            <img src={DitaProfile} />
          </div>
          <h2 className="name">Anindita Ayu Pratiwi</h2>
          <h4 className="description">
            <span>{'First born of'}</span>
            <span>{'Mr. Bambang Madyo Sudarno & Mrs. Dwi Endah Andayani'}</span>
          </h4>
        </div>
        <div className="item">
          <h1 className="and">{'&'}</h1>
        </div>
        <div className="item">
          <div className="circle">
            <img src={EkaProfile} />
          </div>
          <h2 className="name">Kretawiweka Nuraga Sani</h2>
          <h4 className="description">
            <span>{'First born of'}</span>
            <span>{'Mr. Saiful Zuhri & Mrs. Eny Triarnati Yuli Robi’ah'}</span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default CoupleProfile;
