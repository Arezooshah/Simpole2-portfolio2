import React from "react";
// import WorkImg from "./assets/p1.png";

const Griditems = ({ pic }) => {
  return (
    <div
      style={{ backgroundImage: `URL(${pic})` }}
      className="flex justify-center items-center content-div shadow-[#040c16] shadow-lg mx-auto rounded-md container group"
    >
      {/* Hover Effects */}
      <div className="opacity-0 group-hover:opacity-100">
        <span className="font-bold text-2xl text-white tracking-wider">
          React JS Application
        </span>
        <div className="pt-8 text-center">
          <a href="/">
            <button className="bg-white m-2 px-4 py-3 rounded-lg font-bold text-center text-gray-700 text-lg">
              Demo
            </button>
          </a>
          <a href="/">
            <button className="bg-white m-2 px-4 py-3 rounded-lg font-bold text-center text-gray-700 text-lg">
              Code
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Griditems;
