"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import artworksData from '@/app/data/artworksData';
import ArtSlider from '@/components/ArtSlider';

const ArtGallery = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const featuredArtworks = artworksData.filter(art => art.featured);

  return (
    <div className="max-w-auto mx-auto py-10 text-black">
      <h1 className="text-3xl font-bold mb-6">Featured Collections</h1>
      {isSmallScreen ? (
        <ArtSlider />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {featuredArtworks.map((art, index) => (
            <div key={index} className="bg-grey rounded-sm overflow-hidden cursor-pointer">
              <Image
                className="object-cover"
                src={art.images[0].image}
                alt={art.title}
                width={350}
                height={250}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                
              />
              <div className="py-2">
                <h2 className="text-sm font-normal">{art.title}</h2>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ArtGallery;
