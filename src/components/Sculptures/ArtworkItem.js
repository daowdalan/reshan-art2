import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

const ArtworkItem = ({ artwork, handleProjectClick }) => {
  return (
    <li className="relative overflow-hidden rounded-sm shadow-md group cursor-pointer transition-transform transform hover:scale-105">
      <div className="relative w-full h-0 pb-[120%]">
        <Image
          src={artwork.images[0].image}
          alt={artwork.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover rounded-sm"
          onClick={() => handleProjectClick(artwork.id)}
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h5 className="text-white text-sm font-semibold">{artwork.title}</h5>
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
