import React, { useEffect } from 'react';
import '../assets/styles/Presets.css'; 

// Import images
import presetImage1Before from '../assets/images/presets/C_AFTER_1024-600x600.jpg';
import presetImage1After from '../assets/images/presets/C_AFTER_1024-600x600 (2).jpg';
import presetImage2Before from '../assets/images/presets/CC9-600x600.jpg';
import presetImage2After from '../assets/images/presets/CC9-600x600.jpg';
import presetImage3Before from '../assets/images/presets/D_AFTER_1024-600x600.jpg';
import presetImage3After from '../assets/images/presets/D_AFTER_1024-600x600.jpg';

const Presets = () => {
  useEffect(() => {
    // Dragging functionality
    const dragLines = document.querySelectorAll('.drag-line');
    dragLines.forEach((line) => {
      let isDragging = false;

      const startDrag = (e) => {
        isDragging = true;
        document.body.style.userSelect = 'none'; // Disable text selection during drag
        e.preventDefault(); // Prevent default behavior for touch events (like scrolling)
      };

      const moveDrag = (e) => {
        if (isDragging) {
          let container = line.parentElement;
          let rect = container.getBoundingClientRect();
          let offsetX;

          if (e.type === 'mousemove') {
            offsetX = e.clientX - rect.left; // Mouse event
          } else if (e.type === 'touchmove') {
            offsetX = e.touches[0].clientX - rect.left; // Touch event
          }

          if (offsetX >= 0 && offsetX <= rect.width) {
            line.style.left = `${offsetX}px`; // Move the drag line

            const beforeImage = container.querySelector('.before-image');
            const afterImage = container.querySelector('.after-image');

            beforeImage.style.clipPath = `inset(0 ${rect.width - offsetX}px 0 0)`;
            afterImage.style.clipPath = `inset(0 0 0 ${offsetX}px)`;
          }
        }
      };

      const endDrag = () => {
        isDragging = false;
        document.body.style.userSelect = 'auto'; // Re-enable text selection after drag
      };

      line.addEventListener('mousedown', startDrag);
      document.addEventListener('mousemove', moveDrag);
      document.addEventListener('mouseup', endDrag);

      line.addEventListener('touchstart', startDrag);
      document.addEventListener('touchmove', moveDrag);
      document.addEventListener('touchend', endDrag);
    });
  }, []);

  return (
    <section id="presets" className="presets section pt-5 pb-5">
      <div className="presets-content text-center">
        <h3 style={{ textAlign: 'center', fontSize: '18px', color: '#bababa' }}>Our Presets</h3>
        <h2 className="section-title" style={{ color: '#fff' }}>Unique styles for stunning photos</h2>
        <div className="row mt-4">
          {/* Preset 1 */}
          <div className="col-md-4">
            <div className="preset-card">
              <div className="image-comparison-container">
                <img
                  src={presetImage1Before}
                  alt="Preset 1 Before"
                  className="before-image"
                />
                <img
                  src={presetImage1After}
                  alt="Preset 1 After"
                  className="after-image"
                />
                <div className="drag-line"></div>
              </div>
              <h4>Preset 1</h4>
              <p>This preset is perfect for brightening portraits and creating warm, vibrant tones.</p>
              <a href="#download" className="btn btn-success">Download</a>
            </div>
          </div>
          {/* Preset 2 */}
          <div className="col-md-4">
            <div className="preset-card">
              <div className="image-comparison-container">
                <img
                  src={presetImage2Before}
                  alt="Preset 2 Before"
                  className="before-image"
                />
                <img
                  src={presetImage2After}
                  alt="Preset 2 After"
                  className="after-image"
                />
                <div className="drag-line"></div>
              </div>
              <h4>Preset 2</h4>
              <p>Bring out the deep, moody tones in your photos with this cinematic preset.</p>
              <a href="#download" className="btn btn-success">Download</a>
            </div>
          </div>
          {/* Preset 3 */}
          <div className="col-md-4">
            <div className="preset-card">
              <div className="image-comparison-container">
                <img
                  src={presetImage3Before}
                  alt="Preset 3 Before"
                  className="before-image"
                />
                <img
                  src={presetImage3After}
                  alt="Preset 3 After"
                  className="after-image"
                />
                <div className="drag-line"></div>
              </div>
              <h4>Preset 3</h4>
              <p>This preset enhances natural light, perfect for outdoor and landscape photography.</p>
              <a href="#download" className="btn btn-success">Download</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presets;
