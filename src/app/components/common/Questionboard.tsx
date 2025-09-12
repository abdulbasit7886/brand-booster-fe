import React, { useState } from "react";
import { Faqs } from "../../data/Faqs";
import Dropdown from "../ui/Dropdown";
import Image from "next/image";
import minusIcon from "../../asset/icons/minus-circle.svg";
import plusIcon from "../../asset/icons/plus-circle.svg";

interface FAQItem {
  question: string;
  answer: string;
}

const Questionboard = () => {
  const link = [
    { name: "service", to: "/coming-soon" },
    { name: "writing", to: "/coming-soon" },
    { name: "publishing", to: "/coming-soon" },
  ];
  const [active, setActive] = useState<string>("service");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaqs = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="lg:w-[75%] w-[100%] h-auto mx-auto bg-white mt-11 flex flex-col items-center lg:rounded-4xl rounded-2xl lg:pb-10 py-5 ">
      <Dropdown links={link} />
      <ul className="lg:flex hidden w-full lg:gap-4 lg:h-20 h-15 items-end justify-center lg:mx-auto border-b border-[#ccc] mb-5">
        {link.map((item, i) => {
          return (
            <li
              key={i}
              onClick={() => setActive(item.name)}
              className={`w-full h-full font-semibold text-center flex items-end justify-center pb-2  lg:text-lg text-sm capitalize ${
                active === item.name
                  ? "text-[#4FAABE] border-b-2 border-[#4FAABE]"
                  : "text-textB"
              }`}
            >
              {item.name}
            </li>
          );
        })}
      </ul>

      <div className="mt-10 w-full flex flex-col gap-4 lg:px-10 px-[3%] transition-all">
        {Faqs.map((Faq: FAQItem, index: number) => {
          return (
            <div
              key={index}
              className={`flex flex-col lg:px-8 w-full py-5 px-2 rounded-3xl ${
                openIndex === index ? "bg-[#F5F5F5] py-5" : "bg-white"
              }`}
            >
              <div
                className="flex justify-between w-full items-center cursor-pointer gap-5"
                onClick={() => toggleFaqs(index)}
              >
                <h3 className="lg:text-xl text-[1rem] font-semibold text-[#181D27]">
                  {Faq.question}
                </h3>
                {openIndex === index ? (
                  <Image
                    src={minusIcon}
                    className="text-textB lg:w-7 lg:h-7 flex items-center justify-center   rounded-full "
                    alt=""
                  />
                ) : (
                  <Image
                    src={plusIcon}
                    className="text-textB lg:w-7 lg:h-7 flex items-center justify-center   rounded-full"
                    alt=""
                  />
                )}
              </div>
              {openIndex === index && (
                <div className="transition-all mt-5 lg:text-lg text-xs lg:leading-7  lg:px-0 leading-5">
                  <span>{Faq.answer}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Questionboard;
