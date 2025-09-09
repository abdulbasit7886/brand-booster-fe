import React from "react";
import boosticon from "../../asset/icons/flash g.png";
import Image from "next/image";

const ReadyGrow = () => {
  return (
    <div className="w-[107rem] h-[17rem] mt-7.5  py-12 px-16 mx-auto bg-gradient-to-tr from-blue to-sky rounded-4xl flex items-center justify-between ">
      <div className="space-y-7">
        <h1 className="text-5xl font-bold leading-[120%] font-futura uppercase tracking-wide text-white ">
          Ready to Grow Your Brand?
        </h1>
        <p className="text-[#FFFFFFB2] text-lg">
          Your brand deserves to be recognized! Start getting real exposure for
          your brand and <br /> high-quality buyers for your site.
        </p>
      </div>
      <button className="bg-white  w-[17.5rem] h-14 text-lg  py-6 rounded-full  transition duration-300 ml-[15.56rem] gap-2.5 flex items-center justify-center text-[#214750]">
        <Image src={boosticon} alt="" />
        Get Started Now
      </button>
    </div>
  );
};

export default ReadyGrow;
