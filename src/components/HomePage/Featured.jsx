import React from 'react';
import ReusableCarousel from './ReusableCarousel';
import artworksData from '@/app/data/artworksData'; // Ensure the path is correct

// Filter only featured artworks
const featuredArtworks = artworksData.filter(art => art.featured === true);

const responsiveSettings = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 4
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 600 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 600, min: 0 },
        items: 1
    }
};

const Featured = () => {
    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto">
                {/* Section Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">
                    Featured Collections
                </h2>
                
                {/* Carousel Component with Progress Bar */}
                <ReusableCarousel
                    data={featuredArtworks}
                    responsiveSettings={responsiveSettings}
                />
            </div>
        </section>
    );
};

export default Featured;
