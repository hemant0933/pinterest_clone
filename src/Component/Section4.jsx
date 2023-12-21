import React from 'react';
import {otherImage} from "../Assets/constants"

const Section4 = () => {
  return (
    <div className='w-full h-[100vh] flex justify-center items-center'>
        <div className='w-1/2 h-full'>
            <img src={otherImage[0]} alt='' className='w-full h-full object-cover'/>
        </div>
        <div className='w-1/2 h-full bg-[#FFDFE9] flex flex-col items-center justify-center'>
            <h1 className='w-[440px] h-[160px] text-center leading-tight text-[60px] text-[#C32F00] font-semibold'>
                See it, make it, try it, do it
            </h1>
            <p className='w-[440px] h-[96px] text-center leading-tight text-[24px] mt-[16px] text-[#C32F00]'>
                The best part of Pinterest is discovering new things and ideas from people around the world.
            </p>
            <button className='w-[93px] h-[48px] mt-[24px] rounded-full px-[16px] text-[#FFDFE9] bg-[#C32F00] hover:bg-[#84402b]'>
                Explore
            </button>
        </div>
      
    </div>
  );
}

export default Section4;
