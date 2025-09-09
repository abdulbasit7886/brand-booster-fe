import React from "react";
import { CardData } from "../../data/CardData";
import Image from "next/image";

const WorkCard = () => {
  return (
    <div className="flex items-center justify-center  lg:gap-40  lg:my-25">
      {CardData.map((item, index) => {
        return (
          <div
            className="flex flex-col items-center justify-center text-center gap-4 w-54  h-40"
            key={index}
          >
            <div className="lg:w-20 lg:h-auto ">
              <Image src={item.img} alt="" className="w-full h-full" />
            </div>
            <h3 className="font-futura font-bold lg:text-4xl tracking-[-2%] text-xl uppercase text-blue-900 ">
              {item.heading}
            </h3>
            <p className="text-[16px] text-textB ">{item.subtext}</p>
          </div>
        );
      })}
    </div>
  );
};

export default WorkCard;
