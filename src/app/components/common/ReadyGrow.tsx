import React from "react";
import boosticon from "../../asset/icons/flash g.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ReadyGrow = () => {
  const router = useRouter();

  return (
    <div className="lg:w-[95%] lg:h-[17rem] h-auto w-[95%] mt-7.5  lg:py-12  py-5 lg:px-16 px-4 mx-auto bg-gradient-to-tr from-blue to-sky lg:rounded-4xl rounded-xl flex items-center justify-between flex-col lg:flex-row ">
      <div className="lg:space-y-7 spcae-y-3">
        <h1 className="lg:text-5xl text-xl font-bold lg:leading-[120%] tracking-[-2%] font-futura uppercase lg:text-left text-center  text-white ">
          Ready to Grow Your Brand?
        </h1>
        <p className="text-[#FFFFFFB2] lg:text-lg text-sm lg:text-left text-center lg:w-[74%]">
          Your brand deserves to be recognized! Start getting real exposure for
          your brand and high-quality buyers for your site.
        </p>
      </div>
      <button
        onClick={() => router.push("/coming-soon")}
        className="bg-white  lg:w-[17.5rem] lg:h-14 w-full h-auto  lg:text-lg text-sm mt-6 lg:mt-0 py-2 rounded-full  transition duration-300 lg:ml-[15.56rem] gap-2.5 flex items-center justify-center text-[#214750]"
      >
        <Image src={boosticon} alt="" />
        Get Started Now
      </button>
    </div>
  );
};

export default ReadyGrow;
