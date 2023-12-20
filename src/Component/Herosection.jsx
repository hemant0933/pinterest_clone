import React, { useEffect, useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";

import {
  HomeDecor_Ideas,
  DIY_Ideas,
  ChaiSnacks_Ideas,
  Outfit_Ideas,
} from "../Assets/constants";

const Herosection = () => {
  const [index, setIndex] = useState(0);
  const ideas = [
    {
      idea: "home decor idea",
      images: [
        { src: HomeDecor_Ideas[0], height: 44 },
        { src: HomeDecor_Ideas[1], height: 40 },
        { src: HomeDecor_Ideas[2], height: 24 },
        { src: HomeDecor_Ideas[3], height: 40 },
        { src: HomeDecor_Ideas[4], height: 44 },
      ],
    },
    {
      idea: "DIY idea",
      images: [
        { src: DIY_Ideas[0], height: 44 },
        { src: DIY_Ideas[1], height: 40 },
        { src: DIY_Ideas[2], height: 24 },
        { src: DIY_Ideas[3], height: 40 },
        { src: DIY_Ideas[4], height: 44 },
      ],
    },
    {
      idea: "chai time snacks idea",
      images: [
        { src: ChaiSnacks_Ideas[0], height: 44 },
        { src: ChaiSnacks_Ideas[1], height: 40 },
        { src: ChaiSnacks_Ideas[2], height: 24 },
        { src: ChaiSnacks_Ideas[3], height: 40 },
        { src: ChaiSnacks_Ideas[4], height: 44 },
      ],
    },
    {
      idea: "outfit idea",
      images: [
        { src: Outfit_Ideas[0], height: 44 },
        { src: Outfit_Ideas[1], height: 40 },
        { src: Outfit_Ideas[2], height: 24 },
        { src: Outfit_Ideas[3], height: 40 },
        { src: Outfit_Ideas[4], height: 44 },
      ],
    },
  ];

  const handleIdea = (i) => {
    setIndex(i);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % ideas.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [ideas.length]);

  return (
    <div className="mt-36 w-full h-[81vh] relative flex flex-col items-center justify-between text-center">
      <div>
        <h1 className="text-6xl leading-none font-medium">Get your next</h1>
        <h1 className={`fade${index} leading-none mt-4 text-6xl font-medium`}>
          {ideas[index].idea}
        </h1>
      </div>
      <div className="flex items-center mt-4 mb-6 space-x-4">
        {Array(4)
          .fill()
          .map((_, i) => (
            <div
              className={
                index === i
                  ? `bgfade${i} w-3 h-3 cursor-pointer rounded-full`
                  : "bg-slate-300 w-3 h-3 cursor-pointer rounded-full"
              }
              key={i}
              onClick={() => handleIdea(i)}
            ></div>
          ))}
      </div>
      <div className=" w-full h-[50vh] overflow-hidden mb-8 flex items-end justify-between space-x-4">
        {ideas[index].images.map((image, i) => (
          <div className={`w-[25%] h-[${image.height}px]`}  key={image.src}>
            <img
              src={image.src}
              className={`w-[100%] h-[100%] object-cover image${i}`}
              alt={image.src}
            />
          </div>
        ))}
      </div>
      <div className="relative w-full">
        <Link
          hrefLang="/"
          className="absolute bar z-10 h-16 right-0 left-0 bottom-0 flex items-center font-medium justify-center"
        >
          Here's how it works
        </Link>
      </div>
      <div className={`w-12 h-12 absolute top-[80%] left-[50%] ml-auto mr-auto bgfade${index} flex items-center justify-center animate-bounce text-white rounded-full`}>
      <svg className="pla" height="20" width="20" viewBox="0 0 24 24" aria-label="Scroll down" role="img"><path d="M12 19.5.66 8.29c-.88-.86-.88-2.27 0-3.14.88-.87 2.3-.87 3.18 0L12 13.21l8.16-8.06c.88-.87 2.3-.87 3.18 0 .88.87.88 2.28 0 3.14L12 19.5z"></path></svg>
      </div>
    </div>
  );
};

export default Herosection;
