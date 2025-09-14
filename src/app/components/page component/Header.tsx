import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

import bannerimage from "../../asset/images/image 1.png";
import brandLogo from "../../asset/images/c logos/datafloqa.svg";
import brandLogo2 from "../../asset/icons/dj.svg";
import boostIcon from "../../asset/icons/booster.svg";
import { CImages, images } from "../../data/Images";
import { useRouter } from "next/navigation";

interface CarouselItem {
  id: number;
  banner: StaticImageData;
  logo: StaticImageData;
  title: string;
}

const Header: React.FC = () => {
  const router = useRouter();

  const [carouselItems] = useState<CarouselItem[]>([
    {
      id: 1,
      banner: bannerimage,
      logo: brandLogo,
      title: "author jesica miller's second novel coming this week",
    },
    {
      id: 2,
      banner: bannerimage,
      logo: brandLogo,
      title: "another exciting announcement coming soon",
    },
    {
      id: 3,
      banner: bannerimage,
      logo: brandLogo,
      title: "special event happening next month",
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

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

  const Carousel = ({ isMobile = false }: { isMobile?: boolean }) => {
    const containerClass = isMobile
      ? "w-full md:hidden block justify-center pt-5"
      : "w-[46%] lg:w-[44%] xl:w-[42%] 2xl:w-[45%] md:flex hidden justify-center 2xl:pl-17  flex items-center md:pt-17 md:mt-7 lg:pt-21 xl:pt-20 2xl:pt-32 ";

    const innerContainerClass = isMobile
      ? "w-full h-[35rem] border-[0.20rem] border-white rounded-2xl"
      : "md:w-[18rem] md:h-[24rem] lg:w-[22rem] lg:h-[28rem] xl:w-[28rem] xl:h-[34rem] 2xl:w-[41rem] 2xl:h-[46rem] border-[0.20rem] border-white rounded-3xl";

    const contentPositionClass = isMobile
      ? "h-full flex flex-col items-center justify-end pb-10"
      : " h-full flex flex-col items-center justify-end md:pb-10 2xl:pb-15";

    const titleClass = isMobile
      ? "font-futura text-xl pt-4 text-white uppercase text-center"
      : "font-futura px-5 text-center uppercase text-white md:text-sm lg:text-xl xl:text-2xl 2xl:text-4xl";

    const controlsClass = isMobile
      ? "bg-[#ffffff30] flex items-center justify-between w-[10rem] h-10 px-2 text-white rounded-full backdrop-blur-[3rem]"
      : "bg-[#ffffff50] flex items-center justify-between lg:w-[12rem] mx-auto md:h-9 lg:h-11 xl:h-12 2xl:h-14 text-white px-3 py-4 rounded-full backdrop-blur-[3rem]";

    const dotClass = isMobile
      ? "w-2.5 h-2.5"
      : "md:w-2 md:h-2 lg:w-3 lg:h-3 xl:w-3.5 xl:h-3.5 2xl:w-4 2xl:h-4";

    const arrowClass = isMobile
      ? "text-xl rounded-full text-white hover:bg-[#ffffff20] transition-colors"
      : "md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl";

    return (
      <div className={containerClass}>
        <div
          className={`${innerContainerClass} relative overflow-hidden object-bottom object-cover`}
        >
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

          <div className=" bg-gradient-to-t from-[#000000] to-transparent absolute top-0 left-0 w-full h-full">
            {isMobile ? (
              <Image
                src={brandLogo2}
                alt="Brand logo"
                className="h-7 w-auto absolute top-7 left-7"
              />
            ) : (
              <>
                <Image
                  src={brandLogo}
                  alt=""
                  className="md:h-8 lg:h-10 xl:h-12 w-auto lg:block hidden absolute top-7 left-7"
                />
                <Image
                  src={brandLogo2}
                  alt=""
                  className="md:h-8 lg:h-10 xl:h-12 w-auto lg:hidden block absolute top-7 left-7"
                />
              </>
            )}
          </div>

          <div
            className={`absolute bottom-0  top-0 left-0 w-full h-full flex flex-col items-center  gap-4 bg-gradient-to-b from-transparent via-[#00000060] to-[#00000090] px-4 pt-6 pb-8" ${contentPositionClass}`}
          >
            <div className="">
              <motion.div
                key={`text-${currentIndex}`}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className={`${titleClass}`}
              >
                <h1>{carouselItems[currentIndex].title}</h1>
              </motion.div>
            </div>

            <div className="  z-10">
              <div className={controlsClass}>
                <button onClick={handlePrevious} aria-label="Previous slide">
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

                <button onClick={handleNext} aria-label="Next slide">
                  <FaChevronRight className={arrowClass} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <header className="w-screen h-auto font-inter bg-gradient-to-b from-purple lg:from-40% from-70% md:from-50% to-white-50 lg:to-80% md:to-90% to-100%">
      <div className="flex flex-col md:flex-row justify-between 2xl:px-20 xl:px-14 lg:px-10 md:px-6 px-3">
        {/* Left Content */}
        <div
          className="w-full md:w-[54%] lg:w-[52%] xl:w-[50%] 2xl:w-[55%] lg:pl-8 flex 
        pt-20 md:pt-12 lg:pt-16 xl:pt-20 2xl:pt-30 md:ml-0 md:justify-center px-1"
        >
          <div className="flex flex-col lg:gap-8 gap-3 text-left sm:pt-12">
            <div className="lg:gap-6 gap-3 flex flex-col">
              <h1
                className="font-futura font-bold uppercase text-blue-900 
                text-4xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-8xl  between-xl:text-8xl
                  tracking-[-2%] leading-tight"
              >
                your brand on 200+ news sites
              </h1>
              <p className="lg:font-medium font-normal text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-textB leading-[150%] w-[100%]">
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
                        className="h-6 w-6 md:h-7 md:w-7 lg:h-10 lg:w-10 xl:h-12 xl:w-12 shadow rounded-full border-2 border-white -ml-1 md:-ml-2 lg:-ml-3"
                      />
                    ))}
                  </div>
                  <p className="capitalize text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl text-textB">
                    trusted by{" "}
                    <span className="text-[#181D27] font-semibold">2000+</span>
                    brands worldwide
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:items-start items-center">
              <button
                onClick={() => router.push("/coming-soon")}
                className="flex items-center justify-center w-full md:w-[180px] lg:w-[200px] xl:w-[220px] h-11 md:h-12 lg:h-14 xl:h-16 gap-2 text-sm md:text-base xl:text-lg 2xl:text-xl bg-gradient-to-tr from-sky to-blue text-white rounded-full font-semibold"
              >
                <Image src={boostIcon} alt="icon" /> Boost Now
              </button>

              {/* Mobile Carousel */}
              <Carousel isMobile={true} />
            </div>

            <div className="flex flex-col lg:mt-4 space-y-2 text-left sm:items-start">
              <h3 className="lg:font-bold font-normal text-[1rem] md:text-[1rem] lg:text-lg">
                Publish Your Story on:
              </h3>
              <div className="flex items-center lg:gap-14 xl:gap-17 gap-7 lg:mt-7 lg:justify-between lg:w-[100%] overflow-x-hidden animation-scroll">
                {CImages.map((img, index) => {
                  return (
                    <Image
                      className="h-5 md:h-3 lg:h-5  xl:h-6 2xl:h-8 w-auto"
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

        {/* Right Content (Carousel) */}
        <Carousel isMobile={false} />
      </div>
    </header>
  );
};

export default Header;
