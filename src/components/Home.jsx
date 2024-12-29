import React from "react";
import { HiArrowCircleRight } from "react-icons/hi";

function Home() {
  return (
    <div name="home" className="bg-[#0a192f] w-full h-screen">
      {/* container */}
      <div className="flex flex-col justify-center mx-auto px-8 max-w-[1000px] h-full">
        <p className="text-pink-400">Hi , my name is</p>
        <h1 className="py-3 font-bold text-[#ccd6f6] text-4xl sm:text-7xl">
          Arezoo shahabi
        </h1>
        <h2 className="py-4 font-bold text-[#8892b0] text-2xl sm:text-4xl">
          Iam Full Stack Developer.
        </h2>
        <p className="py-4 max-w-[700px] text-[#8892b0]">
          i am full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I am focused on
          building responsive full-stack web applications.
        </p>
        <div>
          <button className="flex items-center border-2 hover:border-pink-400 hover:bg-pink-400 my-2 px-6 py-3 text-white group">
            view Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowCircleRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
