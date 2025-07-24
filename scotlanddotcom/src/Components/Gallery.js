// src/components/Gallery.js
import React from 'react';
import ArtCard from './ArtCard'; // Import the reusable ArtPieceCard
import artPiecesData from '../Assets/ArtpieceData'; // Import your central art data

function Gallery() {
  return (
    <div className="gallery-container">
      <h1>My Art Portfolio</h1>
      <div className="gallery-item">
        {artPiecesData.length === 0 ? (
          <p className="no-art-message">No art pieces found. Please add data to src/data/artPieces.js</p>
        ) : (
          // --- HERE'S THE MAP FUNCTION ---
          artPiecesData.map((piece) => (
            <ArtCard
              key={piece.id} // IMPORTANT: 'key' prop helps React efficiently update lists
              id={piece.id}
              title={piece.title}
              description={piece.description}
              cloudflareImageId={piece.cloudflareImageId}
              date={piece.date}
              medium={piece.medium}
              galleryDisplayVariant={piece.galleryDisplayVariant}
              modalDisplayVariant={piece.modalDisplayVariant}
              // You can use spread operator for convenience if prop names match data keys:
              // {...piece}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Gallery;