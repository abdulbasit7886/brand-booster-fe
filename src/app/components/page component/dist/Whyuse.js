"use strict";
exports.__esModule = true;
var react_1 = require("react");
var WhyUse_1 = require("../common/WhyUse");
var Whyuse = function () {
    return (react_1["default"].createElement("div", { className: " flex flex-col justify-center items-center space-y-10 lg:mb-23 mb-5 mt-10" },
        react_1["default"].createElement("div", { className: "lg:space-y-3 space-y-6 text-center" },
            react_1["default"].createElement("h1", { className: "lg:text-[4rem] text-[2rem] px-10 lg:px-0 tracking-[-2%] leading-[92%] text-blue-900 font-futura font-bold uppercase" }, "why use brandBooster ?"),
            react_1["default"].createElement("p", { className: "text-textB lg:text-lg text-sm leading-[150%] px-10 " }, "With years of experience and over 10,000 published news stories, you can expect the best results publishing with us.")),
        react_1["default"].createElement(WhyUse_1["default"], null),
        react_1["default"].createElement("button", { className: "text-lg lg:w-65 lg:h-14  hidden lg:block text-white bg-gradient-to-tr from-sky to-blue  capitalize rounded-full cursor-pointer" }, "get started")));
};
exports["default"] = Whyuse;
