import React from 'react';
import './App.css';
import img from './point_light.jpg';

const App = () => {
  return (
    <div className="container">
      <nav className="navbar">
        <div className='point'>
          <h2>
            PO<span className="i">i</span>NTT
          </h2>
        </div>
        <ul className="menu">
          <li className="menu-item">Home</li>
          <li className="menu-item">About</li>
          <li className="menu-item">Request for Quotation</li>
        </ul>
      </nav>

      <div className="content-container">
        <div className="intro-box">
          <p className="intro-text">
            Welcome to our management system! Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </p>
        </div>
        <div className="image-container">
          <img
            className="image"
            src="https://actior.pro/wp-content/uploads/2020/01/home-banner-1.svg"
            alt="Banner"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
