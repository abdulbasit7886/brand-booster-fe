import React from "react";
import { CImages, images } from "../../data/Images";
import bannerimage from "../../asset/images/image 1.png";
import brandLogo from "../../asset/images/c logos/datafloqa.png";
import boostIcon from "../../asset/icons/booster.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Image from "next/image";

const Header = () => {
  return (
    <div className=" w-screen h-auto font-inter bg-gradient-to-b from-purple lg:from-40% from-70% to-white-50 lg:to-80% to-100%">
      <div className="flex flex-col md:flex-row justify-between lg:px-12.5 px-5  ">
        <div className=" w-full lg:w-[50%] lg:pl-8 flex lg:pt-62.25 pt-23 md:ml-0 md:justify-center">
          <div className="flex flex-col  lg:gap-8  gap-3 md:pt-0  text-left sm:pt-20 ">
            <div className="lg:gap-6 gap-3 flex flex-col">
              <h1 className="font-futura font-bold lg:font-bold  text-3xl uppercase lg:text-8xl tracking-[-2%] lg:leading-[92%] text-blue-900 ">
                your brand on 200+ news sites
              </h1>
              <p className="lg:font-medium font-normal text-sm lg:text-2xl text-textB leading-[150%] w-[90%]">
                Share your story on{" "}
                <b className="text-[#181D27] ">200+ influential news sites </b>{" "}
                your competitor can&apos;t reach — and watch your visibility,
                credibility, and audience grow.
              </p>
              <div>
                <div className="flex gap-2 lg:gap-4  items-center lg:justify-start px-2 ">
                  <div className="flex items-center ">
                    {images.map((img, index) => (
                      <Image
                        key={index}
                        src={img}
                        alt=""
                        className=" h-6.5 w-6.5 lg:h-12 lg:w-12 shadow rounded-full border-2 lg:border-2  border-white -ml-1.5 lg:-ml-4.5"
                      />
                    ))}
                  </div>
                  <p className="capitalize text-[13px] lg:text-xl text-textB ">
                    trusted by{" "}
                    <span className="text-[#181D27] font-semibold">2000+</span>
                    {""}
                    brands worldwide
                  </p>
                </div>
              </div>
            </div>
            <div className=" flex flex-col lg:items-start items-center">
              <button className="flex items-center justify-center lg:w-[220px] lg:h-16 h-12 w-full   gap-2  text-sm  lg:text-xl bg-gradient-to-tr from-sky to-blue text-white rounded-full text-semibold">
                <Image src={boostIcon} alt="icon" /> Boost Now
              </button>
              <div className="w-auto lg:hidden block justify-center pt-5 ">
                <div className="lg:w-[40.79rem] lg:h-[49.53rem] w-[343px] h-[436px] border-[0.20rem] border-white rounded-2xl relative overflow-hidden object-bottom object-cover">
                  <Image
                    src={bannerimage}
                    alt=""
                    className="absolute top-0 left-0 w-full h-full"
                  />
                  <div className="bg-[#00000025] absolute top-0 left-0 w-full h-full">
                    <Image
                      src={brandLogo}
                      alt=""
                      className="md:h-14 h-7 w-auto absolute top-7 left-7"
                    />
                  </div>
                  <div className="flex z-2 items-center top-[200px] h-[14.87rem] mx-auto  gap-4 px-5 pt-15  absolute flex-col bg-gradient-to-b  from-transparent from-10% to-[#00000090] to-70% w-full md:pb-10 lg:pb-40">
                    <div className="font-futura text-[1rem]  pt-13  text-white uppercase text-center">
                      <h1>
                        author jesica miller&apos;s second novel coming this
                        week
                      </h1>
                    </div>
                    <div className="bg-[#ffffff30] flex items-center  justify-between w-[9rem] h-8 text-white  rounded-full px-2 backdrop-blur-[3rem]">
                      <FaChevronLeft className="lg:text-3xl md:text-sm" />
                      <div className="flex items-center gap-4 ">
                        <i className=" w-2.5 h-2.5  bg-white rounded-full"></i>
                        <i className=" w-2.5 h-2.5  bg-white rounded-full opacity-45"></i>
                        <i className=" w-2.5 h-2.5 bg-white rounded-full opacity-45"></i>
                      </div>
                      <FaChevronRight className="lg:text-3xl md:text-sm" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col  lg:mt-4  space-y-2 text-left  sm:items-start">
              <h3 className="lg:font-bold font-normal  text-[1rem] flex md:text-xl">
                Publish Your Story on:
              </h3>
              <div className="flex items-center lg:gap-30 gap-7  lg:mt-7 lg:justify-between  lg:w-[100%] overflow-x-hidden animation-scroll ">
                {CImages.map((img, index) => {
                  return (
                    <Image
                      className="lg:h-8 h-5 w-auto border"
                      key={index}
                      src={img}
                      alt=""
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="w-auto md:flex hidden justify-center  pr-10.25 pt-35 ">
          <div className="lg:w-[40.79rem] lg:h-[49.53rem] md:w-[17rem] md:h-[23rem] border-[0.20rem] border-white rounded-4xl relative overflow-hidden object-bottom object-cover">
            <Image
              src={bannerimage}
              alt=""
              className="absolute top-0 left-0 w-full h-full"
            />
            <div className="bg-[#00000025] absolute top-0 left-0 w-full h-full">
              <Image
                src={brandLogo}
                alt=""
                className="md:h-14 h-7 w-auto absolute top-7 left-7"
              />
            </div>
            <div className="flex z-2 items-center top-[550px] h-[14.87rem] mx-auto  gap-4  absolute flex-col bg-gradient-to-b  from-transparent from-10% to-[#00000090] to-70% w-full md:pb-10 lg:pb-40">
              <div className="font-futura text-sm px-5 pt-13 lg:text-4xl text-white uppercase text-center">
                <h1>
                  author jesica miller&apos;s second novel coming this week
                </h1>
              </div>
              <div className="bg-[#ffffff30] flex items-center  justify-between w-[13.06rem] h-13 text-white px-3 py-5  rounded-full backdrop-blur-[3rem]">
                <FaChevronLeft className="lg:text-3xl md:text-sm" />
                <div className="flex items-center lg:gap-5">
                  <i className="lg:h-3.5 lg:w-3.5 md:h-2 md:w-2 bg-white rounded-full"></i>
                  <i className="lg:h-3.5 lg:w-3.5 md:h-2 md:w-2 bg-white rounded-full opacity-45"></i>
                  <i className="lg:h-3.5 lg:w-3.5 md:h-2 md:w-2 bg-white rounded-full opacity-45"></i>
                </div>
                <FaChevronRight className="lg:text-3xl md:text-sm" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
