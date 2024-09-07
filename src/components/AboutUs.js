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
        <h2>Our Company</h2>
        <p>
          We are a leading provider of JSON comparison tools, dedicated to helping developers and data professionals efficiently compare and analyze JSON data. Our mission is to deliver high-quality, reliable, and user-friendly solutions that meet the needs of our diverse clientele.
        </p>
      </section>
      <section className="our-team">
        <h2>Our Team</h2>
        <p>
          Our team consists of experienced professionals with a passion for technology and innovation. We work together to create cutting-edge tools that simplify complex tasks and improve productivity. Meet some of the key members of our team:
        </p>
        <ul>
          <li>
            <strong>John Doe</strong> - CEO & Founder
            <p>John leads our company with a vision for excellence and innovation.</p>
          </li>
          <li>
            <strong>Jane Smith</strong> - CTO
            <p>Jane oversees our technology strategy and ensures the highest quality in our products.</p>
          </li>
          <li>
            <strong>Emily Johnson</strong> - Lead Developer
            <p>Emily is the driving force behind our development efforts, creating robust and efficient solutions.</p>
          </li>
        </ul>
      </section>
      <section className="our-values">
        <h2>Our Values</h2>
        <p>
          We are committed to:
        </p>
        <ul>
          <li><strong>Innovation:</strong> Continuously improving and innovating our solutions.</li>
          <li><strong>Quality:</strong> Delivering high-quality products and services.</li>
          <li><strong>Customer Satisfaction:</strong> Ensuring our customers are satisfied and their needs are met.</li>
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
                    <Link to="/">Back</Link>
                    <Link to="/about/history">history</Link>
                </nav>
            </div>
            <h1>About Us</h1>
            <Outlet></Outlet>
            
        </div>
       






    </div>

    
  );
};
