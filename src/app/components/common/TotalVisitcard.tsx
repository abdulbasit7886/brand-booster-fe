import React, { useEffect, useState } from "react";
import img1 from "../../asset/images/c logos/msn.png";
import img2 from "../../asset/images/c logos/yahoo.png";
import img3 from "../../asset/images/c logos/drimble.png";
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
    <div className="flex items-center justify-center w-auto space-x-8 mt-11 mx-auto ">
      {data.map((item, index) => {
        return (
          <div
            className="flex flex-col gap-8  w-[28rem] justify-center bg-white  rounded-2xl px-7 pb-7"
            key={index}
          >
            <div className="h-10 w-auto mt-10">
              <Image src={item.img} alt="image" className="h-full w-auto" />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-16 items-center justify-between ">
                <div className="flex flex-col">
                  <h3 className="text-3xl text-blue-900 font-futura font-bold">
                    {item.visitor}
                  </h3>
                  <p className="text-[1rem] tracking-wide capitalize text-textB">
                    {item.heading[0]}
                  </p>
                </div>
                <hr className="h-15 w-[1px] bg-[#ccc] border-0 outline-0" />
                <div className="">
                  <h3 className="text-3xl text-blue-900 font-futura font-bold">
                    {item.AuTotal}
                  </h3>
                  <p className="text-[1rem] tracking-wide capitalize text-textB">
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
