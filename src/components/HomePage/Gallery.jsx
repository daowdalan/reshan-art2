"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import artworksData from '@/app/data/artworksData';
import Slidering from './Slidering';

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
        <Slidering />
     
    </div>
  );
};

export default ArtGallery;
