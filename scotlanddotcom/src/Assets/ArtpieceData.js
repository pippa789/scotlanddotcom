// src/data/artPieces.js

const artPiecesData = [
    {
      id: 'dunoon-123', // Unique ID for React key prop
      title: 'Hopeful Summer (Dunoon)',
      description: 'This is a small painting created after a long illness, hopeful for summer. Captured the serene landscape with a touch of personal reflection.',
      cloudflareImageId: 'your-dunoon-image-id', // <<< REPLACE with your actual Cloudflare Image ID
      date: '2025-06-01',
      medium: 'Oil on Canvas',
    },
    {
      id: 'abstract-sunset-456',
      title: 'Abstract Sunset',
      description: 'A vibrant abstract piece inspired by Scottish sunsets, featuring bold strokes and warm colors.',
      cloudflareImageId: 'your-abstract-sunset-image-id', // <<< REPLACE with your actual Cloudflare Image ID
      date: '2024-11-20',
      medium: 'Acrylic',
    },
    {
      id: 'loch-lomond-dawn-789',
      title: 'Loch Lomond Dawn',
      description: 'A tranquil depiction of dawn breaking over Loch Lomond, with misty waters and a soft sky.',
      cloudflareImageId: 'your-loch-lomond-image-id', // <<< REPLACE with your actual Cloudflare Image ID
      date: '2023-09-10',
      medium: 'Watercolor',
    },
    // Add more of your art pieces here, ensuring unique 'id' and 'cloudflareImageId' for each
  ];
  
  export default artPiecesData;