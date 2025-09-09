import React from "react";
import WorkCard from "../common/WorkCard";
import { FaChevronRight } from "react-icons/fa6";

const HowWorks = () => {
  return (
    <div className="bg-white my-15 lg:my-30 mx-25 flex-col items-center justify-center">
      <div className="flex flex-col justify-center w-[46.43rem] mx-auto items-center text-center mb-15 gap-6">
        <h1 className="font-futura lg:font-bold lg:text-7xl text-2xl uppercase text-blue-900">
          how does it works ?
        </h1>
        <p className="text-textB font-normal lg:mt-4 lg:text-xl text-sm mt-2 px-5 lg:px-0 leading-[150%] tracking-0">
          we get you featured in the news to boost your visibility , build brand
          trust , attract  new customers , and drive real buisness impact.
        </p>
      </div>
      <WorkCard/>
        <button className="flex items-center px-5 py-2 lg:px-12  font-normal lg:py-5 gap-3 rounded-full mx-auto bg-gradient-to-tr from-sky to-blue text-white capitalize ">
            <span className="trecking-widest">see our packages</span> <FaChevronRight/>
        </button>
    </div>
  );
};

export default HowWorks;
