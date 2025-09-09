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
    <div className="w-[75%] h-auto mx-auto bg-white mt-11 flex flex-col items-center rounded-4xl pb-10">
      <ul className="flex w-full gap-4 h-20 items-end justify-center mx-auto border-b border-[#ccc] mb-5">
        {items.map((item: string) => {
          return (
            <li
              key={item}
              onClick={() => setActive(item)}
              className={`w-full h-full font-semibold text-center flex items-end justify-center pb-2  text-lg capitalize ${
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

      <div className="mt-10 w-full flex flex-col gap-4 px-10 transition-all">
        {Faqs.map((Faq: FAQItem, index: number) => {
          return (
            <div
              key={index}
              className={`flex flex-col px-8 w-full py-5 rounded-3xl ${
                openIndex === index ? "bg-[#F5F5F5] py-5" : "bg-white"
              }`}
            >
              <div
                className="flex justify-between w-full items-center cursor-pointer"
                onClick={() => toggleFaqs(index)}
              >
                <h3 className="text-xl font-semibold text-[#181D27]">
                  {Faq.question}
                </h3>
                {openIndex === index ? (
                  <FaMinus className="text-textB w-7 h-7 rounded-full border border-textB p-1" />
                ) : (
                  <FaPlus className="text-textB w-7 h-7 rounded-full border border-textB p-1" />
                )}
              </div>
              {openIndex === index && (
                <div className="transition-all mt-5 text-lg leading-7">
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