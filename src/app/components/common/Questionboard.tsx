import React, { useState } from "react";
import { Faqs } from "../../data/Faqs";
import { FaMinus, FaPlus } from "react-icons/fa6";

interface FAQItem {
  question: string;
  answer: string;
}

const items = ["service", "writing", "publishing"];

const Questionboard = () => {
  const [active, setActive] = useState<string>("service");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const toggleFaqs = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="lg:w-[75%] w-[95%] h-auto mx-auto bg-white mt-11 flex flex-col items-center lg:rounded-4xl rounded-2xl pb-10">
      <ul className="flex w-full lg:gap-4 lg:h-20 h-15 items-end justify-center lg:mx-auto border-b border-[#ccc] mb-5">
        {items.map((item: string) => {
          return (
            <li
              key={item}
              onClick={() => setActive(item)}
              className={`w-full h-full font-semibold text-center flex items-end justify-center pb-2  lg:text-lg text-sm capitalize ${
                active === item
                  ? "text-[#4FAABE] border-b-2 border-[#4FAABE]"
                  : "text-textB"
              }`}
            >
              {item}
            </li>
          );
        })}
      </ul>

      <div className="mt-10 w-full flex flex-col gap-4 lg:px-10 px-3 transition-all">
        {Faqs.map((Faq: FAQItem, index: number) => {
          return (
            <div
              key={index}
              className={`flex flex-col lg:px-8 w-full py-5 px-3 rounded-3xl ${
                openIndex === index ? "bg-[#F5F5F5] py-5" : "bg-white"
              }`}
            >
              <div
                className="flex justify-between w-full items-center cursor-pointer gap-5"
                onClick={() => toggleFaqs(index)}
              >
                <h3 className="lg:text-xl text-sm font-semibold text-[#181D27]">
                  {Faq.question}
                </h3>
                {openIndex === index ? (
                  <FaMinus className="text-textB lg:w-7 lg:h-7 w-4 h-5 rounded-full lg:border border-textB lg:p-1 p-0.5" />
                ) : (
                  <FaPlus className="text-textB lg:w-7 lg:h-7  w-4 h-5 rounded-full lg:border border-textB lg:p-1 p-0.5 text-sm" />
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