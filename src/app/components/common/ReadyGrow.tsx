import React from "react";
import boosticon from "../../asset/icons/flash g.png";
import Image from "next/image";

const ReadyGrow = () => {
  return (
    <div className="lg:w-[108rem] lg:h-[17rem] h-auto w-[96%] mt-7.5  py-12 lg:px-16 px-8 mx-auto bg-gradient-to-tr from-blue to-sky lg:rounded-4xl rounded-2xl flex items-center justify-between flex-col lg:flex-row ">
      <div className="space-y-7">
        <h1 className="lg:text-5xl  text-2xl font-bold lg:leading-[120%] font-futura uppercase lg:text-left text-center tracking-wide text-white ">
          Ready to Grow Your Brand?
        </h1>
        <p className="text-[#FFFFFFB2] lg:text-lg text-sm lg:text-left text-center">
          Your brand deserves to be recognized! Start getting real exposure for
          your brand and <br /> high-quality buyers for your site.
        </p>
      </div>
      <button className="bg-white  lg:w-[17.5rem] lg:h-14 w-[12.5rem] h-11  lg:text-lg text-sm mt-10 lg:mt-0 py-6 rounded-full  transition duration-300 lg:ml-[15.56rem] gap-2.5 flex items-center justify-center text-[#214750]">
        <Image src={boosticon} alt="" />
        Get Started Now
      </button>
    </div>
  );
};

export default ReadyGrow;
