import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import sunsetImage1 from '../assets/images/gallery/D_AFTER_1024-600x600.jpg';
import sunsetImage2 from '../assets/images/gallery/D_AFTER_1024-600x600.jpg';
import mountainImage1 from '../assets/images/gallery/D_AFTER_1024-600x600.jpg';
import mountainImage2 from '../assets/images/gallery/D_AFTER_1024-600x600.jpg';
import oceanImage1 from '../assets/images/gallery/D_AFTER_1024-600x600.jpg';
import oceanImage2 from '../assets/images/gallery/D_AFTER_1024-600x600.jpg';
import forestImage1 from '../assets/images/gallery/D_AFTER_1024-600x600.jpg';
import forestImage2 from '../assets/images/gallery/D_AFTER_1024-600x600.jpg';

const RelatedImagesPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [relatedImages, setRelatedImages] = useState([]);
  const [modalImageIndex, setModalImageIndex] = useState(null);

  // Mapping categories to related images
  const relatedImagesMap = {
    BeautifulSunset: [sunsetImage1, sunsetImage2, sunsetImage2, sunsetImage2, sunsetImage2, sunsetImage2, sunsetImage2, sunsetImage2, sunsetImage2],
    MajesticMountains: [mountainImage1, mountainImage2],
    OceanViews: [oceanImage1, oceanImage2],
    ForestLandscapes: [forestImage1, forestImage2],
  };

  useEffect(() => {
    if (relatedImagesMap[category]) {
      setRelatedImages(relatedImagesMap[category]);
    } else {
      navigate('/'); // Redirect to home if the category is not found
    }
  }, [category, navigate]);

  // Open modal with selected image index
  const openModal = (index) => {
    setModalImageIndex(index);
  };

  // Close modal
  const closeModal = () => {
    setModalImageIndex(null);
  };

  // Navigate to next image
  const nextImage = () => {
    setModalImageIndex((prevIndex) => (prevIndex + 1) % relatedImages.length);
  };

  // Navigate to previous image
  const prevImage = () => {
    setModalImageIndex((prevIndex) => (prevIndex - 1 + relatedImages.length) % relatedImages.length);
  };

  return (
    <div style={{ margin: 0, padding: 0 }}> {/* Inline style added here */}
      <div className="related-images-grid"> {/* Apply the class here */}
        {relatedImages.map((src, index) => (
          <div key={index} className="gallery-item" onClick={() => openModal(index)}>
            <img src={src} alt={`Related Image ${index + 1}`} />
          </div>
        ))}
      </div>
  
      {modalImageIndex !== null && (
        <div className="modal" style={{ display: 'flex' }}>
          <div className="modal-content">
            <img src={relatedImages[modalImageIndex]} alt={`Modal Image ${modalImageIndex + 1}`} />
            <div className="modal-caption">
              <button className="prev-btn" onClick={prevImage}>❮</button>
              <button className="next-btn" onClick={nextImage}>❯</button>
            </div>
          </div>
          <div className="image-count-container">
            {modalImageIndex + 1} / {relatedImages.length}
          </div>
          <button className="close-btn" onClick={closeModal}>×</button>
        </div>
      )}
    </div>
  );
};

export default RelatedImagesPage;
