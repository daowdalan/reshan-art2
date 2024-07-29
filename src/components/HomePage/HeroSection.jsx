import React from "react";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa6";
import { SlSocialInstagram } from "react-icons/sl";
import { IoLogoYoutube } from "react-icons/io5";


const HeroSection = () => {
  return (
    <section className="h-screen lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12 h-full">
        <div className="col-span-1 hidden lg:flex flex-col items-center justify-center text-black">
          <a href="https://www.facebook.com/reshanroman.amude" target="_blank" className="mb-10">
            <FaFacebookF className="w-10 h-10" />
          </a>
          <a href="#" className="mb-10">
            <SlSocialInstagram className="w-10 h-10" />
          </a>
          <a href="#" className="mb-10">
            <IoLogoYoutube className="w-10 h-10" />
          </a>
        </div>

        <div className="col-span-7 sm:col-span-7 place-self-center text-center sm:text-left justify-self-start">
          <h1 className="text-black mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-purple-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <span>Reshan</span>
          </h1>
          <p className="text-[#000000] text-base sm:text-lg mb-6 lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptuous.
          </p>
          <div>
          </div>
        </div>
        
        <div className="col-span-4 place-self-center lg:mt-0 sm:mt-40 ">
          <div className="rounded-full bg-[#535353] w-[350px] h-[350px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/resh.jpg"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
