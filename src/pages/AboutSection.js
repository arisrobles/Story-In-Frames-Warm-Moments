import React from 'react';
import '../assets/styles/AboutSection.css'; // Assuming the styles are stored in this file
import stifImage from '../assets/images/about/stif.jpg'; // Import the image

const AboutSection = () => {
    return (
        <section id="about" className="about section pt-5 pb-5">
            <div className="about-content row">
                <div className="col-md-6 text-center about-image-container">
                    <img 
                        src={stifImage} 
                        alt="Photography" 
                        className="img-fluid rounded-circle shadow-lg" 
                    />
                </div>
                <div className="col-md-6 about-text-container">
                    <h3>About Us</h3>
                    <p>
                        We are a passionate photography studio dedicated to capturing life's precious moments. Specializing in portraits, event photography, and everything in between, we are driven by a deep appreciation for the beauty and emotions found in even the simplest of moments.
                    </p>
                    <p>
                        With years of experience behind the camera, we have developed a unique style that blends natural light with artistic composition, creating images that tell stories. We believe that photography is not just about taking pictures – it’s about capturing feelings, memories, and moments that last a lifetime.
                    </p>
                    <p>
                        When not working on a photoshoot, we are exploring new places for inspiration, honing our skills, or collaborating with amazing clients to create something truly special.
                    </p>
                    <div className="social-icons mt-4">
                        <a href="https://facebook.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://twitter.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://instagram.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://linkedin.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
