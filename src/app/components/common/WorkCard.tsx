import React from "react";
import { CardData } from "../../data/CardData";
import Image from "next/image";

const WorkCard = () => {
  return (
    <div className="flex items-center justify-center flex-wrap lg:flex-nowrap   lg:gap-40 gap-6  px-10    lg:my-25">
      {CardData.map((item:any, index:number) => {
        return (
          <div
            className="flex flex-col items-center justify-center text-center gap-4 lg:w-54 lg:my-0  h-auto flex-1/1"
            key={index}
          >
            <div className="lg:w-20 lg:h-auto w-8 h-auto gap-2 ">
              <Image src={item.img} alt="" className="w-full h-full" />
            </div>
            <div className="gap-4">
              <h3 className="font-futura font-bold lg:text-4xl tracking-[-2%] text-[1rem] uppercase text-blue-900 ">
                {item.heading}
              </h3>
              <p className="lg:text-[16px] text-sm text-textB lg:px-0 px-7  ">{item.subtext}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WorkCard;
