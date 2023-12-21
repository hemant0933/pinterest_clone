import React from "react";
import { otherImage } from "../Assets/constants";

const Section5 = () => {
  return (
    <div className="w-full h-[100vh] relative flex justify-center bg-slate-900 items-center">
      {/* Left Section */}
      <div className="w-1/2 h-full z-10 flex justify-center p-12 items-center">
        <h1 className="w-[420px] text-[70px] text-left text-white font-semibold">
          Sign up to get your ideas
        </h1>
      </div>
      {/* Right Section */}
      <div className="w-1/2 h-full z-10 flex justify-center items-center">
        <div
          className="w-[484px] relative pt-[20px] px-[10px] pb-[24px]
        flex  items-center flex-col bg-white rounded-[10px] h-[90vh]"
        >
          <div className="w-[45px] h-[45px]">
            <img
              src={otherImage[1]}
              className="w-full h-full object-cover"
              alt="logo"
            />
          </div>
          <div className="w-[400px] mx-auto mb-[2px] text-[#33333]">
            <h1 className="text-[32px] px-[16px] text-center font-[500]">
              Welcome to Pinterest
            </h1>
          </div>
          <div className="w-[270px] h-[21.6px]">
            <p className="text-[16px] text-center text-[#111111] px-[16px] py-0">
              Find new ideas to try
            </p>
          </div>
          <div className="w-full mt-4">
            <form className="w-[268px] mx-auto">
              <div className="w-full flex items-start flex-col">
                <label className="text-sm px-3 py-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  className="w-full px-5 py-3 text-sm rounded-3xl outline-none border-2 border-gray-200 hover:border-gray-300"
                  placeholder="Email"
                />
              </div>
              <div className="w-full flex items-start flex-col">
                <label className="text-sm px-3 py-2" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-5 py-3 text-sm rounded-3xl outline-none border-2 border-gray-200 hover:border-gray-300"
                  placeholder="Create a password"
                />
              </div>
              <div className="w-full flex items-start flex-col">
                <label className="text-sm px-3 py-2" htmlFor="date">
                  Birthdate
                </label>
                <input
                  type="date"
                  id="date"
                  className="w-full px-5 py-3 text-sm rounded-3xl outline-none border-2 border-gray-200 hover:border-gray-300"
                  placeholder="mm/dd/yyyy"
                />
              </div>
              <button className="w-full mt-3 rounded-3xl font-bold mx-auto px-4 py-3 bg-red-600 text-white">
                Continue
              </button>
              <div className="font-bold w-full text-center text-[14px] py-3 mx-auto text-[#111111]">
                OR
              </div>

              <button className="bg-blue-600 text-white font-bold px-4 py-3 rounded-3xl w-full mx-auto">
                Continue with facebook
              </button>
            </form>
          </div>

          <div className="bg-gray-100 absolute text-[#111111] text-[16px] font-medium bottom-0 left-0 right-0 flex items-center justify-center text-center w-full h-12">
            Create a free bussiness Acoount
          </div>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="w-full h-10 z-10 bg-white bottom-0 left-0 right-0 flex items-center px-48 justify-evenly absolute">
        <span className="text-sm">Terms of Service</span>
        <span className="text-sm">Privacy Policy</span>
        <span className="text-sm">Help</span>
        <span className="text-sm">Iphone App</span>
        <span className="text-sm">Android App</span>
        <span className="text-sm">Users</span>
        <span className="text-sm">Collections</span>
        <span className="text-sm">Shopping</span>
        <span className="text-sm">Today</span>
        <span className="text-sm">Explore</span>
        <span className="text-sm">Watch</span>
        <span className="text-sm">Shop</span>
      </div>
      {/* Background */}
      <div
        className="absolute w-full h-full  overflow-hidden top-0 left-0 right-0 
      z-0 flex items-center space-x-6"
      >
        <div className="flex flex-col overflow-hidden space-y-4 items-center justify-evenly">
          <div className="w-[200px] h-[280px] bg-slate-400 rounded-[38px]"></div>
          <div className="w-[200px] h-[280px] bg-slate-400 rounded-[38px]"></div>
          <div className="w-[200px] h-[280px] bg-slate-400 rounded-[38px]"></div>
        </div>
        <div className="flex flex-col overflow-hidden space-y-5 items-center justify-evenly">
          <div className="w-[200px] h-[280px] bg-slate-400 rounded-[38px]"></div>
          <div className="w-[200px] h-[280px] bg-slate-400 rounded-[38px]"></div>
          <div className="w-[200px] h-[280px] bg-slate-400 rounded-[38px]"></div>
          <div className="w-[200px] h-[280px] bg-slate-400 rounded-[38px]"></div>
        </div>
        <div className="flex flex-col overflow-hidden space-y-5 items-center justify-evenly">
          <div className="w-[200px] h-[280px] bg-slate-400 rounded-[38px]"></div>
          <div className="w-[200px] h-[280px] bg-slate-400 rounded-[38px]"></div>
          <div className="w-[200px] h-[280px] bg-slate-400 rounded-[38px]"></div>
        </div>
        <div className="flex flex-col overflow-hidden space-y-5 items-center justify-evenly">
          <div className="w-[200px] h-[280px] bg-slate-400 rounded-[38px]"></div>
          <div className="w-[200px] h-[280px] bg-slate-400 rounded-[38px]"></div>
          <div className="w-[200px] h-[280px] bg-slate-400 rounded-[38px]"></div>
          <div className="w-[200px] h-[280px] bg-slate-400 rounded-[38px]"></div>
        </div>
        <div className="flex flex-col overflow-hidden space-y-5 items-center justify-evenly">
          <div className="w-[200px] h-[280px] bg-slate-400 rounded-[38px]"></div>
          <div className="w-[200px] h-[280px] bg-slate-400 rounded-[38px]"></div>
          <div className="w-[200px] h-[280px] bg-slate-400 rounded-[38px]"></div>
        </div>
        <div className="flex flex-col overflow-hidden space-y-5 items-center justify-evenly">
          <div className="w-[200px] h-[280px] bg-slate-400 rounded-[38px]"></div>
          <div className="w-[200px] h-[280px] bg-slate-400 rounded-[38px]"></div>
          <div className="w-[200px] h-[280px] bg-slate-400 rounded-[38px]"></div>
        </div>
        <div className="flex flex-col overflow-hidden space-y-5 items-center justify-evenly">
          <div className="w-[200px] h-[280px] bg-slate-400 rounded-[38px]"></div>
          <div className="w-[200px] h-[280px] bg-slate-400 rounded-[38px]"></div>
          <div className="w-[200px] h-[280px] bg-slate-400 rounded-[38px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
