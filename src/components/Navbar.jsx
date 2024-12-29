import React, { useState } from "react";
import logo from "../assets/logo1.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import Social from "./Social";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handelClick = () => setNav(!nav);
  return (
    <div className="fixed flex justify-between items-center bg-[#0a192f] px-4 w-full text-gray-100">
      <div className="">
        <img src={logo} alt="logo pic" style={{ width: "200px" }} />
      </div>
      {/* // menu */}
      <ul className="md:flex hidden">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skill" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* Hamburger */}
      <div onClick={handelClick} className="z-10 md:hidden">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* mobil menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-slate-950 flex flex-col justify-center items-center text-gray-100"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handelClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handelClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handelClick} to="skill" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handelClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {""}
          <Link onClick={handelClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* Social icons */}
      <Social />
    </div>
  );
};

export default Navbar;
