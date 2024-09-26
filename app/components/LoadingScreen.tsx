import React from 'react';
import logo from '../images/logo.png';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="logo-container">
        <img src={logo.src} alt="Logo" className="logo" />
        <h1 className="loading-text">
          <span className="bold-text">RUN </span>  to  live  better
        </h1>
      </div>
    </div>
  );
};

export default LoadingScreen;