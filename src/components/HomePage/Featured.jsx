import React from 'react';
import ReusableCarousel from './ReusableCarousel';
import artworksData from '@/app/data/artworksData'; // Ensure the path is correct

const featuredArtworks = artworksData.filter(art => art.featured ==true);

const responsiveSettings = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 4
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
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

const Featured = () => {
    return (
        <div className="py-10 text-black">
            <h1 className="text-2xl font-bold px-3">Featured Collections</h1>
            <ReusableCarousel
                data={featuredArtworks}
                responsiveSettings={responsiveSettings}
            />
        </div>
    );
};

export default Featured;
