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
    <div className="overflow-x-auto p-6 mt-10 ">
      <div className="min-w-screen px-13.5">
        <table className="table-auto w-full text-sm text-center border-collapse">
          <thead>
            <tr className="border-b border-gray-300">
              <th className=" w-[262.4px]">
                <div className=""></div>
              </th>
              {plans.map((plan, idx) => (
                <th
                  key={idx}
                  className="text-xl uppercase font-futura font-extrabold text-left px-6 py-4  w-[262.4px]"
                >
                  {plan.heading}
                </th>
              ))}
            </tr>
          </thead>
          <thead>
            <tr>
              <th className="p-4 ">
                <div className="flex items-center justify-center  mt-20  w-[14.31rem]  bg-[#E9EAEB] rounded-full  p-1.5">
                  <button
                    onClick={() => setActive("en")}
                    className={`w-[29rem] h-11 rounded-full gap-2 flex items-center justify-center  p-1.5 text-sm  ${
                      active === "en"
                        ? " bg-white text-textD  "
                        : " text-textB "
                    }`}
                  >
                    <Image src={engFlag} alt="" className="h-6 w-6" />
                    English
                  </button>
                  <button
                    onClick={() => setActive("nl")}
                    className={`w-[27rem] h-11 rounded-full gap-2 flex items-center justify-center  p-1.5 text-sm ${
                      active === "nl" ? " bg-white text-textD" : " text-textB "
                    }`}
                  >
                    <Image src={dutchFlag} alt="" />
                    Dutch
                  </button>
                </div>
              </th>
              {plans.map((plan, idx) => (
                <th
                  key={idx}
                  className="pt-8 text-[#181D27] space-y-6 px-6 text-left bg-white  "
                >
                  <div className="">
                    <div className="text-3xl font-semibold tracking-[-2%]">
                      {plan.price}
                    </div>
                    <div className="mt-1 text-xs leading-5 font-medium text-[#535862]">
                      {plan.title}
                    </div>
                  </div>
                  <button className="mt-3 w-full py-3 bg-gradient-to-tr from-sky to-blue text-white text-base font-semibold rounded-full shadow-md hover:opacity-90 transition cursor-pointer">
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
                className="pt-8 pb-3 text-left text-lg font-semibold text-[#387987] "
              >
                Overview
              </td>
            </tr>
            {overviews.map((row, idx) => (
              <tr key={idx} className={`odd:bg-white even:bg-gray-50 `}>
                <td className="p-3 text-left font-medium text-sm leading-5 text-[#181D27] flex items-center gap-2">
                  {row.label}
                  <span className="text-xs text-gray-500 border rounded-full w-5 h-5 flex items-center justify-center">
                    ?
                  </span>
                </td>
                {plans.map((p, i) => (
                  <td key={i} className="p-3 text-center text-textB">
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
                className="pt-8 pb-3 text-left text-lg font-semibold text-[#387987] border-t border-gray-300"
              >
                Included Outlets
              </td>
            </tr>

            {overview.map((row, idx) => (
              <tr key={idx} className={`odd:bg-white even:bg-gray-50`}>
                <td className="p-3 text-left font-medium flex items-center gap-3">
                  {row.label}
                  {row.img && (
                    <Image
                      src={row.img}
                      alt={row.label}
                      className="w-auto h-5 object-contain"
                    />
                  )}
                </td>
                {plans.map((p, i) => (
                  <td key={i} className="py-3">
                    {p[row.key] ? <Check /> : <Cross />}
                  </td>
                ))}
              </tr>
            ))}

            <tr>
              <td
                colSpan={plans.length + 1}
                className="pt-8 pb-3 text-left text-lg font-semibold text-[#387987] border-t border-gray-300"
              >
                Accepted Topics
              </td>
            </tr>

            {overviewss.map((row, idx) => (
              <tr key={idx} className={`odd:bg-white even:bg-gray-50 `}>
                <td className="p-3 text-left font-medium text-[#181D27] flex items-center gap-2">
                  {row.label}
                  <span className="text-xs text-gray-500 border rounded-full w-5 h-5 flex items-center justify-center">
                    ?
                  </span>
                </td>
                {plans.map((p, i) => (
                  <td key={i} className="py-3">
                    {p[row.key] ? <Check /> : <Cross />}
                  </td>
                ))}
              </tr>
            ))}

            <tr>
              <th className="p-4"></th>
              {plans.map((plan, idx) => (
                <td
                  key={idx}
                  className="p-6 text-[#181D27] space-y-3 text-left bg-white  "
                >
                  <button className="mt-3 w-full py-3 bg-gradient-to-tr from-sky to-blue text-white text-base font-semibold rounded-full shadow-md hover:opacity-90 transition cursor-pointer">
                    Get started
                  </button>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
