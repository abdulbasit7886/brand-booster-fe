import React, { useState } from "react";
import { FaCheck, FaX } from "react-icons/fa6";
import img1 from "../../asset/images/c logos/g.png";
import img2 from "../../asset/images/c logos/bi.png";
import img3 from "../../asset/images/c logos/ap.png";
import img4 from "../../asset/images/c logos/datafloq.png";
import img5 from "../../asset/images/c logos/benziga.png";
import img6 from "../../asset/images/c logos/si.png";
import img7 from "../../asset/images/c logos/newsbreak.png";
import img8 from "../../asset/images/c logos/sotu.png";
import img9 from "../../asset/images/c logos/drimble.png";
import engFlag from "../../asset/images/c logos/eng.png";
import dutchFlag from "../../asset/images/c logos/du.png";
import Image, { StaticImageData } from "next/image";
type Plan = {
  heading: string;
  price: string;
  title: string;
  outlets: string;
  authority: string;
  visitors: string;
  accepts: boolean;
  mention: boolean;
  badge: boolean;
  publish: string;
  indexed: boolean;
  insider: boolean;
  press: boolean;
  datafat: boolean;
  benzinga: boolean;
  street: boolean;
  newsbreak: boolean;
  spot: boolean;
  dir: boolean;
  betting: boolean;
  blockchain: boolean;
  crypto: boolean;
  trading: boolean;
};
const plans: Plan[] = [
  {
    heading: "limited",
    price: "€195",
    title: "Best For Restricted Topics",
    outlets: "200",
    authority: "69",
    visitors: "2.2m",
    accepts: true,
    mention: false,
    badge: true,
    publish: "5 days",
    indexed: true,
    insider: false,
    press: false,
    datafat: false,
    benzinga: false,
    street: false,
    newsbreak: false,
    spot: true,
    dir: true,
    betting: true,
    blockchain: true,
    crypto: true,
    trading: true,
  },
  {
    heading: "popular",
    price: "€295",
    title: "Best For Businesses Growth",
    outlets: "300",
    authority: "69",
    visitors: "26.4m",
    accepts: true,
    mention: false,
    badge: true,
    publish: "5 days",
    indexed: true,
    insider: false,
    press: false,
    datafat: false,
    benzinga: false,
    street: false,
    newsbreak: false,
    spot: true,
    dir: true,
    betting: true,
    blockchain: true,
    crypto: true,
    trading: true,
  },
  {
    heading: "authority",
    price: "€595",
    title: "Best For Google Rankings",
    outlets: "6",
    authority: "72",
    visitors: "2.2m/185.8m",
    accepts: true,
    mention: true,
    badge: true,
    publish: "7 days",
    indexed: true,
    insider: true,
    press: true,
    datafat: true,
    benzinga: true,
    street: true,
    newsbreak: false,
    spot: true,
    dir: true,
    betting: false,
    blockchain: false,
    crypto: false,
    trading: false,
  },
  {
    heading: "ultimate",
    price: "€795",
    title: "Best For Max Exposure",
    outlets: "400",
    authority: "94",
    visitors: "224.5m",
    accepts: true,
    mention: true,
    badge: true,
    publish: "7 days",
    indexed: true,
    insider: true,
    press: true,
    datafat: true,
    benzinga: true,
    street: true,
    newsbreak: true,
    spot: true,
    dir: true,
    betting: false,
    blockchain: true,
    crypto: false,
    trading: false,
  },
];
type Row = {
  label: string;
  key: keyof Plan;
  img?: StaticImageData;
  isBool?: boolean;
};
const overviews: Row[] = [
  { label: "Total News Outlets", key: "outlets" },
  { label: "Max Domain Authority", key: "authority" },
  { label: "Monthly Visitors", key: "visitors" },
  { label: "Accepts Most Topics", key: "accepts", isBool: true },
  { label: "AI Mention Potential", key: "mention", isBool: true },
  { label: '"As Seen on" Trust Badge', key: "badge", isBool: true },
  { label: "Published in days", key: "publish" },
];
const overview: Row[] = [
  { label: "Indexed on Search", key: "indexed", img: img1 },
  { label: "Business Insider", key: "insider", img: img2 },
  { label: "Associated Press", key: "press", img: img3 },
  { label: "Datafloq", key: "datafat", img: img4 },
  { label: "Benzinga", key: "benzinga", img: img5 },
  { label: "Street Insider", key: "street", img: img6 },
  { label: "NewsBreak", key: "newsbreak", img: img7 },
  { label: "SpotOnTheUSA", key: "spot", img: img8 },
  { label: "Dirimble.com", key: "dir", img: img9 },
];
const overviewss: Row[] = [
  { label: "Betting & Sports Picks", key: "betting" },
  { label: "Blockchain", key: "blockchain" },
  { label: "Cryptocurrency (Buying / Trading)", key: "crypto" },
  { label: "Financial Trading", key: "trading" },
];
const Check = () => (
  <div className="flex items-center justify-center w-full">
    <span className="text-[#079455] font-bold text-xs w-5 h-5 rounded-full flex items-center justify-center border-[2.5px] border-[#079455]">
      <FaCheck className="" />
    </span>
  </div>
);

const Cross = () => (
  <div className="flex items-center justify-center w-full">
    <span className="text-[#F04438] font-bold text-xs w-5 h-5 rounded-full flex items-center justify-center border-[2.5px] border-[#F04438]">
      <FaX />
    </span>
  </div>
);

export const PricingTable: React.FC = () => {
  const [active, setActive] = useState<"en" | "nl">("en");

  return (
    <div className="w-[90%] lg:mx-auto p-4 mt-10 overflow-hidden">
      <div className="lg:overflow-x-visible overflow-x-auto">
        <div className="lg:min-w-full min-w-[800px]">
          <table className="w-full text-sm text-center border-collapse">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="w-[180px] lg:w-[262.4px] sticky left-0 bg-white z-10">
                  <div className=""></div>
                </th>
                {plans.map((plan, idx) => (
                  <th
                    key={idx}
                    className="text-lg lg:text-xl uppercase font-extrabold text-left px-4 lg:px-6 py-3 lg:py-4 w-[180px] lg:w-[262.4px] bg-white"
                  >
                    {plan.heading}
                  </th>
                ))}
              </tr>
            </thead>
            <thead>
              <tr>
                <th className="p-2 lg:p-4 sticky left-0 bg-white z-10">
                  <div className="flex items-center justify-center mt-4 lg:mt-20 w-full max-w-[14.31rem] bg-[#E9EAEB] rounded-full p-1.5 mx-auto">
                    <button
                      onClick={() => setActive("en")}
                      className={`w-full h-8 lg:h-11 rounded-full gap-1 lg:gap-2 flex items-center justify-center p-1 text-xs lg:text-sm ${
                        active === "en"
                          ? "bg-white text-textD"
                          : "text-textB"
                      }`}
                    >
                      <div className="w-4 h-4 lg:w-6 lg:h-6 bg-gray-300 rounded-full flex-shrink-0">
                        <Image src={engFlag} alt="english flag" />
                      </div>
                      English
                    </button>
                    <button
                      onClick={() => setActive("nl")}
                      className={`w-full h-8 lg:h-11 rounded-full gap-1 lg:gap-2 flex items-center justify-center p-1 text-xs lg:text-sm ${
                        active === "nl"
                          ? "bg-white text-textD"
                          : "text-textB"
                      }`}
                    >
                      <div className="w-4 h-4 lg:w-6 lg:h-6 bg-gray-300 rounded-full flex-shrink-0">
                        <Image src={dutchFlag} alt="dutch flag"/>
                      </div>
                      Dutch
                    </button>
                  </div>
                </th>
                {plans.map((plan, idx) => (
                  <th
                    key={idx}
                    className="pt-4 lg:pt-8 text-[#181D27] space-y-3 lg:space-y-6 px-4 lg:px-6 text-left bg-white"
                  >
                    <div className="">
                      <div className="text-xl lg:text-3xl font-semibold tracking-[-2%]">
                        {plan.price}
                      </div>
                      <div className="mt-1 text-xs leading-4 lg:leading-5 font-medium text-[#535862]">
                        {plan.title}
                      </div>
                    </div>
                    <button className="mt-2 lg:mt-3 w-full py-2 lg:py-3 bg-gradient-to-tr from-sky to-blue text-white text-sm lg:text-base font-semibold rounded-full shadow-md hover:opacity-90 transition cursor-pointer">
                      Get started
                    </button>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  colSpan={plans.length + 1}
                  className="pt-6 lg:pt-8 pb-2 lg:pb-3 text-left text-base lg:text-lg font-semibold text-[#387987] sticky left-0 bg-white z-10"
                >
                  Overview
                </td>
              </tr>
              {overviews.map((row, idx) => (
                <tr key={idx} className={`odd:bg-white even:bg-gray-50`}>
                  <td className="p-2 lg:p-3 text-left font-medium text-xs lg:text-sm leading-5 text-[#181D27] flex items-center gap-1 lg:gap-2 sticky left-0 bg-white z-10">
                    {row.label}
                    <span className="text-xs text-gray-500 border rounded-full w-4 h-4 lg:w-5 lg:h-5 flex items-center justify-center flex-shrink-0">
                      ?
                    </span>
                  </td>
                  {plans.map((p, i) => (
                    <td key={i} className="p-2 lg:p-3 text-center text-textB">
                      {row.isBool ? (
                        p[row.key] ? (
                          <Check />
                        ) : (
                          <Cross />
                        )
                      ) : (
                        p[row.key]
                      )}
                    </td>
                  ))}
                </tr>
              ))}

              {/* Included Outlets */}
              <tr>
                <td
                  colSpan={plans.length + 1}
                  className="pt-6 lg:pt-8 pb-2 lg:pb-3 text-left text-base lg:text-lg font-semibold text-[#387987] border-t border-gray-300 sticky left-0 bg-white z-10"
                >
                  Included Outlets
                </td>
              </tr>

              {overview.map((row:any, idx) => (
                <tr key={idx} className={`odd:bg-white even:bg-gray-50`}>
                  <td className="p-2 lg:p-3 text-left font-medium text-xs lg:text-sm flex items-center gap-2 sticky left-0 bg-white z-10">
                    {row.label}
                    <Image src={row.img} alt="" className="lg:h-4 lg:w-auto"/>
                  </td>
                  {plans.map((p:any, i) => (
                    <td key={i} className="py-2 lg:py-3">
                      {p[row.key] ? <Check /> : <Cross />}
                    </td>
                  ))}
                </tr>
              ))}

              <tr>
                <td
                  colSpan={plans.length + 1}
                  className="pt-6 lg:pt-8 pb-2 lg:pb-3 text-left text-base lg:text-lg font-semibold text-[#387987] border-t border-gray-300 sticky left-0 bg-white z-10"
                >
                  Accepted Topics
                </td>
              </tr>

              {overviewss.map((row, idx) => (
                <tr key={idx} className={`odd:bg-white even:bg-gray-50`}>
                  <td className="p-2 lg:p-3 text-left font-medium text-xs lg:text-sm text-[#181D27] flex items-center gap-1 lg:gap-2 sticky left-0 bg-white z-10">
                    {row.label}
                    <span className="text-xs text-gray-500 border rounded-full w-4 h-4 lg:w-5 lg:h-5 flex items-center justify-center flex-shrink-0">
                      ?
                    </span>
                  </td>
                  {plans.map((p, i) => (
                    <td key={i} className="py-2 lg:py-3">
                      {p[row.key] ? <Check /> : <Cross />}
                    </td>
                  ))}
                </tr>
              ))}

              <tr>
                <th className="p-2 lg:p-4 sticky left-0 bg-white z-10"></th>
                {plans.map((plan, idx) => (
                  <td
                    key={idx}
                    className="p-4 lg:p-6 text-[#181D27] space-y-2 lg:space-y-3 text-left bg-white"
                  >
                    <button className="w-full py-2 lg:py-3 bg-gradient-to-tr from-sky to-blue text-white text-sm lg:text-base font-semibold rounded-full shadow-md hover:opacity-90 transition cursor-pointer">
                      Get started
                    </button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};