import React from 'react';
import '../assets/styles/HeroSection.css'; 
import stifImage from '../assets/images/header.png'; 

const HeroSection = () => {
    return (
        <section className="hero section">
            <div className="hero-content-wrapper">
                <div className="hero-content col-md-6 reveal">
                    <h1>Story in Frames</h1>
                    <h2>Warm Moments</h2>
                    <p>
                        We are passionate photographers dedicated to capturing life's most precious moments and transforming them into timeless visual stories. Whether it's a heartfelt portrait or an unforgettable event, we strive to preserve your memories through the art of photography.
                    </p>
                    <div className="hero-buttons mt-4">
                        <a href="#contact" className="btn btn-success me-3">Hire Us</a>
                    </div>
                    <br></br>
                </div>
                <div className="hero-image col-md-6 reveal text-center">
                    <img src={stifImage} alt="Story in Frames Photography" />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
