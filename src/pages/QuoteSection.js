// QuoteSection.js
import React from 'react';
import '../assets/styles/QuoteSection.css'; // Import the CSS file for the Quote Section
import headerImage from '../assets/images/header.png'; // Import the image

const QuoteSection = () => {
    return (
        <section id="quotes" className="quote-section">
            <div className="quote-text">
                <h2>CAPTURE MOMENTS,</h2>
                <h2>CREATE MEMORIES.</h2>
                <p>"A great photograph is one that fully expresses what one feels, in the deepest sense, about what is being photographed." - Ansel Adams</p>
                <button className="get-started-btn">
                    <i className="fas fa-coffee"></i> Get Started
                </button>
            </div>
            <img src={headerImage} alt="Camera Image" /> {/* Use the imported image here */}
        </section>
    );
};

export default QuoteSection;
