import React from 'react';
import '../assets/styles/Pricing.css'; // Import your CSS file

const Pricing = () => {
  return (
    <section id="pricing" className="pricing-section">
      <div className="pricing-container">
        <h3 style={{ textAlign: 'center', fontSize: '18px', color: '#bababa' }}>
          Pricing Package
        </h3>
        <h2 className="section-title">Flexible Pricing For Your Projects</h2>
        <div className="pricing-cards">
          {/* Platinum Plan */}
          <div className="pricing-card">
            <h3 className="plan-title">Platinum</h3>
            <p className="plan-subtitle">Photo Only</p>
            <p className="price">₱5,000 <span>/plus transpo</span></p>
            <ul className="features">
              <li>2-3hrs of Photography</li>
              <li>300 RAW Files</li>
              <li>200 High-Resolution Edited Pictures (Premium Presets)</li>
              <li>6 Premium Film Collage</li>
            </ul>
            <a href="#quote" className="btn btn-primary">Get A Quote</a>
          </div>

          {/* Diamond Plan */}
          <div className="pricing-card">
            <h3 className="plan-title">Diamond</h3>
            <p className="plan-subtitle">Photo Only</p>
            <p className="price">₱6,000 <span>/plus transpo</span></p>
            <ul className="features">
              <li>3-4hrs of Photography</li>
              <li>350 RAW Files</li>
              <li>250 High-Resolution Edited Pictures (Premium Presets)</li>
              <li>10 Premium Film Collage</li>
            </ul>
            <a href="#quote" className="btn btn-primary">Get A Quote</a>
          </div>

          {/* Emerald Plan */}
          <div className="pricing-card">
            <h3 className="plan-title">Emerald</h3>
            <p className="plan-subtitle">Photo Only</p>
            <p className="price">₱7,500 <span>/plus transpo</span></p>
            <ul className="features">
              <li>5hrs of Photography</li>
              <li>400 RAW Files</li>
              <li>300 High-Resolution Edited Pictures (Premium Presets)</li>
              <li>15 Premium Film Collage</li>
            </ul>
            <a href="#quote" className="btn btn-primary">Get A Quote</a>
          </div>

          {/* Wedding Photo and Video Plan */}
          <div className="pricing-card">
            <h3 className="plan-title">Wedding: Photo and Video</h3>
            <p className="plan-subtitle">Photo and Video Coverage</p>
            <p className="price">₱10,000 <span>/plus transpo</span></p>
            <ul className="features">
              <li>3-4hrs Coverage</li>
              <li>1 Photographer & 1 Videographer</li>
              <li>600 Edited Pictures</li>
              <li>10 Premium Film Photo Collage</li>
              <li>4-6 Minute Video Highlights (To be claimed after 1 week)</li>
            </ul>
            <a href="#quote" className="btn btn-primary">Get A Quote</a>
          </div>

          {/* Prenup Makeup and Hairstyle Plan */}
          <div className="pricing-card">
            <h3 className="plan-title">Prenup: Make Up and Hairstyle</h3>
            <p className="plan-subtitle">Makeup and Hairstyle Service</p>
            <p className="price">₱5,000 <span>/plus transpo</span></p>
            <ul className="features">
              <li>1 Makeup Artist & 1 Hair Stylist</li>
              <li>1-4 Looks Available</li>
              <li>Full Assistance & Retouch</li>
              <li>Free Hair Extensions, Earrings, and Contact Lenses</li>
            </ul>
            <a href="#quote" className="btn btn-primary">Get A Quote</a>
          </div>

          {/* Wedding Makeup and Hairstyle Plan */}
          <div className="pricing-card">
            <h3 className="plan-title">Wedding: Make Up and Hairstyle</h3>
            <p className="plan-subtitle">Makeup and Hairstyle Service</p>
            <p className="price">₱15,000 <span>/plus transpo</span></p>
            <ul className="features">
              <li>1 Makeup Artist for the Bride</li>
              <li>1-3 Looks (Prep, Ceremonial, Reception)</li>
              <li>Full Assistance & Retouch</li>
              <li>Free Hair Extensions, Earrings, and Contact Lenses</li>
              <li>8-12 Heads Including Bridesmaids, Maid of Honor, Secondary, and Mother of Bride/Groom</li>
              <li>2 Makeup Artists & 2 Hair Stylists</li>
              <li>Free Hair and Makeup for Flower Girls</li>
            </ul>
            <a href="#quote" className="btn btn-primary">Get A Quote</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
