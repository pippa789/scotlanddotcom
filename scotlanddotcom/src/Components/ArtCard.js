// src/components/ArtPieceCard.js
import React, { useState } from 'react';
import GalleryModal from '../Components/GalleryModal';
import '../index.css';

// IMPORTANT: Replace with YOUR actual Cloudflare Account Hash
const CLOUDFLARE_ACCOUNT_HASH = 'DZ7exJnusRX3PwDZHpesnA'; 

// Helper function to construct Cloudflare Image URLs
// It's defined here because it's specific to how this component gets image URLs.
const getCloudflareImageUrl = (imageId, variant = 'fullViewVariant, thumbnailVariant') => {
  if (!imageId || !CLOUDFLARE_ACCOUNT_HASH) {
    console.warn(`Missing image ID or Cloudflare Account Hash. Using fallback.`);
    return 'https://placehold.co/400x300/e0e0e0/555555?text=Image+Missing'; 
  }
  return `https://imagedelivery.net/${CLOUDFLARE_ACCOUNT_HASH}/${imageId}/${variant}`;
};


function ArtCard({ id, title, description, cloudflareImageId, date, medium, thumbnailVariant }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false); 


  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  // Generate the specific Cloudflare Image URLs for this painting instance
  const thumbnailUrl = getCloudflareImageUrl(cloudflareImageId, 'thumbnailVariant'); 
  const fullImageUrl = getCloudflareImageUrl(cloudflareImageId, 'public'); 

  return (
    <div className=''>
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
        <GalleryModal
          imageUrl={fullImageUrl} 
          altText={title}
          description={description}
          onClose={closeModal}
        />
      )}
    </div>
  );
}

export default ArtCard;