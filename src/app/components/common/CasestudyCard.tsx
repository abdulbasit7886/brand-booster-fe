import React, { useState, useEffect } from "react";
import { CaseStudyData } from "../../data/CaseStudyData";
import { FaArrowRight } from "react-icons/fa6";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
type CaseStudy = {
  img: StaticImageData | string;
  logo: StaticImageData | string;
  name: string;
  subtext: string;
};
const CasestudyCard = () => {
  const [data, setData] = useState<CaseStudy[]>([]);
  useEffect(() => {
    const CsData = JSON.parse(JSON.stringify(CaseStudyData));
    setData(CsData);
  }, []);
  return (
    <div className="flex flex-wrap lg:flex-nowrap items-center justify-center  gap-5 mt-20 w-[95%] mx-auto">
      {data.map((items, index) => {
        return (
          <div
            key={index}
            className="md:w-[22%] md:h-auto  bg-lightSky relative overflow-hidden rounded-xl  "
          >
            <div className="relative w-[100%] h-[20.87rem]  ">
              <Image
                src={items.img}
                alt="Office workspace"
                className=" object-top object-cover h-full w-full"
              />
              <div className="absolute top-0 left-0 h-full w-full bg-black-20 flex items-end p-4">
                <Image
                  src={items.logo}
                  alt="Google logo"
                  className="h-8 w-auto"
                />
              </div>
            </div>
            <div className="py-4 px-3 flex flex-col h-[15rem] justify-between">
              <div className="space-y-3">
                <h3 className="text-blue-900 md:text-2xl text-lg font-bold tracking-[-4%] leading-[120%] uppercase font-futura">
                  {items.name}
                </h3>
                <p className="text-textB text-[16px] leading-[120%] ">
                  {items.subtext.slice(0, 90)}...
                </p>
              </div>
              <div className="flex flex-col gap-2.5 justify-end  items-baseline  mb-1">
                <div className="relative bg-darksky  py-3 rounded-lg border-l-4 pr-4 pl-5 border-green  ">
                  <p className="text-sm text-textB">
                    🔥 Fast Google Visibility &
                    <span className="font-bold text-textD">
                      15% Longer Visits
                    </span>
                  </p>
                </div>
                <div className="flex ">
                  <Link
                    href={""}
                    className="flex items-center justify-center gap-2.5 text-sm leading-[120%] capitalize font-semibold bg-gradient-to-tr from-sky to-blue bg-clip-text text-transparent"
                  >
                    view full case study <FaArrowRight className="text-blue" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CasestudyCard;
