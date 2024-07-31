import React from "react";
import Image from "next/image";
import MainPic from "../../../public/images/reshan.jpg";

const HeroSection = () => {
  return (
    <section className=" flex items-center justify-center bg-gray-500">
      <div className="relative">
        <Image
          placeholder="blur"
          src={MainPic}
          alt="hero image"
          height={600}
          width={1600}
          quality={100}
        />
      </div>
    </section>
  );
};

export default HeroSection;
