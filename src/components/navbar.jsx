import React from 'react';
import pic from "../../public/logo.jpeg"
import { MdMenuOpen } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { Link } from 'react-scroll';




const navbar = () => {
  const [menu, setMenu] = useState(false)
  const navitems=[
    {
      id:1,
      text:'Home'
    },
    {
      id:2,
      text:'About'
    },
    {
      id:3,
      text:'Tools'
    },
    {
      id:4,
      text:'Courses'
    },
    {
      id:5,
      text:'Contact'
    },
  ]
  return (
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md fixed top-0 left-0 right-0 bg-white'>
      <div className='flex justify-between items-center h-16'>
        <div className='flex space-x-2'>
            <img src={pic} className='h-12 w-12 rounded-full' alt="" />
            <h1 className='font-semibold text-xl cursor-pointer'>
                Sachin <span className='text-cyan-600 text-2xl'>SLB</span>
            <p className='text-sm'>Developer</p>
            </h1>
        </div>

        {/* desktop navbar */}
        <div >
            <ul className='hidden md:flex space-x-8'>
                {
                  navitems.map(({id,text})=>(
                    <li className='hover:scale-105 duration-150 cursor-pointer' key={id} >
                      <Link to={text} 
                      smooth={true}
                      duration={500}
                      offset={-70}
                      activeClass='active'
                      >
                      {text}
                      </Link>
                    </li>
                  ))
                }
            </ul>
            <div onClick={()=>setMenu(!menu)} className='md:hidden'>
            {menu?<IoMdClose size={24} />:<MdMenuOpen size={24} />}
            
            </div>
        </div>
      </div>
        {/* //mobile navbar */}

        {
          menu && (
            <div>

        <ul className='md:hidden flex flex-col items-center justify-center space-y-2 '>
        {
                  navitems.map(({id,text})=>(
                    <li className='hover:scale-105 duration-150 cursor-pointer' key={id}>
                      <Link
                       onClick={()=>setMenu(!menu)}
                      to={text} 
                      smooth={true}
                      duration={500}
                      offset={-70}
                      activeClass='active'
                      >
                      {text}
                      </Link>
                    </li>
                  ))
                }
        </ul>
      </div>

          )
        }
      
    </div>
  );
}

export default navbar;
