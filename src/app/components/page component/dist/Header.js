"use strict";
exports.__esModule = true;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var image_1 = require("next/image");
var fa6_1 = require("react-icons/fa6");
var image_1_png_1 = require("../../asset/images/image 1.png");
var datafloqa_png_1 = require("../../asset/images/c logos/datafloqa.png");
var dj_png_1 = require("../../asset/icons/dj.png");
var booster_png_1 = require("../../asset/icons/booster.png");
var Images_1 = require("../../data/Images");
var Header = function () {
    // Use the same image for all slides as requested
    var carouselItems = react_1.useState([
        {
            id: 1,
            banner: image_1_png_1["default"],
            logo: datafloqa_png_1["default"],
            title: "author jesica miller's second novel coming this week"
        },
        {
            id: 2,
            banner: image_1_png_1["default"],
            logo: datafloqa_png_1["default"],
            title: "another exciting announcement coming soon"
        },
        {
            id: 3,
            banner: image_1_png_1["default"],
            logo: datafloqa_png_1["default"],
            title: "special event happening next month"
        }
    ])[0];
    var _a = react_1.useState(0), currentIndex = _a[0], setCurrentIndex = _a[1];
    // Navigation functions
    var handleNext = function () {
        setCurrentIndex(function (prevIndex) {
            return prevIndex + 1 === carouselItems.length ? 0 : prevIndex + 1;
        });
    };
    var handlePrevious = function () {
        setCurrentIndex(function (prevIndex) {
            return prevIndex - 1 < 0 ? carouselItems.length - 1 : prevIndex - 1;
        });
    };
    var handleDotClick = function (index) {
        setCurrentIndex(index);
    };
    react_1.useEffect(function () {
        var interval = setInterval(function () {
            handleNext();
        }, 5000);
        return function () { return clearInterval(interval); };
    }, [currentIndex]);
    var Carousel = function (_a) {
        var _b = _a.isMobile, isMobile = _b === void 0 ? false : _b;
        var containerClass = isMobile
            ? "w-auto lg:hidden block justify-center pt-5"
            : "w-auto lg:flex hidden justify-center pr-10.25 pt-35";
        var innerContainerClass = isMobile
            ? "lg:w-[40.79rem] lg:h-[49.53rem] w-[343px] h-[436px] border-[0.20rem] border-white rounded-2xl"
            : "lg:w-[40.79rem] lg:h-[49.53rem] md:w-[17rem] md:h-[23rem] border-[0.20rem] border-white rounded-4xl";
        var contentPositionClass = isMobile
            ? "top-[200px] h-[14.87rem] px-5 pt-15 md:pb-10 lg:pb-40"
            : "top-[550px] h-[14.87rem] md:pb-10 lg:pb-40";
        var titleClass = isMobile
            ? "font-futura text-[1rem] pt-13"
            : "font-futura text-sm px-5 pt-13 lg:text-4xl";
        var controlsClass = isMobile
            ? "bg-[#ffffff30] flex items-center justify-between w-[10.06rem] h-10 px-2 text-white rounded-full backdrop-blur-[3rem]"
            : "bg-[#ffffff30] flex items-center justify-between w-[13.06rem] h-13 text-white px-3 py-5 rounded-full backdrop-blur-[3rem]";
        var dotClass = isMobile
            ? "w-2.5 h-2.5"
            : "lg:h-3.5 lg:w-3.5 md:h-2 md:w-2";
        var arrowClass = isMobile
            ? "text-xl rounded-full text-white hover:bg-[#ffffff20] transition-colors"
            : "lg:text-3xl md:text-sm";
        return (react_1["default"].createElement("div", { className: containerClass },
            react_1["default"].createElement("div", { className: innerContainerClass + " relative overflow-hidden object-bottom object-cover" },
                react_1["default"].createElement(framer_motion_1.AnimatePresence, { mode: "wait" },
                    react_1["default"].createElement(framer_motion_1.motion.div, { key: currentIndex, initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 0.5 }, className: "absolute top-0 left-0 w-full h-full" },
                        react_1["default"].createElement(image_1["default"], { src: carouselItems[currentIndex].banner, alt: "Carousel image", className: "absolute top-0 left-0 w-full h-full object-cover" }))),
                react_1["default"].createElement("div", { className: "bg-[#00000025] absolute top-0 left-0 w-full h-full" }, isMobile ? (react_1["default"].createElement(image_1["default"], { src: dj_png_1["default"], alt: "Brand logo", className: "md:h-14 h-7 w-auto absolute top-7 left-7" })) : (react_1["default"].createElement(react_1["default"].Fragment, null,
                    react_1["default"].createElement(image_1["default"], { src: datafloqa_png_1["default"], alt: "", className: "md:h-14 h-7 w-auto lg:block hidden absolute top-7 left-7" }),
                    react_1["default"].createElement(image_1["default"], { src: dj_png_1["default"], alt: "", className: "md:h-14 h-7 w-auto lg:hidden block absolute top-7 left-7" })))),
                react_1["default"].createElement("div", { className: "flex z-2 items-center mx-auto gap-4 absolute flex-col bg-gradient-to-b from-transparent from-10% to-[#00000090] to-70% w-full " + contentPositionClass },
                    react_1["default"].createElement(framer_motion_1.motion.div, { key: "text-" + currentIndex, initial: { y: 20, opacity: 0 }, animate: { y: 0, opacity: 1 }, transition: { duration: 0.5 }, className: titleClass + " text-white uppercase text-center" },
                        react_1["default"].createElement("h1", null, carouselItems[currentIndex].title))),
                react_1["default"].createElement("div", { className: "absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10" },
                    react_1["default"].createElement("div", { className: controlsClass },
                        react_1["default"].createElement("button", { onClick: handlePrevious, className: isMobile ? arrowClass : "", "aria-label": "Previous slide" },
                            react_1["default"].createElement(fa6_1.FaChevronLeft, { className: arrowClass })),
                        react_1["default"].createElement("div", { className: "flex items-center lg:gap-3 gap-2" }, carouselItems.map(function (_, index) { return (react_1["default"].createElement("button", { key: index, onClick: function () { return handleDotClick(index); }, className: "p-1", "aria-label": "Go to slide " + (index + 1) },
                            react_1["default"].createElement("i", { className: dotClass + " bg-white rounded-full block " + (currentIndex === index ? "opacity-100" : "opacity-45") }))); })),
                        react_1["default"].createElement("button", { onClick: handleNext, className: isMobile ? arrowClass : "", "aria-label": "Next slide" },
                            react_1["default"].createElement(fa6_1.FaChevronRight, { className: arrowClass })))))));
    };
    return (react_1["default"].createElement("div", { className: "w-screen h-auto font-inter bg-gradient-to-b from-purple lg:from-40% from-70% to-white-50 lg:to-80% to-100%" },
        react_1["default"].createElement("div", { className: "flex flex-col md:flex-row justify-between lg:px-12.5 px-5" },
            react_1["default"].createElement("div", { className: "w-full lg:w-[50%] lg:pl-8 flex lg:pt-62.25 pt-23 md:ml-0 md:justify-center" },
                react_1["default"].createElement("div", { className: "flex flex-col lg:gap-8 gap-3 md:pt-0 text-left sm:pt-20" },
                    react_1["default"].createElement("div", { className: "lg:gap-6 gap-3 flex flex-col" },
                        react_1["default"].createElement("h1", { className: "font-futura font-bold lg:font-bold text-3xl uppercase lg:text-8xl tracking-[-2%] lg:leading-[92%] text-blue-900" }, "your brand on 200+ news sites"),
                        react_1["default"].createElement("p", { className: "lg:font-medium font-normal text-sm lg:text-2xl text-textB leading-[150%] w-[90%]" },
                            "Share your story on",
                            " ",
                            react_1["default"].createElement("b", { className: "text-[#181D27]" }, "200+ influential news sites "),
                            " ",
                            "your competitor can't reach \u2014 and watch your visibility, credibility, and audience grow."),
                        react_1["default"].createElement("div", null,
                            react_1["default"].createElement("div", { className: "flex gap-2 lg:gap-4 items-center lg:justify-start px-2" },
                                react_1["default"].createElement("div", { className: "flex items-center" }, Images_1.images.map(function (img, index) { return (react_1["default"].createElement(image_1["default"], { key: index, src: img, alt: "", className: "h-6.5 w-6.5 lg:h-12 lg:w-12 shadow rounded-full border-2 lg:border-2 border-white -ml-1.5 lg:-ml-4.5" })); })),
                                react_1["default"].createElement("p", { className: "capitalize text-xs lg:text-xl text-textB" },
                                    "trusted by",
                                    " ",
                                    react_1["default"].createElement("span", { className: "text-[#181D27] font-semibold" }, "2000+"),
                                    "brands worldwide")))),
                    react_1["default"].createElement("div", { className: "flex flex-col lg:items-start items-center" },
                        react_1["default"].createElement("button", { className: "flex items-center justify-center lg:w-[220px] lg:h-16 h-12 w-full gap-2 text-sm lg:text-xl bg-gradient-to-tr from-sky to-blue text-white rounded-full text-semibold" },
                            react_1["default"].createElement(image_1["default"], { src: booster_png_1["default"], alt: "icon" }),
                            " Boost Now"),
                        react_1["default"].createElement(Carousel, { isMobile: true })),
                    react_1["default"].createElement("div", { className: "flex flex-col lg:mt-4 space-y-2 text-left sm:items-start" },
                        react_1["default"].createElement("h3", { className: "lg:font-bold font-normal text-[1rem] flex md:text-xl" }, "Publish Your Story on:"),
                        react_1["default"].createElement("div", { className: "flex items-center lg:gap-30 gap-7 lg:mt-7 lg:justify-between lg:w-[100%] overflow-x-hidden animation-scroll" }, Images_1.CImages.map(function (img, index) {
                            return (react_1["default"].createElement(image_1["default"], { className: "lg:h-8 h-5 w-auto border", key: index, src: img, alt: "" }));
                        }))))),
            react_1["default"].createElement(Carousel, { isMobile: false }))));
};
exports["default"] = Header;
