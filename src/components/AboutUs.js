import React from 'react';
import './AboutUs.css'; // Assuming you have a CSS file for styling
import { Link, Outlet } from 'react-router-dom';
import OurHistory from './OurHistory';
import { APP_CONSTANTS } from '../constants';

export function History(){
  return (
    <OurHistory/>
  );
}

export function AboutUs () {
  return (
    <div className="about-us">
      <header className="header">
        <h1>About Us</h1>
      </header>
      <section className="company-info">
        <h2>About the Tool</h2>
        <p>
        Welcome to JSON Compare, your ultimate solution for JSON comparison. Tailored for developers and data professionals, our tool simplifies the process of comparing and analyzing JSON data. With a focus on precision, reliability, and ease of use, we are dedicated to providing a high-quality experience that meets the diverse needs of our users.
        </p>
      </section>
      <section className="our-team">
        <h2>About the Creator</h2>
        <strong>Mounif Haydar</strong> - Creator & Founder
        <p>
        Mounif Haydar is the sole creator behind JSON Compare, driven by a passion for technology and a commitment to addressing complex data challenges. Focused on delivering innovative and user-friendly solutions, Mounif has developed this tool to enhance productivity and make JSON data comparison both straightforward and efficient.
        </p>
        <p>
        As the architect behind the platform’s development, Mounif’s expertise in creating robust and efficient solutions is central to what makes JSON Compare a trusted tool for seamless data analysis.
        </p>
      </section>
      <section className="our-values">
        <h2>Our Values</h2>
        <p>
          We are committed to:
        </p>
        <ul>
          <li><strong>Innovation:</strong> Continuously improving and evolving our solutions.</li>
          <li><strong>Quality:</strong> Delivering high-quality products and services.</li>
          <li><strong>Customer Satisfaction:</strong> Ensuring our users' needs are met and satisfaction is achieved.</li>
        </ul>
      </section>
      <section className="contact-info">
        <h2>Contact Us</h2>
        <p>
          Have questions or want to learn more about us? Feel free to <a href={"mailto:" + APP_CONSTANTS.SUPPORT_EMAIL}>contact us</a>.
        </p>
      </section>



<div>
      <div>
                <nav>
                    <Link to="/about/history">Our History</Link>
                </nav>
            </div>
            <Outlet></Outlet>
            
        </div>
       






    </div>

    
  );
};
