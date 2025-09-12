import React, { useEffect, useState } from "react";
import img1 from "../../asset/images/c logos/msn.svg";
import img2 from "../../asset/images/c logos/yahoo.svg";
import img3 from "../../asset/images/c logos/drimble.svg";
import Image, { StaticImageData } from "next/image";
type Card = string;
type CardLink = {
  img: StaticImageData;
  heading: Card[];
  visitor: string;
  AuTotal: number;
};

// type CardSection = {
//   heading: string;
//   links: FooterLink[];
// };
const RscardData: CardLink[] = [
  {
    img: img1,
    heading: [" Visitors", "authority"],
    visitor: "689.1M",
    AuTotal: 94,
  },
  {
    img: img2,
    heading: [" Visitors", "authority"],
    visitor: "1.43K",
    AuTotal: 69,
  },
  {
    img: img3,
    heading: [" Visitors", "authority"],
    visitor: "2M",
    AuTotal: 72,
  },
];
const TotalVisitcard = () => {
  const [data, setData] = useState<CardLink[]>([]);
  useEffect(() => {
    const cardData = JSON.parse(JSON.stringify(RscardData));
    setData(cardData);
  }, []);
  return (
    <div className="flex items-center justify-center flex-wrap lg:flex-nowrap  w-auto lg:space-x-8 space-y-4 lg:mt-11 mx-auto ">
      {data.map((item, index) => {
        return (
          <div
            className="flex flex-col lg:gap-8 gap-8  lg:w-[28rem] w-[100%] mx-5 justify-center bg-white  rounded-2xl lg:px-7 p-6 lg:pb-7"
            key={index}
          >
            <div className="lg:h-10 h-6 w-auto lg:mt-10">
              <Image src={item.img} alt="image" className="h-full w-auto" />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex lg:gap-16 gap-13.5 items-center justify-between ">
                <div className="flex flex-col space-y-1">
                  <h3 className="lg:text-3xl text-xl text-blue-900 font-futura font-bold">
                    {item.visitor}
                  </h3>
                  <p className="lg:text-[1rem] text-sm  tracking-wide capitalize text-textB">
                    {item.heading[0]}
                  </p>
                </div>
                <hr className="h-15 w-[1px] bg-[#ccc] border-0 outline-0" />
                <div className="space-y-1">
                  <h3 className="lg:text-3xl text-xl text-blue-900 font-futura font-bold">
                    {item.AuTotal}
                  </h3>
                  <p className="lg:text-[1rem] text-sm  tracking-wide capitalize text-textB">
                    {item.heading[1]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TotalVisitcard;
