"use client";
import React from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import artworksData from '@/app/data/artworksData';

const Slideshow = () => {
  // Filter featured artworks
  const featuredArtworks = artworksData.filter(art => art.featured);

  // Custom properties for zoom effect slideshow
  const zoomInProperties = {
    indicators: true,
    scale: 1.2,
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    prevArrow: (
      <div className="w-8 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#2e2e2e">
          <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
        </svg>
      </div>
    ),
    nextArrow: (
      <div className="w-8 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#2e2e2e">
          <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
        </svg>
      </div>
    ),
  };

  return (
    <div className="my-10 mx-auto max-w-screen-lg">
      <Zoom {...zoomInProperties}>
        {featuredArtworks.map((artwork, index) => (
          <div key={index} className="flex justify-center w-full h-full">
            <img
              className="w-3/4 object-cover rounded-lg shadow-xl"
              src={artwork.images[0].image}
              alt={artwork.title}
            />
          </div>
        ))}
      </Zoom>
    </div>
  );
};

export default Slideshow;
