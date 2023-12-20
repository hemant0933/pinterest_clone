import React from 'react';

const SaveIdeassection = () => {
  return (
    <div className='w-full h-[100vh] bg-[#ccf6ee] flex items-center justify-center'>
        <div className='w-1/2 h-full flex items-center justify-center flex-col space-y-5 text-[#006b6c]'>
            <h1 className='text-center text-[60px] leading-tight font-bold'>Save ideas you like</h1>
            <p className='text-center font-extralight leading-tight text-[24px]'>Collect your favorites so you can <br/> get back to them later.</p>
            <button className='w-[93px] h-[43px] rounded-full text-[#ccf6ee] bg-[#006b6c]'>Explore</button>
        </div>
        <div className='w-1/2 h-full relative flex items-center justify-center p-2 text-[#006b6c]'>
            <div className='w-80 h-80 absolute flex items-center justify-center text-[#fff] text-left font-semibold p-4 text-5xl top-10 left-0 bg-slate-600 rounded-[50px]'>
              <p>Fern future home vibes</p> 
            </div>
            <div className='w-48 h-48 absolute flex items-end  text-[#fff] text-left p-4 text-2xl font-medium top-20 right-4 bg-amber-600 rounded-[50px]'>
              <p>My Scandinavian bedroom</p>
            </div>
            <div className='w-44 h-48 absolute flex items-end text-[#fff] text-left py-8 px-4 text-xl font-medium bottom-52 right-44 bg-fuchsia-500 rounded-[50px]'>
              The deck of my dreams
            </div>
            <div className='w-52 h-52 absolute flex items-end justify-center text-[#fff] text-left p-4 font-medium text-3xl bottom-10 right-96 bg-green-600 rounded-[50px]'>
              Serve my drinks in style
            </div>
        </div>
       
      
    </div>
  );
}

export default SaveIdeassection;
