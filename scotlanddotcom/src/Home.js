import React from 'react';
import './index.css';

import './home.css'
import heroAnimation from './Assets/foxes-in-the-woods.mp4';
function Home() {
 

  return (
    <div className='home-container'>
    <div className='title'> 
      Welcome to Original Scotland </div> 
        <div className='home-text'> I am Pippa Bullock, an artist living and working amidst the magic of Scotland's West Coast and Hebrides. Here, the oldtimers say the veil between our world and the divine is "thin"—and it's in this space that I paint. For me, a landscape isn't a static scene to replicate; it is a living, breathing conversation.

To share that conversation, I take my traditional en plein air watercolors and bring them to life frame-by-frame. By translating physical paper grain and bleeding paint into loopable 2D animation asset packs, I create hand-crafted visual elements ready to breathe a unique, organic soul into your indie games, films, and digital stories. </div>
       Conditionally render the image div ONLY if imageUrl is available
        <div className="hero-video-container">
  <video 
    src={heroAnimation} 
    autoPlay 
    loop 
    muted 
    playsInline 
    className="homepage-hero-video"
  />
</div>
            
        </div>   
  )

}

export default Home