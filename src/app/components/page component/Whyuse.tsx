import React from "react";
import WhyUseCard from "../common/WhyUse";

const Whyuse = () => {
  return (
    <div className=" flex flex-col justify-center items-center space-y-10 mb-23">
      <div className="space-y-3 text-center">
        <h1 className="text-[4rem] tracking-[-2%] leading-[92%] text-blue-900 font-futura font-bold uppercase">
          why use brandBooster ?
        </h1>
        <p className="text-textB text-lg leading-[150%] ">With years of experience and over 10,000 published news stories, you can expect the best results publishing with us.</p>
      </div>
      <WhyUseCard/>
      <button className="text-lg w-65 h-14 text-white bg-gradient-to-tr from-sky to-blue  capitalize rounded-full cursor-pointer">
          get started
      </button>
    </div>
  );
};

export default Whyuse;
