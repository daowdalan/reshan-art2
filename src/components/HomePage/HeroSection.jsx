import React from "react";
import Image from "next/image";
import MainPic from "../../../public/images/reshan.jpg";

const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center bg-gray-800 h-screen pt">
      {/* Background Image */}
      <div className="absolute inset-0 ">
        <Image
          src={MainPic}
          alt="hero image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-70"
        />
      </div>

      {/* Text Overlay */}
      <div className="relative z-10 text-center text-white p-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Reshan's Sculptures</h1>
        <p className="text-lg md:text-2xl max-w-xl mx-auto">
          Explore the beauty and intricacy of handcrafted sculptures. Each piece tells a story.
        </p>
        <a
          href="#portfolio"
          className="mt-6 inline-block px-6 py-3 text-lg font-medium bg-gray-900 rounded-lg hover:bg-gray-700 "
        >
          View Portfolio
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
