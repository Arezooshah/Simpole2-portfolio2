import React from "react";

const About = () => {
  return (
    <div name="about" className="bg-[#0a192f] w-full h-screen text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="gap-8 grid grid-cols-2 px-4 w-full max-w-[1000px]">
          <div className="sm:text-right pb-10 pl-4">
            <p className="inline border-pink-400 border-b-4 font-bold text-4xl">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="gap-8 grid sm:grid-cols-2 px-4 w-full max-w-[1000px]">
          <div className="sm:text-right font-bold text-4xl">
            <p>Hi , Im Clint . im working remote at american compony</p>
          </div>
          <div>
            <p>
              Hi , Im Clint . im working remote at american compony Hi , Im
              Clint . im working remote at american compony Hi , Im Clint . im
              working remote at american compony
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
