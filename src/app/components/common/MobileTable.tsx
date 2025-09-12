import React, { useState } from "react";
import { FaCheck, FaX } from "react-icons/fa6";
import img1 from "../../asset/images/c logos/g.svg";
import img2 from "../../asset/images/c logos/bi.svg";
import img3 from "../../asset/images/c logos/ap.svg";
import img4 from "../../asset/images/c logos/datafloq.svg";
import img5 from "../../asset/images/c logos/benziga.svg";
import img6 from "../../asset/images/c logos/si.svg";
import img7 from "../../asset/images/c logos/newsbreak.svg";
import img8 from "../../asset/images/c logos/sotu.svg";
import img9 from "../../asset/images/c logos/drimble.svg";
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

const planOverviews: Record<string, Row[]> = {
  limited: [
    { label: "Total News Outlets", key: "outlets" },
    { label: "Max Domain Authority", key: "authority" },
    { label: "Monthly Visitors", key: "visitors" },
    { label: "Accepts Most Topics", key: "accepts", isBool: true },
    { label: "AI Mention Potential", key: "mention", isBool: true },
    { label: '"As Seen on" Trust Badge', key: "badge", isBool: true },
    { label: "Published in days", key: "publish" },
  ],
  popular: [
    { label: "Total News Outlets", key: "outlets" },
    { label: "Max Domain Authority", key: "authority" },
    { label: "Monthly Visitors", key: "visitors" },
    { label: "Accepts Most Topics", key: "accepts", isBool: true },
    { label: "AI Mention Potential", key: "mention", isBool: true },
    { label: '"As Seen on" Trust Badge', key: "badge", isBool: true },
    { label: "Published in days", key: "publish" },
  ],
  authority: [
    { label: "Total News Outlets", key: "outlets" },
    { label: "Max Domain Authority", key: "authority" },
    { label: "Monthly Visitors", key: "visitors" },
    { label: "Accepts Most Topics", key: "accepts", isBool: true },
    { label: "AI Mention Potential", key: "mention", isBool: true },
    { label: '"As Seen on" Trust Badge', key: "badge", isBool: true },
    { label: "Published in days", key: "publish" },
  ],
  ultimate: [
    { label: "Total News Outlets", key: "outlets" },
    { label: "Max Domain Authority", key: "authority" },
    { label: "Monthly Visitors", key: "visitors" },
    { label: "Accepts Most Topics", key: "accepts", isBool: true },
    { label: "AI Mention Potential", key: "mention", isBool: true },
    { label: '"As Seen on" Trust Badge', key: "badge", isBool: true },
    { label: "Published in days", key: "publish" },
  ],
};

const planOutlets: Record<string, Row[]> = {
  limited: [
    { label: "Indexed on Search", key: "indexed", img: img1 },
    { label: "Business Insider", key: "insider", img: img2 },
    { label: "Associated Press", key: "press", img: img3 },
    { label: "Datafloq", key: "datafat", img: img4 },
    { label: "Benzinga", key: "benzinga", img: img5 },
    { label: "Street Insider", key: "street", img: img6 },
    { label: "NewsBreak", key: "newsbreak", img: img7 },
    { label: "SpotOnTheUSA", key: "spot", img: img8 },
    { label: "Dirimble.com", key: "dir", img: img9 },
  ],
  popular: [
    { label: "Indexed on Search", key: "indexed", img: img1 },
    { label: "Business Insider", key: "insider", img: img2 },
    { label: "Associated Press", key: "press", img: img3 },
    { label: "Datafloq", key: "datafat", img: img4 },
    { label: "Benzinga", key: "benzinga", img: img5 },
    { label: "Street Insider", key: "street", img: img6 },
    { label: "NewsBreak", key: "newsbreak", img: img7 },
    { label: "SpotOnTheUSA", key: "spot", img: img8 },
    { label: "Dirimble.com", key: "dir", img: img9 },
  ],
  authority: [
    { label: "Indexed on Search", key: "indexed", img: img1 },
    { label: "Business Insider", key: "insider", img: img2 },
    { label: "Associated Press", key: "press", img: img3 },
    { label: "Datafloq", key: "datafat", img: img4 },
    { label: "Benzinga", key: "benzinga", img: img5 },
    { label: "Street Insider", key: "street", img: img6 },
    { label: "NewsBreak", key: "newsbreak", img: img7 },
    { label: "SpotOnTheUSA", key: "spot", img: img8 },
    { label: "Dirimble.com", key: "dir", img: img9 },
  ],
  ultimate: [
    { label: "Indexed on Search", key: "indexed", img: img1 },
    { label: "Business Insider", key: "insider", img: img2 },
    { label: "Associated Press", key: "press", img: img3 },
    { label: "Datafloq", key: "datafat", img: img4 },
    { label: "Benzinga", key: "benzinga", img: img5 },
    { label: "Street Insider", key: "street", img: img6 },
    { label: "NewsBreak", key: "newsbreak", img: img7 },
    { label: "SpotOnTheUSA", key: "spot", img: img8 },
    { label: "Dirimble.com", key: "dir", img: img9 },
  ],
};

const planTopics: Record<string, Row[]> = {
  limited: [
    { label: "Betting & Sports Picks", key: "betting" },
    { label: "Blockchain", key: "blockchain" },
    { label: "Cryptocurrency (Buying / Trading)", key: "crypto" },
    { label: "Financial Trading", key: "trading" },
  ],
  popular: [
    { label: "Betting & Sports Picks", key: "betting" },
    { label: "Blockchain", key: "blockchain" },
    { label: "Cryptocurrency (Buying / Trading)", key: "crypto" },
    { label: "Financial Trading", key: "trading" },
  ],
  authority: [
    { label: "Betting & Sports Picks", key: "betting" },
    { label: "Blockchain", key: "blockchain" },
    { label: "Cryptocurrency (Buying / Trading)", key: "crypto" },
    { label: "Financial Trading", key: "trading" },
  ],
  ultimate: [
    { label: "Betting & Sports Picks", key: "betting" },
    { label: "Blockchain", key: "blockchain" },
    { label: "Cryptocurrency (Buying / Trading)", key: "crypto" },
    { label: "Financial Trading", key: "trading" },
  ],
};

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

const MobileTable: React.FC = () => {
  return (
    <div className="lg:hidden block flex-col w-[95%] mx-auto mt-10">
      {plans.map((plan, idx) => (
        <div key={idx} className="mb-10  rounded-lg overflow-hidden ">
          <div className="bg-white p-4 ">
            <h1 className="text-[1rem] font-bold font-futura uppercase text-gray-800 border-b-1 border-[#f0f0f0]">
              {plan.heading}
            </h1>
            <div className="space-y-3 mt-3">
              <h3 className="text-2xl font-semibold text-gray-900">
                {plan.price}
              </h3>
              <span className="text-sm text-gray-600 block">{plan.title}</span>
              <button className="w-full text-white rounded-full font-normal capitalize h-11 bg-gradient-to-tr from-sky to-blue ">
                get started
              </button>
            </div>
          </div>

          <div className="bg-white">
            <div className="p-4 bg-gray-50 ">
              <h2 className="text-sm font-semibold text-[#387987]">Overview</h2>
            </div>
            {planOverviews[plan.heading].map((row, rowIdx) => (
              <div
                key={rowIdx}
                className={`flex justify-between items-center p-4 ${
                  rowIdx % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="font-medium text-sm text-gray-800">
                    {row.label}
                  </span>
                  <span className="text-xs text-gray-500 border rounded-full w-4 h-4 flex items-center justify-center flex-shrink-0">
                    ?
                  </span>
                </div>
                <div className="text-sm text-gray-700 w-[25%] px-auto flex items-center justify-center">
                  {row.isBool ? (
                    plan[row.key] ? (
                      <Check />
                    ) : (
                      <Cross />
                    )
                  ) : (
                    plan[row.key]
                  )}
                </div>
              </div>
            ))}

            <div className="p-4 bg-gray-50 ">
              <h2 className="text-sm font-semibold text-[#387987]">
                Included Outlets
              </h2>
            </div>
            {planOutlets[plan.heading].map((row, rowIdx) => (
              <div
                key={rowIdx}
                className={`flex justify-between items-center py-4 px-6 ${
                  rowIdx % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <div className="flex items-center gap-2 w-[75%]">
                  <span className="font-medium text-sm text-gray-800">
                    {row.label}
                  </span>
                  {row.img && (
                    <Image src={row.img} alt="" className="h-4 w-auto" />
                  )}
                </div>
                <div className="text-sm text-gray-700 w-[25%] px-auto flex items-center justify-center">
                  {plan[row.key] ? <Check /> : <Cross />}
                </div>
              </div>
            ))}

            <div className="p-4 bg-gray-50 ">
              <h2 className="text-sm font-semibold text-[#387987]">
                Accepted Topics
              </h2>
            </div>
            {planTopics[plan.heading].map((row, rowIdx) => (
              <div
                key={rowIdx}
                className={`flex justify-between items-center p-4 ${
                  rowIdx % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="font-medium text-sm text-gray-800">
                    {row.label}
                  </span>
                  <span className="text-xs text-gray-500  rounded-full w-4 h-4 flex items-center justify-center flex-shrink-0">
                    ?
                  </span>
                </div>
                <div className="text-sm text-gray-700 w-[25%] px-auto flex items-center justify-center">
                  {plan[row.key] ? <Check /> : <Cross />}
                </div>
              </div>
            ))}

            <div className="p-4 ">
              <button className="w-full py-3 bg-gradient-to-tr from-sky to-blue text-white text-base font-semibold rounded-full shadow-md ">
                Get started
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MobileTable;
