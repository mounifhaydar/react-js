import React from 'react';
import './TryPro.css'; // Assuming you have a CSS file for styling

const TryPro = () => {
  return (
    <div className="json-comparator">
      <header className="header">
        <h1>JSON Comparator</h1>
      </header>
      <section className="overview">
        <h2>Overview</h2>
        <p>
          JSON Comparator is a powerful web service designed to help you compare and analyze JSON data efficiently. Whether you're dealing with configuration files, API responses, or any other JSON data, JSON Comparator makes it easy to identify differences and similarities.
        </p>
      </section>
      <section className="features">
        <h2>Key Features</h2>
        <ul>
          <li><strong>Accurate Comparisons:</strong> Seamlessly compare JSON objects, arrays, and values with high precision.</li>
          <li><strong>User-Friendly Interface:</strong> Intuitive design that allows you to input and visualize JSON data effortlessly.</li>
          <li><strong>Detailed Reports:</strong> Generate detailed comparison reports highlighting differences in a clear and organized format.</li>
          <li><strong>Support for Complex Structures:</strong> Handle nested objects, arrays, and various data types with ease.</li>
          <li><strong>Real-Time Analysis:</strong> Get instant feedback as you input or modify JSON data.</li>
          <li><strong>Customizable Settings:</strong> Adjust comparison settings to fit your specific needs and preferences.</li>
        </ul>
      </section>
      <section className="how-it-works">
        <h2>How It Works</h2>
        <ol>
          <li><strong>Input JSON Data:</strong> Paste or upload the JSON data you want to compare.</li>
          <li><strong>Select Comparison Options:</strong> Choose your desired comparison settings (e.g., ignore whitespace, case sensitivity).</li>
          <li><strong>Compare Data:</strong> Click the compare button to analyze the JSON data.</li>
          <li><strong>View Results:</strong> Review the results in a detailed report format, highlighting differences and similarities.</li>
        </ol>
      </section>
      <section className="benefits">
        <h2>Benefits</h2>
        <ul>
          <li><strong>Save Time:</strong> Quickly identify differences without manually inspecting JSON files.</li>
          <li><strong>Improve Accuracy:</strong> Minimize human error with automated and precise comparisons.</li>
          <li><strong>Streamline Workflow:</strong> Integrate JSON Comparator into your development or testing workflow for efficient data analysis.</li>
        </ul>
      </section>
      <section className="use-cases">
        <h2>Use Cases</h2>
        <ul>
          <li><strong>API Development:</strong> Compare API responses to ensure consistency between different environments.</li>
          <li><strong>Configuration Management:</strong> Verify changes in configuration files to avoid errors.</li>
          <li><strong>Data Migration:</strong> Check data integrity when migrating JSON data between systems.</li>
        </ul>
      </section>
      <section className="getting-started">
        <h2>Getting Started</h2>
        <ol>
          <li><strong>Sign Up:</strong> Create an account to access advanced features and save your comparison history.</li>
          <li><strong>Explore Features:</strong> Familiarize yourself with the available tools and settings.</li>
          <li><strong>Start Comparing:</strong> Begin comparing your JSON data and enjoy the benefits of accurate and efficient analysis.</li>
        </ol>
      </section>
      <section className="pricing">
        <h2>Pricing</h2>
        <ul>
          <li><strong>Free Plan:</strong> Access basic features with limited comparisons per month.</li>
          <li><strong>Pro Plan:</strong> Unlock advanced features and unlimited comparisons with a monthly subscription.</li>
          <li><strong>Enterprise Plan:</strong> Contact us for custom solutions and pricing tailored to your organization's needs.</li>
        </ul>
      </section>
      <section className="contact-us">
        <h2>Contact Us</h2>
        <p>Have questions or need support? Reach out to our team at <a href="mailto:mounifhaydar@gmail.com">mounifhaydar@gmail.com</a> or visit our <a href="/help-center">Help Center</a>.</p>
      </section>
    </div>
  );
};

export default TryPro;
