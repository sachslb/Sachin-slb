import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io";

import { BiLogoMongodb } from "react-icons/bi";
import { IoLogoReact } from "react-icons/io5";
import { IoLogoNodejs } from "react-icons/io5";
import { SiExpress } from "react-icons/si";

import { ReactTyped } from "react-typed";

import pic from "../../public/logo.jpeg"







const Home = () => {
  return (
    <>
      <div 
  name="Home" 
  className="relative w-full bg-cover bg-center pt-16" 
  style={{ backgroundImage: `url(${pic})` }}
>
  {/* Overlay for better text visibility */}
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>

  {/* Content Container */}
  <div className="relative max-w-screen-2xl container mx-auto px-4 md:px-20 py-20 text-white">
    <div className="flex flex-col md:flex-row">
      {/* Text Content Section */}
      <div className="md:w-1/2 mt-12 md:mt-24 space-y-4 order-2 md:order-1">
        <span className="text-xl">Welcome To My Feed</span>
        <div className="flex flex-wrap items-center space-x-2 text-2xl md:text-4xl">
          <h1>Hello, I'm a</h1>
          <ReactTyped
            className="text-red-500 font-bold"
            strings={["Developer", "Editor", "Programmer", "Graphic Designer", "Coder"]}
            typeSpeed={40}
            backSpeed={50}
            loop={true}
          />
        </div>
        <p className="text-sm md:text-md text-justify">
          Hi, I'm a developer. On this website, you can find amazing website links and tools. If you want to watch the latest movies, 
          we provide those links too. Discover the best coding videos, project links, blogs for coding, technical news and 
          information, coding courses, hacking tips, and much more. Keep exploring!
        </p>
        {/* Social Media and Technologies */}
        <div className="flex justify-between">
          <div className="space-y-2">
            <h1 className="font-bold">Available On</h1>
            <ul className="flex space-x-3">
              <li><a href="/" target="blank"><FaFacebook className="text-2xl cursor-pointer" /></a></li>
              <li><a href="/" target="blank"><FaInstagram className="text-2xl cursor-pointer" /></a></li>
              <li><a href="https://www.linkedin.com/in/sachinmerwade/" target="blank"><IoLogoLinkedin className="text-2xl cursor-pointer" /></a></li>
              <li><a href="/" target="blank"><IoLogoYoutube className="text-2xl cursor-pointer" /></a></li>
            </ul>
          </div>
          <div className="space-y-2">
            <h1 className="font-bold">Currently Working On</h1>
            <div className="flex space-x-5">
              <BiLogoMongodb className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
              <IoLogoReact className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
              <IoLogoNodejs className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
              <SiExpress className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
            </div>
          </div>
        </div>
      </div>
      {/* Empty Section for Layout Balancing */}
      <div className="md:w-1/2"></div>
    </div>
  </div>
</div>



    </>
  );
};

export default Home;
