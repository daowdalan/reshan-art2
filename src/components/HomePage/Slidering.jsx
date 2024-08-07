"use client"
import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import artworksData from '@/app/data/artworksData'; // Ensure the path is correct
import Image from 'next/image';
import { useRouter, useSearchParams } from "next/navigation";


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
            items: 4
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
    const router = useRouter();

    const handleProjectClick = (projectId) => {
        router.push(`/sculptures/${projectId}`);
      };

    return (
        <div className="my-4 px-2 ">
            <Carousel responsive={responsive}
            
            >
                {featuredArtworks.map((artwork, index) => (
    <div key={index} className="flex flex-col justify-start items-center w-full h-full p-1">
        <Image
            src={artwork.images[0].image}
            alt="hero image"
            height={450}
            width={900}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 70vw, (max-width: 1024px) 66vw, 50vw"
            onClick={() => handleProjectClick(artwork.id)}
        />
        <div className="w-full mt-2 text-center">
            <h2 className="text-sm line-clamp-2">{artwork.title}</h2>
        </div>
    </div>
))}


            </Carousel>
        </div>
    );
}

export default Slidering;
