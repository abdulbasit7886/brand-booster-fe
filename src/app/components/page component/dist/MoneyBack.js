"use strict";
exports.__esModule = true;
var react_1 = require("react");
var aa2_png_1 = require("../../asset/images/avater/aa2.png");
var aa_png_1 = require("../../asset/images/avater/aa.png");
var yf_png_1 = require("../../asset/images/c logos/yf.png");
var dj_png_1 = require("../../asset/images/c logos/dj.png");
var image_1 = require("next/image");
var MoneyBack = function () {
    return (react_1["default"].createElement("div", { className: "lg:w-[95%] w-[95%] relative lg:h-130 flex flex-col items-center mx-auto  lg:my-40 lg:pt-26  p-6 lg:px-15 bg-[#C8D0FA50] rounded-2xl overflow-hidden " },
        react_1["default"].createElement("div", { className: "text-center  flex items-center justify-center flex-col" },
            react_1["default"].createElement("div", { className: "lg:space-y-6  space-y-2 " },
                react_1["default"].createElement("h1", { className: "font-futura lg:text-7xl text-2xl tracking-[1px] font-extrabold uppercase text-blue-900" }, "money back gurantee"),
                react_1["default"].createElement("p", { className: "lg:text-xl text-sm px-4 text-[#414651] leading-[170%] lg:w-[60%] mx-auto " }, "In the event that we cannot publish your news story on the news outlets included in your chosen publishing package, you will be entitled to a full refund.")),
            react_1["default"].createElement("button", { className: "bg-gradient-to-tr from-sky to-blue  lg:w-[230px]  lg:h-14  w-full py-3 flex items-center justify-center  text-white font-normal relative  lg:text-lg text-sm  rounded-full lg:mt-11 mt-6 cursor-pointer border-1 border-sky" }, "Get started")),
        react_1["default"].createElement("div", { className: "absolute  items-center justify-between w-full flex  " },
            react_1["default"].createElement(image_1["default"], { src: yf_png_1["default"], alt: "cicon", className: "absolute lg:top-4 top-[110%] left-1   lg:left-[175px] lg:w-auto h-auto w-4" }),
            react_1["default"].createElement(image_1["default"], { src: dj_png_1["default"], alt: "cicon", className: "absolute top-29  lg:block hidden  right-32" }),
            react_1["default"].createElement("div", { className: "relative z-2  -bottom-23 -left-6 lg:left-0 lg:bottom-0 -rotate-45" },
                react_1["default"].createElement(image_1["default"], { src: aa2_png_1["default"], alt: "image", className: "lg:left-11 lg:top-12.5 lg:w-auto lg:h-auto   w-20 h-auto" })),
            react_1["default"].createElement("div", { className: "absolute top-30 right-10 lg:block hidden " },
                react_1["default"].createElement(image_1["default"], { src: aa_png_1["default"], alt: "image", className: "" })))));
};
exports["default"] = MoneyBack;
