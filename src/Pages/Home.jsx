import React from 'react';
import Navbar from '../Component/Navbar';
import Herosection from '../Component/Herosection';
import Searchsection from '../Component/Searchsection';
import SaveIdeassection from '../Component/SaveIdeassection';

const Home = () => {
  return (
    <div className='w-full m-0 p-0  flex relative bg-white items-center flex-col'>
      <Navbar/>
      <Herosection/>
      <Searchsection/>
      <SaveIdeassection/>
    </div>
  );
}

export default Home;
