import React from "react";
import Navbar from "../Component/Navbar";
import Herosection from "../Component/Herosection";
import Searchsection from "../Component/Searchsection";
import SaveIdeassection from "../Component/SaveIdeassection";
import Section4 from "../Component/Section4";
import Section5 from "../Component/Section5";

const Home = () => {
  return (
    <div className="w-full m-0 p-0  flex relative bg-white items-center flex-col">
      <Navbar />
      <Herosection />
      <Searchsection />
      <SaveIdeassection />
      <Section4 />
      <Section5 />
    </div>
  );
};

export default Home;
