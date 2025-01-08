import React, { useState, useEffect } from 'react';
import '../assets/styles/Navbar.css'; // Import the CSS file for the Navbar

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        // Apply fixed positioning via JavaScript if CSS doesn't work
        const navbar = document.querySelector('.navbar');
        navbar.style.position = 'fixed';
        navbar.style.top = '0';
        navbar.style.left = '0';
        navbar.style.width = '100%';
        navbar.style.zIndex = '1000';
        navbar.style.backgroundColor = '#1f1f1f';
        navbar.style.padding = '15px 0'; // Adjust padding if necessary

        // Add padding to the body to prevent content from hiding behind the navbar
        document.body.style.paddingTop = '80px'; // Adjust based on the navbar height
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <a className="navbar-brand" href="#home">
                <span className="logo-text">Story in Frames</span>
            </a>
            <button
                className="navbar-toggler"
                type="button"
                aria-controls="navbarNav"
                aria-expanded={isMenuOpen}
                aria-label="Toggle navigation"
                onClick={toggleMenu}
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#gallery-intro">Gallery</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#presets">Presets</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">Contact</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#pricing">Packages</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#booking">Booking</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#faqs">FAQs</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
