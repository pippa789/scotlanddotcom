// src/components/ArtPieceCard.js
import React, { useState } from 'react';
import ImageModal from './ImageModal';
import '../index.css'; // Global styles
import './ArtPieceCard.css'; // Specific styles for the card

// IMPORTANT: Replace with YOUR actual Cloudflare Account Hash
const CLOUDFLARE_ACCOUNT_HASH = 'abcdef123456'; 

// Helper function to construct Cloudflare Image URLs
// It's defined here because it's specific to how this component gets image URLs.
const getCloudflareImageUrl = (imageId, variant = 'public') => {
  if (!imageId || !CLOUDFLARE_ACCOUNT_HASH) {
    console.warn(`Missing image ID or Cloudflare Account Hash. Using fallback.`);
    return 'https://placehold.co/400x300/e0e0e0/555555?text=Image+Missing'; 
  }
  return `https://imagedelivery.net/${CLOUDFLARE_ACCOUNT_HASH}/${imageId}/${variant}`;
};


function ArtPieceCard({ id, title, description, cloudflareImageId, date, medium }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false); 

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  // Generate the specific Cloudflare Image URLs for this painting instance
  const thumbnailUrl = getCloudflareImageUrl(cloudflareImageId, 'thumbnail'); 
  const fullImageUrl = getCloudflareImageUrl(cloudflareImageId, 'public'); 

  return (
    <div className='art-piece-card'>
      <img
        src={thumbnailUrl} 
        alt={title}
        loading="lazy" 
        onClick={openModal} 
        className="art-piece-thumbnail"
      />

      <div className="art-piece-info">
        <h3>{title}</h3> 
        <p>{description}</p> 
        <small>{medium} - {date}</small>
        
        <button 
          className='modal-button'
          onClick={openModal}
          onMouseEnter={() => setButtonHovered(true)}
          onMouseLeave={() => setButtonHovered(false)}
          style={{ opacity: buttonHovered ? 1 : 0.6, transition: 'opacity 0.3s ease' }} 
        >
          More info
        </button>
      </div>

      {isModalOpen && (
        <ImageModal
          imageUrl={fullImageUrl} 
          altText={title}
          description={description}
          onClose={closeModal}
        />
      )}
    </div>
  );
}

export default ArtPieceCard;