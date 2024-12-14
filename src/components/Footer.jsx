import React from 'react';
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
    <>
        <hr />
    <footer className=' py-12 '>
            <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
              <div  className=' flex flex-col items-center justify-center '>
                <div className='flex space-x-4'>
                <FaFacebook size={24}/>
                <FaInstagram size={24}/>
                <IoLogoLinkedin size={24}/>
                <IoLogoYoutube size={24}/>
                </div>
                <div className='mt-8 border-t border-gray-700 pt-8 flex flex-col items-center'>
                  <p>&copy; All rights reserved by SLB  </p>
                  <p className='font-bold'>Developed By SLB Tech</p>
                </div>
                </div>  

            </div>
    </footer>
    </>
  );
}

export default Footer;
