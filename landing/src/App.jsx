import React, { useState } from "react";

import "./App.css";

// Define separate components for each page
const HomePage = () => <div>Home Page Content</div>;
const RequestPage = () => <div>Request Page Content</div>;

const App = () => {
  const [currentPage, setCurrentPage] = useState("Home"); // Track the current active page

  // Scroll event listener to trigger animations
  document.addEventListener("scroll", function () {
    var elements = document.querySelectorAll(".animated-text");

    elements.forEach(function (element) {
      var position = element.getBoundingClientRect();

      // If the element is in the viewport
      if (position.top < window.innerHeight && position.bottom >= 0) {
        element.classList.add("animate-in"); // Add the animate-in class
      } else {
        element.classList.remove("animate-in"); // Remove the animate-in class
      }
    });
  });

  return (
    <div className="all">
      <div className="container">
        <nav className="navbar">
          <div className="point">
            <h2>
              PO<span className="i">i</span>NTT
            </h2>
          </div>
          <ul className="menu">
            <li className="menu-item"> Home</li>
            <li className="menu-item"> About</li>
            <li className="menu-item"> Request for Quotation </li>
          </ul>
        </nav>
        <div className="section1">
          <div className="section-content">
            <h2>The best way to predict the future is to create it.</h2>
            <p>
              Welcome to our management platform! We are delighted to welcome
              you aboard. Prepare to embark on a journey of boundless
              possibilities as you navigate through our landing page. Immerse
              yourself and uncover a wealth of tools and resources that will
              guide you towards achievement and success. In essence, get ready
              to explore a world of opportunities that await you here.
            </p>
          </div>
        </div>
        <div className="content-container">
          <div className="image-container">
            <img
              className="image"
              src="https://actior.pro/wp-content/uploads/2020/01/home-banner-1.svg"
              alt="Banner"
            />
          </div>
        </div>
      </div>
     <div className="animated-text" id="about">
          <h1>About</h1>
         </div>
      <div className="sections-container">
        {/* Section 1 beside the image */}
        <div className="section">
          <div className="section-content">
            <h2>User Management</h2>
            <p></p>
          </div>
        </div>

        {/* Space between the sections and the image */}
        <div className="spacer"></div>

        {/* Section 2 */}
        <div className="section">
          <div className="section-content">
            <h2>Dashboard</h2>
            <p>
              
            </p>
          </div>
        </div>
        {/* Section 2 */}
        <div className="section">
          <div className="section-content">
            <h2>Document Management</h2>
            <p>
            
            </p>
          </div>
        </div>
        <div className="section">
          <div className="section-content">
            <h2>Calender and Scheduling</h2>
            <p>
            
            </p>
          </div>
        </div>
          <div className="exception">
        <div className="section">
          <div className="section-content">
            <h2 >Reporting and Analytics</h2>
            <p>
             
            </p>
          </div>
        </div>
      
        <div className="section">
          <div className="section-content">
            <h2 >Security Features</h2>
            <p>
            
            </p>
          </div>
        </div>
        <div className="section">
          <div className="section-content">
            <h2 >Mobile Features</h2>
            <p>
            
            </p>
          </div>
        </div>
        </div>
      </div>
      <div class="separator">
        <p className="animated-text">How do we create amazing products?</p>
        <p className="animated-text">
          Mombo is an HTML5 template based on Sass and Bootstrap 5 with the
          modern and creative multipurpose design you can use it as a startup.
        </p>
      </div>
      {/* Footer section */}
      <footer className="footer">
        <p>© 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
