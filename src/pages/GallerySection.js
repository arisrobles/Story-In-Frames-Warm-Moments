import React from 'react';
import { useNavigate } from 'react-router-dom';
import PricingSection from '../pages/PricingSection'; 
import Presets from '../pages/PresetSection'; 
import Booking from '../pages/BookingSection';
import sunsetImage1 from '../assets/images/gallery/D_AFTER_1024-600x600.jpg';
import mountainImage1 from '../assets/images/gallery/D_AFTER_1024-600x600.jpg';
import oceanImage1 from '../assets/images/gallery/D_AFTER_1024-600x600.jpg';
import forestImage1 from '../assets/images/gallery/D_AFTER_1024-600x600.jpg';
import '../assets/styles/GallerySection.css'; // Assuming the styles are stored in this file
import FAQ from '../pages/FaqSection';
import Footer from '../components/Footer';

const Gallery = () => {
  const navigate = useNavigate();

  // Function to navigate to the related images page
  const showRelatedImages = (category) => {
    navigate(`/related-images/${category}`);
  };

  return (
    <div>
      {/* Gallery Intro Section */}
      <section className="gallery-intro">
        <div className="intro-container">
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="gallery-section">
        <div className="gallery-grid">
          <div className="gallery-item" onClick={() => showRelatedImages('BeautifulSunset')}>
            <img src={sunsetImage1} alt="Gallery Image 1" />
            <div className="gallery-caption">Beautiful Sunset</div>
          </div>
          <div className="gallery-item" onClick={() => showRelatedImages('MajesticMountains')}>
            <img src={mountainImage1} alt="Gallery Image 2" />
            <div className="gallery-caption">Majestic Mountains</div>
          </div>
          <div className="gallery-item" onClick={() => showRelatedImages('OceanViews')}>
            <img src={oceanImage1} alt="Gallery Image 3" />
            <div className="gallery-caption">Ocean Views</div>
          </div>
          <div className="gallery-item" onClick={() => showRelatedImages('ForestLandscapes')}>
            <img src={forestImage1} alt="Gallery Image 4" />
            <div className="gallery-caption">Forest Landscapes</div>
          </div>
        </div>
      </section>

      {<PricingSection />}
      {<Presets />}
      {<Booking />}
      {<FAQ />}
      {<Footer />}
    </div>
  );
};

export default Gallery;
