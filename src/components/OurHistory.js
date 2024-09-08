import React from 'react';
import './OurHistory.css'; // Assuming you have a CSS file for styling
import { APP_CONSTANTS } from '../constants';

const OurHistory = () => {
  return (
    <div className="our-history">
      <header className="header">
        <h1>Our History</h1>
      </header>
      <section className="intro">
        <h2>How It All Began</h2>
        <p>
        Our journey began with a straightforward goal: to simplify and enhance the process of working with JSON data. What started as a single idea has evolved into a leading tool for JSON comparison, driven by our commitment to innovation and quality.
        </p>
      </section>
      <section className="timeline">
        <h2>Timeline of Key Events</h2>
        <ul>
          <li>
            <strong>2018:</strong> The inception of our project, with a vision to transform JSON data comparison.
          </li>
          <li>
            <strong>2020:</strong> Launched our initial JSON comparison tool, focusing on real data.
          </li>
          <li>
            <strong>2022:</strong> Expanded our tool's capabilities with advanced features and integrations.
          </li>
          <li>
            <strong>2023:</strong> Achieved a milestone with over 10 million comparisons of real data, and continued to enhance our solutions.
          </li>
          <li>
            <strong>2024:</strong> Continues to lead with innovative tools and a growing community of users.
          </li>
        </ul>
      </section>
      <section className="our-future">
        <h2>Looking Ahead</h2>
        <p>
        Our commitment remains to innovate and provide the best JSON comparison tools available. We are dedicated to listening to our users and adapting to their needs to stay at the forefront of technology.
        </p>
      </section>
      <section className="contact-info">
        <h2>Contact Us</h2>
        <p>
          For more information about our journey or to get in touch with us, please <a href={"mailto:"+ APP_CONSTANTS.SUPPORT_EMAIL}>contact us</a>.
        </p>
      </section>
    </div>
  );
};

export default OurHistory;
