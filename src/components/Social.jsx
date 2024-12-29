import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
const Social = () => {
  return (
    <div className="top-[35%] left-0 fixed lg:flex flex-col hidden">
      <ul>
        <li className="flex justify-between items-center bg-blue-600 ml-[-100px] hover:ml-[-10px] rounded-md w-[160px] h-[60px] duration-300">
          <a
            className="flex justify-between items-center w-full text-gray-300"
            href=""
          >
            linkedin <FaLinkedin size={30} />
          </a>
        </li>
        <li className="flex justify-between items-center bg-[#333333] ml-[-100px] hover:ml-[-10px] rounded-md w-[160px] h-[60px] duration-300">
          <a
            className="flex justify-between items-center w-full text-gray-300"
            href=""
          >
            Github <FaGithub size={30} />
          </a>
        </li>
        <li className="flex justify-between items-center bg-[#6fc2b0] ml-[-100px] hover:ml-[-10px] rounded-md w-[160px] h-[60px] duration-300">
          <a
            className="flex justify-between items-center w-full text-gray-300"
            href=""
          >
            Email <HiOutlineMail size={30} />
          </a>
        </li>
        <li className="flex justify-between items-center bg-[#565f69] ml-[-100px] hover:ml-[-10px] rounded-md w-[160px] h-[60px] duration-300">
          <a
            className="flex justify-between items-center w-full text-gray-300"
            href=""
          >
            Resume <BsFillPersonLinesFill size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Social;
