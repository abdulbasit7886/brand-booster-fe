import React, { useState, useEffect } from "react";
import "../../styles/Rescard.css";
import grow from "../../asset/icons/grow.png";
import medal from "../../asset/icons/medal.png";
import heart from "../../asset/icons/heart.png";
import verified from "../../asset/icons/verified.png";
import rank from "../../asset/icons/rank.png";
import bgimg1 from "../../asset/images/result images/a (1).jpg";
import bgimg2 from "../../asset/images/result images/a (3).png";
import bgimg3 from "../../asset/images/result images/a (1).png";
import bgimg4 from "../../asset/images/result images/a (2).jpg";
import bgimg5 from "../../asset/images/result images/a (2).png";
import resultimg1 from "../../asset/images/result images/b (5).png";
import resultimg2 from "../../asset/images/result images/b (2).png";
import resultimg3 from "../../asset/images/result images/b (4).png";
import resultimg4 from "../../asset/images/result images/b (1).png";
import resultimg5 from "../../asset/images/result images/b (3).png";
import avater1 from "../../asset/images/avater/a (1).jpg";
import avater2 from "../../asset/images/avater/a (1).png";
import avater3 from "../../asset/images/avater/a (2).png";
import avater4 from "../../asset/images/avater/a (3).png";
import avater5 from "../../asset/images/avater/a (4).png";
import ReadyGrow from "./ReadyGrow";
import Image, { StaticImageData } from "next/image";
type ResultCardItem = {
  heading: string;
  text: string;
  miniImg: StaticImageData;
  back: StaticImageData;
  icon: StaticImageData;
  avater: StaticImageData[];
};
export const ResultCardData: ResultCardItem[] = [
  {
    heading: "get qualified buyer ",
    text: "Submit a news story on high-traffic news sites to drive qualified buyers to your website. Each publication acts as a landing page to warm buyers to your brand and offer before clicking through to your site.",
    miniImg: resultimg1,
    back: bgimg1,
    icon: heart,
    avater: [avater1, avater3, avater4],
  },
  {
    heading: "rank higher on google",
    text: "our news releases often rank on the first page of the google for your keywords , driving more traffic to your site . search engines consider links from these news sites as high authority recommmendations , heping to push your search position higher. ",
    miniImg: resultimg2,
    back: bgimg2,
    icon: rank,
    avater: [avater5, avater2, avater4],
  },
  {
    heading: "feature in AI results ",
    text: "our news articles are optimized to appear in AI-generated resuts like google's AI overviews,chatGPT, perPlexity, AI assistants ofen pull from our trusted news sources to answer quetions, giving your brand more visibility , trust , and traffic . ",
    miniImg: resultimg3,
    back: bgimg3,
    icon: medal,
    avater: [avater2, avater3, avater4],
  },
  {
    heading: "increase sales",
    text: "Generate more sales by installing our customizable 'As Seen On' trust badge on your website. This badge improves conversion rates by up to 48% by building trust and legitimacy with your visitors. ",
    miniImg: resultimg5,
    back: bgimg5,
    icon: grow,
    avater: [avater1, avater3, avater4],
  },
  {
    heading: "get verified ",
    text: "Our press releases prove that you and your brand are public figures of interest that need verification. Many of our clients use our press releases to get verified on Instagram, Facebook, Twitter, and other social media platforms.",
    miniImg: resultimg4,
    back: bgimg4,
    icon: verified,
    avater: [avater5, avater3, avater4],
  },
];

const ResultCard = () => {
  const [resultCard, setResultCard] = useState<ResultCardItem[]>([]);

  useEffect(() => {
    setResultCard(ResultCardData);
  }, []);

  return (
    <div className="bg-[#C8D0FA50] lg:pt-25 px-13 pb-24 ">
      <h1 className="font-futura font-bold md:text-3xl text-2xl lg:text-7xl tracking-[-2%] uppercase text-blue-900 text-center mb-10">
        marketing that gets results
      </h1>
      <div className=" space-y-7.5  flex flex-col items-center">
        {resultCard.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={index}
              className={`flex md:flex-row flex-col lg:w-[95%] lg:h-[33rem] md:h-[17rem] md:w-full bg-white  rounded-4xl overflow-hidden`}
            >
              {isEven ? (
                <>
                  <div className="lg:pr-41 lg:pl-13.5 lg:py-20 px-7 py-7 flex-1   order-2 md:order-2">
                    <div className=" lg:space-y-10 md:space-y-2 lg:mb-3 md:mb-1">
                      <div className="flex flex-col gap-7 items-start">
                        <Image
                          src={item.icon}
                          alt="icon"
                          className="w-auto lg:h-20 md:h-8 h-6 mb-1"
                        />
                        <h3 className="lg:text-6xl  md:text-4xl text-xl font-semibold uppercase font-futura text-blue-900   ">
                          {item.heading}
                        </h3>
                      </div>
                      <p className="text-textB lg:text-xl md:text:lg text-sm mb-4 w-[90%] leading-[150%] ">
                        {item.text}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex items-center lg:gap-3 md:gap-2 gap-1">
                        <div className="flex lg:-space-x-3 md:-space-x-2 -space-x-1">
                          {item.avater.map((avt, i) => (
                            <Image
                              key={i}
                              src={avt}
                              alt="avatar"
                              className="lg:w-12 lg:h-12 md:h-6 md:w-6 h-4 w-4 rounded-full border-2 border-white"
                            />
                          ))}
                        </div>
                        <p className="lg:text-lg text-sm  font-semibold  lg:font-bold  capitalize ">
                          view real stories
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="  order-1 relative ">
                    <Image
                      src={item.back}
                      alt={item.heading}
                      className="lg:w-[42rem] lg:h-[37rem] md:h-[17rem] md:w-[17rem]  object-cover"
                    />
                    <div className="w-[80%] absolute top-[50%] mx-auto  left-[10%] items-center justify-center flex in-last:top-[60%]">
                      <div className="absolute -bottom-3 w-[94%] h-30 left-[3%] right-0  bg-[#89C6D3] rounded-3xl z-1 last:hidden "></div>
                      <div className="absolute -bottom-6 w-[88%] h-30 left-[6%] right-0  bg-[#4FAABE] rounded-3xl last:hidden  "></div>
                      <Image
                        src={item.miniImg}
                        id="miniImage"
                        alt="mini"
                        className=" w-full h-auto rounded-3xl z-1"
                      />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className=" order-2 relative">
                    <Image
                      src={item.back}
                      alt={item.heading}
                      className="lg:w-[42rem] lg:h-[37rem] md:h-[17rem] md:w-[17rem]  object-cover"
                    />
                    <div className="w-[75%] absolute top-[45%] mx-auto  left-[12.5%] items-center justify-center flex  ">
                      <div className="absolute -bottom-3 w-[94%] h-30 left-[3%] right-0  bg-[#89C6D3] rounded-3xl z-1 "></div>
                      <div className="absolute -bottom-6 w-[88%] h-30 left-[6%] right-0  bg-[#4FAABE] rounded-3xl   "></div>
                      <Image
                        src={item.miniImg}
                        id="miniImage"
                        alt="mini"
                        className=" w-full h-auto rounded-3xl z-1"
                      />
                    </div>
                  </div>

                  <div className="lg:px-20 lg:py-20 px-7 py-7 flex-1 order-2 md:order-1">
                    <div className=" lg:space-y-10 md:space-y-2 lg:mb-3 md:mb-1">
                      <div className="flex flex-col gap-7 items-start">
                        <Image
                          src={item.icon}
                          alt="icon"
                          className="w-auto lg:h-20 md:h-8 h-6 mb-1"
                        />
                        <h3 className="lg:text-6xl  md:text-4xl text-xl font-semibold uppercase font-futura text-blue-900   ">
                          {item.heading}
                        </h3>
                      </div>
                      <p className="text-textB lg:text-xl md:text:lg text-sm mb-4 w-[90%] leading-[150%] ">
                        {item.text}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center lg:gap-3 md:gap-2 gap-1">
                        <div className="flex lg:-space-x-3 md:-space-x-2 -space-x-1">
                          {item.avater.map((avt, i) => (
                            <Image
                              key={i}
                              src={avt}
                              alt="avatar"
                              className="lg:w-12 lg:h-12 md:h-6 md:w-6 h-4 w-4 rounded-full border-2 border-white"
                            />
                          ))}
                        </div>
                        <p className="lg:text-lg text-sm  font-semibold  lg:font-bold  capitalize ">
                          view real stories
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
      <ReadyGrow />
    </div>
  );
};

export default ResultCard;
