import React, { useState, useEffect } from "react";
import "../../styles/Rescard.css";
import grow from "../../asset/icons/grow.svg";
import medal from "../../asset/icons/medal.svg";
import heart from "../../asset/icons/heart.svg";
import verified from "../../asset/icons/verified.svg";
import rank from "../../asset/icons/rank.svg";
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
    <div className="bg-[#C8D0FA50] lg:pt-20 pt-15 px-5 lg:pb-24 pb-4 ">
      <h1 className="font-futura font-bold text-[2rem] 2xl:text-7xl lg:text-5xl tracking-[-2%] uppercase text-blue-900 text-center mb-10">
        marketing that gets results
      </h1>
      <div className=" lg:space-y-7.5  space-y-4 flex flex-col items-center">
        {resultCard.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={index}
              className={`flex md:flex-row flex-col xl:w-[95%] md:h-[18rem] xl:h-[27rem]  2xl:h-[33rem] lg:h-[22rem] w-full bg-white  xl:rounded-4xl rounded-2xl overflow-hidden`}
            >
              {isEven ? (
                <>
                  <div className="2xl:pr-41 xl:pr-10 lg:pl-13.5 2xl:py-20 lg:py-13 px-3 py-6 flex-1 order-2 md:order-2">
                    <div className=" 2xl:space-y-10 xl:space-y-5  space-y-2 lg:mb-3 md:mb-1">
                      <div className="flex flex-col 2xl:gap-7  gap-4 items-start">
                        <Image
                          src={item.icon}
                          alt="icon"
                          className="w-auto 2xl:h-20 xl:h-15  h-9 mb-1"
                        />
                        <h3 className="2xl:text-6xl xl:text-5xl lg:text-4xl  text-2xl font-semibold uppercase font-futura text-blue-900   ">
                          {item.heading}
                        </h3>
                      </div>
                      <p className="text-textB 2xl:text-xl lg:text-lg  text-sm mb-4 xl:w-[90%] w-[100%] leading-[150%] ">
                        {item.text}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex items-center xl:gap-3 gap-4">
                        <div className="flex xl:-space-x-3 md:-space-x-2 -space-x-1">
                          {item.avater.map((avt, i) => (
                            <Image
                              key={i}
                              src={avt}
                              alt="avatar"
                              className="2xl:w-12 2xl:h-12 lg:w-9 lg:h-9 h-6 w-6 rounded-full border-2 border-white shadow"
                            />
                          ))} 
                        </div>
                        <p className="xl:text-lg text-[1rem]  font-semibold  lg:font-bold  capitalize ">
                          view real stories
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="  order-1 relative ">
                    <Image
                      src={item.back}
                      alt={item.heading}
                      className="xl:w-[32rem] xl:h-[27rem] 2xl:h-[37rem] 2xl:w-[37rem] md:h-full md:w-[18rem] lg:[h-22rem] lg:w-[22rem]  h-[22.56rem] w-full  object-cover"
                    />
                    <div className="xl:w-[80%] w-[60%] absolute  bottom-12 mx-auto  xl:left-[10%] left-[20%] items-center justify-center flex ">
                      <div className="absolute 2xl:-bottom-3 w-[96%] xl:h-full h-full -bottom-[7px] left-[2%] right-0  bg-[#89C6D3] rounded-3xl z-1 last:hidden "></div>
                      <div className="absolute 2xl:-bottom-6 w-[90%] xl:h-full h-full -bottom-3 left-[5%] right-0  bg-[#4FAABE] rounded-3xl last:hidden  "></div>
                      <Image
                        src={item.miniImg}
                        id="miniImage"
                        alt="mini"
                        className=" w-full h-auto xl:rounded-3xl rounded-xl z-1"
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
                      className="2xl:w-[42rem] 2xl:h-[37rem] xl:w-[32rem] xl:h-[27rem] md:h-full md:w-[18rem] lg:h-[22rem] lg:w-[22rem]  h-[22.56rem] w-full  object-cover"
                    />
                    <div className="xl:w-[80%] w-[60%] absolute  bottom-12 mx-auto  xl:left-[10%] left-[20%] items-center justify-center flex ">
                      <div className="absolute 2xl:-bottom-3 w-[96%] 2xl:h-full h-full -bottom-[7px] left-[2%] right-0  bg-[#89C6D3] rounded-3xl z-1 last:hidden "></div>
                      <div className="absolute 2xl:-bottom-6 w-[90%] 2xl:h-full h-full -bottom-3 left-[5%] right-0  bg-[#4FAABE] rounded-3xl last:hidden  "></div>
                      <Image
                        src={item.miniImg}
                        id="miniImage"
                        alt="mini"
                        className=" w-full h-auto xl:rounded-3xl rounded-xl z-1"
                      />
                    </div>
                  </div>

                  <div className="2xl:pr-41 xl:pr-10 lg:pl-13.5 2xl:py-20 lg:py-13 px-3 py-6 flex-1 order-2 md:order-1">
                  <div className=" 2xl:space-y-10 xl:space-y-5  space-y-2 lg:mb-3 md:mb-1">
                      <div className="flex flex-col xl:gap-7  gap-4 items-start">
                        <Image
                          src={item.icon}
                          alt="icon"
                          className="w-auto 2xl:h-20 xl:h-15  h-9 mb-1"
                        />
                        <h3 className="2xl:text-6xl xl:text-5xl lg:text-4xl  text-2xl font-semibold  uppercase font-futura text-blue-900   ">
                          {item.heading}
                        </h3>
                      </div>
                      <p className="text-textB 2xl:text-xl lg:text-lg  text-sm mb-4 xl:w-[90%] w-[100%] leading-[150%] ">
                        {item.text}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center lg:gap-3 gap-4">
                        <div className="flex lg:-space-x-3 md:-space-x-2 -space-x-1">
                          {item.avater.map((avt, i) => (
                            <Image
                              key={i}
                              src={avt}
                              alt="avatar"
                              className="2xl:w-12 2xl:h-12 lg:w-9 lg:h-9 h-6 w-6 rounded-full border-2 border-white shadow"
                            />
                          ))}
                        </div>
                        <p className="lg:text-lg text-[1rem]  font-semibold  lg:font-bold  capitalize ">
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
    </div>
  );
};

export default ResultCard;
