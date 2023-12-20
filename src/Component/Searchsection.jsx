import React from 'react';


const Searchsection = () => {
  

  return (
    <div className='w-full h-[100vh] flex justify-between items-center pt-4 bar text-[#c31952]'>
      <div className='w-1/2 relative h-full flex items-center justify-center flex-col'>
        <div className='div w-[178px] h-[218px] z-10 top-10 right-[170px] absolute rounded-[50px] bg-green-300'>
            {/* <img src={} alt='' className='w-full h-full object-cover'/> */}
        </div>
        <div className='div w-[164px] h-[258px] z-20 right-[150px] bottom-12 absolute rounded-[50px] bg-gray-600'>
        {/* <img src={} alt='' className='w-full h-full object-cover'/> */}
        </div>
        <div className='w-[298px] h-[456px] z-30 absolute rounded-[50px] bg-blue-400'>
        {/* <img src={} alt='' className='w-full h-full object-cover'/> */}
        </div>
        <div className='div w-[204px] h-[285px] z-20 absolute rounded-[50px] top-[180px] left-24 bg-red-200'>
        {/* <img src={} alt='' className='w-full h-full object-cover'/> */}
        </div>
      </div>
      <div className='w-1/2 h-full flex items-center justify-center flex-col space-y-8'>
        <h1 className='font-bold text-5xl leading-none whitespace-nowrap'>Search for an idea</h1>
        <p className='font-light text-[18px] leading-relaxed text-center'>
            What do you to try next? Think<br/>
            of something you're into - like "easy<br/>
            chicken dinner" - and see what you <b/>
            find.
        </p>
        <button className='w-[93px] h-[43px] rounded-full textbar bg-[#c31952]'>Explore</button>
      </div>
    </div>
  );
}

export default Searchsection;
