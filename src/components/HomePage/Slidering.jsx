"use client"
import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import artworksData from '@/app/data/artworksData'; // Ensure the path is correct
import Image from 'next/image';

function Slidering() {

    const featuredArtworks = artworksData.filter(art => art.featured);

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 4    
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className="my-10 px-2 ">
            <Carousel responsive={responsive}
            
            >
                {featuredArtworks.map((artwork, index) => (
                    <div key={index} className="flex justify-center w-full h-full p-1">
                        <Image
                        src={artwork.images[0].image}
                        alt="hero image"
                        width={550}
                        height={550}
                        style={{
                            width: "auto",
                            height: "100%"
                        }}
                        />
                        
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default Slidering;
