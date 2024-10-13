"use client";
import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import artworksData from "../../data/artworksData";

const SculpturePage = () => {
  const { id } = useParams();
  const artwork = artworksData.find(item => item.id === parseInt(id));

  if (!artwork) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen m-20">
        <h2 className="text-black">Artwork not found</h2>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row items-start justify-between min-h-screen m-12 space-y-4 md:space-y-0 md:space-x-8">
      {/* Left Side: Description */}
      <div className="w-full md:w-1/2 md:sticky top-10">
        <div className="mb-4">
          <h2 className="text-black text-3xl font-bold">{artwork.title}</h2>
          <p className="text-black text-lg">{artwork.description}</p>
        </div>
      </div>
      
      {/* Right Side: Images */}
      <div className="w-full md:w-1/2 md:h-screen md:overflow-y-auto">
        {artwork.images.map((img, index) => (
          <div
            key={index}
            className="relative w-full mb-4 bg-gray-300"  // Apply grey background here
          >
            <Image
              width={500}
              height={400}
              layout="responsive"
              src={img.image}
              alt={`${artwork.title} image ${index + 1}`}
              className="transition-opacity duration-1000 ease-in-out opacity-0"
              onLoad={(e) => e.target.classList.remove('opacity-0')}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SculpturePage;
