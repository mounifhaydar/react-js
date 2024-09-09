import React, { useState } from 'react';
import './ContactUs.css'; // Assuming you have a CSS file for styling
import { APP_CONSTANTS } from '../constants';
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to server or API)
    setTimeout(function() {
      alert('Your message has been sent!');
      alert('Don’t hesitate to contact us on our direct email: ' + APP_CONSTANTS.OWNER_EMAIL + ', and our team will get back to you as soon as possible.');
    }, 500); // The message will appear after 2 seconds (2000 milliseconds)
    
    //alert('We are currently experiencing technical difficulties. If you have any questions or need assistance, please reach out to us via email at ' + APP_CONSTANTS.SUPPORT_EMAIL + ' and our team will get back to you as soon as possible.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="main-contact-us">
    <div className="contact-us">
      <header className="header">
        <h1>Contact Us</h1>
      </header>
      <section className="introduction">
        <h2>Get in Touch</h2>
        <p>
          If you have any questions or need assistance, please fill out the form below, and our team will get back to you as soon as possible.
        </p>
      </section>
      <section className="contact-form">
        <h2>Contact Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </section>
      <section className="contact-info">
        <h2>Our Contact Information</h2>
        <p>
          You can also reach us via email at <a href={"mailto:"+ APP_CONSTANTS.SUPPORT_EMAIL}>{APP_CONSTANTS.SUPPORT_EMAIL}</a>.
        </p>
      </section>
    </div>
    </div>
  );
};

export default ContactUs;
