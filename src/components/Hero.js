import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import Lottie from "lottie-react";
import developer from "../lotties/developer.json";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Hero = () => {
  return (
    <div name="hero" className="h-screen w-full pt-32 px-2">
      <div className="flex flex-col justify-center items-center">
        <span className="text-[#54AFE7]">Hi, my name is</span>
        <h1 className="text-4xl sm:text-7xl font-bold text-gray-200">
          Bhanu Bansal
        </h1>
        <h2 className="text-[1.7rem] sm:text-5xl md:text-6xl font-bold text-gray-400 mb-3">
          I'm a Fullstack Developer
        </h2>
        <Link to="work" smooth={true} duration={500}>
          <button className="text-white group border-2 px-6 py-3 flex items-center gap-3 hover:bg-[#3C7AA1] hover:border-[#3C7AA1] transition-all duration-300">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight />
            </span>
          </button>
        </Link>
      </div>
      <div className="w-[350px] sm:w-[370px] lg:w-[500px] max-w-[500px] mx-auto">
        <Lottie animationData={developer} loop={true} />
      </div>

      {/* Socials */}
      <ul className="flex lg:hidden justify-center items-center gap-6 md:gap-10">
        <li>
          <a
            href="https://www.linkedin.com/in/bhanu-bansal-aaaa5b212/"
            className="flex flex-col items-center justify-center gap-1 text-gray-300"
            target="_blank"
          >
            <FaLinkedin className="text-blue-600 text-3xl md:text-4xl" />
            <span className="font-light text-sm md:text-lg">Linkedin</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/bhanu1129"
            className="flex flex-col items-center justify-center gap-1 text-gray-300"
            target="_blank"
          >
            <FaGithub className="text-[#5d5d5d] text-3xl md:text-4xl" />
            <span className="font-light text-sm md:text-lg">Github</span>
          </a>
        </li>
        <li>
          <a
            href="mailto:bhanubansal913@gmail.com"
            className="flex flex-col items-center justify-center gap-1 text-gray-300"
            target="_blank"
          >
            <HiOutlineMail className="text-[#6fc2b0] text-3xl md:text-4xl" />
            <span className="font-light text-sm md:text-lg">Mail</span>
          </a>
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/1kC2QKkXhwu0hta0yjUKFda-cX6eT_aUR/view?usp=sharing"
            className="flex flex-col items-center justify-center gap-1 text-gray-300"
            target="_blank"
          >
            <BsFillPersonLinesFill className="text-slate-500 text-3xl md:text-4xl" />
            <span className="font-light text-sm md:text-lg">Resume</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Hero;
