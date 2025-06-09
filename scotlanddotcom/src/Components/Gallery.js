// src/components/Gallery.js
import React from 'react';
import ArtPieceCard from './ArtPieceCard'; // Import the reusable ArtPieceCard
import artPiecesData from '../data/artPieces'; // Import your central art data
import './Gallery.css'; // General gallery grid styling

function Gallery() {
  return (
    <div className="gallery-container">
      <h1>My Art Portfolio</h1>
      <div className="art-pieces-grid">
        {artPiecesData.length === 0 ? (
          <p className="no-art-message">No art pieces found. Please add data to src/data/artPieces.js</p>
        ) : (
          // --- HERE'S THE MAP FUNCTION ---
          artPiecesData.map((piece) => (
            <ArtPieceCard
              key={piece.id} // IMPORTANT: 'key' prop helps React efficiently update lists
              id={piece.id}
              title={piece.title}
              description={piece.description}
              cloudflareImageId={piece.cloudflareImageId}
              date={piece.date}
              medium={piece.medium}
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