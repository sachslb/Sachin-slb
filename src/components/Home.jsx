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
      <div name= "Home" className="  max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome To My Feed</span>
            <div className="flex space-x-2 text-2xl md:text-4xl ">
            <h1>Hello, I'm a </h1>
            <ReactTyped
          className="text-red-700 font-bold"
          strings={["Developer","Editor","Programmer","Graphic Designer", "Coder"]}
          typeSpeed={40}
          backSpeed={50}
          loop= {true}
        />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              Hi i'm Sachin and i am developer. In this website you can get amaning websits links and tools. 
              You want watch latest movies that link also we provided you. Best coding videos and projects link ,blog for coding 
              technical news and information , coding course , hacking tips etc  you can get in this website keep searching...
            </p>
            <br />you can get in this website

            {/* social meadia icons */}
            <div className="flex justify-between">
            <div className="space-y-2">
              <h1 className="font-bold">Available On</h1>
              <ul className="flex space-x-3"> 
              <li>
                <a href="https://www.facebook.com/sachin.merwade.770" target="blank">
              <FaFacebook className="text-2xl cursor-pointer"/>
              </a>
              </li>
              <li>
                <a href="https://www.instagram.com/sachin.merwade/" target="blank">
                <FaInstagram className="text-2xl cursor-pointer"/>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/sachinmerwade/" target="blank">
                <IoLogoLinkedin className="text-2xl cursor-pointer"/>
                </a>
              </li>
              <li>
                <a href="/" target="blank">
                <IoLogoYoutube className="text-2xl cursor-pointer"/>
                </a>
              </li>
              
              </ul>
              
            </div>
              <div className="space-x-3">
              <div className="space-y-2">
              <h1 className="font-bold">Curently Working On</h1>
              <div className="flex space-x-5" >
              <BiLogoMongodb className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]"/>
              <IoLogoReact className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]"/>
              <IoLogoNodejs className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]"/>
              <SiExpress className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]"/>




              </div>
              
            </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-16 order-1">
          <img src={pic} className=" rounded-full md:w-[400px] h-[400px] " alt="" />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Home;
