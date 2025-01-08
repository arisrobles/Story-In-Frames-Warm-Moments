import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'; 
import Navbar from './components/Navbar'; 
import HeroSection from './pages/HeroSection'; 
import AboutSection from './pages/AboutSection'; 
import QuoteSection from './pages/QuoteSection'; 
import RelatedImages from './pages/RelatedImagesPage'; 
import Gallery from './pages/GallerySection'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const AppWrapper = () => {
    const location = useLocation();
    const isRelatedImagesPage = location.pathname.includes("/related-images");

    return (
        <div>
            {/* Conditionally render components based on the current route */}
            {!isRelatedImagesPage && <Navbar />}
            {!isRelatedImagesPage && <HeroSection />}
            {!isRelatedImagesPage && <AboutSection />}
            {!isRelatedImagesPage && <QuoteSection />}
        </div>
    );
};

const App = () => {
    return (
        <Router>
            {/* Wrap everything inside Router */}
            <AppWrapper />
            
            <Routes>
                <Route path="/" element={<Gallery />} /> {/* Home route */}
                <Route path="/related-images/:category" element={<RelatedImages />} /> {/* Route for related images */}
            </Routes>
        </Router>
    );
};

export default App;
