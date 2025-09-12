"use strict";
exports.__esModule = true;
exports.ResultCardData = void 0;
var react_1 = require("react");
require("../../styles/Rescard.css");
var grow_png_1 = require("../../asset/icons/grow.png");
var medal_png_1 = require("../../asset/icons/medal.png");
var heart_png_1 = require("../../asset/icons/heart.png");
var verified_png_1 = require("../../asset/icons/verified.png");
var rank_png_1 = require("../../asset/icons/rank.png");
var a__1__jpg_1 = require("../../asset/images/result images/a (1).jpg");
var a__3__png_1 = require("../../asset/images/result images/a (3).png");
var a__1__png_1 = require("../../asset/images/result images/a (1).png");
var a__2__jpg_1 = require("../../asset/images/result images/a (2).jpg");
var a__2__png_1 = require("../../asset/images/result images/a (2).png");
var b__5__png_1 = require("../../asset/images/result images/b (5).png");
var b__2__png_1 = require("../../asset/images/result images/b (2).png");
var b__4__png_1 = require("../../asset/images/result images/b (4).png");
var b__1__png_1 = require("../../asset/images/result images/b (1).png");
var b__3__png_1 = require("../../asset/images/result images/b (3).png");
var a__1__jpg_2 = require("../../asset/images/avater/a (1).jpg");
var a__1__png_2 = require("../../asset/images/avater/a (1).png");
var a__2__png_2 = require("../../asset/images/avater/a (2).png");
var a__3__png_2 = require("../../asset/images/avater/a (3).png");
var a__4__png_1 = require("../../asset/images/avater/a (4).png");
var image_1 = require("next/image");
exports.ResultCardData = [
    {
        heading: "get qualified buyer ",
        text: "Submit a news story on high-traffic news sites to drive qualified buyers to your website. Each publication acts as a landing page to warm buyers to your brand and offer before clicking through to your site.",
        miniImg: b__5__png_1["default"],
        back: a__1__jpg_1["default"],
        icon: heart_png_1["default"],
        avater: [a__1__jpg_2["default"], a__2__png_2["default"], a__3__png_2["default"]]
    },
    {
        heading: "rank higher on google",
        text: "our news releases often rank on the first page of the google for your keywords , driving more traffic to your site . search engines consider links from these news sites as high authority recommmendations , heping to push your search position higher. ",
        miniImg: b__2__png_1["default"],
        back: a__3__png_1["default"],
        icon: rank_png_1["default"],
        avater: [a__4__png_1["default"], a__1__png_2["default"], a__3__png_2["default"]]
    },
    {
        heading: "feature in AI results ",
        text: "our news articles are optimized to appear in AI-generated resuts like google's AI overviews,chatGPT, perPlexity, AI assistants ofen pull from our trusted news sources to answer quetions, giving your brand more visibility , trust , and traffic . ",
        miniImg: b__4__png_1["default"],
        back: a__1__png_1["default"],
        icon: medal_png_1["default"],
        avater: [a__1__png_2["default"], a__2__png_2["default"], a__3__png_2["default"]]
    },
    {
        heading: "increase sales",
        text: "Generate more sales by installing our customizable 'As Seen On' trust badge on your website. This badge improves conversion rates by up to 48% by building trust and legitimacy with your visitors. ",
        miniImg: b__3__png_1["default"],
        back: a__2__png_1["default"],
        icon: grow_png_1["default"],
        avater: [a__1__jpg_2["default"], a__2__png_2["default"], a__3__png_2["default"]]
    },
    {
        heading: "get verified ",
        text: "Our press releases prove that you and your brand are public figures of interest that need verification. Many of our clients use our press releases to get verified on Instagram, Facebook, Twitter, and other social media platforms.",
        miniImg: b__1__png_1["default"],
        back: a__2__jpg_1["default"],
        icon: verified_png_1["default"],
        avater: [a__4__png_1["default"], a__2__png_2["default"], a__3__png_2["default"]]
    },
];
var ResultCard = function () {
    var _a = react_1.useState([]), resultCard = _a[0], setResultCard = _a[1];
    react_1.useEffect(function () {
        setResultCard(exports.ResultCardData);
    }, []);
    return (react_1["default"].createElement("div", { className: "bg-[#C8D0FA50] lg:pt-20 pt-15 px-5 lg:pb-24 pb-4 " },
        react_1["default"].createElement("h1", { className: "font-futura font-bold text-[2rem] lg:text-7xl tracking-[-2%] uppercase text-blue-900 text-center mb-10" }, "marketing that gets results"),
        react_1["default"].createElement("div", { className: " lg:space-y-7.5  space-y-4 flex flex-col items-center" }, resultCard.map(function (item, index) {
            var isEven = index % 2 === 0;
            return (react_1["default"].createElement("div", { key: index, className: "flex md:flex-row flex-col lg:w-[95%] lg:h-[33rem] w-full bg-white  lg:rounded-4xl rounded-2xl overflow-hidden" }, isEven ? (react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement("div", { className: "lg:pr-41 lg:pl-13.5 lg:py-20 px-3 py-6 flex-1 order-2 md:order-2" },
                    react_1["default"].createElement("div", { className: " lg:space-y-10  space-y-2 lg:mb-3 md:mb-1" },
                        react_1["default"].createElement("div", { className: "flex flex-col lg:gap-7  gap-4 items-start" },
                            react_1["default"].createElement(image_1["default"], { src: item.icon, alt: "icon", className: "w-auto lg:h-20  h-9 mb-1" }),
                            react_1["default"].createElement("h3", { className: "lg:text-6xl  text-2xl font-semibold uppercase font-futura text-blue-900   " }, item.heading)),
                        react_1["default"].createElement("p", { className: "text-textB lg:text-xl  text-sm mb-4 lg:w-[90%] w-[100%] leading-[150%] " }, item.text)),
                    react_1["default"].createElement("div", { className: "flex items-center gap-3" },
                        react_1["default"].createElement("div", { className: "flex items-center lg:gap-3 gap-4" },
                            react_1["default"].createElement("div", { className: "flex lg:-space-x-3 md:-space-x-2 -space-x-1" }, item.avater.map(function (avt, i) { return (react_1["default"].createElement(image_1["default"], { key: i, src: avt, alt: "avatar", className: "lg:w-12 lg:h-12 h-6 w-6 rounded-full border-2 border-white shadow" })); })),
                            react_1["default"].createElement("p", { className: "lg:text-lg text-[1rem]  font-semibold  lg:font-bold  capitalize " }, "view real stories")))),
                react_1["default"].createElement("div", { className: "  order-1 relative " },
                    react_1["default"].createElement(image_1["default"], { src: item.back, alt: item.heading, className: "lg:w-[42rem] lg:h-[37rem] h-[22.56rem] w-full  object-cover" }),
                    react_1["default"].createElement("div", { className: "lg:w-[80%] w-[60%] absolute  bottom-12 mx-auto  lg:left-[10%] left-[20%] items-center justify-center flex " },
                        react_1["default"].createElement("div", { className: "absolute lg:-bottom-3 w-[96%] lg:h-30 h-full -bottom-[7px] left-[2%] right-0  bg-[#89C6D3] rounded-3xl z-1 last:hidden " }),
                        react_1["default"].createElement("div", { className: "absolute lg:-bottom-6 w-[90%] lg:h-30 h-full -bottom-3 left-[5%] right-0  bg-[#4FAABE] rounded-3xl last:hidden  " }),
                        react_1["default"].createElement(image_1["default"], { src: item.miniImg, id: "miniImage", alt: "mini", className: " w-full h-auto lg:rounded-3xl rounded-xl z-1" }))))) : (react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement("div", { className: " order-2 relative" },
                    react_1["default"].createElement(image_1["default"], { src: item.back, alt: item.heading, className: "lg:w-[42rem] lg:h-[37rem] h-[22.56rem] w-full  object-cover" }),
                    react_1["default"].createElement("div", { className: "lg:w-[80%] w-[60%] absolute  bottom-12 mx-auto  lg:left-[10%] left-[20%] items-center justify-center flex " },
                        react_1["default"].createElement("div", { className: "absolute lg:-bottom-3 w-[96%] lg:h-30 h-full -bottom-[7px] left-[2%] right-0  bg-[#89C6D3] rounded-3xl z-1 last:hidden " }),
                        react_1["default"].createElement("div", { className: "absolute lg:-bottom-6 w-[90%] lg:h-30 h-full -bottom-3 left-[5%] right-0  bg-[#4FAABE] rounded-3xl last:hidden  " }),
                        react_1["default"].createElement(image_1["default"], { src: item.miniImg, id: "miniImage", alt: "mini", className: " w-full h-auto lg:rounded-3xl rounded-xl z-1" }))),
                react_1["default"].createElement("div", { className: "lg:px-20 lg:py-20 px-7 py-7 flex-1 order-2 md:order-1" },
                    react_1["default"].createElement("div", { className: " lg:space-y-10  space-y-2 lg:mb-3 md:mb-1" },
                        react_1["default"].createElement("div", { className: "flex flex-col lg:gap-7  gap-4 items-start" },
                            react_1["default"].createElement(image_1["default"], { src: item.icon, alt: "icon", className: "w-auto lg:h-20  h-9 mb-1" }),
                            react_1["default"].createElement("h3", { className: "lg:text-6xl  text-2xl font-semibold uppercase font-futura text-blue-900   " }, item.heading)),
                        react_1["default"].createElement("p", { className: "text-textB lg:text-xl  text-sm mb-4 lg:w-[90%] w-[100%] leading-[150%] " }, item.text)),
                    react_1["default"].createElement("div", { className: "flex items-center gap-3" },
                        react_1["default"].createElement("div", { className: "flex items-center lg:gap-3 gap-4" },
                            react_1["default"].createElement("div", { className: "flex lg:-space-x-3 md:-space-x-2 -space-x-1" }, item.avater.map(function (avt, i) { return (react_1["default"].createElement(image_1["default"], { key: i, src: avt, alt: "avatar", className: "lg:w-12 lg:h-12 h-6 w-6 rounded-full border-2 border-white shadow" })); })),
                            react_1["default"].createElement("p", { className: "lg:text-lg text-[1rem]  font-semibold  lg:font-bold  capitalize " }, "view real stories"))))))));
        }))));
};
exports["default"] = ResultCard;
