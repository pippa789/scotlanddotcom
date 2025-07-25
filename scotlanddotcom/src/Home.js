import React from 'react';
import './index.css';
import artpieceData from './Assets/ArtpieceData'
import './home.css'

function Home() {
  const CLOUDFLARE_IMAGES_BASE_URL = 'https://imagedelivery.net/DZ7exJnusRX3PwDZHpesnA';
    // For this example, let's pick the 'Summer Evening' piece by its ID.
    // You can change 'summer-evening' to the ID of any other piece you want.
    const featuredArtPiece = artpieceData.find(piece => piece.id === 'seal');
    let imageUrl = '';
// If the art piece isn't found, we'll just skip rendering the image div.
    // This keeps it simple and avoids a placeholder.
    
    if (featuredArtPiece) {
        imageUrl = `${CLOUDFLARE_IMAGES_BASE_URL}/${featuredArtPiece.cloudflareImageId}/${featuredArtPiece.homeImageVariant}`;
    }

  return (
    <>
    <div className='title'> 
      Welcome to Original Scotland </div> 
        <div className='title'> I'm Pippa Bullock, an artist living and working amidst the magic of Scotland's West Coast and Hebrides. Here, the oldtimers say the veil between our world and the divine is "thin," </div>
       {/* Conditionally render the image div ONLY if imageUrl is available */}
            {imageUrl && (
                <div
                    className="imgbox"
                    style={{ backgroundImage: `url('${imageUrl}')` }}
                
                    title={featuredArtPiece ? featuredArtPiece.description : ''}
                >
                    {/* No content inside this div, it's purely for background graphic */}
                </div>
            )}

        <div className='title'>and it's in this space that I create. For me, painting a landscape isn't about replicating a scene; it's about interpreting nature's voice and sharing that conversation with you through each piece I create. Browse my gallery to discover more.</div>
      </>   
  )

}

export default Home