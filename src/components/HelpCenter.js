import React from 'react';
import './HelpCenter.css'; // Assuming you have a CSS file for styling

const HelpCenter = () => {
  return (
    <div className="help-center">
      <header className="header">
        <h1>Help Center</h1>
      </header>
      <section className="introduction">
        <h2>Welcome to the Help Center</h2>
        <p>
          Find answers to common questions, learn more about our features, and get the help you need to make the most out of JSON Comparator.
        </p>
      </section>
      <section className="faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3>How do I get started with JSON Comparator?</h3>
          <p>
            To get started, sign up for an account and explore the features available. You can then input your JSON data and start comparing it using the intuitive interface.
          </p>
        </div>
        <div className="faq-item">
          <h3>What file formats does JSON Comparator support?</h3>
          <p>
            JSON Comparator supports JSON format. You can paste your JSON data directly or upload files for comparison.
          </p>
        </div>
        <div className="faq-item">
          <h3>How can I contact support?</h3>
          <p>
            If you need assistance, please reach out to our support team at <a href="mailto:support@example.com">support@example.com</a>.
          </p>
        </div>
      </section>
      <section className="resources">
        <h2>Resources</h2>
        <ul>
          <li><a href="#user-guide">User Guide</a></li>
          <li><a href="/">Tutorials</a></li>
          <li><a href="#community-forum">Community Forum</a></li>
        </ul>
      </section>
      <section className="contact">
        <h2>Contact Us</h2>
        <p>
          If you have any other questions or need further assistance, feel free to <a href="mailto:mounifhaydar@gmail.com">contact us</a>.
        </p>
      </section>
    </div>
  );
};

export default HelpCenter;
