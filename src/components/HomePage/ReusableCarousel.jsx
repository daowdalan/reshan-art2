"use client";
import React, { useState, useEffect } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from 'next/image';
import { useRouter } from "next/navigation";

const ReusableCarousel = ({ data, responsiveSettings }) => {
    const [isClient, setIsClient] = useState(false);  // State to track if we're on the client side
    const [progress, setProgress] = useState(0);
    const router = useRouter();

    const CustomLeftArrow = ({ onClick }) => {
        return (
          <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-gray-900 text-white w-10 h-10 flex items-center justify-center rounded-full cursor-default lg:hover:bg-gray-700 lg:transition-colors lg:duration-300"
          onClick={onClick}
          >
            &lt;
          </button>
        );
      };
      
      const CustomRightArrow = ({ onClick }) => {
        return (
          <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-gray-900 text-white w-10 h-10 flex items-center justify-center rounded-full cursor-default lg:hover:bg-gray-700 lg:transition-colors lg:duration-300"
          onClick={onClick}
          >
            &gt;
          </button>
        );
      };

    // Use effect to detect if we're on the client side
    useEffect(() => {
        setIsClient(true);  // Now we're in the browser
    }, []);

    const handleProjectClick = (id) => {
        router.push(`/sculptures/${id}`);
    };

    // Function to update progress based on the current slide position
    const handleBeforeChange = (previousSlide, { currentSlide, slidesToShow, totalItems }) => {
        const totalScrollableItems = totalItems - slidesToShow;
        const newProgress = Math.min((currentSlide / totalScrollableItems) * 100, 100);
        setProgress(newProgress);
    };

    if (!isClient) {
        return null;  // If we're rendering on the server, return nothing
    }

    return (
        <div className="my-2 px-2 relative">
            {/* Carousel Component */}
            <Carousel
                responsive={responsiveSettings}
                swipeable={true}
                draggable={isClient && window.innerWidth <= 1024}  
                showDots={false}
                arrows={true}
                customLeftArrow={<CustomLeftArrow />}
                customRightArrow={<CustomRightArrow />}
                infinite={false}   // Disable infinite scrolling for progress to make sense
                keyBoardControl={true}
                beforeChange={handleBeforeChange}  // Trigger progress update
                afterChange={(previousSlide, { currentSlide, slidesToShow, totalItems }) => {
                    const totalScrollableItems = totalItems - slidesToShow;
                    const newProgress = Math.min((currentSlide / totalScrollableItems) * 100, 100);
                    setProgress(newProgress);
                }}
                containerClass="carousel-container"
                itemClass="carousel-item-padding-40-px"
            >
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col justify-start items-center h-full m-1 cursor-pointer"
                        onClick={() => handleProjectClick(item.id)}  // Navigate to project
                    >
                        {/* Check if image exists before rendering */}
                        {item.images && item.images.length > 0 ? (
                            <Image
                                src={item.images[0].image}  // Render the first image in the array
                                alt={item.title}
                                height={450}
                                width={900}
                                sizes="(max-width: 640px) 100vw, (max-width: 768px) 70vw, (max-width: 1024px) 66vw, 50vw"
                                className="rounded-lg shadow-lg transition-transform duration-300"  // Removed hover effect
                            />
                        ) : (
                            <div className="w-full h-96 bg-gray-300 flex items-center justify-center">
                                <p className="text-gray-500">No image available</p>
                            </div>
                        )}
                        
                        {/* Artwork Title */}
                        <div className="w-full mt-2 text-center">
                            <h2 className="text-sm font-semibold text-gray-800 line-clamp-2">
                                {item.title}
                            </h2>
                        </div>
                    </div>
                ))}
            </Carousel>

            {/* Progress Bar */}
            <div className="w-full h-2 bg-gray-200 mt-4">
                <div
                    className="h-full bg-blue-500 transition-all duration-300"
                    style={{ width: `${progress}%` }}  
                />
            </div>
        </div>
    );
};

export default ReusableCarousel;
