import React from "react";
import WhyUseCard from "../common/WhyUse";
import { useRouter } from "next/navigation";

const Whyuse = () => {
  const router = useRouter();

  return (
    <div className=" flex flex-col justify-center items-center space-y-10 lg:mb-23 mb-5 mt-10">
      <div className="lg:space-y-3 space-y-6 text-center">
        <h1 className="lg:text-[4rem] text-[2rem] px-10 lg:px-0 tracking-[-2%] leading-[92%] text-blue-900 font-futura font-bold uppercase">
          why use brandBooster ?
        </h1>
        <p className="text-textB lg:text-lg text-sm leading-[150%] px-10 ">
          With years of experience and over 10,000 published news stories, you
          can expect the best results publishing with us.
        </p>
      </div>
      <WhyUseCard />
      <button
        onClick={() => router.push("/coming-soon")}
        className="text-lg lg:w-65 lg:h-14  hidden lg:block text-white bg-gradient-to-tr from-sky to-blue  capitalize rounded-full cursor-pointer"
      >
        get started
      </button>
    </div>
  );
};

export default Whyuse;
