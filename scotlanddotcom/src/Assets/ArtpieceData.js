// src/data/artPieces.js

const artPiecesData = [
    {
      id: 'kilkregan', // Unique ID for React key prop
      title: 'Spring in Kilkregan',
      description: 'This piece was created on a beautiful spring day spent with good friends.',
      cloudflareImageId: '025c35d3-0a9a-42f4-6dec-f09fe408b900', // <<< REPLACE with your actual Cloudflare Image ID
      date: '2025-06-01',
      medium: 'Water Colour',
      thumbnailVariant: 'landscape', // Or 'my_custom_grid_variant'
      fullViewVariant: 'landscape',    // Or 'high_res_modal_variant'
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