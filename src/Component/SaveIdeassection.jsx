import React from 'react';

const SaveIdeassection = () => {
  return (
    <div className='w-full h-[100vh] bg-[#ccf6ee] flex items-center justify-center'>
        <div className='w-1/2 h-full flex items-center justify-center flex-col space-y-5 text-[#006b6c]'>
            <h1 className='text-center text-[60px] leading-tight font-bold'>Save ideas you like</h1>
            <p className='text-center font-thin leading-tight text-[24px]'>Collect your favorites so you can <br/> get back to them later.</p>
            <button className='w-[93px] h-[43px] rounded-full text-[#ccf6ee] bg-[#006b6c]'>Explore</button>
        </div>
        <div className='w-1/2 h-full relative flex items-center justify-center p-2 text-[#006b6c]'>
            <div className='w-72 h-72 absolute top-10 left-0 bg-slate-600 rounded-[50px]'></div>
            <div className='w-36 h-48 absolute top-28 right-4 bg-amber-600 rounded-[50px]'></div>
            <div className='w-36 h-48 absolute bottom-52 right-44 bg-fuchsia-500 rounded-[50px]'></div>
            <div className='w-36 h-48 absolute bottom-0 right-4 bg-green-600 rounded-[50px]'></div>
        </div>
       
      
    </div>
  );
}

export default SaveIdeassection;
