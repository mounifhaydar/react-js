import React from 'react';
import './OurHistory.css'; // Assuming you have a CSS file for styling

const OurHistory = () => {
  return (
    <div className="our-history">
      <header className="header">
        <h1>Our History</h1>
      </header>
      <section className="intro">
        <h2>How It All Began</h2>
        <p>
          Our journey started with a simple idea: to create tools that make working with JSON data easier and more efficient. Since then, we have grown into a leading provider of JSON comparison tools, committed to innovation and quality.
        </p>
      </section>
      <section className="timeline">
        <h2>Timeline of Key Events</h2>
        <ul>
          <li>
            <strong>2010:</strong> The inception of our company, with the vision to revolutionize data comparison.
          </li>
          <li>
            <strong>2012:</strong> Launched our first JSON comparison tool, which was well-received by the developer community.
          </li>
          <li>
            <strong>2015:</strong> Expanded our product lineup to include advanced features and integrations.
          </li>
          <li>
            <strong>2018:</strong> Reached a milestone of 1 million active users and continued to enhance our solutions.
          </li>
          <li>
            <strong>2021:</strong> Introduced a new user interface and additional features based on customer feedback.
          </li>
          <li>
            <strong>2024:</strong> Continues to lead the market with innovative tools and a growing community of users.
          </li>
        </ul>
      </section>
      <section className="our-future">
        <h2>Looking Ahead</h2>
        <p>
          As we move forward, our goal is to continue innovating and providing the best tools for JSON data comparison. We are committed to listening to our users and adapting to their needs to stay at the forefront of technology.
        </p>
      </section>
      <section className="contact-info">
        <h2>Contact Us</h2>
        <p>
          For more information about our journey or to get in touch with us, please <a href="mailto:support@example.com">contact us</a>.
        </p>
      </section>
    </div>
  );
};

export default OurHistory;
