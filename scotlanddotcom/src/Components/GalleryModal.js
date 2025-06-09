// src/components/ImageModal.js
import React from 'react';
import './ImageModal.css'; 

const ImageModal = ({ imageUrl, altText, description, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>
          &times;
        </button>
        <img src={imageUrl} alt={altText} className="modal-image" />
        <div className="modal-details">
          <h3>{altText}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;