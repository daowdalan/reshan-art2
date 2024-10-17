import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

const ArtworkItem = ({ artwork, handleProjectClick }) => {
  return (
    <li
      className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl"
      onClick={() => handleProjectClick(artwork.id)}
      aria-label={`View details of ${artwork.title}`}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleProjectClick(artwork.id)}
    >
      {/* Image with Fixed Aspect Ratio */}
      <div className="relative w-full">
        <Image
          src={artwork.images[0].image}  // Ensure this path is correct
          alt={artwork.title}
          width={900}  // Image width in pixels
          height={600}  // Image height to maintain a 3:2 aspect ratio
          layout="responsive"  // Automatically calculates the aspect ratio
          objectFit="cover"
          quality={100}
          className="rounded-lg"
        />
      </div>

      {/* Text Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
        <div className="absolute inset-x-0 bottom-0 p-4 text-white">
          <h5 className="text-lg font-semibold">{artwork.title}</h5>
        </div>
      </div>
    </li>
  );
};

ArtworkItem.propTypes = {
  artwork: PropTypes.object.isRequired,
  handleProjectClick: PropTypes.func.isRequired,
};

export default ArtworkItem;
