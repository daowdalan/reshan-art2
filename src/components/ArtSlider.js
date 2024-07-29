// components/ArtSlider.js

import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import artworksData from '@/app/data/artworksData';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from './ArtSlider.module.css';

const ArtSlider = () => {
  const featuredArtworks = artworksData.filter(art => art.featured);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {featuredArtworks.map((art, index) => (
        <div key={index} className={`${styles.slide} bg-grey rounded-sm overflow-hidden cursor-pointer`}>
          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              src={art.images[0].image}
              alt={art.title}
              layout="responsive"
              width={350}
              height={250}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading="lazy"
            />
          </div>
          <div className="py-2">
            <h2 className="text-sm font-normal">{art.title}</h2>
          </div>
        </div>
      ))}
    </Slider>
  );
};


export default ArtSlider;
