import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

import bannerimage from "../../asset/images/image 1.png";
import brandLogo from "../../asset/images/c logos/datafloqa.png";
import brandLogo2 from "../../asset/icons/dj.png";
import boostIcon from "../../asset/icons/booster.png";
import { CImages, images } from "../../data/Images";

// Define types for the carousel items
interface CarouselItem {
  id: number;
  banner: StaticImageData;
  logo: StaticImageData;
  title: string;
}

const Header: React.FC = () => {
  // Use the same image for all slides as requested
  const [carouselItems] = useState<CarouselItem[]>([
    {
      id: 1,
      banner: bannerimage,
      logo: brandLogo,
      title: "author jesica miller's second novel coming this week"
    },
    {
      id: 2,
      banner: bannerimage,
      logo: brandLogo,
      title: "another exciting announcement coming soon"
    },
    {
      id: 3,
      banner: bannerimage,
      logo: brandLogo,
      title: "special event happening next month"
    }
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  // Navigation functions
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === carouselItems.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const Carousel = ({ isMobile = false }: { isMobile?: boolean }) => {
    const containerClass = isMobile 
      ? "w-auto lg:hidden block justify-center pt-5"
      : "w-auto lg:flex hidden justify-center pr-10.25 pt-35";
    
    const innerContainerClass = isMobile
      ? "lg:w-[40.79rem] lg:h-[49.53rem] w-[343px] h-[436px] border-[0.20rem] border-white rounded-2xl"
      : "lg:w-[40.79rem] lg:h-[49.53rem] md:w-[17rem] md:h-[23rem] border-[0.20rem] border-white rounded-4xl";
    
    const contentPositionClass = isMobile
      ? "top-[200px] h-[14.87rem] px-5 pt-15 md:pb-10 lg:pb-40"
      : "top-[550px] h-[14.87rem] md:pb-10 lg:pb-40";
    
    const titleClass = isMobile
      ? "font-futura text-[1rem] pt-13"
      : "font-futura text-sm px-5 pt-13 lg:text-4xl";
    
    const controlsClass = isMobile
      ? "bg-[#ffffff30] flex items-center justify-between w-[10.06rem] h-10 px-2 text-white rounded-full backdrop-blur-[3rem]"
      : "bg-[#ffffff30] flex items-center justify-between w-[13.06rem] h-13 text-white px-3 py-5 rounded-full backdrop-blur-[3rem]";
    
    const dotClass = isMobile
      ? "w-2.5 h-2.5"
      : "lg:h-3.5 lg:w-3.5 md:h-2 md:w-2";
    
    const arrowClass = isMobile
      ? "text-xl rounded-full text-white hover:bg-[#ffffff20] transition-colors"
      : "lg:text-3xl md:text-sm";

    return (
      <div className={containerClass}>
        <div className={`${innerContainerClass} relative overflow-hidden object-bottom object-cover`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute top-0 left-0 w-full h-full"
            >
              <Image
                src={carouselItems[currentIndex].banner}
                alt="Carousel image"
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>
          
          <div className="bg-[#00000025] absolute top-0 left-0 w-full h-full">
            {isMobile ? (
              <Image
                src={brandLogo2}
                alt="Brand logo"
                className="md:h-14 h-7 w-auto absolute top-7 left-7"
              />
            ) : (
              <>
                <Image
                  src={brandLogo}
                  alt=""
                  className="md:h-14 h-7 w-auto lg:block hidden absolute top-7 left-7"
                />
                <Image
                  src={brandLogo2}
                  alt=""
                  className="md:h-14 h-7 w-auto lg:hidden block absolute top-7 left-7"
                />
              </>
            )}
          </div>
          
          {/* Fixed Controls - Outside of AnimatePresence */}
          <div className={`flex z-2 items-center mx-auto gap-4 absolute flex-col bg-gradient-to-b from-transparent from-10% to-[#00000090] to-70% w-full ${contentPositionClass}`}>
            <motion.div
              key={`text-${currentIndex}`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className={`${titleClass} text-white uppercase text-center`}
            >
              <h1>{carouselItems[currentIndex].title}</h1>
            </motion.div>
          </div>
          
          {/* Fixed Controls Container - Positioned absolutely and not affected by animations */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
            <div className={controlsClass}>
              <button 
                onClick={handlePrevious}
                className={isMobile ? arrowClass : ""}
                aria-label="Previous slide"
              >
                <FaChevronLeft className={arrowClass} />
              </button>
              
              <div className="flex items-center lg:gap-3 gap-2">
                {carouselItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className="p-1"
                    aria-label={`Go to slide ${index + 1}`}
                  >
                    <i
                      className={`${dotClass} bg-white rounded-full block ${
                        currentIndex === index ? "opacity-100" : "opacity-45"
                      }`}
                    ></i>
                  </button>
                ))}
              </div>
              
              <button 
                onClick={handleNext}
                className={isMobile ? arrowClass : ""}
                aria-label="Next slide"
              >
                <FaChevronRight className={arrowClass} />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-screen h-auto font-inter bg-gradient-to-b from-purple lg:from-40% from-70% to-white-50 lg:to-80% to-100%">
      <div className="flex flex-col md:flex-row justify-between lg:px-12.5 px-5">
        <div className="w-full lg:w-[50%] lg:pl-8 flex lg:pt-62.25 pt-23 md:ml-0 md:justify-center">
          <div className="flex flex-col lg:gap-8 gap-3 md:pt-0 text-left sm:pt-20">
            <div className="lg:gap-6 gap-3 flex flex-col">
              <h1 className="font-futura font-bold lg:font-bold text-3xl uppercase lg:text-8xl tracking-[-2%] lg:leading-[92%] text-blue-900">
                your brand on 200+ news sites
              </h1>
              <p className="lg:font-medium font-normal text-sm lg:text-2xl text-textB leading-[150%] w-[90%]">
                Share your story on{" "}
                <b className="text-[#181D27]">200+ influential news sites </b>{" "}
                your competitor can&apos;t reach — and watch your visibility,
                credibility, and audience grow.
              </p>
              <div>
                <div className="flex gap-2 lg:gap-4 items-center lg:justify-start px-2">
                  <div className="flex items-center">
                    {images.map((img, index) => (
                      <Image
                        key={index}
                        src={img}
                        alt=""
                        className="h-6.5 w-6.5 lg:h-12 lg:w-12 shadow rounded-full border-2 lg:border-2 border-white -ml-1.5 lg:-ml-4.5"
                      />
                    ))}
                  </div>
                  <p className="capitalize text-xs lg:text-xl text-textB">
                    trusted by{" "}
                    <span className="text-[#181D27] font-semibold">2000+</span>
                    brands worldwide
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:items-start items-center">
              <button className="flex items-center justify-center lg:w-[220px] lg:h-16 h-12 w-full gap-2 text-sm lg:text-xl bg-gradient-to-tr from-sky to-blue text-white rounded-full text-semibold">
                <Image src={boostIcon} alt="icon" /> Boost Now
              </button>
              
              <Carousel isMobile={true} />
            </div>
            
            <div className="flex flex-col lg:mt-4 space-y-2 text-left sm:items-start">
              <h3 className="lg:font-bold font-normal text-[1rem] flex md:text-xl">
                Publish Your Story on:
              </h3>
              <div className="flex items-center lg:gap-30 gap-7 lg:mt-7 lg:justify-between lg:w-[100%] overflow-x-hidden animation-scroll">
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

        {/* Desktop Carousel */}
        <Carousel isMobile={false} />
      </div>
    </div>
  );
};

export default Header;