import React from 'react';
import logo from "../Assets/pinterest-logo.png";
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div className='w-full z-50 bg-white fixed flex justify-between items-center px-5 py-4 h-20'>
      <div className='flex justify-evenly items-center space-x-4'>
        <span className='flex items-center space-x-1'>
            <img src={logo} className='w-8 h-8' alt='pinterest' />
            <span className='text-red-600 text-[20px] font-medium'>Pinterest</span>
        </span>
        <div className='flex items-center text-base font-medium space-x-4'>
            <Link className='p-2 rounded-md hover:bg-zinc-200/80' href="/today">Today</Link>
            <Link className='p-2 rounded-md hover:bg-zinc-200/80' href="/watch">Watch</Link>
            <Link className='p-2 rounded-md hover:bg-zinc-200/80' href="/explore">Explore</Link>
        </div>
      </div>
      <div className='flex items-center space-x-8'>
        <div className='flex items-center text-base font-medium space-x-4'>
            <Link className='p-2 rounded-md hover:bg-zinc-200/80' href="/about">About</Link>
            <Link className='p-2 rounded-md hover:bg-zinc-200/80' href="/business">Business</Link>
            <Link className='p-2 rounded-md hover:bg-zinc-200/80' href="/blog">Blog</Link>
        </div>
        <div className='flex items-center text-base font-medium space-x-2'>
           <button className='bg-red-600 hover:bg-red-700 px-3 py-2 rounded-full text-white'>Log in</button>
           <button className='bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-full text-black'>Sign up</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
