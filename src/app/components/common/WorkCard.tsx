import React from "react";
import { CardData } from "../../data/CardData";
import Image from "next/image";

const WorkCard = () => {
  return (
    <div className="flex items-center justify-center flex-wrap lg:flex-nowrap   lg:gap-40 gap-10 px-10    lg:my-25">
      {CardData.map((item, index) => {
        return (
          <div
            className="flex flex-col items-center justify-center text-center gap-4 lg:w-54 lg:my-0  my-7  h-40 flex-1/3"
            key={index}
          >
            <div className="lg:w-20 lg:h-auto w-15 h-aut0 ">
              <Image src={item.img} alt="" className="w-full h-full" />
            </div>
            <h3 className="font-futura font-bold lg:text-4xl tracking-[-2%] text-xl uppercase text-blue-900 ">
              {item.heading}
            </h3>
            <p className="lg:text-[16px] text-sm text-textB ">{item.subtext}</p>
          </div>
        );
      })}
    </div>
  );
};

export default WorkCard;
