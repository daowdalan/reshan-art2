"use client";
import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from 'next/image';
import { useRouter } from "next/navigation";

const ReusableCarousel = ({ data, responsiveSettings }) => {
    const router = useRouter();

    const handleProjectClick = (id) => {
        router.push(`/sculptures/${id}`);
    };

    return (
        <div className="my-2 px-2">
            <Carousel responsive={responsiveSettings}>
                {data.map((item, index) => (
                    <div 
                        key={index} 
                        className="flex flex-col justify-start items-center h-full m-1 cursor-pointer"> {/* Added margin here */}
                        <Image
                            src={item.images[0].image}
                            alt={item.title}
                            height={450}
                            width={900}
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 70vw, (max-width: 1024px) 66vw, 50vw"
                            onClick={() => handleProjectClick(item.id)}
                        />
                        <div className="w-full mt-2 text-center">
                            <h2 className="text-sm line-clamp-2">{item.title}</h2>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default ReusableCarousel;
