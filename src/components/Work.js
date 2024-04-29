import React from "react";
import { project } from "../ProjectData";
import { FaArrowRight, FaFileCode } from "react-icons/fa";

const Work = () => {
  return (
    <div name="work" className="max-w-[1000px] mx-auto p-4 text-gray-300 pt-20">
      <section className="mb-5">
        <p className="text-4xl font-bold inline border-b-4 border-[#54AFE7]">
          Work
        </p>
        <p className="pt-6">Check out some of my recent work.</p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-3 md:p-1 lg:p-0">
        {project.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-2 rounded-lg bg-slate-800 shadow-xl bg-opacity-50 hover:scale-110 transition-all p-3"
          >
            <h2 className="text-xl font-semibold border-b-2 border-[#54AFE7] mb-2">
              {item.name}
            </h2>
            <div>
              <img src={item.image} alt={item.name} className="rounded-lg brightness-75" />
            </div>
            <div className="flex justify-between gap-3 mt-2">
              <a
                href={item.github}
                target="_blank"
                className="text-white hover:text-[#54AFE7] transition-all flex items-center gap-1 "
              >
                Code <FaFileCode />
              </a>
              <a
                href={item.live}
                target="_blank"
                className="text-white hover:text-[#54AFE7] transition-all flex items-center gap-1 "
              >
                Live <FaArrowRight />
              </a>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Work;
