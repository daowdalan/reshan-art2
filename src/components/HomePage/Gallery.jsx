"use client"
import React, { useState, useEffect } from 'react';
import Slidering from './Slidering';

const ArtGallery = () => {

  return(
    <div className="py-10 text-black">
      <h1 className="text-2xl font-bold px-3">Featured Collections</h1>
        <Slidering />
     
    </div>
  );
};

export default ArtGallery;
