import { useState } from "react";
import logo from "../assets/logo.png";
import { FaBars, FaGithub, FaLinkedin, FaTimes } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <nav className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-10">
      <div>
        <img src={logo} alt="logo" className="w-[50px]" />
      </div>

      {/* Menu */}
      <ul className="hidden md:flex gap-8">
        <li>
          <Link to="hero" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
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
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer text-2xl">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? `hidden`
            : `absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col gap-12 justify-center items-center text-4xl`
        }
      >
        <li>
          <Link onClick={handleClick} to="hero" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Socials */}
      <div className="fixed hidden lg:flex flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-blue-600 px-4">
            <a
              href="https://www.linkedin.com/in/bhanu-bansal-aaaa5b212/"
              className="flex justify-between items-center w-full text-gray-300"
              target="_blank"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#333333] px-4">
            <a
              href="https://github.com/bhanu1129"
              className="flex justify-between items-center w-full text-gray-300"
              target="_blank"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#6fc2b0] px-4">
            <a
              href="mailto:bhanubansal913@gmail.com"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-slate-500 px-4">
            <a
              href="https://drive.google.com/file/d/1kC2QKkXhwu0hta0yjUKFda-cX6eT_aUR/view?usp=sharing"
              className="flex justify-between items-center w-full text-gray-300"
              target="_blank"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
